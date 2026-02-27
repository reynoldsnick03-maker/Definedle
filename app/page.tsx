import { getTodaysWord, getTodaysHardWord } from "@/lib/game-data"
import { PageClient } from "@/components/page-client"

export default async function Page() {
  const dailyWord = getTodaysWord()
  const hardWord = getTodaysHardWord()

  return (
    <PageClient
      dailyWord={dailyWord}
      hardWord={hardWord}
      shareData={null}
      shareWordData={null}
    />
  )
}
