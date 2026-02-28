"use client"

import { useState, useEffect } from "react"
import { ScoreDisplay } from "./score-display"
import { ConceptBreakdown } from "./concept-breakdown"
import { ScoreCelebration } from "./score-celebration"
import { CountdownTimer } from "./countdown-timer"
import { Check, Copy, ChevronDown, Users, MessageSquare } from "lucide-react"
import type { ConceptResult, ScoreBreakdown } from "@/lib/scoring"

interface ResultsPanelProps {
  score: number
  feedback: string
  concepts: ConceptResult[]
  synonymWarning: boolean
  missedSummary: string | null
  breakdown?: ScoreBreakdown
  playerDefinition: string
  officialDefinition: string
  altDefinitionUsed?: string
  word: string
  onPractice?: () => void
  isPractice?: boolean
  onNextWord?: () => void
  difficulty?: "easy" | "hard"
}

export function ResultsPanel({
  score,
  feedback,
  concepts,
  synonymWarning,
  missedSummary,
  breakdown,
  playerDefinition,
  officialDefinition,
  altDefinitionUsed,
  word,
  onPractice,
  isPractice,
  onNextWord,
  difficulty = "easy",
}: ResultsPanelProps) {
  const [copied, setCopied] = useState(false)
  const [averageData, setAverageData] = useState<{ average: number; count: number } | null>(null)
  const [submittedScore, setSubmittedScore] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const [feedbackError, setFeedbackError] = useState<string | null>(null)
  
  const improveKey = `definedle-improve-${word}-${difficulty}`
  const submittedKey = `definedle-submitted-${word}-${difficulty}`
  const [showImprove, setShowImprove] = useState(() => {
    if (typeof window === "undefined") return false
    try { return localStorage.getItem(improveKey) === "1" } catch { return false }
  })
  const toggleImprove = () => {
    setShowImprove((prev) => {
      const next = !prev
      try { localStorage.setItem(improveKey, next ? "1" : "0") } catch {}
      return next
    })
  }

  const safeConcepts = concepts ?? []
  const matchedCount = safeConcepts.filter((c) => c.matched).length

  // Submit score and fetch average (only for daily words, not practice)
  useEffect(() => {
    if (isPractice) return
    
    // Check if already submitted for this word
    const alreadySubmitted = localStorage.getItem(submittedKey) === "1"
    
    const submitAndFetch = async () => {
      try {
        if (!alreadySubmitted) {
          // Submit score and get average
          const res = await fetch("/api/scores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ word, score, difficulty }),
          })
          if (res.ok) {
            const data = await res.json()
            setAverageData(data)
            setSubmittedScore(true)
            localStorage.setItem(submittedKey, "1")
          }
        } else {
          // Already submitted, just fetch the average
          const res = await fetch(`/api/scores?word=${encodeURIComponent(word)}&difficulty=${difficulty}`)
          if (res.ok) {
            const data = await res.json()
            setAverageData(data)
            setSubmittedScore(true)
          }
        }
      } catch (error) {
        console.error("Failed to submit/fetch score:", error)
      }
    }
    
    submitAndFetch()
  }, [word, score, difficulty, isPractice, submittedKey])

  const handleFeedbackSubmit = async (type: "unfair" | "bug" | "other", message?: string) => {
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          word,
          playerDefinition,
          score,
          feedbackType: type,
          message,
        }),
      })
      if (res.ok) {
        setFeedbackSent(true)
        setShowFeedback(false)
      } else {
        const data = await res.json()
        setFeedbackError(data.error || "Failed to submit feedback")
      }
    } catch {
      setFeedbackError("Failed to submit feedback")
    }
  }

  const handleShare = () => {
    // Generate a single progress bar (10 blocks total)
    const filled = Math.round(score / 10)
    const progressBar = "█".repeat(filled) + "░".repeat(10 - filled)

    const modeLabel = difficulty === "hard" ? " Hard" : ""
    
    // Viral share format: challenge question + clean bar
    const text = `Definedle${modeLabel} - ${score}/100

${progressBar}

Can you define "${word.toUpperCase()}"?

definedle.com`

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <ScoreCelebration score={score} />
      <ScoreDisplay score={score} />

      {/* Average score display */}
      {!isPractice && averageData && averageData.count > 1 && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" aria-hidden="true" />
          <span>
            Average: <span className="font-medium text-foreground">{averageData.average}/100</span>
            <span className="text-xs ml-1">({averageData.count} players)</span>
          </span>
        </div>
      )}

      {/* Summary feedback */}
      <p className="text-sm leading-relaxed text-foreground/80 text-center">
        {feedback}
      </p>

      {/* Divider */}
      <div className="h-px bg-border" aria-hidden="true" />

      {/* Concept breakdown */}
      <ConceptBreakdown concepts={safeConcepts} synonymWarning={synonymWarning} missedSummary={missedSummary} />

      {/* How to improve -- only shown when score < 100 and breakdown available */}
      {score < 100 && breakdown && (
        <div className="flex flex-col">
          <button
            type="button"
            onClick={toggleImprove}
            className="flex items-center justify-between py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            aria-expanded={showImprove}
          >
            <span>How could I score higher?</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showImprove ? "rotate-180" : ""}`} />
          </button>

          {showImprove && (
            <div className="mt-3 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Score bars with contextual explanations */}
              {(() => {
                const conceptPct = Math.round((breakdown.concepts.earned / breakdown.concepts.max) * 100)
                const precisionPct = Math.round((breakdown.precision.earned / breakdown.precision.max) * 100)
                const detailPct = Math.round((breakdown.detail.earned / breakdown.detail.max) * 100)

                const missedConceptLabels = concepts
                  .filter((c) => !c.matched)
                  .map((c) => c.label.toLowerCase())

                // Build contextual explanation for each factor
                const conceptExplanation = (() => {
                  const matched = concepts.filter((c) => c.matched).length
                  const total = concepts.length
                  if (matched === total) return "You captured every core concept."
                  if (matched === 0) return `None of the ${total} key ideas appeared in your definition. See the concepts above for what was expected.`
                  if (missedConceptLabels.length === 1) return `You missed "${missedConceptLabels[0]}." The other idea${matched > 1 ? "s were" : " was"} covered.`
                  return `You captured ${matched} of ${total} ideas but missed ${missedConceptLabels.map(l => `"${l}"`).join(" and ")}.`
                })()

                const precisionExplanation = (() => {
                  const { ratio, relevantCount, totalMeaningful, irrelevantWords } = breakdown.precision
                  const allConceptsHit = concepts.every((c) => c.matched)
                  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

                  if (totalMeaningful === 0) return "Your definition didn't contain enough meaningful words to evaluate."

                  // When all concepts are hit, scoring now awards full precision (10/10).
                  // The ratio stored in the breakdown reflects this, so >= 0.9 catches it.
                  if (ratio >= 0.9) return pick([
                    `${relevantCount} of ${totalMeaningful} meaningful words were on-topic. Very precise.`,
                    `Tight vocabulary -- ${relevantCount} of ${totalMeaningful} words were directly relevant.`,
                    `Nearly every word counted. Sharp, focused phrasing.`,
                    `Excellent word choice. Almost nothing wasted.`,
                  ])

                  if (ratio >= 0.7) {
                    const sample = irrelevantWords.slice(0, 2)
                    return pick([
                      `${relevantCount} of ${totalMeaningful} meaningful words were on-topic.${sample.length > 0 ? ` "${sample.join('", "')}" didn't connect to the definition.` : ""}`,
                      `Most of your words were relevant.${sample.length > 0 ? ` "${sample.join('", "')}" weren't recognised as part of the meaning.` : ""}`,
                      `Good vocabulary overall.${sample.length > 0 ? ` A couple of words like "${sample.join('", "')}" fell outside the expected range.` : ""}`,
                    ])
                  }

                  if (ratio >= 0.4) {
                    const sample = irrelevantWords.slice(0, 3)
                    const sampleText = sample.length > 0 ? ` "${sample.join('", "')}" ${sample.length === 1 ? "wasn't" : "weren't"} recognised as related.` : ""
                    return pick([
                      `${relevantCount} of ${totalMeaningful} meaningful words were relevant.${sampleText} Try mirroring the language of a dictionary definition.`,
                      `Some of your phrasing was on-target, but several words didn't connect.${sampleText} Aim for the specific terms the definition uses.`,
                      `A mix of relevant and off-topic words.${sampleText} Think about the exact ideas the word describes.`,
                    ])
                  }

                  const sample = irrelevantWords.slice(0, 3)
                  const sampleText = sample.length > 0 ? ` Words like "${sample.join('", "')}" were off-target.` : ""
                  
                  // Handle zero case with better grammar
                  if (relevantCount === 0) {
                    return pick([
                      `None of your ${totalMeaningful} words matched the expected meaning.${sampleText} Focus on the specific ideas in the definition.`,
                      `Your vocabulary didn't align with the definition.${sampleText} Try to capture the exact meaning rather than general associations.`,
                      `The wording was too far from the definition.${sampleText} Compare your answer to the official definition below for guidance.`,
                    ])
                  }
                  
                  return pick([
                    `Only ${relevantCount} of ${totalMeaningful} words matched the expected meaning.${sampleText} Focus on the specific ideas in the definition.`,
                    `Most of your vocabulary didn't align with the definition.${sampleText} Try to capture the exact meaning rather than general associations.`,
                    `The wording was too far from the definition.${sampleText} Compare your answer to the official definition below for guidance.`,
                  ])
                })()

                const detailExplanation = (() => {
                  const wc = breakdown.detail.wordCount
                  const pct = breakdown.detail.max > 0 ? breakdown.detail.earned / breakdown.detail.max : 0
                  if (pct >= 1) return "Good length. Your definition had enough detail."
                  if (pct >= 0.85) return `${wc} words is close. Just a touch more detail would earn full marks.`
                  if (pct >= 0.65) return `At ${wc} words, your definition could use a bit more elaboration.`
                  if (wc >= 3) return `Only ${wc} words. Try fleshing out your definition a bit more.`
                  return `${wc} word${wc === 1 ? "" : "s"} isn't enough to capture a definition. Try writing a fuller sentence.`
                })()

  const factors: { label: string; earned: number; max: number; pct: number; explanation: string; isPenalty?: boolean }[] = [
  { label: "Key concepts", earned: breakdown.concepts.earned, max: breakdown.concepts.max, pct: conceptPct, explanation: conceptExplanation },
  { label: "Precision", earned: breakdown.precision.earned, max: breakdown.precision.max, pct: precisionPct, explanation: precisionExplanation },
  { label: "Detail", earned: breakdown.detail.earned, max: breakdown.detail.max, pct: detailPct, explanation: detailExplanation },
  ]
  if (breakdown.hintPenalty > 0) {
    factors.push({ label: "Hint used", earned: -breakdown.hintPenalty, max: 0, pct: 0, explanation: "Etymology hint was revealed before answering.", isPenalty: true })
  }

                return factors.map((item) =>
                  item.isPenalty ? (
                    <div key={item.label} className="flex items-center justify-between text-[11px] pt-1">
                      <span className="text-destructive/80">{item.label}</span>
                      <span className="tabular-nums text-destructive/60">{item.earned}</span>
                    </div>
                  ) : (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-foreground/70">{item.label}</span>
                      <span className="tabular-nums text-foreground/50">{item.earned}/{item.max}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          item.pct >= 80 ? "bg-score-high" : item.pct >= 50 ? "bg-score-mid" : "bg-score-low"
                        }`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    {item.pct < 100 && (
                      <p className="text-[11px] leading-relaxed text-muted-foreground">{item.explanation}</p>
                    )}
                  </div>
                  )
                )
              })()}
            </div>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-border" aria-hidden="true" />

      {/* Player vs official definitions */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Your definition
          </span>
          <p className="text-sm leading-relaxed text-foreground/80">
            {playerDefinition}
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
      {altDefinitionUsed && (
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
          <p className="text-xs font-medium text-muted-foreground mb-1">Your answer matched a different valid meaning:</p>
          <p className="text-sm leading-relaxed text-foreground/80 italic">{altDefinitionUsed}</p>
        </div>
      )}
      </div>

      {/* Share (daily only) */}
      {!isPractice && (
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Copy score to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Share result
              </>
            )}
          </button>
          
          {/* Feedback button */}
          {!feedbackSent ? (
            <button
              type="button"
              onClick={() => setShowFeedback(!showFeedback)}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageSquare className="h-3 w-3" />
              Report scoring issue
            </button>
          ) : (
            <p className="text-xs text-score-high">Thanks for your feedback!</p>
          )}
          
          {/* Feedback form */}
          {showFeedback && !feedbackSent && (
            <div className="w-full max-w-sm rounded-lg border border-border bg-muted/30 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <p className="text-sm font-medium mb-3">What went wrong?</p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleFeedbackSubmit("unfair")}
                  className="text-left text-sm px-3 py-2 rounded-md border border-border hover:bg-accent transition-colors"
                >
                  My answer should have scored higher
                </button>
                <button
                  type="button"
                  onClick={() => handleFeedbackSubmit("bug")}
                  className="text-left text-sm px-3 py-2 rounded-md border border-border hover:bg-accent transition-colors"
                >
                  Something didn&apos;t work correctly
                </button>
                <button
                  type="button"
                  onClick={() => setShowFeedback(false)}
                  className="text-xs text-muted-foreground hover:text-foreground mt-1"
                >
                  Cancel
                </button>
              </div>
              {feedbackError && (
                <p className="text-xs text-destructive mt-2">{feedbackError}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Practice mode CTA or next word */}
      {isPractice && onNextWord ? (
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
            onNextWord()
          }}
          className="flex items-center justify-center gap-2 self-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Next word
        </button>
      ) : (
        <div className="flex flex-col items-center gap-4">
          {onPractice && (
            <button
              type="button"
              onClick={onPractice}
              className="text-sm font-medium text-foreground/70 underline underline-offset-4 decoration-border hover:text-foreground transition-colors"
            >
              Keep playing in practice mode
            </button>
          )}
          <CountdownTimer />
        </div>
      )}
    </div>
  )
}
