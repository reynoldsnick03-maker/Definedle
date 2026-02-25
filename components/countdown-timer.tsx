"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    function calcTimeLeft() {
      const now = new Date()
      // Next word arrives at midnight UTC
      const tomorrow = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
      )
      const diff = tomorrow.getTime() - now.getTime()

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    }

    setTimeLeft(calcTimeLeft())
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!timeLeft) return null

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
        Next word in
      </span>
      <span className="font-mono text-sm tabular-nums text-foreground/70 tracking-wider">
        {timeLeft}
      </span>
    </div>
  )
}
