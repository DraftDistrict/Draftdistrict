"use client";

import { Search, X } from "lucide-react";
import { fieldClassName } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export function MenuSearch({
  value,
  onChange,
  resultCount,
  fuzzy,
}: {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  /** Results came from close spellings rather than an exact match. */
  fuzzy: boolean;
}) {
  const query = value.trim();

  return (
    <div className="mb-12" data-testid="menu-search">
      <label htmlFor="menu-search-input" className="sr-only">
        Search the menu
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-fog" aria-hidden="true" />
        <input
          id="menu-search-input"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") onChange("");
          }}
          placeholder="Search dishes, ingredients or sauces — e.g. cajun, bacon, honey bbq"
          autoComplete="off"
          enterKeyHint="search"
          className={cn(fieldClassName, "menu-search-input min-h-14 bg-panel pl-11 pr-12 text-base")}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            data-testid="menu-search-clear"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-fog transition-colors hover:text-ember"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
      <p className="mt-2.5 min-h-4 font-mono text-[11px] uppercase tracking-[0.16em] text-fog" aria-live="polite">
        {query &&
          (fuzzy && resultCount > 0
            ? `No exact matches — showing ${resultCount === 1 ? "1 dish" : `${resultCount} dishes`} close to “${query}”`
            : resultCount === 1
              ? `1 dish matches “${query}”`
              : `${resultCount} dishes match “${query}”`)}
      </p>
    </div>
  );
}
