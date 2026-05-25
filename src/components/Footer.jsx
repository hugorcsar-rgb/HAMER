import { Link } from 'react-router-dom'

// ─── BRAND — wordmark, subtitle, and tagline shown on the left ─────────────
const BRAND = {
  wordmark: "HAMER",
  subtitle: "Consulting Group",
  tagline:  "Three golfers. One mission. Built for the next generation.",
}

// ─── COLUMNS — three columns of links on the right ─────────────────────────
const COLUMNS = [
  {
    heading: "Programs",
    links: [
      { to: '/recruit', label: 'Recruit' },
      { to: '/consult', label: 'Consult' },
      { to: '/camps',   label: 'Camps'   },
    ],
  },
  {
    heading: "Group",
    links: [
      { to: '/founders', label: 'Founders' },
      { to: '/partners', label: 'Partners' },
      { to: '/inquire',  label: 'Inquire'  },
      { to: '/join-now', label: 'Join Now' },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: '/terms/recruit', label: 'Recruit Terms' },
      { to: '/terms/consult', label: 'Consult Terms' },
      { to: '/terms/camps',   label: 'Camps Terms'   },
      { to: '/privacy',       label: 'Privacy'       },
    ],
  },
]

// ─── BOTTOM BAR — copyright + contact ──────────────────────────────────────
const COPYRIGHT_OWNER = "HAMER Consulting Group"
const CONTACT_EMAIL   = "info@hamergolfconsulting.com"

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-foreground/10 mt-24">
      <div className="px-[24px] md:px-[55px] py-14 grid gap-10 md:grid-cols-12">
        {/* Brand block */}
        <div className="md:col-span-6">
          <Link to="/" className="font-heading text-3xl tracking-[0.04em] text-foreground">
            {BRAND.wordmark}
            <span className="ml-2 font-data text-[10px] text-foreground/50 tracking-widest uppercase align-middle">
              {BRAND.subtitle}
            </span>
          </Link>
          <p className="mt-5 max-w-md font-body text-foreground/70 leading-relaxed text-[15px]">
            {BRAND.tagline}
          </p>
        </div>

        {/* Three link columns */}
        {COLUMNS.map((col) => (
          <div key={col.heading} className="md:col-span-2">
            <p className="font-data text-[11px] tracking-[0.2em] text-foreground/40 uppercase mb-4">
              {col.heading}
            </p>
            <ul className="space-y-2 font-body text-[15px]">
              {col.links.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-foreground/80 hover:text-accent">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/10">
        <div className="px-[24px] md:px-[55px] py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-data text-[11px] tracking-[0.2em] uppercase text-foreground/40">
          <p>© {year} {COPYRIGHT_OWNER}. All rights reserved.</p>
          <p>{CONTACT_EMAIL}</p>
        </div>
      </div>
    </footer>
  )
}
