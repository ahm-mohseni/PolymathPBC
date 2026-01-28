'use client'

import { useState } from 'react'

type Category = 'medical' | 'scientific' | 'applied'

const categoryData = {
  medical: {
    label: 'Medical Specialties',
    description: 'Clinical expertise across 17 medical disciplines for diagnostic support and treatment guidance.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    specialists: [
      'Anesthesiology',
      'Cardiology',
      'Dermatology',
      'Emergency Medicine',
      'Infectious Disease',
      'Neurology',
      'Ophthalmology',
      'Pathology',
      'Pediatrics',
      'Pharmacology',
      'Physiology',
      'Psychiatry',
      'Psychology',
      'Radiology',
      'Rehabilitation',
      'Surgery',
      'Veterinary',
    ],
  },
  scientific: {
    label: 'Scientific Research',
    description: 'Deep research capabilities spanning molecular biology to population-level epidemiology.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    specialists: [
      'Biochemistry',
      'Biostatistics',
      'Cell Biology',
      'Epidemiology',
      'Genetics',
      'Immunology',
      'Microbiology',
      'Molecular Biology',
      'Neuroscience',
      'Toxicology',
    ],
  },
  applied: {
    label: 'Applied Sciences',
    description: 'Practical healthcare applications from medical devices to health system optimization.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    specialists: [
      'Biomechanics',
      'Biomedical Engineering',
      'Clinical Informatics',
      'Health Economics',
      'Medical Devices',
      'Medical Imaging',
      'Nutrition Science',
      'Public Health',
      'Regulatory Affairs',
      'Sports Medicine',
      'Telemedicine',
    ],
  },
}

const categories: { id: Category; label: string; count: number }[] = [
  { id: 'medical', label: 'Medical', count: categoryData.medical.specialists.length },
  { id: 'scientific', label: 'Scientific', count: categoryData.scientific.specialists.length },
  { id: 'applied', label: 'Applied', count: categoryData.applied.specialists.length },
]

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>('medical')

  const current = categoryData[activeCategory]

  return (
    <section id="product" className="section-padding bg-subtle-gray">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-body text-small uppercase tracking-wider text-bronze mb-4 block">
            AI for the Clinic
          </span>
          <h2 className="font-heading text-h2 md:text-h1 text-charcoal mb-5">
            With a Complete Clinic OS
          </h2>
          <p className="font-body text-body text-muted-gray">
            Delivered with world-class security, data, models, &amp; agents.
          </p>
        </div>

        {/* Segmented control tabs - centered */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-border-gray bg-white p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-body text-small transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-charcoal text-off-white shadow-sm'
                    : 'text-muted-gray hover:text-charcoal'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bronze/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-light-amber/40 rounded-xl -z-10 blur-sm" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="font-heading text-h3 text-charcoal mb-3">
              {current.label}
            </h3>
            <p className="font-body text-body text-muted-gray mb-8">
              {current.description}
            </p>

            {/* Specialist pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {current.specialists.map((specialist) => (
                <span
                  key={specialist}
                  className="inline-block px-3 py-1.5 bg-white border border-border-gray rounded-full font-body text-small text-charcoal shadow-sm hover:shadow-md hover:border-bronze/40 transition-all duration-200 cursor-default"
                >
                  {specialist}
                </span>
              ))}
            </div>

            <p className="font-body text-small text-muted-gray">
              Plus <span className="text-bronze font-medium">Polymath 3.1</span> — General-purpose clinical reasoning
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
