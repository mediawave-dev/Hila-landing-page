import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        {/* Parallax divider */}
        <div
          className="parallax-section h-[40vh] md:h-[50vh] relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1600&q=80')",
          }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-deep-black/40" />
        </div>

        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
