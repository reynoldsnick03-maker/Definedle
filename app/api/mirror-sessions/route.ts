import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// GET: fetch top 10 sessions for a player
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const playerId = searchParams.get("player_id")
    if (!playerId) return NextResponse.json({ topScores: [], topStreaks: [] })

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("mirror_sessions")
      .select("*")
      .eq("player_id", playerId)
      .order("session_score", { ascending: false })
      .limit(50)

    if (error || !data) return NextResponse.json({ topScores: [], topStreaks: [] })

    // Top 10 by session score
    const topScores = [...data]
      .sort((a, b) => b.session_score - a.session_score)
      .slice(0, 10)

    // Top 10 by best streak
    const topStreaks = [...data]
      .sort((a, b) => b.best_streak - a.best_streak)
      .slice(0, 10)

    return NextResponse.json({ topScores, topStreaks })
  } catch {
    return NextResponse.json({ topScores: [], topStreaks: [] })
  }
}

// POST: save a completed mirror session
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { player_id, session_score, best_streak, words_solved, words_attempted, difficulty } = body

    if (!player_id || typeof session_score !== "number" || !difficulty) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // Only save sessions where at least 3 words were attempted (prevents noise)
    if (words_attempted < 3) {
      return NextResponse.json({ saved: false })
    }

    const supabase = await createClient()

    const { error } = await supabase.from("mirror_sessions").insert({
      player_id,
      session_score,
      best_streak,
      words_solved,
      words_attempted,
      difficulty,
    })

    if (error) {
      console.error("Mirror session insert error:", error)
      return NextResponse.json({ error: "Failed to save" }, { status: 500 })
    }

    return NextResponse.json({ saved: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
