import { useRef, useState } from "react"

export function RevcatMockup() {
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex h-full items-center justify-center bg-[var(--muted)] p-5 md:p-8">
      <div
        className="w-full cursor-text overflow-hidden rounded-lg bg-[var(--card)] border border-[var(--border)] dark:bg-[#1e1e1c] dark:border-[rgba(255,255,255,0.06)]"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-4 py-2.5 dark:border-[rgba(255,255,255,0.06)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-[var(--font-mono)] text-[10px] text-[var(--muted-foreground)]">
            Terminal
          </span>
        </div>
        <div className="p-4 font-[var(--font-mono)] text-[11px] leading-[1.8] md:text-xs">
          <div><span className="text-[#5a9a6a]">$</span><span className="text-[var(--foreground)]"> revcat analytics --period 30d</span></div>
          <div className="mt-2 text-[var(--muted-foreground)]">  Metric          Value      Change</div>
          <div className="text-[var(--muted-foreground)]">  ─────────────────────────────────</div>
          <div><span className="text-[var(--foreground)] opacity-70">  MRR</span><span className="text-[var(--color-accent)]">             $12,400</span><span className="text-[#5a9a6a]">    +18%</span></div>
          <div><span className="text-[var(--foreground)] opacity-70">  Subscribers</span><span className="text-[var(--color-accent)]">        842</span><span className="text-[#5a9a6a]">    +24</span></div>
          <div><span className="text-[var(--foreground)] opacity-70">  Churn Rate</span><span className="text-[var(--color-accent)]">        2.1%</span><span className="text-[#5a9a6a]">   -0.3%</span></div>
          <div><span className="text-[var(--foreground)] opacity-70">  ARPU</span><span className="text-[var(--color-accent)]">             $14.72</span><span className="text-[#5a9a6a]">   +$1.2</span></div>
          <div className="mt-2 flex items-center">
            <span className="text-[#5a9a6a]">$ </span>
            <span className="text-[var(--foreground)]">{input}</span>
            <span className="ml-px inline-block h-[14px] w-[7px] animate-pulse bg-[var(--foreground)] opacity-60" />
          </div>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="fixed -left-[9999px] opacity-0"
          aria-label="Terminal input"
        />
      </div>
    </div>
  )
}
