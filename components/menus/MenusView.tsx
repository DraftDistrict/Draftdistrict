"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { CallButton } from "@/components/ui/Button";
import { MenuCategoryNav } from "@/components/menus/MenuCategoryNav";
import { MenuCategorySection } from "@/components/menus/MenuCategorySection";
import { MenuSearch } from "@/components/menus/MenuSearch";
import { img, menu, site } from "@/data/site";
import { exactMatch, fuzzyMatch, queryWords, searchDoc } from "@/lib/menuSearch";

const indexed = menu.map((category) => ({ category, docs: category.items.map((item) => searchDoc(item, category)) }));

/** Categories (keeping their menu number) with only the dishes that pass `match`. */
function filterMenu(match: (i: number, c: number) => boolean) {
  return indexed
    .map(({ category }, index) => ({ category: { ...category, items: category.items.filter((_, i) => match(i, index)) }, index }))
    .filter(({ category }) => category.items.length > 0);
}

export function MenusView() {
  const [active, setActive] = useState(menu[0].id);
  const [search, setSearch] = useState("");
  const query = useDeferredValue(search);

  // every word must match somewhere in the dish; typo-tolerant matching only kicks in when
  // nothing matches exactly, so a correctly spelled search never picks up near-miss noise
  const { results, fuzzy } = useMemo(() => {
    const words = queryWords(query);
    if (!words.length) return { results: menu.map((category, index) => ({ category, index })), fuzzy: false };
    const exact = filterMenu((i, c) => exactMatch(indexed[c].docs[i], words));
    if (exact.length) return { results: exact, fuzzy: false };
    return { results: filterMenu((i, c) => fuzzyMatch(indexed[c].docs[i], words)), fuzzy: true };
  }, [query]);
  const resultCount = results.reduce((n, r) => n + r.category.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="The Draft District · Eat & Drink"
        lines={["Menus"]}
        sub="Game day, every day. Gateway City jumbo wings, smash burgers, St. Louis T-RAV and plenty more — made to order."
        image={img.draftDistrictBurger}
        imageAlt="The Draft District Burger topped with bacon and an onion ring"
      />
      <MenuCategoryNav categories={results.map((r) => r.category)} active={active} onSelect={setActive} />

      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:py-20">
        <MenuSearch value={search} onChange={setSearch} resultCount={resultCount} fuzzy={fuzzy} />

        {results.map(({ category, index }) => (
          <MenuCategorySection key={category.id} category={category} index={index} />
        ))}

        {results.length === 0 && (
          <div className="border border-line bg-panel px-6 py-12 text-center" data-testid="menu-search-empty">
            <p className="font-heading text-2xl font-black uppercase tracking-tight text-bone">No dishes found</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-fog">
              Nothing on the menu matches &ldquo;{query.trim()}&rdquo;. Try another word, or call and we&apos;ll help you out.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setSearch("")}
                className="inline-flex min-h-12 items-center border border-line px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-ember hover:text-ember"
              >
                Clear search
              </button>
              <CallButton label={`Call ${site.phoneDisplay}`} testId="menu-search-call" dominant={false} />
            </div>
          </div>
        )}

        <Reveal>
          <div className="mt-16 border border-copper/40 bg-panel p-8 text-center lg:p-12" data-testid="menu-order-cta">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
              Orders by phone only
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black uppercase tracking-tight text-bone sm:text-4xl">
              Ready to Order?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-fog">
              Orders are currently accepted by phone. Call us and we&apos;ll take care of the rest.
            </p>
            <div className="mt-7 flex justify-center">
              <CallButton label={`Call ${site.phoneDisplay}`} testId="menu-call-button" />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
