import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'קצת עלי' },
  { href: '#services', label: 'שירותים' },
  { href: '#gallery', label: 'גלריה' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#contact', label: 'צור קשר' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50">
      {/* Desktop layout */}
      <div className="hidden md:flex w-full px-20 pt-5 items-center justify-between h-24">
        <a href="#hero" className="block shrink-0 hover:opacity-70 transition-opacity">
          <img
            src="/photos/hila-logo.png"
            alt="הילה"
            className="w-[180px] h-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-light text-off-white/85 hover:text-off-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile layout - logo + hamburger on the left, hamburger centered under logo */}
      <div className="md:hidden flex justify-end pt-5 pe-5">
        <div className="flex flex-col items-center gap-1">
          <a href="#hero" className="block hover:opacity-70 transition-opacity">
            <img
              src="/photos/hila-logo.png"
              alt="הילה"
              className="w-[200px] h-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-off-white"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isOpen}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-soft-black/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-light text-off-white/85 hover:text-off-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
