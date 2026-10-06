import Image from "next/image";
import { Reveal } from "@/components/Motion";
import { CtaOutline } from "@/components/ui/Button";
import { img, menuItemCount } from "@/data/site";

const stats = [
  { n: "11", l: "Wing Sauces" },
  { n: `${menuItemCount}`, l: "Menu Favorites" },
  { n: "7", l: "Game Days a Week" },
];

const galleryImages = [
  { src: img.crowdBar, alt: "Fans at the bar watching the game across a wall of screens", className: "col-span-6 sm:col-span-4", aspect: "aspect-[4/3]", delay: 0 },
  { src: img.beerTaps, alt: "Row of polished craft beer taps at the bar", className: "col-span-3 sm:col-span-2 sm:mt-16", aspect: "aspect-[3/4]", delay: 0.1 },
  { src: img.wingsGlaze, alt: "Gateway City jumbo wings with celery and dipping sauce", className: "col-span-3 sm:col-span-2 sm:-mt-8 sm:translate-y-4", aspect: "aspect-square", delay: 0.2, extra: "-rotate-2" },
  { src: img.friendsMugs, alt: "Friends raising mugs together during the game", className: "col-span-6 sm:col-span-4", aspect: "aspect-[16/9]", delay: 0.3 },
];

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="border-y border-line bg-panel">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
              <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
              02 — The Experience
            </p>
            <h2 id="experience-heading" className="mt-4 font-heading text-4xl font-black uppercase leading-[1.02] tracking-tight text-bone sm:text-5xl">
              More than a place to watch the game.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
              Catch every game on our big screens. Every seat has a sightline,
              every table is within earshot of the call, and the room is full of
              people who proudly support St. Louis sports. Good food, good
              drinks, good times.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line py-6" data-testid="experience-stats">
              {stats.map((s) => (
                <div key={s.l} className="px-4 first:pl-0">
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="font-heading text-3xl font-black text-ember lg:text-4xl">{s.n}</dd>
                  <dd className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-fog">{s.l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <CtaOutline to="/events" testId="experience-events-button">See What&apos;s On</CtaOutline>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-6 gap-4">
            {galleryImages.map((g) => (
              <Reveal key={g.alt} delay={g.delay} className={g.className}>
                <div className={`relative w-full border border-line ${g.aspect} ${g.extra ?? ""}`}>
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 60vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
