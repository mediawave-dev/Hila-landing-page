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
    <nav className="absolute inset-block-start-0 inset-inline-start-0 inset-inline-end-0 z-50">
      <div className="w-full px-10 md:px-20 pt-5 flex items-center justify-between h-24">
        {/* Logo - right side in RTL */}
        <a href="#hero" className="block shrink-0 hover:opacity-70 transition-opacity">
          <img
            src="/photos/hila-logo.png"
            alt="הילה"
            className="w-[150px] h-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Desktop nav links - left side in RTL */}
        <ul className="hidden md:flex items-center gap-10">
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

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-off-white"
          aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
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
