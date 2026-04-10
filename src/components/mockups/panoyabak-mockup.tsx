export function PanoyabakMockup() {
  return (
    <div className="flex h-full flex-col bg-[var(--muted)] p-5 md:p-8">
      <div className="flex-1 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5">
          <span className="font-[var(--font-display)] text-[11px] font-bold text-[var(--foreground)]">panoyabak</span>
          <div className="h-5 w-5 rounded-full bg-[var(--muted)]" />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[var(--border)]">
          {["Duyurular", "Yorumlar", "Katılımcılar"].map((t, i) => (
            <span key={t} className={`flex-1 py-2 text-center font-[var(--font-display)] text-[9px] ${i === 0 ? "border-b border-[var(--foreground)] font-medium text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}>{t}</span>
          ))}
        </div>

        {/* Posts */}
        {[
          { author: "Yazılım Topluluğu", text: "Modern yazılım geliştirme süreçlerinde kalite kontrol ve test stratejileri", stats: "24 / 8" },
          { author: "Üniversite Panosu", text: "Önemli: Final sınav programı güncellendi, detaylar için tıklayın", stats: "56 / 12" },
          { author: "Kariyer Merkezi", text: "Staj başvuruları başladı! Son başvuru tarihi 15 Mayıs", stats: "31 / 5" },
        ].map((post) => (
          <div key={post.author} className="border-b border-[var(--border)] px-4 py-3 last:border-b-0">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 shrink-0 rounded-full bg-[var(--muted)]" />
              <span className="font-[var(--font-display)] text-[9px] font-semibold text-[var(--foreground)]">{post.author}</span>
            </div>
            <p className="mt-1 font-[var(--font-display)] text-[9px] leading-relaxed text-[var(--muted-foreground)]">{post.text}</p>
            <p className="mt-1 font-[var(--font-mono)] text-[7px] text-[var(--muted-foreground)]">{post.stats}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
