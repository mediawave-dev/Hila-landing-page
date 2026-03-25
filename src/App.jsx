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
            // Text elements skip scale (scale is only for images to hide edges)
            const noScale = el.hasAttribute('data-parallax-text')
            el.style.transform = noScale
              ? `translateY(${centerOffset * speed}px)`
              : `translateY(${centerOffset * speed}px) scale(1.1)`
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

        {/* Hero → About: gradient fade */}
        <SectionDivider
          bg="var(--color-deep-black)"
          fill="var(--color-off-white)"
          accent="var(--color-warm-brown)"
        />

        <About />

        {/* About → Services: parallax break with quote */}
        <ParallaxBreak
          image="/gallery/general/general-020.jpg"
          topBlend="off-white"
          bottomBlend="soft-black"
          objectPosition="center 40%"
        >
          <p
            className="font-serif text-2xl md:text-4xl lg:text-5xl text-off-white/90 font-light text-center leading-relaxed"
            data-parallax="0.25"
            data-parallax-text
          >
            כל רגע הוא סיפור
          </p>
        </ParallaxBreak>

        <Services />

        {/* Services → Gallery: parallax break */}
        <ParallaxBreak
          image="/gallery/general/general-011.jpg"
          topBlend="soft-black"
          bottomBlend="off-white"
          objectPosition="center 30%"
        />

        <Gallery />

        {/* Gallery → Testimonials: parallax break with quote */}
        <ParallaxBreak
          image="/gallery/pregnancy/pregnancy-010.jpg"
          topBlend="off-white"
          bottomBlend="soft-black"
          objectPosition="center 35%"
        >
          <p
            className="font-serif text-2xl md:text-4xl lg:text-5xl text-off-white/90 font-light text-center leading-relaxed"
            data-parallax="0.25"
            data-parallax-text
          >
            זיכרונות שלא דוהים
          </p>
        </ParallaxBreak>

        <Testimonials />

        {/* Testimonials → Contact: parallax break */}
        <ParallaxBreak
          image="/gallery/general/general-014.jpg"
          height="h-[40vh] md:h-[50vh]"
          topBlend="soft-black"
          bottomBlend="cream"
          objectPosition="center 45%"
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
