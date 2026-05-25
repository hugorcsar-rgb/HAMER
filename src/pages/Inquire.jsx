import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../data/founders.js';

const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi HAMER, I'd like to start a conversation.")}`;
const PRIMARY_BTN = 'inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300';
const SECONDARY_BTN = 'inline-flex items-center px-6 py-3 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      const el = document.getElementById('inquire-email');
      if (el && window.getSelection) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  };
  return (
    <button onClick={handleCopy} className="ml-3 px-3 py-1.5 font-data text-[10px] font-bold tracking-[0.2em] uppercase border border-foreground/30 text-foreground/70 hover:border-accent hover:text-accent transition-colors">
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  );
}

export default function Inquire() {
  return (
    <>
      {/* Hero */}
      <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-12">
        <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">Inquire</p>
        <h1 className="font-heading text-foreground leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          A <span className="italic">FORMAL FIRST STEP</span>.
        </h1>
        <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px] mt-8" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>
          Where a single message becomes a structured engagement, not a transactional exchange.
        </p>
      </section>

      {/* Logo */}
      <section className="flex justify-center py-12">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="font-heading text-foreground tracking-[0.04em]" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>H</motion.div>
      </section>

      {/* Body */}
      <section className="px-[24px] md:px-[89px] pb-12 max-w-4xl mx-auto">
        <p className="font-body text-body text-foreground/85 leading-relaxed">
          Reaching out to HAMER is the beginning of a structured engagement, not a transactional exchange. Whether the inquiry concerns recruiting, year-round development, or a camp program, the response is the same: a personal acknowledgment, a discovery conversation, and a clear written proposal.
        </p>
      </section>

      {/* Direct channels */}
      <section className="px-[24px] md:px-[89px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Direct Channels</p>
          <p className="font-body text-foreground/70 mb-10 max-w-2xl">For those who prefer to skip the form, the firm's direct lines are open.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="p-8 md:p-10 border border-foreground/15 hover:border-accent transition-colors">
              <p className="font-data text-[11px] tracking-[0.25em] text-foreground/40 uppercase mb-3">Start via WhatsApp</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-5">The fastest reply.</h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-8">Send a message on WhatsApp and we'll respond within 24 hours. For initial fit conversations, scheduling, or quick questions.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN}>Start via WhatsApp →</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="p-8 md:p-10 border border-foreground/15 hover:border-accent transition-colors">
              <p className="font-data text-[11px] tracking-[0.25em] text-foreground/40 uppercase mb-3">Below — via formal inquiry</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-5">For a structured exchange.</h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-6">For partnerships, complex situations, or anything that needs attachments — write to us. Every email is read by a founder.</p>
              <div className="flex flex-wrap items-center mb-6">
                <a id="inquire-email" href={`mailto:${CONTACT.email}`} className="font-heading text-xl md:text-2xl text-accent hover:text-foreground underline-offset-4 hover:underline">{CONTACT.email}</a>
                <CopyEmailButton />
              </div>
              <a href={`mailto:${CONTACT.email}?subject=Inquiry%20-%20HAMER%20Golf%20Consulting`} className={SECONDARY_BTN}>Open the conversation →</a>
              <p className="font-data text-[11px] tracking-[0.15em] text-foreground/40 uppercase mt-5">Response within 24 hours →</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">What Happens Next</p>
          <h2 className="font-heading text-section leading-tight max-w-3xl">A consistent three-step process, applied to every inquiry — regardless of division or scope.</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { n: '01', title: 'Personal acknowledgment', desc: 'A founder reads your message and replies within 24 hours — never an autoresponder.' },
              { n: '02', title: 'Discovery conversation', desc: 'A scheduled call (WhatsApp, video, or in-person) to understand the goal, the player, and the timeline.' },
              { n: '03', title: 'Written proposal', desc: 'A clear written proposal — scope, timeline, fees, deliverables — so you decide on your terms.' },
            ].map((step) => (
              <div key={step.n} className="border-l border-accent/40 pl-6">
                <p className="font-data text-data tracking-[0.25em] text-accent uppercase mb-3">{step.n}</p>
                <h3 className="font-heading text-2xl mb-3">{step.title}</h3>
                <p className="font-body text-foreground/75 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
