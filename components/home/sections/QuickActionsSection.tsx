import Link from "next/link";
import { ArrowUpRight, CalendarDays, Navigation, Phone, UtensilsCrossed } from "lucide-react";
import { site } from "@/data/site";

const actions = [
  { label: "View the Menu", to: "/menus", Icon: UtensilsCrossed, id: "quick-view-menu" },
  { label: "Call to Order", href: site.phoneTel, Icon: Phone, id: "quick-call" },
  { label: "See Events", to: "/events", Icon: CalendarDays, id: "quick-events" },
  { label: "Get Directions", href: site.directionsUrl, Icon: Navigation, id: "quick-directions", external: true },
];

export function QuickActionsSection() {
  return (
    <section aria-label="Quick actions" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
        {actions.map(({ label, to, href, Icon, id, external }) => {
          const cls =
            "group flex min-h-28 flex-col justify-between gap-3 border-t-2 border-transparent bg-panel p-5 transition-all duration-200 hover:-translate-y-1 hover:border-ember hover:bg-panel-2 lg:min-h-36 lg:p-6";
          const inner = (
            <>
              <Icon className="h-6 w-6 text-ember" aria-hidden="true" />
              <span className="flex items-center justify-between gap-2 font-heading text-sm font-bold uppercase tracking-wide text-bone lg:text-base">
                {label}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-fog transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ember" aria-hidden="true" />
              </span>
            </>
          );
          return to ? (
            <Link key={id} href={to} data-testid={id} className={cls}>{inner}</Link>
          ) : (
            <a key={id} href={href} data-testid={id} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {inner}
            </a>
          );
        })}
      </div>
    </section>
  );
}
