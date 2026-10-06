import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { site } from "@/data/site";

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-8 border border-line bg-panel p-7 lg:p-9" data-testid="contact-info">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
          <div>
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fog">Address</h2>
            <p className="mt-1 text-bone">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
          <div>
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fog">Phone</h2>
            <a href={site.phoneTel} data-testid="contact-phone-link" className="mt-1 block font-mono text-lg font-semibold text-bone transition-colors hover:text-ember">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
          <div>
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fog">Opening Hours</h2>
            <ul className="mt-1 space-y-1 text-sm text-bone/85">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days} <span className="whitespace-nowrap font-mono text-xs text-fog">· {h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-4">
        <a
          href={site.phoneTel}
          data-testid="contact-call-button"
          className="inline-flex min-h-12 items-center gap-2 bg-copper px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-copper-deep"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Restaurant
        </a>
        <a
          href={site.directionsUrl}
          target="_blank"
          rel="noreferrer"
          data-testid="contact-directions-button"
          className="inline-flex min-h-12 items-center gap-2 border border-bone/30 px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-ember hover:text-ember"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Get Directions
        </a>
      </div>
      <div className="flex gap-3 border-t border-line pt-6">
        {[
          { Icon: SiFacebook, label: "Facebook", href: site.socials.facebook, id: "contact-social-facebook" },
          { Icon: SiInstagram, label: "Instagram", href: site.socials.instagram, id: "contact-social-instagram" },
          { Icon: SiTiktok, label: "TikTok", href: site.socials.tiktok, id: "contact-social-tiktok" },
        ].map(({ Icon, label, href, id }) => (
          <a key={id} href={href} data-testid={id} aria-label={`${site.name} on ${label}`} className="flex h-10 w-10 items-center justify-center border border-line text-fog transition-colors hover:border-ember hover:text-ember">
            <Icon size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
