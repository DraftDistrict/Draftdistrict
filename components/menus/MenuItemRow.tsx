import Image from "next/image";
import { Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItem, MenuTag } from "@/data/site";

const tagStyles: Record<MenuTag, { label: string; cls: string; Icon: typeof Star }> = {
  POPULAR: { label: "Popular", cls: "border-ember/50 text-ember", Icon: Star },
  NEW: { label: "New", cls: "border-bone/40 text-bone", Icon: Sparkles },
};

function PriceOptions({ prices }: { prices: NonNullable<MenuItem["prices"]> }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-2" aria-label="Prices">
      {prices.map((p) => (
        <li key={p.label} className="inline-flex items-baseline gap-1.5 border border-line px-2 py-0.5 font-mono text-xs">
          <span className="uppercase tracking-[0.12em] text-fog">{p.label}</span>
          <span className="font-semibold text-ember">{p.price}</span>
        </li>
      ))}
    </ul>
  );
}

function ItemChoices({ choices }: { choices: NonNullable<MenuItem["choices"]> }) {
  return (
    <div className="mt-2.5">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-ember">{choices.label}</p>
      <ul className="mt-1.5 flex flex-wrap gap-1.5">
        {choices.options.map((o) => (
          <li key={o} className="border border-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-bone/80">
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TagBadge({ tag, className }: { tag: MenuTag; className?: string }) {
  const { label, cls, Icon } = tagStyles[tag];
  return (
    <span className={cn("inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]", cls, className)}>
      <Icon className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>
  );
}

export function MenuItemRow({ item, categoryId, index }: { item: MenuItem; categoryId: string; index: number }) {
  if (item.image) {
    return (
      <div className="group flex items-center gap-4 border border-line bg-panel p-3 sm:gap-5 sm:p-4" data-testid={`menu-item-${categoryId}-${index}`}>
        <div className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.name}
            fill
            sizes="6rem"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline">
            <h3 className="font-heading text-base font-extrabold uppercase tracking-tight text-bone sm:text-lg">
              {item.name}
            </h3>
            {item.price && (
              <>
                <span className="dot-leader" aria-hidden="true" />
                <span className="shrink-0 font-mono text-sm font-semibold text-ember sm:text-base">{item.price}</span>
              </>
            )}
          </div>
          <p className="mt-1 text-sm leading-snug text-fog">{item.desc}</p>
          {item.choices && <ItemChoices choices={item.choices} />}
          {item.prices && <PriceOptions prices={item.prices} />}
          {item.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <TagBadge key={t} tag={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div data-testid={`menu-item-${categoryId}-${index}`}>
      <div className="flex items-baseline">
        <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight text-bone">
          {item.name}
        </h3>
        {item.tags?.map((t) => (
          <TagBadge key={t} tag={t} className="ml-3 self-center" />
        ))}
        {item.price && (
          <>
            <span className="dot-leader" aria-hidden="true" />
            <span className="shrink-0 font-mono text-base font-semibold text-ember">{item.price}</span>
          </>
        )}
      </div>
      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fog">{item.desc}</p>
      {item.choices && <ItemChoices choices={item.choices} />}
      {item.prices && <PriceOptions prices={item.prices} />}
    </div>
  );
}
