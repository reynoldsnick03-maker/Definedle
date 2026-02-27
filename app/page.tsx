import { getTodaysWord, getTodaysHardWord, dailyWords, practiceWords, hardWords } from "@/lib/game-data"
import { PageClient } from "@/components/page-client"

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const dailyWord = getTodaysWord()
  const hardWord = getTodaysHardWord()

  // Parse shared result from ?r= parameter
  let shareData: { w: string; s: number; d: string; c: string; k?: number; p?: number; t?: number; m?: string } | null = null
  let shareWordData: { definition: string; partOfSpeech: string; conceptLabels: string[] } | null = null

  if (typeof params.r === "string") {
    try {
      // Restore URL-safe base64 to standard base64
      const base64 = params.r.replace(/-/g, "+").replace(/_/g, "/")
      const decoded = atob(base64)
      
      // Try new compact pipe-delimited format first: word|score|definition|concepts|k|p|t|mode
      const parts = decoded.split("|")
      if (parts.length >= 4) {
        shareData = {
          w: parts[0],
          s: parseInt(parts[1], 10),
          d: parts[2],
          c: parts[3],
          k: parts[4] ? parseInt(parts[4], 10) : undefined,
          p: parts[5] ? parseInt(parts[5], 10) : undefined,
          t: parts[6] ? parseInt(parts[6], 10) : undefined,
          m: parts[7] || undefined,
        }
      } else {
        // Fallback: try legacy JSON format for old links
        const jsonDecoded = JSON.parse(decodeURIComponent(decoded))
        if (jsonDecoded.w && typeof jsonDecoded.s === "number" && jsonDecoded.d && jsonDecoded.c) {
          shareData = {
            w: jsonDecoded.w,
            s: jsonDecoded.s,
            d: jsonDecoded.d,
            c: jsonDecoded.c,
            k: jsonDecoded.k,
            p: jsonDecoded.p,
            t: jsonDecoded.t,
            m: jsonDecoded.m,
          }
        }
      }
      
      // Find the word in our data to get official definition and concept labels
      if (shareData) {
        const allWords = [...dailyWords, ...practiceWords, ...hardWords]
        const wordEntry = allWords.find((w) => w.word.toLowerCase() === shareData!.w.toLowerCase())
        if (wordEntry) {
          shareWordData = {
            definition: wordEntry.definition,
            partOfSpeech: wordEntry.partOfSpeech,
            conceptLabels: wordEntry.keyConcepts.map((c) => c.label),
          }
        }
      }
    } catch {
      // Invalid share data, ignore
    }
  }

  return (
    <PageClient
      dailyWord={dailyWord}
      hardWord={hardWord}
      shareData={shareData}
      shareWordData={shareWordData}
    />
  )
}
