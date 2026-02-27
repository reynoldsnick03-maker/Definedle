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
      const decoded = JSON.parse(decodeURIComponent(atob(params.r)))
      if (decoded.w && typeof decoded.s === "number" && decoded.d && decoded.c) {
        // Include all fields including optional ones (k, p, t, m)
        shareData = {
          w: decoded.w,
          s: decoded.s,
          d: decoded.d,
          c: decoded.c,
          k: decoded.k,
          p: decoded.p,
          t: decoded.t,
          m: decoded.m,
        }
        // Find the word in our data to get official definition and concept labels
        const allWords = [...dailyWords, ...practiceWords, ...hardWords]
        const wordEntry = allWords.find((w) => w.word.toLowerCase() === decoded.w.toLowerCase())
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
