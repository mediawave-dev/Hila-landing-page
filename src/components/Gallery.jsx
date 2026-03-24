const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'צילום משפחה', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'צילום אירוע' },
  { src: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&q=80', alt: 'צילום זוגי' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', alt: 'צילום הריון' },
  { src: 'https://images.unsplash.com/photo-1537274942065-eda9d267a0fe?w=600&q=80', alt: 'צילום משפחה בחוץ', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80', alt: 'פורטרט' },
  { src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80', alt: 'צילום זוגי רומנטי' },
  { src: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&q=80', alt: 'צילום ילדים' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-4">
          גלריה
        </h2>
        <div className="scroll-reveal w-10 h-[1px] bg-warm-brown/50 mx-auto mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`scroll-reveal overflow-hidden group relative cursor-pointer ${image.span || ''}`}
              style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/50 transition-all duration-500 flex items-end justify-center">
                <span className="font-serif text-sm font-light text-off-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 pb-5">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
