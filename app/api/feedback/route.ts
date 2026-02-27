import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { word, playerDefinition, score, feedbackType, message } = body

    if (!word || !playerDefinition || score === undefined || !feedbackType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Rate limiting: max 5 feedback submissions per hour per IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
    
    const supabase = await createClient()
    
    // Check rate limit
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()
    const { count } = await supabase
      .from("feedback")
      .select("*", { count: "exact", head: true })
      .eq("ip_hash", hashIP(ip))
      .gte("created_at", oneHourAgo)

    if (count && count >= 5) {
      return NextResponse.json({ error: "Too many submissions. Try again later." }, { status: 429 })
    }

    // Insert feedback
    const { error } = await supabase.from("feedback").insert({
      word,
      player_definition: playerDefinition,
      score,
      feedback_type: feedbackType,
      message: message || null,
      ip_hash: hashIP(ip),
    })

    if (error) {
      console.error("Feedback insert error:", error)
      return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Feedback API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Simple hash function for IP (privacy - don't store raw IPs)
function hashIP(ip: string): string {
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString(16)
}
