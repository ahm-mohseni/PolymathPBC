'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

type DropdownKey = 'research' | 'safety' | 'contact' | 'getStarted'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (key: DropdownKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(key)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 300)
  }

  const navDropdowns = {
    research: {
      label: 'AI Research',
      items: [
        { href: '/research/publications', label: 'Publications', description: 'Academic papers and research' },
        { href: '/research/blog', label: 'Blog', description: 'Latest insights and updates' },
        { href: '/research/benchmarks', label: 'Benchmarks', description: 'Performance metrics' },
      ]
    },
    safety: {
      label: 'AI Safety',
      items: [
        { href: '/safety/ethics', label: 'Ethics', description: 'Our ethical AI principles' },
        { href: '/safety/privacy', label: 'Privacy', description: 'Data protection practices' },
        { href: '/safety/security', label: 'Security', description: 'Security protocols' },
      ]
    },
    contact: {
      label: 'Contact',
      items: [
        { href: '/contact/demo', label: 'Demo', description: 'Request a product demo' },
        { href: '/contact/careers', label: 'Careers', description: 'Join our team' },
        { href: '/contact/press', label: 'Press', description: 'Media inquiries' },
      ]
    },
  }

  const products = [
    { href: '/api', label: 'API Platform', description: 'Build with our healthcare AI APIs' },
    { href: '/primer', label: 'Primer 4.0', description: 'Advanced clinical language model' },
    { href: '/polymath', label: 'Polymath 3.1', description: 'General-purpose medical reasoning' },
  ]

  const NavDropdown = ({ dropdownKey, align = 'left' }: { dropdownKey: keyof typeof navDropdowns; align?: 'left' | 'right' }) => {
    const dropdown = navDropdowns[dropdownKey]
    const isOpen = openDropdown === dropdownKey

    return (
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter(dropdownKey)}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`inline-flex items-center gap-1 font-body text-sm tracking-wide transition-colors duration-300 ${
            scrolled
              ? 'text-muted-gray hover:text-charcoal'
              : 'text-off-white/70 hover:text-off-white'
          }`}
        >
          {dropdown.label}
          <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <div
          className={`absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} mt-3 w-56 rounded-2xl overflow-hidden transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div className="p-1.5">
            {dropdown.items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-3.5 py-2.5 rounded-xl transition-all duration-200 group/item hover:bg-black/[0.08] ${
                  index !== dropdown.items.length - 1 ? 'mb-0.5' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-charcoal text-[13px]">{item.label}</span>
                  <ArrowRight size={12} className="text-charcoal/40 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                </div>
                <div className="font-body text-[12px] text-charcoal/70 mt-0.5 leading-snug">{item.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

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
        <div className="hidden md:flex items-center gap-8">
          <NavDropdown dropdownKey="research" />

          <a
            href="/product"
            className={`font-body text-sm tracking-wide transition-colors duration-300 ${
              scrolled
                ? 'text-muted-gray hover:text-charcoal'
                : 'text-off-white/70 hover:text-off-white'
            }`}
          >
            Polymath UHP
          </a>

          <NavDropdown dropdownKey="safety" />
          <NavDropdown dropdownKey="contact" />

          {/* Get Started Popover */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('getStarted')}
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
              <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === 'getStarted' ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute top-full right-0 mt-3 w-64 rounded-2xl overflow-hidden transition-all duration-300 ${
                openDropdown === 'getStarted' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="p-1.5">
                {products.map((product, index) => (
                  <a
                    key={product.href}
                    href={product.href}
                    className={`block px-3.5 py-2.5 rounded-xl transition-all duration-200 group/item hover:bg-black/[0.08] ${
                      index !== products.length - 1 ? 'mb-0.5' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-body font-semibold text-charcoal text-[13px]">{product.label}</span>
                      <ArrowRight size={12} className="text-charcoal/40 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                    </div>
                    <div className="font-body text-[12px] text-charcoal/70 mt-0.5 leading-snug">{product.description}</div>
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
        className={`md:hidden absolute top-full left-0 right-0 bg-off-white border-b border-border-gray shadow-lg transition-all duration-300 max-h-[80vh] overflow-y-auto ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-1">
          {/* AI Research Section */}
          <div className="mb-3">
            <p className="font-body text-[11px] text-charcoal/50 uppercase tracking-wider font-medium mb-1.5 px-4">
              AI Research
            </p>
            {navDropdowns.research.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2.5 px-4 rounded-xl hover:bg-black/[0.05] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-body font-semibold text-charcoal text-[15px]">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Polymath UHP */}
          <a
            href="/product"
            className="font-body font-semibold text-charcoal text-[15px] py-2.5 px-4 rounded-xl hover:bg-black/[0.05] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Polymath UHP
          </a>

          {/* AI Safety Section */}
          <div className="mb-3 mt-4">
            <p className="font-body text-[11px] text-charcoal/50 uppercase tracking-wider font-medium mb-1.5 px-4">
              AI Safety
            </p>
            {navDropdowns.safety.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2.5 px-4 rounded-xl hover:bg-black/[0.05] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-body font-semibold text-charcoal text-[15px]">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mb-3 mt-4">
            <p className="font-body text-[11px] text-charcoal/50 uppercase tracking-wider font-medium mb-1.5 px-4">
              Contact
            </p>
            {navDropdowns.contact.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2.5 px-4 rounded-xl hover:bg-black/[0.05] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-body font-semibold text-charcoal text-[15px]">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Get Started Section */}
          <div className="pt-4 mt-3 border-t border-black/[0.08]">
            <p className="font-body text-[11px] text-charcoal/50 uppercase tracking-wider font-medium mb-2 px-4">
              Get Started
            </p>
            {products.map((product) => (
              <a
                key={product.href}
                href={product.href}
                className="block py-3 px-4 rounded-xl hover:bg-black/[0.05] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-body font-semibold text-charcoal text-[15px]">{product.label}</div>
                <div className="font-body text-[13px] text-charcoal/70 mt-0.5">{product.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
