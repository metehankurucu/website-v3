const products = [
  { name: "Flast", desc: "AI Companion", users: "12K" },
  { name: "Curtain AI", desc: "Home Designer", users: "8K" },
  { name: "Impostor Who?", desc: "Party Game", users: "45K" },
  { name: "FiberCheck", desc: "Fabric Analyzer", users: "3K" },
];

export function CodixusMockup() {
  return (
    <div className="flex h-full flex-col bg-[var(--muted)] p-5 md:p-8">
      <div className="flex-1 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
          <div>
            <p className="font-[var(--font-display)] text-[11px] font-bold text-[var(--foreground)]">
              Codixus
            </p>
            <p className="font-[var(--font-display)] text-[9px] text-[var(--muted-foreground)]">
              Product Dashboard
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5a9a6a]" />
              <span className="font-[var(--font-mono)] text-[8px] text-[var(--muted-foreground)]">
                All systems live
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 border-b border-[var(--border)]">
          {[
            { label: "Products", value: "6" },
            { label: "Total Users", value: "68K" },
            { label: "Revenue", value: "+24%" },
          ].map((s) => (
            <div
              key={s.label}
              className="border-r border-[var(--border)] px-4 py-3 last:border-r-0"
            >
              <p className="font-[var(--font-mono)] text-[8px] text-[var(--muted-foreground)]">
                {s.label}
              </p>
              <p className="mt-0.5 font-[var(--font-display)] text-[14px] font-bold tabular-nums text-[var(--foreground)]">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Product list */}
        <div>
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`flex items-center justify-between px-4 py-2.5 ${i < products.length - 1 ? "border-b border-[var(--border)]" : ""}`}
            >
              <div className="flex items-center gap-3">
                {/* <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--foreground)] font-[var(--font-display)] text-[10px] font-bold text-[var(--background)]">
                  {p.name[0]}
                </div> */}
                <div>
                  <p className="font-[var(--font-display)] text-[11px] font-medium text-[var(--foreground)]">
                    {p.name}
                  </p>
                  <p className="font-[var(--font-display)] text-[9px] text-[var(--muted-foreground)]">
                    {p.desc}
                  </p>
                </div>
              </div>
              <span className="font-[var(--font-mono)] text-[10px] tabular-nums text-[var(--muted-foreground)]">
                {p.users}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
