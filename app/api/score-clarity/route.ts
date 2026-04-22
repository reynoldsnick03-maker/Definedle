import { NextResponse } from "next/server"

// Rate limiting - max 30 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 })
    return true
  }
  if (record.count >= 30) return false
  record.count++
  return true
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 })
    }

    const { word, partOfSpeech, officialDefinition, playerDefinition, conceptsMatched, totalConcepts } = await request.json()

    if (!word || !officialDefinition || !playerDefinition) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const allConceptsHit = conceptsMatched === totalConcepts

    const prompt = `You are scoring a player's definition in a word game called Definedle.

Word: "${word}" (${partOfSpeech})
Official definition: "${officialDefinition}"
Player's definition: "${playerDefinition}"
Key concepts captured: ${conceptsMatched} of ${totalConcepts}

Score the player's CLARITY from 0 to 25. Clarity measures how well they expressed the meaning — not whether they matched exact words, but whether a knowledgeable person would accept this as a correct definition.

Rules:
- Start at 25
- Deduct for words that are genuinely irrelevant or off-topic (not just synonyms)
- Deduct for vague substitutions that miss important nuance (e.g. "places" instead of "cultures and countries")
- Deduct for contradictions
- Do NOT deduct for synonyms, intensity words like "very/strong/deeply", or being concise
- Do NOT deduct for short answers if the meaning is correct${allConceptsHit ? "\n- All key concepts were captured, so focus only on word choice quality" : "\n- Some key concepts were missed, so cap the score at 20 maximum"}
- Two-word synonym answers (e.g. 'worldly and sophisticated') should score no higher than 12 even if technically correct — they are not definitions
- A genuinely excellent definition that captures the full meaning precisely scores 23-25
- A good definition with minor imprecision scores 18-22
- A partial or vague definition scores 10-17
- A poor or irrelevant definition scores 0-9

Respond with ONLY a single integer between 0 and 25. Nothing else.`

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 10,
        messages: [{ role: "user", content: prompt }],
      }),
    })

    if (!response.ok) {
      const err = await response.json().catch(() => ({}))
      console.error("Anthropic API error:", response.status, err)
      return NextResponse.json({ clarity: null, error: "API error" }, { status: 200 })
      // Return 200 with null so client falls back to local scoring gracefully
    }

    const data = await response.json()
    const text = data.content?.[0]?.text?.trim() ?? ""
    const clarity = parseInt(text, 10)

    if (isNaN(clarity) || clarity < 0 || clarity > 25) {
      console.error("Invalid clarity response:", text)
      return NextResponse.json({ clarity: null }, { status: 200 })
    }

    return NextResponse.json({ clarity })
  } catch (err) {
    console.error("score-clarity error:", err)
    return NextResponse.json({ clarity: null }, { status: 200 })
  }
}
