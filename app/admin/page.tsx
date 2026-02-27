"use client"

import { useState } from "react"
import { Trash2, RefreshCw, Lock, AlertTriangle, Bug, MessageSquare } from "lucide-react"

interface FeedbackItem {
  id: string
  word: string
  player_definition: string
  score: number
  feedback_type: "unfair" | "bug" | "other"
  message: string | null
  difficulty: string
  created_at: string
}

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFeedback = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/admin/feedback?password=${encodeURIComponent(password)}`)
      if (res.status === 401) {
        setError("Invalid password")
        setAuthenticated(false)
        return
      }
      if (!res.ok) {
        setError("Failed to fetch feedback")
        return
      }
      const data = await res.json()
      setFeedback(data.feedback || [])
      setAuthenticated(true)
    } catch {
      setError("Failed to connect")
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    fetchFeedback()
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this feedback?")) return
    try {
      const res = await fetch(`/api/admin/feedback?password=${encodeURIComponent(password)}&id=${id}`, {
        method: "DELETE",
      })
      if (res.ok) {
        setFeedback((prev) => prev.filter((f) => f.id !== id))
      }
    } catch {
      // Ignore
    }
  }

  const getFeedbackIcon = (type: string) => {
    switch (type) {
      case "unfair":
        return <AlertTriangle className="h-4 w-4 text-score-mid" />
      case "bug":
        return <Bug className="h-4 w-4 text-destructive" />
      default:
        return <MessageSquare className="h-4 w-4 text-muted-foreground" />
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!authenticated) {
    return (
      <main className="flex min-h-svh flex-col items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Lock className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-xl font-semibold">Admin Access</h1>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading || !password}
              className="rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Loading..." : "View Feedback"}
            </button>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-svh bg-background p-4 pb-16">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Player Feedback</h1>
          <button
            onClick={fetchFeedback}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm hover:bg-accent transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {feedback.length === 0 ? (
          <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
            <p className="text-muted-foreground">No feedback yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {feedback.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {getFeedbackIcon(item.feedback_type)}
                      <span className="font-medium">{item.word}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.score}/100
                      </span>
                      <span className="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                        {item.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80 break-words mb-2">
                      &ldquo;{item.player_definition}&rdquo;
                    </p>
                    {item.message && (
                      <p className="text-sm text-muted-foreground italic">
                        Note: {item.message}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      {formatDate(item.created_at)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="shrink-0 p-2 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Delete feedback"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-6">
          Showing up to 100 most recent reports
        </p>
      </div>
    </main>
  )
}
