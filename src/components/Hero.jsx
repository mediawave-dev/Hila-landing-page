import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'

const slides = [
  {
    src: '/gallery/general/general-001.jpg',
    alt: 'צילום משפחה',
  },
  {
    src: '/gallery/pregnancy/pregnancy-016.jpg',
    alt: 'צילום הריון',
  },
  {
    src: '/gallery/family/family-020.jpg',
    alt: 'צילום משפחה בטבע',
  },
  {
    src: '/gallery/general/general-018.jpg',
    alt: 'צילום זוגיות',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const touchStart = useRef(null)
  const timerRef = useRef(null)
  const imgRefs = useRef([])

  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(nextSlide, 5000)
  }, [nextSlide])

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000)
    return () => clearInterval(timerRef.current)
  }, [nextSlide])

  // Restart Ken Burns only on the incoming slide, before browser paints
  useLayoutEffect(() => {
    const img = imgRefs.current[current]
    if (img) {
      img.style.animation = 'none'
      void img.offsetWidth
      img.style.animation = ''
    }
  }, [current])

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const delta = touchStart.current - e.changedTouches[0].clientX
    touchStart.current = null
    if (Math.abs(delta) < 50) return
    if (delta > 0) nextSlide()
    else prevSlide()
    resetTimer()
  }

  return (
    <section
      id="hero"
      className="relative h-[100svh] flex items-center justify-center overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            ref={el => imgRefs.current[i] = el}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1280}
            fetchPriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`w-full h-full object-cover kenburns-${i % 4}`}
          />
        </div>
      ))}

      {/* Soft bottom vignette — anchors the signature without flattening the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 via-deep-black/10 to-transparent" />

      {/* Signature — bottom-start corner (visually right in RTL) */}
      <div
        className="absolute bottom-14 md:bottom-16 z-10 text-start [inset-inline-start:1.5rem] md:[inset-inline-start:3rem]"
        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
      >
        <h1 className="font-serif text-4xl md:text-6xl text-off-white font-light leading-none">
          הילה
        </h1>
        <div className="w-10 h-[1px] bg-off-white/55 my-4 md:my-5" />
        <p className="font-serif text-sm md:text-base text-off-white font-light leading-snug">
          רגעים שנשארים לנצח
        </p>
      </div>

      {/* Slide indicators — padded for 44px min touch target */}
      <div className="absolute bottom-6 inset-inline-start-1/2 -translate-x-1/2 z-10 flex gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer() }}
            className="py-5 px-2 group"
            aria-label={`שקופית ${i + 1}`}
          >
            <span className={`block h-[2px] rounded-full transition-all duration-500 ${
              i === current ? 'w-10 bg-off-white' : 'w-4 bg-off-white/40 group-hover:bg-off-white/70'
            }`} />
          </button>
        ))}
      </div>
    </section>
  )
}
