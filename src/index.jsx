// =============================================================================
// HOME PAGE — composer
// =============================================================================
// This file does ONE THING: it lists the sections that appear on the home page,
// in the order they appear.
//
//   - To REORDER sections, change the order of the lines inside <Home />.
//   - To REMOVE a section, delete its <SectionName /> line AND its import line.
//   - To ADD a new section, create the file, add an import, add it inside <Home />.
//
// To edit the TEXT inside any section, open that section's own file in this folder.
// =============================================================================

import HeroSection           from './HeroSection.jsx'
import StandardSection       from './StandardSection.jsx'
import FoundersTeaserSection from './FoundersTeaserSection.jsx'
import TrustedSection        from './TrustedSection.jsx'
import CTASection            from './CTASection.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StandardSection />
      <FoundersTeaserSection />
      <TrustedSection />
      <CTASection />
    </>
  )
}
