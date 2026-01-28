'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/research', label: 'Research' },
    { href: '/product', label: 'Product' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-off-white/95 backdrop-blur-sm border-b border-border-gray">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-1">
          <span className="font-heading italic font-normal text-2xl md:text-3xl tracking-tight text-charcoal">
            Polymath
          </span>
          <span className="font-body text-xs uppercase tracking-wider text-muted-gray">
            PBC
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-muted-gray hover:text-charcoal transition-colors duration-fast"
            >
              {link.label}
            </a>
          ))}
          <a href="/request-access" className="btn-primary">
            Request Access
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-off-white border-b border-border-gray shadow-lg">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-lg text-muted-gray hover:text-charcoal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="/request-access" className="btn-primary text-center mt-2">
              Request Access
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
