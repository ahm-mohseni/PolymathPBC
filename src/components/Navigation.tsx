'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/research', label: 'AI Research' },
    { href: '/product', label: 'Polymath UHP' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'h-16 bg-off-white/95 backdrop-blur-md shadow-sm'
          : 'h-20 bg-transparent'
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-1.5 group">
          <span className={`font-heading italic font-normal text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-charcoal' : 'text-off-white'
          }`}>
            Polymath
          </span>
          <span className={`font-body text-[10px] uppercase tracking-widest transition-colors duration-300 ${
            scrolled ? 'text-muted-gray' : 'text-off-white/60'
          }`}>
            PBC
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-body text-sm tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? 'text-muted-gray hover:text-charcoal after:bg-charcoal'
                  : 'text-off-white/70 hover:text-off-white after:bg-off-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/request-access"
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              scrolled
                ? 'bg-charcoal text-off-white hover:bg-charcoal/90'
                : 'bg-off-white/10 text-off-white border border-off-white/20 hover:bg-off-white/20'
            }`}
          >
            Request Access
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-charcoal hover:bg-subtle-gray' : 'text-off-white hover:bg-off-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-off-white/98 backdrop-blur-md border-b border-border-gray shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-lg text-charcoal py-3 px-4 rounded-lg hover:bg-subtle-gray transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-border-gray">
            <a
              href="/request-access"
              className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              Request Access
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
