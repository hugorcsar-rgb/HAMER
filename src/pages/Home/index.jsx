// =============================================================================
// HOME PAGE — composer
// =============================================================================
// Lists the sections of the home page, in the order they appear.
//
// Note on naming: in the original project the files got cross-named, so the
// "01 — Three Programs" section actually lives in FoundersTeaserSection.jsx,
// and the "02 — The Founders" section lives in StandardSection.jsx. The aliases
// below make the render order read correctly without renaming the files.
// =============================================================================

import HeroSection          from './HeroSection.jsx'
import ThreeProgramsSection from './FoundersTeaserSection.jsx' // "01 — Three Programs"
import FoundersSection      from './StandardSection.jsx'        // "02 — The Founders"
import TrustedSection       from './TrustedSection.jsx'
import CTASection           from './CTASection.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThreeProgramsSection />
      <FoundersSection />
      <TrustedSection />
      <CTASection />
    </>
  )
}
