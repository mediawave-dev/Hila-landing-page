const testimonials = [
  {
    name: 'מיכל ואלון',
    type: 'צילומי זוגיות',
    text: 'הילה הצליחה לתפוס בדיוק את מה שאנחנו — בלי פוזות, בלי העמדות, רק אנחנו. כל תמונה מרגישה כמו רגע אמיתי ולא כמו צילום מבוים.',
  },
  {
    name: 'שירה כהן',
    type: 'צילומי הריון',
    text: 'הגעתי מתוחה ויצאתי עם חיוך ענק. הילה גרמה לי להרגיש יפה ונוחה, והתמונות? מעבר לכל מה שדמיינתי.',
  },
  {
    name: 'משפחת לוי',
    type: 'צילומי משפחה',
    text: 'עם שלושה ילדים קטנים חששנו מצילומים, אבל הילה הפכה את הכל למשחק. קיבלנו תמונות טבעיות ומלאות שמחה שנאהב לנצח.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-soft-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-off-white text-center mb-4">
          מה אומרים עלי
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-16"><span /></div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-reveal testimonial-card text-center pt-8"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <span className="font-serif text-5xl text-warm-brown/40 leading-none block mb-4">
                ״
              </span>
              <p className="text-off-white/70 font-light leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <p className="font-medium text-off-white/90 text-sm">
                {testimonial.name}
              </p>
              <p className="text-warm-brown/60 text-xs mt-1">
                {testimonial.type}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp recommendations */}
        <div className="mt-20 md:mt-28">
          <p className="flex items-center justify-center gap-2 text-off-white/40 text-xs tracking-wide mb-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-50">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.257-.154-2.876.855.855-2.876-.154-.257A8 8 0 1112 20z" fill="currentColor"/>
            </svg>
            מה כותבים לי אחרי הצילומים
          </p>

          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:items-start">
            {[
              { src: '/whatsapp-recommend/wa-recommend-3.jpeg', alt: 'המלצה מלקוחה על התמונות' },
              { src: '/whatsapp-recommend/wa-recommend-1.jpeg', alt: 'המלצה מלקוחה על תוצאות הצילום' },
              { src: '/whatsapp-recommend/wa-recommend-2.jpeg', alt: 'המלצה מלקוחה על חוויית הצילום', crop: true },
            ].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-auto snap-center"
              >
                <div className="relative rounded-2xl overflow-hidden border border-off-white/[0.06] group">
                  {/* Dark overlay for premium feel */}
                  <div className="absolute inset-0 bg-soft-black/20 group-hover:bg-soft-black/10 transition-colors duration-500 z-10 pointer-events-none" />
                  {/* Edge fade */}
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-soft-black/60 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-soft-black/60 to-transparent z-10 pointer-events-none" />
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full ${img.crop ? 'h-[280px] object-cover object-[center_35%]' : 'h-auto'}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
