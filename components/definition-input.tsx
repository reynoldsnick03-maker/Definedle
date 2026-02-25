"use client"

import { useState, useCallback } from "react"

interface DefinitionInputProps {
  onSubmit: (definition: string) => void
  disabled?: boolean
}

const MAX_WORDS = 15

export function DefinitionInput({ onSubmit, disabled }: DefinitionInputProps) {
  const [value, setValue] = useState("")

  const wordCount = value.trim() === "" ? 0 : value.trim().split(/\s+/).length
  const isOverLimit = wordCount > MAX_WORDS
  const canSubmit = value.trim().length > 0 && !isOverLimit && !disabled

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value)
    },
    []
  )

  const handleSubmit = useCallback(() => {
    if (canSubmit) {
      onSubmit(value.trim())
    }
  }, [canSubmit, onSubmit, value])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor="definition-input"
        className="text-sm font-medium text-foreground tracking-wide"
      >
        Define this word in {MAX_WORDS} words or fewer
      </label>
      <textarea
        id="definition-input"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Type your definition..."
        rows={3}
        className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-base leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-foreground/20 transition-all disabled:opacity-50"
        aria-describedby="word-counter"
      />
      <div className="flex items-center justify-between">
        <span
          id="word-counter"
          className={`text-xs tabular-nums tracking-wide ${
            isOverLimit ? "text-destructive font-medium" : "text-muted-foreground"
          }`}
          aria-live="polite"
        >
          {wordCount} / {MAX_WORDS} words
        </span>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
