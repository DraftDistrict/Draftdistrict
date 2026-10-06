import Image from "next/image";
import logo from "@/public/brand/logo.png";
import logoLight from "@/public/brand/logo-light.png";
import emblem from "@/public/brand/emblem.png";
import emblemLight from "@/public/brand/emblem-light.png";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * Full wordmark — neon artwork on the dark theme, print artwork on the light theme
 * (CSS picks one, so there is no theme flash). Height comes from `className`.
 */
export function BrandLogo({
  className,
  sizes = "160px",
  priority,
  decorative,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Set when a parent link already carries the accessible name. */
  decorative?: boolean;
}) {
  return (
    <span className={cn("inline-flex shrink-0", className)}>
      <Image
        src={logo}
        alt={decorative ? "" : site.fullName}
        sizes={sizes}
        priority={priority}
        className="brand-logo-dark h-full w-auto"
      />
      <Image
        src={logoLight}
        alt={decorative ? "" : site.fullName}
        sizes={sizes}
        priority={priority}
        className="brand-logo-light brand-wordmark-light h-full w-auto"
      />
    </span>
  );
}

/** Round "DD" emblem with the pint glass — on the light theme the ring gets a dark disc so the neon still reads. */
export function BrandEmblem({ className, sizes = "128px", priority }: { className?: string; sizes?: string; priority?: boolean }) {
  return (
    <span className="inline-flex" aria-hidden="true">
      <Image src={emblem} alt="" sizes={sizes} priority={priority} className={cn("brand-logo-dark w-auto", className)} />
      <Image src={emblemLight} alt="" sizes={sizes} priority={priority} className={cn("brand-logo-light w-auto", className)} />
    </span>
  );
}
