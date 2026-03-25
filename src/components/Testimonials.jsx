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
      </div>
    </section>
  )
}
