import { founders } from '../data/founders.js';
import { motion } from 'framer-motion';

const cvLabels = {
  education: 'Education',
  athletics: 'Athletics',
  honors: 'Honors',
  career: 'Career',
  languages: 'Languages',
};
const cvOrder = ['education', 'athletics', 'honors', 'career', 'languages'];

function FounderCard({ founder: n, delay = 0 }) {
  const waLink = n.whatsapp
    ? `https://wa.me/${n.whatsapp.replace(/\D/g, '')}`
    : null;

  const cvBlocks = n.cv
    ? cvOrder
        .filter((key) => Array.isArray(n.cv[key]) && n.cv[key].length > 0)
        .map((key) => ({ key, label: cvLabels[key], items: n.cv[key] }))
    : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      className="grid md:grid-cols-12 gap-10 md:gap-16 pb-20 md:pb-28 mb-20 md:mb-28 border-b border-foreground/10 last:border-b-0 last:pb-0 last:mb-0"
    >
      <div className="md:col-span-5">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={n.image}
            alt={n.name}
            className="w-full h-full object-cover hero-image-desaturated"
          />
        </div>
        <p className="font-data text-[11px] tracking-[0.25em] text-foreground/40 uppercase mt-6">
          {n.title}
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 leading-tight">
          {n.name}
        </h2>
        <p className="font-heading text-foreground/70 italic text-lg md:text-xl mt-3 leading-snug">
          {n.shortBio}
        </p>
      </div>

      <div className="md:col-span-7">
        <p className="font-body text-body text-foreground/85 leading-relaxed">
          {n.bio}
        </p>

        {cvBlocks.length > 0 && (
          <div className="mt-12">
            <p className="font-data text-[11px] tracking-[0.25em] text-foreground/40 uppercase border-b border-foreground/10 pb-2 mb-6">
              Curriculum Vitae
            </p>
            <div className="space-y-6">
              {cvBlocks.map(({ key, label, items }) => (
                <div key={key}>
                  <p className="font-data text-[10px] tracking-[0.25em] text-foreground/40 uppercase mb-2">
                    {label}
                  </p>
                  <ul className="space-y-1">
                    {items.map((item, i) => (
                      <li key={i} className="font-body text-foreground/80 leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {n.expertise && n.expertise.length > 0 && (
          <div className="mt-10">
            <p className="font-data text-[11px] tracking-[0.25em] text-foreground/40 uppercase border-b border-foreground/10 pb-2 mb-6">
              Areas of Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {n.expertise.map((e, i) => (
                <span key={i} className="px-3 py-1.5 border border-foreground/20 font-data text-[11px] tracking-[0.1em] uppercase text-foreground/80">
                  {e}
                </span>
              ))}
            </div>
          </div>
        )}

        {n.philosophy && (
          <div className="mt-10">
            <p className="font-data text-[11px] tracking-[0.25em] text-foreground/40 uppercase border-b border-foreground/10 pb-2 mb-6">
              Philosophy
            </p>
            <p className="font-body text-body text-foreground/80 italic leading-relaxed">
              "{n.philosophy}"
            </p>
          </div>
        )}

        <div className="mt-10 pt-8 flex flex-wrap gap-6 items-center border-t border-foreground/10">
          
            href={`mailto:${n.email}`}
            className="font-data text-[12px] tracking-[0.15em] uppercase text-foreground/80 hover:text-accent transition-colors"
          >
            {n.email}
          </a>
          {n.phones && n.phones.map((phone, i) => (
            waLink ? (
              
                key={i}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-data text-[12px] tracking-[0.15em] uppercase text-foreground/80 hover:text-accent transition-colors"
              >
                WhatsApp · {phone}
              </a>
            ) : (
              <span key={i} className="font-data text-[12px] tracking-[0.15em] uppercase text-foreground/80">
                {phone}
              </span>
            )
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Founders() {
  return (
    <>
      <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-16">
        <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">
          The Founders
        </p>
        <h1 className="font-heading text-foreground leading-none" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
          The architects of <span className="italic">HAMER</span>.
        </h1>
        <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px] mt-8" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>
          Three former Division One athletes. Three international students.
          Three founders who lived the path before anyone showed them the map.
        </p>
      </section>

      <section className="px-[24px] md:px-[89px] py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          {founders.map((f, i) => (
            <FounderCard key={f.name} founder={f} delay={i * 0.15} />
          ))}
        </div>
      </section>
    </>
  );
}
