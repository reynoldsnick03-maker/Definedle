import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error("Missing Supabase env vars")
  return createClient(url, key)
}

// GET: fetch today's average blitz score for a given difficulty
// Usage: /api/blitz-daily-average?date=2026-03-27&difficulty=easy
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")
    const difficulty = searchParams.get("difficulty")

    if (!date || !difficulty) {
      return NextResponse.json({ error: "date and difficulty required" }, { status: 400 })
    }

    const supabase = getSupabase()

    // Sessions from today: created_at between start and end of UTC day
    const startOfDay = `${date}T00:00:00.000Z`
    const endOfDay = `${date}T23:59:59.999Z`

    const { data, error } = await supabase
      .from("mirror_sessions")
      .select("session_score")
      .eq("difficulty", difficulty)
      .gte("created_at", startOfDay)
      .lte("created_at", endOfDay)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const sessions = data || []
    if (sessions.length === 0) {
      return NextResponse.json({ average: null, count: 0 })
    }

    const average = Math.round(
      sessions.reduce((sum, s) => sum + s.session_score, 0) / sessions.length
    )

    return NextResponse.json({ average, count: sessions.length })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
