import { cn } from "#/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "primary-inverted"
  children: ReactNode
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-[var(--font-display)] text-sm font-medium transition-[opacity,transform,background-color,color] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        variant === "primary" &&
          "rounded-full bg-[var(--foreground)] px-5 py-2.5 text-[var(--background)] hover:opacity-85 active:scale-[0.96]",
        variant === "primary-inverted" &&
          "rounded-full bg-[var(--background)] px-5 py-2.5 text-[var(--foreground)] hover:opacity-85 active:scale-[0.96]",
        variant === "secondary" &&
          "rounded-full border border-[var(--border-strong)] px-5 py-2.5 hover:bg-[var(--muted)] active:scale-[0.96]",
        variant === "ghost" &&
          "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
