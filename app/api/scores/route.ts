import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// Simple in-memory rate limiter (resets on redeploy, but sufficient for basic protection)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10 // max 10 requests per minute per IP

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 }
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 }
  }
  
  record.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - record.count }
}

// Clean up old entries periodically (every 100 requests)
let requestCount = 0
function cleanupRateLimitMap() {
  requestCount++
  if (requestCount % 100 === 0) {
    const now = Date.now()
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(ip)
      }
    }
  }
}

// Submit a score and get the average for today's word
export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
    cleanupRateLimitMap()
    const { allowed, remaining } = checkRateLimit(ip)
    
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "X-RateLimit-Remaining": "0" } }
      )
    }

    const { word, score, difficulty } = await request.json()

    if (!word || typeof score !== "number" || !difficulty) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = await createClient()

    // Insert the score
    const { error: insertError } = await supabase.from("scores").insert({
      word: word.toLowerCase(),
      score,
      difficulty,
    })

    if (insertError) {
      console.error("Error inserting score:", insertError)
      return NextResponse.json({ error: "Failed to submit score" }, { status: 500 })
    }

    // Get today's date range (UTC)
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)

    // Fetch average and count for this word today
    const { data, error: fetchError } = await supabase
      .from("scores")
      .select("score")
      .eq("word", word.toLowerCase())
      .eq("difficulty", difficulty)
      .gte("created_at", today.toISOString())
      .lt("created_at", tomorrow.toISOString())

    if (fetchError) {
      console.error("Error fetching scores:", fetchError)
      return NextResponse.json({ error: "Failed to fetch average" }, { status: 500 })
    }

    const scores = data || []
    const count = scores.length
    const average = count > 0 ? Math.round(scores.reduce((sum, s) => sum + s.score, 0) / count) : 0

    return NextResponse.json({ average, count })
  } catch (error) {
    console.error("Scores API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Get the average for a word (without submitting)
export async function GET(request: Request) {
  try {
    // Rate limiting (more lenient for GET - 30 per minute)
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
    cleanupRateLimitMap()
    const record = rateLimitMap.get(ip)
    const now = Date.now()
    
    if (record && now <= record.resetTime && record.count >= 30) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const { searchParams } = new URL(request.url)
    const word = searchParams.get("word")
    const difficulty = searchParams.get("difficulty")

    if (!word || !difficulty) {
      return NextResponse.json({ error: "Missing word or difficulty" }, { status: 400 })
    }

    const supabase = await createClient()

    // Get today's date range (UTC)
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)

    const { data, error } = await supabase
      .from("scores")
      .select("score")
      .eq("word", word.toLowerCase())
      .eq("difficulty", difficulty)
      .gte("created_at", today.toISOString())
      .lt("created_at", tomorrow.toISOString())

    if (error) {
      console.error("Error fetching scores:", error)
      return NextResponse.json({ error: "Failed to fetch average" }, { status: 500 })
    }

    const scores = data || []
    const count = scores.length
    const average = count > 0 ? Math.round(scores.reduce((sum, s) => sum + s.score, 0) / count) : 0

    return NextResponse.json({ average, count })
  } catch (error) {
    console.error("Scores API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
