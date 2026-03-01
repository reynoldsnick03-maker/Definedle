"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Flame, Star, Trophy } from "lucide-react"
import type { DailyWord } from "@/lib/game-data"
import { stemMatch, areSynonyms } from "@/lib/scoring"
import { getPlayerId } from "@/lib/player-id"

interface MirrorGameProps {
  word: DailyWord
  onFlipBack: () => void
  onNextWord?: () => void
  isPractice?: boolean
  onComplete?: (result: { correct: boolean; guesses: number; hintsUsed: number }) => void
  streak?: { current: number; best: number }
}

interface Guess {
  word: string
  similarity: number
}

interface SessionState {
  score: number
  streak: number
  bestStreak: number
  wordsSolved: number
  wordsAttempted: number
}

function roundPoints(guesses: number, hintsUsed: number): number {
  const base = guesses === 1 ? 3 : guesses === 2 ? 2 : 1
  return Math.max(0, base - hintsUsed)
}

function calculateSimilarity(guess: string, target: string, synonyms?: string[]): number {
  const g = guess.toLowerCase().trim()
  const t = target.toLowerCase()
  if (g === t) return 100
  if (stemMatch(g, t)) return 90
  if (synonyms?.some(s => s.toLowerCase() === g)) return 75
  if (areSynonyms(g, t)) return 70
  const distance = levenshtein(g, t)
  const maxLen = Math.max(g.length, t.length)
  const similarity = Math.round((1 - distance / maxLen) * 100)
  if (synonyms?.some(s => stemMatch(g, s.toLowerCase()))) return Math.max(similarity, 60)
  return Math.max(0, similarity)
}

function levenshtein(a: string, b: string): number {
  const matrix: number[][] = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i-1] === a[j-1]
        ? matrix[i-1][j-1]
        : Math.min(matrix[i-1][j-1] + 1, matrix[i][j-1] + 1, matrix[i-1][j] + 1)
    }
  }
  return matrix[b.length][a.length]
}

function getSimilarityColor(s: number) {
  if (s >= 100) return "bg-score-high/80 text-white"
  if (s >= 80) return "bg-emerald-400/60 text-emerald-900"
  if (s >= 60) return "bg-amber-300/50 text-amber-900"
  if (s >= 40) return "bg-orange-300/50 text-orange-900"
  return "bg-red-300/50 text-red-900"
}

function getSimilarityBorderColor(s: number) {
  if (s >= 100) return "border-score-high/60"
  if (s >= 80) return "border-emerald-300"
  if (s >= 60) return "border-amber-300"
  if (s >= 40) return "border-orange-300"
  return "border-red-300"
}

async function isValidWord(word: string): Promise<{ valid: boolean; uncertain: boolean }> {
  if (!/^[a-zA-Z]+$/.test(word)) return { valid: false, uncertain: false }
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2000)
    const response = a
