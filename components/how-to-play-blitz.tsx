"use client"

import { useEffect } from "react"
import { X, Zap } from "lucide-react"

interface HowToPlayBlitzProps {
  open: boolean
  onClose: () => void
}

export function HowToPlayBlitz({ open, onClose }: HowToPlayBlitzProps) {
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-sm max-h-[85dvh] sm:max-h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl border border-[#2a2926] bg-[#1c1b19] shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <h2 className="font-serif text-xl font-normal text-white flex items-center gap-2">
            How to Play
            <Zap className="h-4 w-4 text-amber-500 fill-amber-500" aria-hidden="true" />
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#6b6560] hover:text-[#d4cfc8] hover:bg-[#2a2926] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto overscroll-contain px-6 pb-6 flex flex-col gap-5 text-sm leading-relaxed text-[#9b9589]">
          <p>
            Blitz is a 15-word vocabulary challenge. Each round you&apos;re shown a definition — your job is to name the word.
          </p>

          <div className="h-px bg-[#2a2926]" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-[#6b6560] font-medium">
              Guessing
            </h3>
            <p>
              You have 3 guesses per word. Type what you think the word is and submit. Get it right and move on — three wrong guesses ends the word.
            </p>
            <p>
              Wrong guesses are shaded by how close they are — darker means further away.
            </p>
          </div>

          <div className="h-px bg-[#2a2926]" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-[#6b6560] font-medium">
              Hints
            </h3>
            <p>
              Press <span className="font-medium text-[#d4cfc8]">Reveal a letter</span> to uncover a letter. Every hint lowers your tier for that word, earning you fewer points.
            </p>
            <p>
              On <span className="text-amber-500">Hard</span>, your first hint is free — press it to reveal the first letter with no tier penalty. From the second hint onward, your tier drops. On <span className="font-medium text-[#d4cfc8]">Easy</span>, every hint counts from the first.
            </p>
            <p>
              Take 4 or more hints on either mode and each extra hint deducts 1 point directly from your score.
            </p>
          </div>

          <div className="h-px bg-[#2a2926]" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-[#6b6560] font-medium">
              Scoring
            </h3>
            <p>Every correct word earns points based on how cleanly you solved it:</p>
            <div className="flex flex-col gap-2 rounded-lg border border-[#2a2926] bg-[#111110] px-4 py-3">
              {[
                { tier: "Flawless", desc: "1 guess · Easy: no hints · Hard: 0–1 hints", pts: "5 pts", color: "text-emerald-500" },
                { tier: "Good", desc: "1 guess + a couple of hints, or 2 quick guesses", pts: "4 pts", color: "text-amber-500" },
                { tier: "Decent", desc: "solved but needed several hints or guesses", pts: "3 pts", color: "text-[#9b9589]" },
                { tier: "Poor", desc: "a lot of hints and multiple guesses", pts: "2 pts", color: "text-orange-400" },
                { tier: "Awful", desc: "barely got it — maximum hints and guesses", pts: "1 pt", color: "text-red-400" },
                { tier: "Failed", desc: "3 wrong guesses or skipped", pts: "0 pts", color: "text-[#6b6560]" },
              ].map(({ tier, desc, pts, color }) => (
                <div key={tier} className="flex items-start justify-between gap-3 text-xs">
                  <div>
                    <span className={`font-medium ${color}`}>{tier}</span>
                    <span className="text-[#6b6560] ml-1.5">{desc}</span>
                  </div>
                  <span className="text-[#6b6560] shrink-0">{pts}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6b6560]">
              Points earned = base pts × your current multiplier. The higher your multiplier, the more each word is worth — protect it.
            </p>
          </div>

          <div className="h-px bg-[#2a2926]" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-[#6b6560] font-medium">
              The Multiplier
            </h3>
            <p>
              Starts at ×1, climbs to ×8 with strong play. Every point you earn is multiplied by it — protect it and your score compounds fast. Flawless words push it up fastest. Decent play holds it steady. Failures drop it.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {["×1", "×2", "×3", "×4", "×5", "×6", "×7", "×8"].map((m, i) => (
                <span key={m} className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${i < 3 ? "text-[#6b6560] bg-[#2a2926]" : i < 6 ? "text-amber-500 bg-amber-500/10" : "text-amber-400 bg-amber-400/15"}`}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#2a2926]" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-[#6b6560] font-medium">
              Session ends when
            </h3>
            <ul className="flex flex-col gap-1.5 pl-4 list-disc marker:text-[#6b6560]">
              <li>You complete all 15 words</li>
              <li>Three awful rounds in a row</li>
            </ul>
          </div>

          <div className="h-px bg-[#2a2926]" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-[#6b6560] font-medium">
              Daily Challenge
            </h3>
            <p>
              A new 15-word sequence every day, the same for every player. How do you rank?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
