import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// GET: fetch sessions for a player
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const playerId = searchParams.get("player_id")

    if (!playerId) {
      return NextResponse.json({ error: "player_id required" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("mirror_sessions")
      .select("session_score, words_solved, best_streak, difficulty, created_at")
      .eq("player_id", playerId)
      .order("session_score", { ascending: false })
      .limit(50)

    if (error) {
      console.error("Error fetching mirror sessions:", error)
      return NextResponse.json({ sessions: [] })
    }

    return NextResponse.json({ sessions: data || [] })
  } catch (err) {
    console.error("Mirror sessions GET error:", err)
    return NextResponse.json({ sessions: [] })
  }
}

// POST: save a completed session
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      player_id,
      session_score,
      words_solved,
      words_attempted,
      best_streak,
      difficulty,
    } = body

    if (!player_id || typeof session_score !== "number" || !difficulty) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = await createClient()

    const { error } = await supabase.from("mirror_sessions").insert({
      player_id,
      session_score: Math.round(session_score),
      words_solved: words_solved ?? 0,
      words_attempted: words_attempted ?? 0,
      best_streak: best_streak ?? 1,
      difficulty,
    })

    if (error) {
      console.error("Error inserting mirror session:", error)
      return NextResponse.json({ error: "Failed to save session" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Mirror sessions POST error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
