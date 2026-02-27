import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// Submit a score and get the average for today's word
export async function POST(request: Request) {
  try {
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
