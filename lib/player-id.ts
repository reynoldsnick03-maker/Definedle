// Anonymous player identity — persists in localStorage.
// Generates a UUID on first visit and reuses it forever.
// This is the key that ties streaks and mirror sessions to a player
// across page refreshes and new browser sessions (but not across devices).

const PLAYER_ID_KEY = "definedle-player-id"

export function getPlayerId(): string {
  if (typeof window === "undefined") return ""
  try {
    const existing = localStorage.getItem(PLAYER_ID_KEY)
    if (existing) return existing
    const newId = generateUUID()
    localStorage.setItem(PLAYER_ID_KEY, newId)
    return newId
  } catch {
    return ""
  }
}

function generateUUID(): string {
  // Use crypto.randomUUID if available (modern browsers), fallback otherwise
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  // Fallback for older browsers
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
