'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Cpu, Sparkles, Brain, ArrowRight } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setPopoverOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setPopoverOpen(false)
    }, 300)
  }

  const navLinks = [
    { href: '/research', label: 'AI Research' },
    { href: '/product', label: 'Polymath UHP' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const products = [
    { href: '/api', label: 'API Platform', description: 'Build with our healthcare AI APIs', icon: Cpu },
    { href: '/primer', label: 'Primer 4.0', description: 'Advanced clinical language model', icon: Sparkles },
    { href: '/polymath', label: 'Polymath 3.1', description: 'General-purpose medical reasoning', icon: Brain },
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
          {/* Get Started Popover */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-charcoal text-off-white hover:bg-charcoal/90'
                  : 'bg-off-white/10 text-off-white border border-off-white/20 hover:bg-off-white/20'
              }`}
            >
              Get Started
              <ChevronDown size={14} className={`transition-transform duration-200 ${popoverOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Popover */}
            <div
              className={`absolute top-full right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-border-gray overflow-hidden transition-all duration-300 ${
                popoverOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}
            >
              {/* Arrow */}
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-border-gray rotate-45" />

              <div className="relative bg-white rounded-2xl p-2">
                {products.map((product) => (
                  <a
                    key={product.href}
                    href={product.href}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-subtle-gray transition-all duration-200 group/item"
                  >
                    <div className="w-10 h-10 rounded-lg bg-light-amber/50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-bronze/20 transition-colors">
                      <product.icon size={20} className="text-bronze" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-body font-semibold text-charcoal text-sm">{product.label}</span>
                        <ArrowRight size={12} className="text-muted-gray opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                      </div>
                      <div className="font-body text-small text-muted-gray mt-0.5">{product.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
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
            <p className="font-body text-small text-muted-gray uppercase tracking-wider mb-3 px-4">
              Get Started
            </p>
            {products.map((product) => (
              <a
                key={product.href}
                href={product.href}
                className="flex items-start gap-3 py-3 px-4 rounded-lg hover:bg-subtle-gray transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 rounded-lg bg-light-amber/50 flex items-center justify-center flex-shrink-0">
                  <product.icon size={20} className="text-bronze" />
                </div>
                <div>
                  <div className="font-body font-medium text-charcoal">{product.label}</div>
                  <div className="font-body text-small text-muted-gray">{product.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
