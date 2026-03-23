const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'צילום משפחה', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'צילום אירוע', span: '' },
  { src: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&q=80', alt: 'צילום זוגי', span: '' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', alt: 'צילום הריון', span: '' },
  { src: 'https://images.unsplash.com/photo-1537274942065-eda9d267a0fe?w=600&q=80', alt: 'צילום משפחה בחוץ', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80', alt: 'פורטרט', span: '' },
  { src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80', alt: 'צילום זוגי רומנטי', span: '' },
  { src: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&q=80', alt: 'צילום ילדים', span: '' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-16">
          גלריה
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
