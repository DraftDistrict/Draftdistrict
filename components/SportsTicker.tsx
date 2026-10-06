export function SportsTicker({ items }: { items: string[] }) {
  const half = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden border-y border-line bg-panel py-3"
      aria-hidden="true"
      data-testid="sports-ticker"
    >
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {half.map((t, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-fog"
              >
                <span className="px-6">{t}</span>
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-ember" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
