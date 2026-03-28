import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Over mij & werkwijze – True North",
  description:
    "Wie ik ben en hoe ik werk. True North helpt jonge professionals hun innerlijk kompas terug te vinden.",
};

function SectionPhoto({
  src,
  alt,
  objectPosition = "object-center",
  priority = false,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  priority?: boolean;
}) {
  /* 4:3 fits landscape photos with less aggressive crop than 4:5 — sharper perceived detail */
  return (
    <div className="relative aspect-[4/3] w-full max-w-xl mx-auto md:mx-0 overflow-hidden rounded-2xl border border-[color:color-mix(in_oklab,var(--color-calm-blue)_14%,transparent)] shadow-md bg-[color:color-mix(in_oklab,var(--color-calm-blue)_8%,var(--color-background))]">
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        className={`object-cover [image-rendering:auto] ${objectPosition}`}
        sizes="(max-width: 640px) 96vw, (max-width: 1024px) min(92vw, 36rem), 576px"
        priority={priority}
      />
    </div>
  );
}

export default function MijnFilosofiePage() {
  const container = "w-[92%] max-w-4xl mx-auto";
  const eyebrow =
    "text-[var(--color-warm-orange)] text-[0.72rem] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4";
  const h2 =
    "text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-[var(--color-primary-blue)] leading-[1.12] tracking-[-0.02em]";
  const body =
    "text-[clamp(1rem,1.35vw,1.125rem)] text-[color:color-mix(in_oklab,var(--color-foreground)_85%,transparent)] leading-relaxed";
  const bodySm =
    "text-[clamp(0.95rem,1.1vw,1.03rem)] text-[color:color-mix(in_oklab,var(--color-foreground)_78%,transparent)]";
  const dividerTop = "pt-10 md:pt-12";

  return (
    <>
      <main className="story51-canvas min-h-screen overflow-x-hidden text-[var(--color-foreground)]">
        {/* ── OVER MIJ (eerst) ── */}
        <section id="over-mij" className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className={container}>
            <p className={`${eyebrow} micro-underline inline-block`}>Over mij</p>
            <h2 className={`${h2} max-w-[20ch]`}>Wie ik ben</h2>

            <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12 md:items-start">
              <SectionPhoto
                src="/over-mij-bergen.png"
                alt="Ewout in de bergen, wijzend naar een gletsjer — avontuur en richting"
                objectPosition="object-[30%_center]"
                priority
              />

              <div className="space-y-5 min-w-0">
                <p className={body}>
                  Ik ben coach voor jonge professionals die op papier succesvol zijn, maar van binnen voelen dat er
                  iets niet klopt. Ik help ze van twijfel naar richting.
                </p>
                <p className={body}>
                  Mijn eigen zoektocht naar betekenisvol werk heeft me geleerd dat de antwoorden zelden van buiten
                  komen. Ze zitten al in je, maar je moet leren ernaar te luisteren.
                </p>
                <p className={body}>
                  Ik geloof dat ieder mens een innerlijk kompas heeft. Soms is het alleen moeilijk te horen, door
                  drukte, verwachtingen of oude patronen. Mijn werk is helpen dat kompas weer hoorbaar te maken.
                </p>
                <p className={bodySm}>
                  Placeholder voor aanvullende achtergrond, opleiding, ervaring en persoonlijke noot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WERKWIJZE (daarna) ── */}
        <section id="werkwijze" className="pb-14 md:pb-20">
          <div className={`${container} story51-divider ${dividerTop}`}>
            <p className={`${eyebrow} micro-underline inline-block`}>Werkwijze</p>
            <h2 className={`${h2} max-w-[18ch]`}>Hoe ik werk</h2>

            <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-12 md:items-start">
              <div className="space-y-5 min-w-0 md:order-1 order-2">
                <p className={body}>
                  In mijn sessies combineer ik coaching met praktische oefeningen. Geen standaard scripts of
                  invuloefeningen, maar echte gesprekken die ergens over gaan.
                </p>
                <p className={body}>
                  We verkennen samen wat je drijft, waar je tegenaan loopt, en wat je eigenlijk al weet maar misschien
                  niet durft te erkennen.
                </p>

                <div
                  className="rounded-2xl p-6 md:p-7 border border-[color:color-mix(in_oklab,var(--color-calm-blue)_14%,transparent)] mt-8"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in oklab, var(--calm-blue) 8%, white) 0%, color-mix(in oklab, var(--calm-blue) 4%, var(--background)) 100%)`,
                  }}
                >
                  <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--color-calm-blue)] uppercase mb-3">
                    Kernprincipes
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Eerlijkheid boven comfort",
                      "Richting boven zekerheid",
                      "Actie boven analyse",
                      "Verbinding boven prestatie",
                    ].map((p, i) => (
                      <li key={i} className={`flex gap-3 ${body}`}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-calm-blue)]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:order-2 order-1">
                <SectionPhoto
                  src="/filosofie-werkwijze.png"
                  alt="Ewout geeft een presentatie over werkwijze en inhoud"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-14 md:py-20">
          <div className={`${container} text-center`}>
            <h2 className={`${h2} max-w-[16ch] mx-auto`}>Klaar om te beginnen?</h2>
            <p className={`mt-4 max-w-[42ch] mx-auto ${bodySm}`}>
              Ontdek de True North cursus en vind jouw innerlijk kompas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/?v=5.2"
                className="micro-lift micro-soft-shadow inline-flex justify-center rounded-lg bg-[var(--color-warm-orange)] px-[1.55em] py-[0.9em] text-white font-medium hover:bg-[var(--color-soft-orange)] transition-colors duration-200 shadow-md shadow-[color:color-mix(in_oklab,var(--color-warm-orange)_25%,transparent)]"
              >
                Bekijk de cursus
              </Link>
              <a
                href="#"
                className="micro-lift inline-flex justify-center rounded-lg border-2 border-[var(--color-calm-blue)] px-[1.55em] py-[0.9em] text-[var(--color-primary-blue)] font-medium hover:bg-[color:color-mix(in_oklab,var(--color-calm-blue)_12%,transparent)] transition-colors duration-200"
              >
                Plan een kennismakingsgesprek
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
