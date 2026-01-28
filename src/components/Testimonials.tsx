import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Polymath has transformed how I approach differential diagnosis. Having access to 38 specialists in one conversation means I can explore complex cases more thoroughly than ever before.",
    author: "Dr. Sarah Chen",
    role: "Internal Medicine",
    institution: "Academic Medical Center",
  },
  {
    quote: "The clinical reasoning is remarkably accurate. It's not just providing information—it's thinking through cases the way a specialist would, with evidence-based recommendations.",
    author: "Dr. Michael Torres",
    role: "Emergency Medicine",
    institution: "Level I Trauma Center",
  },
  {
    quote: "As a researcher, I appreciate the depth of the PubMed integration. It surfaces relevant literature I might have missed and helps validate clinical hypotheses.",
    author: "Dr. Emily Nakamura",
    role: "Clinical Research Director",
    institution: "Research Hospital",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-subtle-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-body text-small uppercase tracking-wider text-bronze mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-h2 text-charcoal mb-4">
            Trusted by Clinicians
          </h2>
          <p className="font-body text-body text-muted-gray">
            Hear from healthcare professionals who use Polymath UHP in their practice.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.author}
              className="card relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-1">
                <Quote size={32} className="text-bronze/20 fill-bronze/20" />
              </div>

              <blockquote className="font-body text-body text-charcoal mb-6 relative z-10">
                "{item.quote}"
              </blockquote>

              <div className="pt-4 border-t border-border-gray">
                <div className="font-body font-semibold text-charcoal">
                  {item.author}
                </div>
                <div className="font-body text-small text-muted-gray">
                  {item.role}
                </div>
                <div className="font-body text-small text-bronze">
                  {item.institution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
