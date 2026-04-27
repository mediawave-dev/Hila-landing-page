export default function Footer() {
  return (
    <footer className="py-16 bg-dusty-rose text-center">
      {/* Logo */}
      <div className="mb-10">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="חזרה לראש העמוד"
          className="inline-block cursor-pointer"
        >
          <img
            src="/photos/hila-logo.png"
            alt="הילה צלמת"
            className="mx-auto w-64 sm:w-80 opacity-90 hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'brightness(0)' }}
            loading="lazy"
          />
        </a>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.instagram.com/hila.photo.art"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-90 hover:opacity-100 transition-opacity duration-300"
          aria-label="אינסטגרם"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="instaGradFooter" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffe8a8" />
                <stop offset="25%" stopColor="#fcb27a" />
                <stop offset="50%" stopColor="#f0a6c0" />
                <stop offset="75%" stopColor="#c8a8db" />
                <stop offset="100%" stopColor="#a8aee0" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instaGradFooter)" strokeWidth="1.8"/>
            <circle cx="12" cy="12" r="5" stroke="url(#instaGradFooter)" strokeWidth="1.8"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instaGradFooter)"/>
          </svg>
        </a>
        <a
          href={`https://wa.me/972529571799?text=${`${encodeURIComponent('היי הילה')}%20%F0%9F%99%82%0A${encodeURIComponent('אשמח לשמוע פרטים על צילום')}%20%F0%9F%93%B8`}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-whatsapp hover:text-whatsapp-hover transition-colors duration-300"
          aria-label="וואטסאפ"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.257-.154-2.876.855.855-2.876-.154-.257A8 8 0 1112 20z" fill="currentColor"/>
          </svg>
        </a>
      </div>

      <div className="w-8 h-[1px] bg-warm-brown/30 mx-auto mb-6" />

      <p className="text-xs text-charcoal/70 mt-1">
        כל הזכויות שמורות &copy; {new Date().getFullYear()}
      </p>

      <p className="mt-6 text-charcoal/50" style={{ fontSize: '12px' }}>
        האתר נבנה ע״י{' '}
        <a
          href="https://mediawave.co.il/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-warm-brown transition-colors duration-300"
        >
          MediaWave
        </a>
      </p>
    </footer>
  )
}
