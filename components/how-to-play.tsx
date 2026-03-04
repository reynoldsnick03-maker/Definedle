"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface HowToPlayProps {
  open: boolean
  onClose: () => void
}

export function HowToPlay({ open, onClose }: HowToPlayProps) {
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
      <div
        className="absolute inset-0 bg-foreground/20 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-sm max-h-[85dvh] sm:max-h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl border border-border bg-card shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <h2 className="font-serif text-xl font-normal text-foreground">How to Play</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6 pb-6 flex flex-col gap-5 text-sm leading-relaxed text-foreground/80">

          <p>You are shown a word. Write its definition as if you were writing a dictionary entry.</p>

          <div className="h-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scoring</h3>
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-3 items-start">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-score-high/15 text-[10px] font-bold text-score-high">75</span>
                <p><span className="text-foreground font-medium">Key concepts</span> &mdash; Every word has 2&ndash;3 core ideas in its meaning. Capturing them is the bulk of your score.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-score-high/15 text-[10px] font-bold text-score-high">10</span>
                <p><span className="text-foreground font-medium">Precision</span> &mdash; A bonus for using tight, specific vocabulary rather than vague or off-topic phrasing.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-score-high/15 text-[10px] font-bold text-score-high">15</span>
                <p><span className="text-foreground font-medium">Detail</span> &mdash; Definitions that read like a real dictionary entry earn more. A few well-chosen words can still score well.</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Tips</h3>
            <ul className="flex flex-col gap-1.5 list-none">
              <li className="flex gap-2 items-start">
                <span className="text-muted-foreground mt-px" aria-hidden="true">&bull;</span>
                <span>Think about what makes this word <span className="italic">different</span> from similar words.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-muted-foreground mt-px" aria-hidden="true">&bull;</span>
                <span>Write a sentence, not just a single word or synonym.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-muted-foreground mt-px" aria-hidden="true">&bull;</span>
                <span>Be specific. &ldquo;Very bad&rdquo; scores less than &ldquo;harmful&rdquo; or &ldquo;destructive&rdquo;.</span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Mirror Mode</h3>
            <p>See the definition, guess the word in up to 3 tries. Available in Practice mode.</p>
            <p>
              Tap <span className="text-foreground font-medium">Reveal a letter</span> to uncover letters one at a time &mdash; first letter, last letter, then rarest letters first. You have 3 free hints per word; further reveals cost 1 point from your score.
            </p>
            <p>
              Your score accumulates across 15 words. A multiplier rewards consistent performance &mdash; good rounds push it up, poor rounds bring it down. Failing all 3 guesses ends your session early, as does three awful rounds in a row.
            </p>
          </div>

          <div className="h-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Modes</h3>
            <p>
              <span className="text-foreground font-medium">Daily</span> &mdash; one word per day, same for everyone.<br />
              <span className="text-foreground font-medium">Practice</span> &mdash; unlimited words to sharpen your skills.<br />
              Both have <span className="text-foreground font-medium">Easy</span> and <span className="text-foreground font-medium">Hard</span> difficulty.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
