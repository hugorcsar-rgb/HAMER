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
const toRoman = (n) => {
  const map = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]
  let r = ''
  for (const [v, s] of map) { while (n >= v) { r += s; n -= v } }
  return r
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-accent/20 mt-24">
      <div className="px-[24px] md:px-[55px] py-14 grid gap-10 md:grid-cols-12">
        {/* Brand block */}
        <div className="md:col-span-6">
          <Link to="/" className="font-heading text-3xl tracking-wordmark text-foreground">
            {BRAND.wordmark}
            <span className="ml-3 font-data text-[10px] text-stone/70 tracking-[0.3em] uppercase align-middle">
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
      <div className="border-t border-accent/20">
        <div className="px-[24px] md:px-[55px] py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-data text-[11px] tracking-[0.3em] uppercase text-stone/60">
          <p>HAMER · Madrid · Global · {toRoman(year)}</p>
          <p className="flex items-center gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground transition-colors">{CONTACT_EMAIL}</a>
            <span className="text-stone/30">© {COPYRIGHT_OWNER}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
