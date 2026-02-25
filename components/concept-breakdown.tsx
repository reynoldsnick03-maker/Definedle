"use client"

import { useEffect, useState } from "react"
import { Check, X, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react"
import type { ConceptResult } from "@/lib/scoring"

interface ConceptBreakdownProps {
  concepts: ConceptResult[]
  synonymWarning: boolean
  missedSummary: string | null
}

export function ConceptBreakdown({
  concepts,
  synonymWarning,
  missedSummary,
}: ConceptBreakdownProps) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const matchedCount = concepts.filter((c) => c.matched).length

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    concepts.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleCount((prev) => prev + 1)
        }, 400 + i * 180)
      )
    })
    return () => timers.forEach(clearTimeout)
  }, [concepts])

  return (
    <div className="flex flex-col gap-5">
      {/* Section header */}
      <div className="flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          Key Concepts
        </span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {matchedCount} of {concepts.length} captured
        </span>
      </div>

      {/* Missed summary */}
      {missedSummary && (
        <p className="text-sm leading-relaxed text-foreground/75 rounded-lg bg-muted/60 px-4 py-3">
          {missedSummary}
        </p>
      )}

      {/* Synonym warning */}
      {synonymWarning && (
        <div className="flex items-start gap-2.5 rounded-lg border border-score-low/15 bg-score-low/5 px-4 py-3">
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-score-low"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-foreground/80">
            Your answer was mostly a synonym. Try describing the meaning in your
            own words for a higher score.
          </p>
        </div>
      )}

      {/* Concept list */}
      <ul className="flex flex-col gap-0.5" role="list" aria-label="Concept breakdown">
        {concepts.map((concept, i) => {
          const isExpanded = expandedIndex === i
          const isMissed = !concept.matched
          const isVisible = i < visibleCount

          return (
            <li
              key={concept.keyword}
              className="transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  if (isMissed) {
                    setExpandedIndex(isExpanded ? null : i)
                  }
                }}
                className={`
                  flex w-full items-center gap-3 rounded-lg px-3.5 py-2.5 text-left
                  transition-colors
                  ${isMissed ? "cursor-pointer hover:bg-muted/70" : "cursor-default"}
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                `}
                aria-expanded={isMissed ? isExpanded : undefined}
                aria-label={`${concept.label}: ${concept.matched ? "captured" : "missed"}`}
              >
                {/* Status icon */}
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

                {/* Label */}
                <span
                  className={`flex-1 text-sm leading-snug ${concept.matched ? "text-foreground" : "text-foreground/70"}`}
                >
                  {concept.label}
                </span>

                {/* Expand chevron for missed concepts */}
                {isMissed && (
                  <span className="text-muted-foreground/60" aria-hidden="true">
                    {isExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </span>
                )}
              </button>

              {/* Expanded hint for missed concepts */}
              {isExpanded && isMissed && (
                <div className="ml-12 mr-4 mb-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {concept.hint}
                  </p>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
