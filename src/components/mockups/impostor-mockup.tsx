import { useState } from "react"

const categories = ["Mixed", "Anime", "K-Pop", "Movies", "Sports", "Science"]
const players = ["Player 1", "Player 2", "Player 3", "Player 4"]

export function ImpostorMockup() {
  const [selectedCat, setSelectedCat] = useState(0)

  return (
    <div className="flex h-full flex-col items-center justify-center bg-[var(--muted)] p-5 md:p-8">
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
        {/* Header */}
        <div className="border-b border-[var(--border)] px-4 py-3">
          <p className="font-[var(--font-display)] text-[12px] font-bold text-[var(--foreground)]">Impostor Who?</p>
          <p className="font-[var(--font-display)] text-[8px] text-[var(--muted-foreground)]">Secret word party game</p>
        </div>

        <div className="px-4 py-4">
          {/* Player count */}
          <div className="flex items-center justify-between">
            <span className="font-[var(--font-display)] text-[10px] font-medium text-[var(--foreground)]">Players</span>
            <div className="flex items-center gap-2">
              {players.map((_, i) => (
                <div key={i} className="h-5 w-5 rounded-full bg-[var(--muted)] font-[var(--font-mono)] text-[8px] leading-5 text-center text-[var(--muted-foreground)]">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mt-4">
            <span className="font-[var(--font-display)] text-[10px] font-medium text-[var(--foreground)]">Category</span>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(i)}
                  className={`rounded-lg px-2 py-1.5 font-[var(--font-display)] text-[9px] transition-colors ${
                    i === selectedCat
                      ? "bg-[var(--foreground)] font-medium text-[var(--background)]"
                      : "border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Game info */}
          <div className="mt-4 rounded-lg bg-[var(--muted)] p-3">
            <div className="flex items-center justify-between">
              <span className="font-[var(--font-mono)] text-[8px] text-[var(--muted-foreground)]">Round</span>
              <span className="font-[var(--font-mono)] text-[8px] font-medium text-[var(--foreground)]">1 of 5</span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-[var(--font-mono)] text-[8px] text-[var(--muted-foreground)]">Impostors</span>
              <span className="font-[var(--font-mono)] text-[8px] font-medium text-[var(--foreground)]">1</span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-[var(--font-mono)] text-[8px] text-[var(--muted-foreground)]">Languages</span>
              <span className="font-[var(--font-mono)] text-[8px] font-medium text-[var(--foreground)]">20+</span>
            </div>
          </div>

          {/* Start button */}
          <button className="mt-4 w-full rounded-lg bg-[var(--foreground)] py-2 font-[var(--font-display)] text-[10px] font-medium text-[var(--background)]">
            Start New Game
          </button>
        </div>
      </div>
    </div>
  )
}
