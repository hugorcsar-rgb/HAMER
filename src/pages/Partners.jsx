import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trustedPrograms } from '../data/packages.js';

const PARTNERS_HERO = 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=2400&q=80';
const PRIMARY_BTN = 'inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300';
const SECONDARY_BTN = 'inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300';

export default function Partners() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-end px-[24px] md:px-[89px] overflow-hidden pb-16">
        <div className="absolute inset-0 z-0">
          <img src={PARTNERS_HERO} alt="" className="w-full h-full object-cover hero-image-desaturated" style={{ objectPosition: 'center 75%' }} />
          <div className="absolute inset-0 armani-glow mix-blend-multiply" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-[1200px]">
          <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase mb-6">Partners</p>
          <h1 className="font-heading text-foreground leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            A NETWORK BUILT ON <span className="italic text-accent">RESULTS</span>.
          </h1>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Who we are</p>
          </div>
          <div className="md:col-span-8 font-heading text-foreground/90 leading-[1.45] space-y-6" style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.625rem)' }}>
            <p>We are former international students who played junior and elite amateur golf at the highest level our age and access allowed. We crossed borders for this sport before it crossed continents for us.</p>
            <p>That history matters because we have seen, from the inside, how this industry works — the firms that quote a price for an outcome they cannot promise, the advisors who have never been recruited themselves, and those who treat a family's once-in-a-lifetime decision like a transaction.</p>
            <p>HAMER exists because we know what good looks like in this work, and we know how rare it is. We are here to make an impact — quietly, with the standard of care we wish someone had brought to our own families when it was our turn.</p>
          </div>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">About the company</p>
            <h2 className="font-heading text-section leading-tight">An institutional <span className="italic text-accent">house of standards</span>.</h2>
          </div>
          <div className="md:col-span-8 font-body text-body text-foreground/85 leading-relaxed space-y-5">
            <p>The programs and institutions listed below have either partnered with HAMER on specific engagements or have served as proving grounds for the methodology that the firm applies today. They span private clubs, summer camps, and national programs across the U.S. and Mexico.</p>
            <p>HAMER continues to expand its partnership network with golf clubs, junior academies, and summer camps committed to professionalizing their programs. Partnership inquiries are welcome through the Inquire page.</p>
          </div>
        </div>
      </section>

      {/* TRUSTED PROGRAMS */}
      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center gap-12">
          <h2 className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase">Trusted Programs</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustedPrograms.map((name, i) => <p key={i} className="font-heading text-xl md:text-2xl text-foreground/80">{name}</p>)}
          </div>
        </div>
      </section>

      {/* BECOME A PARTNER */}
      <section id="become-a-partner" className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">Become a partner</p>
          <h2 className="font-heading text-section leading-tight mb-8 max-w-4xl">
            For coaches, academies, camps, and tournaments —<br />
            <span className="italic text-accent">we are open to the right relationships</span>.
          </h2>
          <p className="font-body text-body text-foreground/85 leading-relaxed max-w-3xl mb-10">
            Clubs, academies, and camps that share our standards are invited to explore long-term partnerships. If you operate a junior tournament, an academy, a camp, a coach education program, or a college pipeline — and you are building something built to endure — we would like to hear from you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/inquire?topic=partnership" className={PRIMARY_BTN}>Open a partnership conversation</Link>
            <a href="mailto:info@hamergolfconsulting.com?subject=Partnership%20inquiry" className={SECONDARY_BTN}>Email partnerships</a>
          </div>
        </div>
      </section>
    </>
  );
}
