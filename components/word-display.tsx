interface WordDisplayProps {
  word: string
  partOfSpeech: string
  fontSize?: "small" | "medium" | "large"
}

export function WordDisplay({ word, partOfSpeech, fontSize = "medium" }: WordDisplayProps) {
  const sizeStyle = fontSize === "small"
    ? { fontSize: "1.875rem", lineHeight: "2.25rem" }   // 30px
    : fontSize === "large"
    ? { fontSize: "4rem", lineHeight: "1" }              // 64px
    : { fontSize: "3rem", lineHeight: "1" }              // 48px — default

  return (
    <div className="flex flex-col items-center gap-1.5 py-6">
      <h2
        className="font-serif font-normal tracking-tight text-foreground italic"
        style={sizeStyle}
      >
        {word}
      </h2>
      <span className="text-sm text-muted-foreground tracking-widest uppercase">
        {partOfSpeech}
      </span>
    </div>
  )
}
