import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import {
  parseHistoryCookie,
  serializeHistory,
  addEntryToHistory,
  computeStats,
  getCookieName,
  type HistoryEntry,
} from "@/lib/history"

// GET: return current history and stats
export async function GET() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(getCookieName())?.value
  const entries = parseHistoryCookie(raw)
  const stats = computeStats(entries)
  return NextResponse.json(stats)
}

// POST: add a new entry
export async function POST(request: Request) {
  const body = (await request.json()) as HistoryEntry

  // Validate
  if (!body.d || typeof body.s !== "number" || !body.c || !body.w) {
    return NextResponse.json({ error: "Invalid entry" }, { status: 400 })
  }

  const cookieStore = await cookies()
  const raw = cookieStore.get(getCookieName())?.value
  const entries = parseHistoryCookie(raw)
  const updated = addEntryToHistory(entries, body)
  const serialized = serializeHistory(updated)

  const stats = computeStats(updated)

  const response = NextResponse.json(stats)
  response.cookies.set(getCookieName(), serialized, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    secure: process.env.NODE_ENV === "production",
  })

  return response
}
