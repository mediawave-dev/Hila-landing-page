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
    <nav className="fixed inset-inline-start-0 inset-inline-end-0 inset-block-start-0 z-50 bg-off-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a
          href="#hero"
          className="font-serif text-2xl font-light tracking-normal text-soft-black hover:text-warm-brown transition-colors"
        >
          הילה
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-light text-taupe hover:text-soft-black transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal"
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
        <div className="md:hidden bg-off-white/95 backdrop-blur-sm border-block-end border-sand">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-light text-charcoal hover:text-warm-brown transition-colors"
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
