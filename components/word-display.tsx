interface WordDisplayProps {
  word: string
  partOfSpeech: string
}

export function WordDisplay({ word, partOfSpeech }: WordDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 py-6">
      <h2 className="font-serif text-5xl font-normal tracking-tight text-foreground md:text-6xl italic">
        {word}
      </h2>
      <span className="text-sm text-muted-foreground tracking-widest uppercase">
        {partOfSpeech}
      </span>
    </div>
  )
}
