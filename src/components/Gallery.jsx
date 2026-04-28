const galleryImages = [
  { src: '/gallery/general/general-033.jpg', alt: 'סוס מתקרב לבטן הריון', span: 'row-span-2', objectPosition: 'center 35%' },
  { src: '/gallery/pregnancy/IMG_7935_websize_websize.jpg', alt: 'בטן הריון ולחיצת יד מול הים', objectPosition: 'center 40%' },
  { src: '/gallery/family/family-027.jpg', alt: 'יד תינוק ניובורן' },
  { src: '/gallery/family/family-016.jpg', alt: 'תינוקת מחייכת בגולדן אוור', objectPosition: 'center 30%' },
  { src: '/gallery/halake/IMG_8263_websize.jpg', alt: 'ילד עם תלתלים זהובים בדשא', span: 'row-span-2', objectPosition: 'center 25%' },
  { src: '/gallery/family/family-035.jpg', alt: 'בטן הריון בשמלה אדומה' },
  { src: '/gallery/pregnancy/pregnancy-028.jpg', alt: 'אם הריונית עם פעוט בשדה פרגים', objectPosition: 'center 40%' },
  { src: '/gallery/general/IMG_7750_websize_websize.jpg', alt: 'תינוק ניובורן ישן' },
  { src: '/gallery/pregnancy/pregnancy-026.jpg', alt: 'זוג בהריון על חוף הים' },
  { src: '/gallery/general/general-013.jpg', alt: 'פעוטה על בטן ההיריון של אמא', objectPosition: 'center 25%' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-4">
          גלריה
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-16"><span /></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] md:gap-3 auto-rows-[200px] md:auto-rows-[250px] -mx-6 md:mx-0">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`scroll-reveal hover-frame overflow-hidden group relative cursor-pointer ${image.span || ''}`}
              style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
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
