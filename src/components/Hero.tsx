import { ArrowRight, FlaskConical } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-charcoal via-warm-stone to-charcoal overflow-hidden">
      {/* Decorative amber blur */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-dark/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-amber-dark/15 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-light-amber/10 border border-bronze/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <FlaskConical size={16} className="text-bronze" />
              <span className="font-body text-small text-light-amber">
                Research-First Healthcare AI
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-hero text-off-white mb-6 animate-slide-up">
              Advancing Healthcare Through AI Research
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-large text-off-white/80 mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <span className="text-bronze">38 domain-specific reasoning engines</span> built for clinical decision-making—from differential diagnosis to treatment protocols.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <a href="/request-access" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Request Access
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/research" className="btn-secondary !border-off-white/30 !text-off-white hover:!bg-off-white/10">
                Read Our Research
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-off-white/10 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div>
                <div className="font-heading text-3xl md:text-4xl text-bronze">38</div>
                <div className="font-body text-small text-off-white/60">Specialized Experts</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl text-bronze">97.2%</div>
                <div className="font-body text-small text-off-white/60">Diagnostic Accuracy</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl text-bronze">4</div>
                <div className="font-body text-small text-off-white/60">Reasoning Modes</div>
              </div>
            </div>
          </div>

          {/* Right column - empty */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
