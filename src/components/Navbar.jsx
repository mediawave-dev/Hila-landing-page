import { useState, useEffect, useRef, useCallback } from 'react'

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
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Focus trap inside mobile menu
  const handleMenuKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      toggleRef.current?.focus()
      return
    }
    if (e.key !== 'Tab' || !menuRef.current) return
    const focusable = menuRef.current.querySelectorAll('a, button')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-inline-start-0 inset-inline-end-0 w-full z-50 transition-all duration-500 pt-[env(safe-area-inset-top)] ${
        scrolled
          ? 'bg-dusty-rose/90 backdrop-blur-md shadow-lg shadow-warm-tan/30'
          : 'bg-transparent'
      }`}
    >
      {/* Desktop */}
      <div
        className={`hidden md:flex w-full px-12 lg:px-20 items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-20' : 'h-28'
        }`}
      >
        <a href="#hero" className="block shrink-0 hover:opacity-70 transition-opacity duration-300">
          <img
            src="/photos/hila-logo.png"
            alt="הילה"
            className={`h-auto transition-all duration-500 ${scrolled ? 'w-[160px]' : 'w-[260px]'}`}
            style={{ filter: 'brightness(0)' }}
          />
        </a>

        <ul className="flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-light text-charcoal/75 hover:text-charcoal transition-colors duration-300 after:absolute after:bottom-[-4px] after:inset-inline-end-0 after:w-0 after:h-[1px] after:bg-warm-brown after:transition-all after:duration-300 hover:after:w-full"
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
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 z-[60] text-charcoal"
          aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
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
            className="w-[180px] h-auto"
            style={{ filter: 'brightness(0)' }}
          />
        </a>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="תפריט ניווט"
        onKeyDown={handleMenuKeyDown}
        className={`md:hidden fixed inset-0 bg-dusty-rose/98 backdrop-blur-xl flex items-center justify-center transition-all duration-500 overscroll-none ${
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
                className="font-serif text-2xl font-light text-charcoal/85 hover:text-warm-brown transition-colors duration-300"
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
