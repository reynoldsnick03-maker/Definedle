"use client"

import { ScoreDisplay } from "./score-display"
import { Check, X } from "lucide-react"

export interface ShareData {
  w: string // word
  s: number // score
  d: string // definition
  c: string // concept line e.g. "+-"
  k?: number // key concepts percentage
  p?: number // precision percentage
  t?: number // detail percentage
  m?: string // mode: "h" for hard, "e" for easy
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
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="rounded-full border border-border bg-secondary px-3 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Shared Result
          </span>
          {data.m === "h" && (
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">
              Hard
            </span>
          )}
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
        <ScoreDisplay score={data.s} />

        {/* Score breakdown bars */}
        {(data.k !== undefined || data.p !== undefined || data.t !== undefined) && (
          <div className="flex flex-col gap-3 my-6">
            {[
              { label: "Concepts", pct: data.k ?? 0 },
              { label: "Precision", pct: data.p ?? 0 },
              { label: "Detail", pct: data.t ?? 0 },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-foreground/70">{item.label}</span>
                  <span className="tabular-nums text-foreground/50">{item.pct}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.pct >= 80 ? "bg-score-high" : item.pct >= 50 ? "bg-score-mid" : "bg-score-low"
                    }`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="h-px bg-border" aria-hidden="true" />

        {/* Concepts */}
        <div className="flex flex-col gap-5 my-6">
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
        <div className="flex flex-col gap-6 my-6">
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
        <div className="flex flex-col items-center gap-3 mt-6">
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
  )
}
