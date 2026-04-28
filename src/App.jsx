import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import ParallaxBreak from './components/ParallaxBreak'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Scroll parallax for images with data-parallax attribute
  useEffect(() => {
    let ticking = false
    // Cache viewport height — only update on width change (real resize),
    // NOT on mobile address-bar show/hide which changes height and causes jumps
    let vh = window.innerHeight
    let lastWidth = window.innerWidth
    const onResize = () => {
      if (window.innerWidth !== lastWidth) {
        vh = window.innerHeight
        lastWidth = window.innerWidth
      }
    }
    window.addEventListener('resize', onResize)

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        document.querySelectorAll('[data-parallax]').forEach(el => {
          const rect = el.getBoundingClientRect()
          if (rect.bottom > 0 && rect.top < vh) {
            const speed = parseFloat(el.dataset.parallax)
            const centerOffset = rect.top + rect.height / 2 - vh / 2
            const translation = centerOffset * speed
            // Text elements skip scale (scale is only for images to hide edges)
            const noScale = el.hasAttribute('data-parallax-text')
            if (noScale) {
              el.style.transform = `translateY(${translation}px)`
            } else {
              // Scale only enough to hide the edge that the current shift exposes.
              // At rest (translation=0) → scale 1.0 (no upscale, source is sharp);
              // at max shift (4% of height) → scale 1.08 (just enough buffer).
              const maxShift = rect.height * 0.04
              const capped = Math.max(-maxShift, Math.min(maxShift, translation))
              const scale = 1 + (Math.abs(capped) / rect.height) * 2
              el.style.transform = `translateY(${capped}px) scale(${scale})`
            }
          }
        })
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:inset-inline-start-4 focus:z-[100] focus:bg-soft-black focus:text-off-white focus:px-4 focus:py-2 focus:text-sm focus:rounded-md"
      >
        דלג לתוכן
      </a>
      <Navbar />
      <main>
        <Hero />

        <About />

        {/* About → Services: parallax break with quote */}
        <ParallaxBreak
          image="/gallery/general/3U2A5843_websize.jpg"
          topBlend="off-white"
          bottomBlend="dusty-rose"
          objectPosition="center 35%"
        >
          <p
            className="font-serif text-2xl md:text-4xl lg:text-5xl text-off-white font-light text-center leading-relaxed"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.4)' }}
            data-parallax="0.25"
            data-parallax-text
          >
            כל רגע הוא סיפור
          </p>
        </ParallaxBreak>

        <Services />

        {/* Services → Gallery: parallax break */}
        <ParallaxBreak
          image="/gallery/pregnancy/pregnancy-024.jpg"
          height="h-[70svh] md:h-[85vh]"
          topBlend="dusty-rose"
          bottomBlend="off-white"
          objectPosition="center 35%"
        />

        <Gallery />

        {/* Gallery → Testimonials: parallax break with quote */}
        <ParallaxBreak
          image="/gallery/family/family-007.jpg"
          topBlend="off-white"
          bottomBlend="warm-tan"
          objectPosition="center 40%"
        >
          <p
            className="font-serif text-2xl md:text-4xl lg:text-5xl text-off-white font-light text-center leading-relaxed"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.4)' }}
            data-parallax="0.25"
            data-parallax-text
          >
            זיכרונות שלא דוהים
          </p>
        </ParallaxBreak>

        <Testimonials />

        {/* Testimonials → Contact: full-width image */}
        <div className="relative">
          <img
            src="/gallery/family/family-021.jpg"
            alt="חיבוק משפחתי בשקיעה"
            className="w-full h-auto block"
            loading="lazy"
          />
          {/* Subtle top blend */}
          <div
            className="absolute top-0 inset-x-0 h-16 md:h-24"
            style={{ background: 'linear-gradient(to bottom, var(--color-warm-tan), transparent)' }}
          />
          {/* Subtle bottom blend */}
          <div
            className="absolute bottom-0 inset-x-0 h-16 md:h-24"
            style={{ background: 'linear-gradient(to top, var(--color-cream), transparent)' }}
          />
        </div>

        <Packages />

        <Contact />

        {/* Contact → Footer */}
        <SectionDivider
          bg="var(--color-cream)"
          fill="var(--color-dusty-rose)"
          accent="var(--color-warm-brown)"
        />
      </main>
      <Footer />
    </>
  )
}
