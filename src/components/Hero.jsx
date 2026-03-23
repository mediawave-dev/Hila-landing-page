export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background placeholder image */}
      <div className="absolute inset-0 bg-cream-dark">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-soft-black/30 via-soft-black/10 to-off-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-6xl md:text-8xl font-light text-off-white mb-4 drop-shadow-lg">
          הילה
        </h1>
        <p className="font-serif text-xl md:text-3xl font-light text-off-white/90 drop-shadow-md">
          רגעים שנשארים לנצח
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-block-end-8 inset-inline-start-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-off-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-off-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
