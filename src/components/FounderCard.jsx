// src/components/FounderCard.jsx
// Reusable card component for displaying a single founder profile.
// Takes `founder` (object from src/data/founders.js) and `index` (number) as props.

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function FounderCard({ founder, index = 0 }) {
  // Alternating layout: even index = photo left, odd = photo right
  const isReversed = index % 2 === 1;
  const displayNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      id={founder.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="border-t border-border premium-spacing"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start ${
          isReversed ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Photo column */}
        <div className="relative overflow-hidden">
          <img
            src={founder.photo}
            alt={founder.name}
            loading="lazy"
            className="w-full h-auto object-cover hero-image-desaturated mahogany-transition"
          />
        </div>

        {/* Content column */}
        <div className="space-y-8">
          {/* Index number */}
          <div className="font-data text-sm tracking-widest text-foreground/50">
            {displayNumber}
          </div>

          {/* Name + role */}
          <div className="space-y-2">
            <h2 className="text-section font-heading">{founder.name}</h2>
            {founder.role && (
              <p className="font-data text-sm tracking-widest text-foreground/60 uppercase">
                {founder.role}
              </p>
            )}
          </div>

          {/* Pull quote */}
          {founder.pullQuote && (
            <blockquote className="border-l-2 border-accent pl-6 italic font-heading text-2xl text-foreground/90">
              {founder.pullQuote}
            </blockquote>
          )}

          {/* Bio */}
          {founder.bio && (
            <p className="font-body text-body text-foreground/80 leading-relaxed">
              {founder.bio}
            </p>
          )}

          {/* Education */}
          {founder.education?.length > 0 && (
            <Detail title="Education">
              <ul className="space-y-3">
                {founder.education.map((e, i) => (
                  <li key={i} className="font-body">
                    <span className="font-heading text-base block">{e.school}</span>
                    <span className="text-sm text-foreground/60">
                      {e.degree}
                      {e.years && ` · ${e.years}`}
                    </span>
                  </li>
                ))}
              </ul>
            </Detail>
          )}

          {/* Career */}
          {founder.career?.length > 0 && (
            <Detail title="Career">
              <ul className="space-y-3">
                {founder.career.map((c, i) => (
                  <li key={i} className="font-body">
                    <span className="font-heading text-base block">{c.role}</span>
                    <span className="text-sm text-foreground/60">
                      {c.org}
                      {c.years && ` · ${c.years}`}
                    </span>
                  </li>
                ))}
              </ul>
            </Detail>
          )}

          {/* Expertise */}
          {founder.expertise?.length > 0 && (
            <Detail title="Expertise">
              <div className="flex flex-wrap gap-2">
                {founder.expertise.map((e, i) => (
                  <span
                    key={i}
                    className="font-data text-xs tracking-wider px-3 py-1 border border-border text-foreground/70 uppercase"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </Detail>
          )}

          {/* Languages */}
          {founder.languages?.length > 0 && (
            <Detail title="Languages">
              <p className="font-data text-sm tracking-wider text-foreground/70">
                {founder.languages.join(' · ')}
              </p>
            </Detail>
          )}

          {/* Honors */}
          {founder.honors?.length > 0 && (
            <Detail title="Honors">
              <ul className="space-y-2">
                {founder.honors.map((h, i) => (
                  <li key={i} className="font-body text-sm text-foreground/70">
                    {h}
                  </li>
                ))}
              </ul>
            </Detail>
          )}

          {/* Contact */}
          {(founder.email || founder.phone) && (
            <div className="pt-6 border-t border-border space-y-2">
              {founder.email && (
                
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-3 font-data text-sm text-foreground/70 hover:text-accent mahogany-transition"
                >
                  <Mail className="w-4 h-4" />
                  {founder.email}
                </a>
              )}
              {founder.phone && !founder.phone.startsWith('[') && (
                
                  href={`tel:${founder.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 font-data text-sm text-foreground/70 hover:text-accent mahogany-transition"
                >
                  <Phone className="w-4 h-4" />
                  {founder.phone}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// Internal helper: small labeled section
function Detail({ title, children }) {
  return (
    <div className="space-y-3">
      <h3 className="font-data text-xs tracking-widest text-foreground/50 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
