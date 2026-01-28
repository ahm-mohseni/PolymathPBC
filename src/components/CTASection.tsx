import { ArrowRight, Building2, User } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="access" className="section-padding bg-gradient-to-b from-charcoal via-warm-stone to-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-dark/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-dark/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-h2 md:text-h1 text-off-white mb-4">
            Ready to Transform Clinical Decision-Making?
          </h2>
          <p className="font-body text-large text-off-white/80">
            Join leading healthcare professionals and institutions using Polymath UHP.
          </p>
        </div>

        {/* Dual CTAs */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* For Clinicians */}
          <div className="bg-off-white/5 border border-off-white/10 rounded-card-lg p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-bronze/20 flex items-center justify-center mb-6">
              <User size={24} className="text-bronze" />
            </div>
            <h3 className="font-heading text-h3 text-off-white mb-3">
              For Clinicians
            </h3>
            <p className="font-body text-body text-off-white/70 mb-6">
              Request individual access to Polymath UHP and experience specialist-level reasoning at your fingertips.
            </p>
            <a
              href="/request-access"
              className="btn-primary w-full inline-flex items-center justify-center gap-2 group"
            >
              Request Access
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* For Organizations */}
          <div className="bg-off-white/5 border border-off-white/10 rounded-card-lg p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-bronze/20 flex items-center justify-center mb-6">
              <Building2 size={24} className="text-bronze" />
            </div>
            <h3 className="font-heading text-h3 text-off-white mb-3">
              For Organizations
            </h3>
            <p className="font-body text-body text-off-white/70 mb-6">
              Partner with us to bring Polymath UHP to your healthcare system, clinic, or research institution.
            </p>
            <a
              href="/partners"
              className="btn-secondary !border-off-white/30 !text-off-white hover:!bg-off-white/10 w-full inline-flex items-center justify-center gap-2"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
