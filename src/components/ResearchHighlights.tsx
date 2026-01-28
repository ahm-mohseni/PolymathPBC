import { BookOpen, Brain, Shield } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Clinical Reasoning',
    description: 'Our research focuses on building AI systems that mirror expert clinical reasoning, validated against peer-reviewed diagnostic standards.',
    metric: '12+',
    metricLabel: 'Publications',
  },
  {
    icon: BookOpen,
    title: 'Evidence-Based',
    description: 'Every recommendation is grounded in current medical literature, with direct citations to PubMed and treatment guidelines.',
    metric: '50M+',
    metricLabel: 'Citations Indexed',
  },
  {
    icon: Shield,
    title: 'Safety-First Design',
    description: 'Chain of verification and write-operation confirmation systems ensure clinical accuracy at every step.',
    metric: '99.9%',
    metricLabel: 'Safety Score',
  },
]

export default function ResearchHighlights() {
  return (
    <section id="research" className="section-padding bg-off-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-small uppercase tracking-wider text-bronze mb-4 block">
            Our Research
          </span>
          <h2 className="font-heading text-h2 text-charcoal mb-4">
            Built on Rigorous Science
          </h2>
          <p className="font-body text-body text-muted-gray">
            We advance healthcare AI through peer-reviewed research, clinical validation, and continuous improvement based on real-world outcomes.
          </p>
        </div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="card group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-card bg-light-amber flex items-center justify-center mb-6 group-hover:bg-bronze/10 transition-colors">
                <item.icon size={24} className="text-bronze" />
              </div>
              <h3 className="font-heading text-h3 text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="font-body text-body text-muted-gray mb-6">
                {item.description}
              </p>
              <div className="pt-4 border-t border-border-gray">
                <div className="font-heading text-2xl text-bronze">{item.metric}</div>
                <div className="font-body text-small text-muted-gray">{item.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
