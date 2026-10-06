import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { img, site } from "@/data/site";

export function ContactView() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={["Let's Talk"]}
        sub="Questions, big tables, event plans — we're listening."
        image={img.friendsTable}
        imageAlt="Friends laughing together over drinks at a table"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24" aria-label="Contact details and form">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <ContactInfo />
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <iframe
              title={`Map to ${site.fullName}`}
              src={site.mapEmbedUrl}
              className="map-dark h-[380px] w-full border border-line"
              loading="lazy"
              data-testid="contact-map"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
