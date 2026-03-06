interface WordDisplayProps {
  word: string
  partOfSpeech: string
  fontSize?: "small" | "medium" | "large"
}

export function WordDisplay({ word, partOfSpeech, fontSize = "medium" }: WordDisplayProps) {
  const sizeClass = fontSize === "small"
    ? "text-3xl md:text-4xl"
    : fontSize === "large"
    ? "text-6xl md:text-7xl"
    : "text-5xl md:text-6xl"

  return (
    <div className="flex flex-col items-center gap-1.5 py-6">
      <h2 className={`font-serif font-normal tracking-tight text-foreground italic ${sizeClass}`}>
        {word}
      </h2>
      <span className="text-sm text-muted-foreground tracking-widest uppercase">
        {partOfSpeech}
      </span>
    </div>
  )
}
