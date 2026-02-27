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
      // New ultra-compact format: word-score-concepts-k-p-t-mode
      // e.g., "precedent-96-pp-101-100-67-e"
      const parts = params.r.split("-")
      if (parts.length >= 7) {
        // Last part is mode (e or h), second-to-last three are percentages
        const mode = parts[parts.length - 1]
        const detailPct = parseInt(parts[parts.length - 2], 10)
        const precisionPct = parseInt(parts[parts.length - 3], 10)
        const conceptPct = parseInt(parts[parts.length - 4], 10)
        const concepts = parts[parts.length - 5]
        const score = parseInt(parts[parts.length - 6], 10)
        // Word might contain hyphens, so join all remaining parts
        const word = parts.slice(0, parts.length - 6).join("-")
        
        shareData = {
          w: word,
          s: score,
          d: "", // No definition in compact format
          c: concepts,
          k: conceptPct,
          p: precisionPct,
          t: detailPct,
          m: mode,
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
