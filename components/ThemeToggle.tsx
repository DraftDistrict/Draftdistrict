"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function readTheme(): Theme {
  if (typeof document !== "undefined" && document.documentElement.dataset.theme === "light") {
    return "light";
  }
  return "dark";
}

export function ThemeToggle() {
  // Always starts "dark" so server and client render identically on hydration —
  // a blocking inline script in the layout already applied the real saved theme
  // to <html data-theme> before React mounts, so this only syncs the toggle's
  // own icon state to match it afterward.
  const [theme, setTheme] = useState<Theme>("dark");
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setSynced(true);
  }, []);

  useEffect(() => {
    if (!synced) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("dd-theme", theme);
    } catch {
      /* private mode */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0D0F12" : "#F6F1E8");
  }, [theme, synced]);

  const dark = theme === "dark";

  return (
    <button
      type="button"
      data-testid="theme-toggle"
      role="switch"
      aria-checked={!dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-bone before:absolute before:-inset-1 before:content-[''] transition-all duration-300 hover:border-ember hover:text-ember active:scale-90"
    >
      <span className="relative flex h-4 w-4 items-center justify-center" aria-hidden="true">
        <motion.span
          className="absolute flex"
          initial={false}
          animate={dark ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: 90, scale: 0.3 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <Sun className="h-4 w-4 text-ember" />
        </motion.span>
        <motion.span
          className="absolute flex"
          initial={false}
          animate={dark ? { opacity: 0, rotate: -90, scale: 0.3 } : { opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <Moon className="h-4 w-4" />
        </motion.span>
      </span>
    </button>
  );
}
