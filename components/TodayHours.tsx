"use client";

import { useEffect, useState } from "react";
import { hoursForDay } from "@/data/site";

/**
 * Today's opening hours in the restaurant's time zone, or null on days with no
 * listed hours. Resolved after mount so statically generated HTML never bakes in
 * the build day; `undefined` until then.
 */
export function useTodayHours() {
  const [time, setTime] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    setTime(hoursForDay()?.time ?? null);
  }, []);

  return time;
}
