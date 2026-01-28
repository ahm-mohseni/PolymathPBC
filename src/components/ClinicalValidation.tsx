import { CheckCircle, FileText, Award } from 'lucide-react'

const validations = [
  {
    icon: FileText,
    title: 'Peer-Reviewed Research',
    description: 'Our methodologies are published in leading medical informatics journals and undergo rigorous peer review.',
  },
  {
    icon: CheckCircle,
    title: 'Clinical Benchmarks',
    description: 'Validated against established diagnostic criteria and treatment protocols across 38 medical domains.',
  },
  {
    icon: Award,
    title: 'Institutional Partners',
    description: 'Developed in collaboration with academic medical centers and healthcare research institutions.',
  },
]

const metrics = [
  { value: '97.2%', label: 'Diagnostic accuracy in controlled studies' },
  { value: '38', label: 'Domain-specific reasoning engines' },
  { value: '4', label: 'Distinct reasoning modes' },
  { value: '10', label: 'Clinical documentation tools' },
]

export default function ClinicalValidation() {
  return (
    <section className="section-padding bg-subtle-gray">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-body text-small uppercase tracking-wider text-bronze mb-4 block">
              Clinical Validation
            </span>
            <h2 className="font-heading text-h2 text-charcoal mb-6">
              Evidence-Based, Clinically Validated
            </h2>
            <p className="font-body text-body text-muted-gray mb-8">
              Every aspect of Polymath UHP is grounded in clinical research. Our reasoning engines are continuously validated against established medical standards and real-world outcomes.
            </p>

            <div className="space-y-6">
              {validations.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-light-amber flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-bronze" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-small text-muted-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-heading text-3xl md:text-4xl text-bronze mb-2">
                  {metric.value}
                </div>
                <div className="font-body text-small text-muted-gray">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos Placeholder */}
        <div className="mt-16 pt-12 border-t border-border-gray">
          <p className="font-body text-small text-center text-muted-gray mb-8">
            Trusted by leading healthcare institutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-12 bg-border-gray rounded-lg flex items-center justify-center"
              >
                <span className="font-body text-small text-muted-gray">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
