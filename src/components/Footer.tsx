import { Mail, MapPin } from 'lucide-react'

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '/product' },
      { label: 'Experts', href: '/product/experts' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  research: {
    title: 'Research',
    links: [
      { label: 'Publications', href: '/research' },
      { label: 'Clinical Studies', href: '/research/studies' },
      { label: 'Methodology', href: '/research/methodology' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Press', href: '/press' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'HIPAA Compliance', href: '/hipaa' },
      { label: 'Security', href: '/security' },
    ],
  },
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-off-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-baseline gap-1 mb-4">
              <span className="font-heading italic font-normal text-2xl tracking-tight text-off-white">
                Polymath
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-muted-gray">
                PBC
              </span>
            </a>
            <p className="font-body text-small text-off-white/60 mb-6 max-w-xs">
              Advancing healthcare through AI research. 38 domain-specific reasoning engines for clinical decision-making.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@polymath.ai" className="flex items-center gap-2 text-small text-off-white/60 hover:text-bronze transition-colors">
                <Mail size={14} />
                contact@polymath.ai
              </a>
              <div className="flex items-center gap-2 text-small text-off-white/60">
                <MapPin size={14} />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-body font-semibold text-off-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-small text-off-white/60 hover:text-bronze transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-off-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-small text-off-white/40">
            &copy; {new Date().getFullYear()} Polymath PBC. All rights reserved.
          </p>
          <p className="font-body text-small text-off-white/40">
            A Public Benefit Corporation
          </p>
        </div>
      </div>
    </footer>
  )
}
