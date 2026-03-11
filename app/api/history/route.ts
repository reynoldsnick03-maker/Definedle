import { NextResponse } from "next/server"

// History is now managed client-side in localStorage (definedle-history-v2).
// These stubs are kept so any stale clients don't get 404s.

export async function GET() {
  return NextResponse.json({ entries: [], streak: 0, best: 0, played: 0 })
}

export async function POST() {
  return NextResponse.json({ entries: [], streak: 0, best: 0, played: 0 })
}
