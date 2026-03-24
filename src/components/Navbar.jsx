import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'קצת עלי' },
  { href: '#services', label: 'שירותים' },
  { href: '#gallery', label: 'גלריה' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#contact', label: 'צור קשר' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-inline-start-0 inset-inline-end-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep-black/90 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      {/* Desktop */}
      <div
        className={`hidden md:flex w-full px-12 lg:px-20 items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-24'
        }`}
      >
        <a href="#hero" className="block shrink-0 hover:opacity-70 transition-opacity duration-300">
          <img
            src="/photos/hila-logo.png"
            alt="הילה"
            className={`h-auto transition-all duration-500 ${scrolled ? 'w-[120px]' : 'w-[170px]'}`}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        <ul className="flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-light text-off-white/75 hover:text-off-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:inset-inline-end-0 after:w-0 after:h-[1px] after:bg-warm-brown after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between px-5 py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 text-off-white z-[60]"
          aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isOpen}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 17h16" />
            )}
          </svg>
        </button>

        <a href="#hero" className="block hover:opacity-70 transition-opacity z-[60]">
          <img
            src="/photos/hila-logo.png"
            alt="הילה"
            className="w-[120px] h-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-deep-black/98 backdrop-blur-xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                isOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl font-light text-off-white/85 hover:text-warm-brown transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
