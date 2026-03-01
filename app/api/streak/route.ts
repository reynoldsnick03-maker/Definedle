import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// GET: fetch streak for a player ID
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const playerId = searchParams.get("player_id")
    if (!playerId) return NextResponse.json({ streak: 0, best: 0, played: 0 })

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("player_streaks")
      .select("date, difficulty, score")
      .eq("player_id", playerId)
      .order("date", { ascending: false })

    if (error || !data) return NextResponse.json({ streak: 0, best: 0, played: 0 })

    const streak = computeStreak(data)
    return NextResponse.json(streak)
  } catch {
    return NextResponse.json({ streak: 0, best: 0, played: 0 })
  }
}

// POST: record a daily game completion
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { player_id, date, difficulty, score, word } = body

    if (!player_id || !date || !difficulty || typeof score !== "number" || !word) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const supabase = await createClient()

    // Upsert — if they somehow submit twice for the same day/difficulty, update score
    const { error } = await supabase
      .from("player_streaks")
      .upsert({ player_id, date, difficulty, score, word }, { onConflict: "player_id,date,difficulty" })

    if (error) {
      console.error("Streak insert error:", error)
      return NextResponse.json({ error: "Failed to save" }, { status: 500 })
    }

    // Return updated streak
    const { data } = await supabase
      .from("player_streaks")
      .select("date, difficulty, score")
      .eq("player_id", player_id)
      .order("date", { ascending: false })

    const streak = computeStreak(data ?? [])
    return NextResponse.json(streak)
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

// ── Streak computation ──
// A streak counts consecutive DAYS where the player completed at least
// one game (easy or hard). A 25-hour grace period means playing slightly
// past midnight still counts. One missed day per 7 is forgiven (shield).

interface StreakEntry { date: string; difficulty: string; score: number }

function computeStreak(entries: StreakEntry[]): { streak: number; best: number; played: number } {
  if (!entries.length) return { streak: 0, best: 0, played: 0 }

  // Unique days played, sorted descending
  const uniqueDays = [...new Set(entries.map(e => e.date))].sort((a, b) => b.localeCompare(a))
  const played = entries.length

  // Today in UTC
  const now = new Date()
  const todayStr = utcDateStr(now)
  const yesterdayStr = utcDateStr(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1)))

  // Current streak: must start from today or yesterday (grace period)
  let streak = 0
  if (uniqueDays[0] !== todayStr && uniqueDays[0] !== yesterdayStr) {
    // Most recent play was more than a day ago — streak is 0
    return { streak: 0, best: computeBestStreak(uniqueDays), played }
  }

  let shieldsUsed = 0
  const maxShields = 1 // one missed day forgiven per week of streak
  let expectedDate = uniqueDays[0]

  for (let i = 0; i < uniqueDays.length; i++) {
    const day = uniqueDays[i]

    if (day === expectedDate) {
      streak++
      expectedDate = prevDay(expectedDate)
    } else {
      // Check if this is one day behind expected (missed day)
      const dayBefore = prevDay(expectedDate)
      if (day === dayBefore && shieldsUsed < maxShields && streak >= 6) {
        // Use a shield — forgive this one missed day
        shieldsUsed++
        streak++
        expectedDate = prevDay(dayBefore)
        i-- // re-examine this day against new expected
      } else {
        break
      }
    }

    // Refresh shield allowance every 7 days of streak
    if (streak % 7 === 0) shieldsUsed = 0
  }

  return { streak, best: computeBestStreak(uniqueDays), played }
}

function computeBestStreak(uniqueDays: string[]): number {
  if (!uniqueDays.length) return 0
  const sorted = [...uniqueDays].sort()
  let best = 1, current = 1
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === nextDay(sorted[i - 1])) {
      current++
      best = Math.max(best, current)
    } else {
      current = 1
    }
  }
  return best
}

function utcDateStr(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`
}

function prevDay(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00Z")
  d.setUTCDate(d.getUTCDate() - 1)
  return utcDateStr(d)
}

function nextDay(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00Z")
  d.setUTCDate(d.getUTCDate() + 1)
  return utcDateStr(d)
}
