const galleryImages = [
  { src: '/gallery/general/general-010.jpg', alt: 'צילום משפחה', span: 'row-span-2' },
  { src: '/gallery/family/family-017.jpg', alt: 'אבא ובת' },
  { src: '/gallery/pregnancy/pregnancy-025.jpg', alt: 'צילום זוגי בחוף' },
  { src: '/gallery/pregnancy/pregnancy-001.jpg', alt: 'צילום הריון' },
  { src: '/gallery/family/family-031.jpg', alt: 'צילום משפחה בטבע', span: 'row-span-2' },
  { src: '/gallery/general/general-012.jpg', alt: 'צילום משפחתי' },
  { src: '/gallery/pregnancy/pregnancy-015.jpg', alt: 'צללית הריון' },
  { src: '/gallery/family/family-040.jpg', alt: 'ניובורן' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-4">
          גלריה
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-16"><span /></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`scroll-reveal hover-frame overflow-hidden group relative cursor-pointer ${image.span || ''}`}
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
