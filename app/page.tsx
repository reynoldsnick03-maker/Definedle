import { decompressFromEncodedURIComponent } from "lz-string"
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
      // LZ-compressed format: word|score|concepts|k|p|t|mode|definition
      const decompressed = decompressFromEncodedURIComponent(params.r)
      if (decompressed) {
        const parts = decompressed.split("|")
        if (parts.length >= 7) {
          shareData = {
            w: parts[0],
            s: parseInt(parts[1], 10),
            c: parts[2],
            k: parseInt(parts[3], 10),
            p: parseInt(parts[4], 10),
            t: parseInt(parts[5], 10),
            m: parts[6],
            d: parts[7] || "",
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
