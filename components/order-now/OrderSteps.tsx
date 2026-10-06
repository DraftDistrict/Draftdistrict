import { Reveal } from "@/components/Motion";

const steps = [
  "Browse our menu",
  "Choose your favorites",
  "Call the restaurant",
  "Our team confirms your order",
];

export function OrderSteps() {
  return (
    <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s} delay={i * 0.07}>
          <li className="flex h-full items-start gap-4 bg-panel p-6" data-testid={`order-step-${i}`}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-copper font-mono text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="pt-1.5 text-sm font-medium leading-relaxed text-bone/85">{s}</span>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
