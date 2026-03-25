import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'

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
            el.style.transform = `translateY(${centerOffset * speed}px) scale(1.1)`
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:inset-inline-start-4 focus:z-[100] focus:bg-soft-black focus:text-off-white focus:px-4 focus:py-2 focus:text-sm"
      >
        דלג לתוכן
      </a>
      <Navbar />
      <main>
        <Hero />

        {/* Hero → About */}
        <SectionDivider
          bg="var(--color-deep-black)"
          fill="var(--color-off-white)"
          accent="var(--color-warm-brown)"
        />

        <About />

        {/* About → Services (mirrored) */}
        <SectionDivider
          bg="var(--color-off-white)"
          fill="var(--color-soft-black)"
          accent="var(--color-warm-brown)"
          mirror
        />

        <Services />

        {/* Parallax image break */}
        <div
          className="h-[50vh] md:h-[60vh] relative overflow-hidden"
          role="presentation"
          aria-hidden="true"
        >
          <img
            src="/gallery/general/general-011.jpg"
            alt=""
            width={1920}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            data-parallax="-0.08"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-deep-black/40" />

          {/* Top: cinematic gradient fade from Services' dark bg */}
          <div className="absolute top-0 inset-x-0 h-24 md:h-36 bg-gradient-to-b from-soft-black to-transparent z-10" />

          {/* Bottom: S-curve wave to Gallery */}
          <div className="absolute bottom-0 inset-x-0 leading-[0] z-10" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full block h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
              <path d="M0,60 C360,120 1080,0 1440,60 L1440,121 L0,121 Z" fill="var(--color-off-white)" />
              <path d="M0,60 C360,120 1080,0 1440,60" fill="none" stroke="var(--color-warm-brown)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>

        <Gallery />

        {/* Gallery → Testimonials */}
        <SectionDivider
          bg="var(--color-off-white)"
          fill="var(--color-soft-black)"
          accent="var(--color-warm-brown)"
        />

        <Testimonials />

        {/* Testimonials → Contact (mirrored) */}
        <SectionDivider
          bg="var(--color-soft-black)"
          fill="var(--color-cream)"
          accent="var(--color-warm-brown)"
          mirror
        />

        <Contact />

        {/* Contact → Footer */}
        <SectionDivider
          bg="var(--color-cream)"
          fill="var(--color-deep-black)"
          accent="var(--color-warm-brown)"
        />
      </main>
      <Footer />
    </>
  )
}
