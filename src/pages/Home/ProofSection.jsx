// =============================================================================
// HOME — Proof section ("How it works" + Results + Testimonials)
// =============================================================================

const NUMBER = "03";
const HEADING = "How it works";

const STEPS = [
  {
    n: "01",
    title: "Assess",
    desc: "A candid evaluation of your level, academics and timeline. We tell you which divisions are realistic — honestly, even when the answer isn't the one you hoped for.",
  },
  {
    n: "02",
    title: "Build the campaign",
    desc: "Athlete profile, target list and outreach — every message tailored to the specific coach. The architecture that makes coaches respond.",
  },
  {
    n: "03",
    title: "Get placed",
    desc: "We run it end to end, from the first email to the signed offer. You focus on the scorecard; we handle everything else.",
  },
];

const STATS = [
  { value: "30+", label: "Junior golfers placed" },
  { value: "20+", label: "NCAA programs" },
  { value: "4",   label: "Countries" },
];

const TESTIMONIALS = [
  {
    quote: "HAMER helped me find tournaments outside Querétaro — in Texas and Florida — so I could keep competing and chase a Division I spot.",
    author: "— Manuel Contreras · Querétaro, Mexico",
  },
  {
    quote: "They showed me exactly what I needed to improve and which tournaments to play. Their experience and guidance helped me set much better goals for my game.",
    author: "— Jerónimo V · San Diego, USA",
  },
  {
    quote: "As a mother, their mentorship gave me real peace of mind — knowing we were talking with people who have lived the entire experience themselves.",
    author: "— Maite Sánchez Aedo · Parent Spain",
  },
  {
    quote: "HAMER guided me to the right tournaments across Latin America, and even set up a club fitting for me while I was in New York. That kind of advice has made a real difference in my game.",
    author: "— Pablo Giménez · Barranquilla, Colombia",
  },
];

const IMAGE = "/images/proof-swing.jpg";

export default function ProofSection() {
  return (
    <section className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">

        {/* How it works */}
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">
            {NUMBER}
          </p>
          <h2 className="font-heading text-section text-foreground leading-tight mb-12">
            {HEADING}
          </h2>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 flex flex-col gap-8">
              {STEPS.map((s) => (
                <div key={s.n} className="border-l border-accent/40 pl-6">
                  <p className="font-data text-data tracking-[0.25em] text-accent uppercase mb-2">
                    {s.n}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl mb-2">{s.title}</h3>
                  <p className="font-body text-body text-foreground/75 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="md:col-span-5">
              <img
                src={IMAGE}
                alt="A golf hole on the course"
                className="w-full h-full object-cover hero-image-desaturated"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <hr className="gold-rule" />

        {/* Results */}
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-10">
            Results
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {STATS.map((st, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="font-heading text-foreground leading-none" style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}>
                  {st.value}
                </p>
                <p className="font-data text-[11px] tracking-[0.25em] text-foreground/50 uppercase mt-3">
                  {st.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 md:p-10 border border-foreground/15">
                <p className="font-heading italic text-foreground/90 leading-[1.5]" style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-data text-[11px] tracking-[0.25em] text-accent uppercase mt-6">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
