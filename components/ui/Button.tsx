import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const base =
  "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 active:scale-[0.97]";

export function CtaPrimary({
  to,
  children,
  testId,
  className,
}: {
  to: string;
  children: ReactNode;
  testId?: string;
  className?: string;
}) {
  return (
    <Link
      href={to}
      data-testid={testId}
      className={cn(base, "bg-copper text-white hover:bg-copper-deep", className)}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function CtaOutline({
  to,
  children,
  testId,
  className,
}: {
  to: string;
  children: ReactNode;
  testId?: string;
  className?: string;
}) {
  return (
    <Link
      href={to}
      data-testid={testId}
      className={cn(
        base,
        "border border-bone/30 text-bone hover:border-ember hover:text-ember",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function CallButton({
  label = "Call to Order",
  showNumber = false,
  testId = "call-to-order-button",
  className,
  dominant = true,
}: {
  label?: string;
  showNumber?: boolean;
  testId?: string;
  className?: string;
  dominant?: boolean;
}) {
  return (
    <a
      href={site.phoneTel}
      data-testid={testId}
      aria-label={`Call ${site.fullName} at ${site.phoneDisplay} to place your order`}
      className={cn(
        base,
        dominant
          ? "bg-copper text-white shadow-[0_0_32px_rgba(220,38,38,0.35)] hover:bg-copper-deep"
          : "border border-bone/30 text-bone hover:border-ember hover:text-ember",
        className
      )}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {label}
      {showNumber && <span className="tracking-normal">{site.phoneDisplay}</span>}
    </a>
  );
}
