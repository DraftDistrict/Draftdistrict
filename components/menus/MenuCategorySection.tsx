import { Reveal } from "@/components/Motion";
import { MenuItemRow } from "@/components/menus/MenuItemRow";
import { cn } from "@/lib/utils";
import type { MenuCategory, MenuNote } from "@/data/site";

const gridCols = ["", "sm:grid-cols-2", "sm:grid-cols-2 lg:grid-cols-3"];

/** House notes as a hairline grid of labelled cells that spans the full content width. */
function CategoryNotes({ notes }: { notes: MenuNote[] }) {
  const cols = Math.min(Math.max(notes.filter((n) => !n.wide).length, 1), 3);
  return (
    <dl className={cn("mt-6 grid gap-px border border-line bg-line", gridCols[cols - 1])}>
      {notes.map((n) => (
        <div key={n.label} className={cn("bg-panel px-4 py-3.5", n.wide && "col-span-full")}>
          <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-ember">{n.label}</dt>
          {n.text && <dd className="mt-1.5 text-sm leading-snug text-bone/85">{n.text}</dd>}
          {n.chips && (
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {n.chips.map((c) => (
                <span key={c} className="border border-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-bone/80">
                  {c}
                </span>
              ))}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}

export function MenuCategorySection({ category, index }: { category: MenuCategory; index: number }) {
  return (
    <section
      id={category.id}
      aria-labelledby={`menu-heading-${category.id}`}
      className="menu-section border-t border-line py-12 first:border-t-0 first:pt-0"
    >
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs font-semibold text-ember">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2
            id={`menu-heading-${category.id}`}
            className="font-heading text-3xl font-black uppercase tracking-tight text-bone sm:text-4xl"
          >
            {category.label}
          </h2>
        </div>
        {category.notes && <CategoryNotes notes={category.notes} />}
      </Reveal>

      <ul className="mt-8 space-y-7">
        {category.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.04}>
            <li>
              <MenuItemRow item={item} categoryId={category.id} index={i} />
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
