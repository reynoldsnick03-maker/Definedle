"use client"

import { useEffect, useState } from "react"

interface ScoreCelebrationProps {
  score: number
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  rotation: number
  delay: number
}

const COLORS_HIGH = [
  "oklch(0.55 0.12 155)", // green
  "oklch(0.65 0.15 155)",
  "oklch(0.70 0.10 155)",
  "oklch(0.50 0.08 80)", // warm accent
  "oklch(0.60 0.05 60)", // neutral warm
]

const COLORS_MID = [
  "oklch(0.65 0.15 75)", // amber
  "oklch(0.70 0.12 75)",
  "oklch(0.60 0.10 60)",
]

export function ScoreCelebration({ score }: ScoreCelebrationProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (score < 70) return

    const count = score >= 90 ? 24 : 12
    const colors = score >= 90 ? COLORS_HIGH : COLORS_MID

    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60, // % from left
      y: -10 - Math.random() * 20, // start above
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      delay: Math.random() * 0.6,
    }))

    // Delay to sync with score counter animation
    const timer = setTimeout(() => {
      setParticles(newParticles)
      setVisible(true)
    }, 800)

    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, 3500)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [score])

  if (particles.length === 0) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease-out" }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: p.size > 7 ? "1px" : "50%",
            transform: `rotate(${p.rotation}deg)`,
            animation: `confetti-fall 2.2s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
