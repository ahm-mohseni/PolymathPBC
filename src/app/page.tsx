import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ResearchHighlights from '@/components/ResearchHighlights'
import ClinicalValidation from '@/components/ClinicalValidation'
import ExpertShowcase from '@/components/ExpertShowcase'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ResearchHighlights />
        <ClinicalValidation />
        <ExpertShowcase />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
