import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel" data-testid="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo className="h-16" sizes="200px" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
            {site.tagline} {site.slogan} — proudly supporting St. Louis sports.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: SiFacebook, label: "Facebook", href: site.socials.facebook, id: "social-facebook" },
              { Icon: SiInstagram, label: "Instagram", href: site.socials.instagram, id: "social-instagram" },
              { Icon: SiTiktok, label: "TikTok", href: site.socials.tiktok, id: "social-tiktok" },
            ].map(({ Icon, label, href, id }) => (
              <a
                key={id}
                href={href}
                data-testid={id}
                aria-label={`${site.name} on ${label}`}
                className="flex h-10 w-10 items-center justify-center border border-line text-fog transition-colors hover:border-ember hover:text-ember"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  href={l.to}
                  data-testid={`footer-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-bone/80 transition-colors hover:text-ember"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/order-now" data-testid="footer-nav-order-now" className="text-sm text-bone/80 transition-colors hover:text-ember">
                Order Now
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-bone/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li>
              <a href={site.phoneTel} data-testid="footer-phone-link" className="flex items-center gap-3 transition-colors hover:text-ember">
                <Phone className="h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                <span className="font-mono">{site.phoneDisplay}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
            Hours
          </h3>
          <ul className="mt-5 space-y-3">
            {site.hours.map((h) => (
              <li key={h.days} className="flex flex-col text-sm">
                <span className="text-bone/80">{h.days}</span>
                <span className="font-mono text-xs text-fog">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-fog sm:px-8">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
        </div>
      </div>
    </footer>
  );
}
