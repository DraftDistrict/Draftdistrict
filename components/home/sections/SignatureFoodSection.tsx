import Image from "next/image";
import { Reveal } from "@/components/Motion";
import { CtaOutline } from "@/components/ui/Button";
import { img } from "@/data/site";

const signatureDishes = [
  { name: "Draft District Burger", desc: "1/2 lb beef, pepper jack, bacon, barbeque chipotle and an onion ring.", price: "$15.99", image: img.draftDistrictBurger, alt: "The Draft District Burger topped with bacon and an onion ring" },
  { name: "Gateway City Jumbo Wings", desc: "Traditional or boneless, in 11 house sauces. 8 or 16 pieces.", price: "$14.99", image: img.wingsGlaze, alt: "Sauced jumbo chicken wings with celery and carrots" },
  { name: "T-RAV", desc: "A St. Louis favorite — fried golden, Parmesan, warm marinara.", price: "$10.99", image: img.tRav, alt: "Crispy toasted ravioli" },
  { name: "Millwoods Macho Nachos", desc: "Chicken or beef, cheddar, pico de gallo, sour cream.", price: "$15.99", image: img.nachos, alt: "Loaded nachos with seasoned beef, jalapeños and sour cream" },
  { name: "Prime Dip", desc: "Slow-roasted prime rib, Provolone, hoagie roll, real au jus.", price: "$16.99", image: img.primeDip, alt: "Beef sandwich on a hoagie roll" },
  { name: "Pizza Your Way", desc: "9″, 12″ or 14″ — pick your sauce, cheese and toppings.", price: "$9.00", image: img.pizzaPull, alt: "Pepperoni pizza slice with a cheese pull" },
];

export function SignatureFoodSection() {
  return (
    <section aria-labelledby="signature-heading" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
              <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
              01 — The Food
            </p>
            <h2 id="signature-heading" className="mt-4 font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl lg:text-6xl">
              Game-Day Favorites
            </h2>
          </div>
          <CtaOutline to="/menus" testId="signature-explore-menu">Explore Full Menu</CtaOutline>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        {signatureDishes.map((d, i) => {
          const span =
            i === 0
              ? "md:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-[560px]"
              : i <= 2
                ? "lg:col-span-5 min-h-[260px]"
                : "lg:col-span-4 min-h-[260px]";
          return (
            <Reveal key={d.name} delay={i * 0.07} className={span}>
              <article className="dish-card group h-full min-h-[inherit]" data-testid={`dish-${i}`}>
                <span className="dish-card-beam" aria-hidden="true" />
                <div className="relative z-10 h-full w-full overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes={i === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/25 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 lg:p-6">
                    <div>
                      <h3 className="font-heading text-xl font-extrabold uppercase tracking-tight text-bone lg:text-2xl">
                        {d.name}
                      </h3>
                      <p className="mt-1 max-w-xs text-sm text-bone/65">{d.desc}</p>
                    </div>
                    <p className="shrink-0 font-mono text-lg font-semibold text-ember">{d.price}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
