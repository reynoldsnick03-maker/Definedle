import { BarChart3, CircleHelp } from "lucide-react"
import { StreakBadge } from "./streak-badge"

interface GameHeaderProps {
  onStatsOpen?: () => void
  onHelpOpen?: () => void
}

export function GameHeader({ onStatsOpen, onHelpOpen }: GameHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-1 pt-10 pb-6 md:pt-14 md:pb-8 w-full max-w-md px-5">
      <div className="flex w-full items-center justify-between">
        {/* Streak badge on the left -- flex-1 to balance the right side */}
        <div className="flex flex-1 items-center justify-start min-w-0">
          <StreakBadge />
        </div>
        <h1 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
          Definedle
        </h1>
        <div className="flex flex-1 items-center justify-end gap-1 min-w-0">
          {onHelpOpen && (
            <button
              type="button"
              onClick={onHelpOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="How to play"
            >
              <CircleHelp className="h-[18px] w-[18px]" />
            </button>
          )}
          {onStatsOpen ? (
            <button
              type="button"
              onClick={onStatsOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="View stats"
            >
              <BarChart3 className="h-[18px] w-[18px]" />
            </button>
          ) : (
            <div className="w-9" aria-hidden="true" />
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground tracking-wide">
        Define the word as precisely as you can
      </p>
      <div className="mt-4 h-px w-12 bg-border" aria-hidden="true" />
    </header>
  )
}
