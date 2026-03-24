import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=80',
    alt: 'צילום משפחה',
  },
  {
    src: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=1600&q=80',
    alt: 'צילום זוגיות',
  },
  {
    src: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1600&q=80',
    alt: 'צילום הריון',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
    alt: 'צילום אירועים',
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
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden touch-pan-y"
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
            className={`w-full h-full object-cover kenburns-${i % 4}`}
          />
        </div>
      ))}

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-soft-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-7xl sm:text-8xl md:text-[10rem] font-light text-off-white leading-none">
          הילה
        </h1>
        <div className="w-12 h-[1px] bg-warm-brown/60 mx-auto my-6 md:my-8" />
        <p className="font-serif text-lg md:text-2xl font-light text-off-white/70">
          רגעים שנשארים לנצח
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 inset-inline-start-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer() }}
            className={`h-[2px] rounded-full transition-all duration-500 ${
              i === current ? 'w-10 bg-off-white' : 'w-4 bg-off-white/30 hover:bg-off-white/50'
            }`}
            aria-label={`שקופית ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
