import { Reveal } from "@/components/Motion";
import { CallButton, CtaOutline } from "@/components/ui/Button";
import { site } from "@/data/site";

const steps = [
  { n: "01", title: "Browse the Menu", desc: "Take a look at wings, appetizers, burgers and everything in between." },
  { n: "02", title: "Call the Restaurant", desc: `Ring us at ${site.phoneDisplay} — a real person picks up.` },
  { n: "03", title: "Tell Us Your Order & Address", desc: "We'll confirm you're in the delivery zone and read it back." },
  { n: "04", title: "We Confirm & Deliver", desc: "Hot food, straight to your door. Pay when it arrives." },
];

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-heading" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
            <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
            Simple by design
          </p>
          <h2 id="how-it-works-heading" className="mt-4 font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl">
            How It Works
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <li className="flex h-full flex-col bg-graphite p-7" data-testid={`delivery-step-${i}`}>
                <span className="font-heading text-5xl font-black text-copper/90">{s.n}</span>
                <h3 className="mt-5 font-heading text-lg font-extrabold uppercase tracking-tight text-bone">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-4">
            <CtaOutline to="/menus" testId="delivery-view-menu">View Menu</CtaOutline>
            <CallButton label="Call to Order" testId="delivery-bottom-call" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
