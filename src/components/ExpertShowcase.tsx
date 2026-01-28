'use client'

import { useState } from 'react'

const expertCategories = {
  medical: {
    label: 'Medical Specialties',
    count: 17,
    experts: [
      'Anesthesiology', 'Cardiology', 'Dermatology', 'Emergency Medicine',
      'Infectious Disease', 'Neurology', 'Ophthalmology', 'Pathology',
      'Pediatrics', 'Pharmacology', 'Physiology', 'Psychiatry',
      'Psychology', 'Radiology', 'Rehabilitation', 'Surgery', 'Veterinary'
    ],
  },
  scientific: {
    label: 'Scientific Research',
    count: 10,
    experts: [
      'Biochemistry', 'Bioinformatics', 'Chemistry', 'Epidemiology',
      'Genetics', 'Immunology', 'Microbiology', 'Neuroscience',
      'Toxicology', 'Virology'
    ],
  },
  applied: {
    label: 'Applied Sciences',
    count: 11,
    experts: [
      'Data Science', 'Ecology', 'Education', 'Engineering',
      'Environment', 'Forensics', 'Healthcare', 'Material Science',
      'Nursing', 'Nutrition', 'Public Health'
    ],
  },
}

type CategoryKey = keyof typeof expertCategories

export default function ExpertShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('medical')

  return (
    <section id="product" className="section-padding bg-off-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-body text-small uppercase tracking-wider text-bronze mb-4 block">
            Polymath UHP
          </span>
          <h2 className="font-heading text-h2 text-charcoal mb-4">
            38 Specialists. One Conversation.
          </h2>
          <p className="font-body text-body text-muted-gray">
            Access specialist-level reasoning across medical, scientific, and applied domains—all in plain language.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(expertCategories) as CategoryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2.5 rounded-full font-body text-small transition-all duration-default ${
                activeCategory === key
                  ? 'bg-charcoal text-off-white'
                  : 'bg-subtle-gray text-muted-gray hover:bg-border-gray'
              }`}
            >
              {expertCategories[key].label} ({expertCategories[key].count})
            </button>
          ))}
        </div>

        {/* Expert Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {expertCategories[activeCategory].experts.map((expert, index) => (
            <div
              key={expert}
              className="card !p-4 text-center group cursor-default animate-fade-in-up"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-light-amber mx-auto mb-3 flex items-center justify-center group-hover:bg-bronze/20 transition-colors">
                <span className="font-heading text-lg text-bronze">
                  {expert.charAt(0)}
                </span>
              </div>
              <span className="font-body text-small text-charcoal">
                {expert}
              </span>
            </div>
          ))}
        </div>

        {/* Default Generalist Note */}
        <div className="mt-8 text-center">
          <p className="font-body text-small text-muted-gray">
            Plus <span className="text-bronze font-medium">Polymath 3.1</span> — General-purpose clinical reasoning for broad queries
          </p>
        </div>
      </div>
    </section>
  )
}
