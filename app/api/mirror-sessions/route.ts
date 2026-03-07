import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error("Missing Supabase env vars")
  return createClient(url, key)
}

// GET: fetch sessions for a player
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const playerId = searchParams.get("player_id")

    if (!playerId) {
      return NextResponse.json({ error: "player_id required" }, { status: 400 })
    }

    const supabase = getSupabase()
    const { data, error } = await supabase
      .from("mirror_sessions")
      .select("session_score, words_solved, best_streak, difficulty")
      .eq("player_id", playerId)
      .order("session_score", { ascending: false })
      .limit(50)

    if (error) {
      console.error("mirror-sessions GET error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ sessions: data || [] })
  } catch (err) {
    console.error("mirror-sessions GET exception:", err)
    return NextResponse.json({ sessions: [], error: String(err) })
  }
}

// POST: save a completed session
export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("mirror-sessions POST received:", JSON.stringify(body))

    const { player_id, session_score, words_solved, words_attempted, best_streak, difficulty } = body

    const scoreNum = Number(session_score)
    if (!player_id || isNaN(scoreNum) || !difficulty) {
      return NextResponse.json({
        error: "Missing required fields",
        received: { player_id: !!player_id, session_score, scoreNum, difficulty }
      }, { status: 400 })
    }

    const supabase = getSupabase()
    const { error } = await supabase.from("mirror_sessions").insert({
      player_id,
      session_score: Math.round(scoreNum),
      words_solved: words_solved ?? 0,
      words_attempted: words_attempted ?? 0,
      best_streak: best_streak ?? 1,
      difficulty,
    })

    if (error) {
      console.error("mirror-sessions INSERT error:", error)
      return NextResponse.json({ error: error.message, code: error.code }, { status: 500 })
    }

    console.log("mirror-sessions INSERT success for player:", player_id)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("mirror-sessions POST exception:", err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
