"use client"

import { ScoreDisplay } from "./score-display"
import { Check, X } from "lucide-react"

export interface ShareData {
  w: string // word
  s: number // score
  d: string // definition
  c: string // concept line e.g. "+-"
}

interface SharedResultProps {
  data: ShareData
  officialDefinition: string
  partOfSpeech: string
  conceptLabels: string[]
  onPlayYourself: () => void
}

export function SharedResult({
  data,
  officialDefinition,
  partOfSpeech,
  conceptLabels,
  onPlayYourself,
}: SharedResultProps) {
  const concepts = data.c.split("").map((ch, i) => ({
    matched: ch === "+",
    label: conceptLabels[i] || `Concept ${i + 1}`,
  }))
  const matchedCount = concepts.filter((c) => c.matched).length

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        {/* Shared badge */}
        <div className="mb-4 flex items-center justify-center">
          <span className="rounded-full border border-border bg-secondary px-3 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Shared Result
          </span>
        </div>

        {/* Word */}
        <div className="flex flex-col items-center gap-1.5 py-6">
          <h2 className="font-serif text-5xl font-normal tracking-tight text-foreground md:text-6xl italic">
            {data.w}
          </h2>
          <span className="text-sm text-muted-foreground tracking-widest uppercase">
            {partOfSpeech}
          </span>
        </div>

        <div className="my-6 h-px bg-border" aria-hidden="true" />

        {/* Score */}
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ScoreDisplay score={data.s} />

          <div className="h-px bg-border" aria-hidden="true" />

          {/* Concepts */}
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Key Concepts
              </span>
              <span className="text-xs tabular-nums text-muted-foreground">
                {matchedCount} of {concepts.length} captured
              </span>
            </div>

            <ul className="flex flex-col gap-0.5" role="list">
              {concepts.map((concept, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-lg px-3.5 py-2.5"
                >
                  <span
                    className={`
                      flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                      ${concept.matched ? "bg-score-high/15 text-score-high" : "bg-score-low/10 text-score-low"}
                    `}
                    aria-hidden="true"
                  >
                    {concept.matched ? (
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    ) : (
                      <X className="h-3 w-3" strokeWidth={2.5} />
                    )}
                  </span>
                  <span
                    className={`flex-1 text-sm leading-snug ${concept.matched ? "text-foreground" : "text-foreground/70"}`}
                  >
                    {concept.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-border" aria-hidden="true" />

          {/* Their definition */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Their definition
              </span>
              <p className="text-sm leading-relaxed text-foreground/80">
                {data.d}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Official definition
              </span>
              <p className="font-serif text-base leading-relaxed text-foreground italic">
                {officialDefinition}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={onPlayYourself}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Play today's word
            </button>
            <p className="text-center text-xs text-muted-foreground tracking-wide">
              Can you beat their score?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
