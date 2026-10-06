"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { AppReadyContext, Loader } from "@/components/Loader";
import { Toaster } from "@/components/Toaster";
import { setLenis } from "@/lib/lenis";

export function ClientShell({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, autoRaf: true });
    lenisRef.current = lenis;
    setLenis(lenis);
    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <AppReadyContext.Provider value={!loading}>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-graphite text-bone">
        <Header />
        <main className="safe-top">{children}</main>
        <Footer />
        <div className="safe-bottom md:hidden" aria-hidden="true">
          <div className="h-16" />
        </div>
        <MobileActionBar />
      </div>
      <Toaster richColors />
    </AppReadyContext.Provider>
  );
}
