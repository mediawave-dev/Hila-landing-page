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
    <section id="testimonials" className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-16">
          מה אומרים עלי
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              {/* Decorative quote */}
              <span className="font-serif text-6xl text-sand leading-none block mb-4">
                ״
              </span>
              <p className="text-charcoal font-light leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <p className="font-medium text-soft-black text-sm">
                {testimonial.name}
              </p>
              <p className="text-taupe text-xs mt-1">
                {testimonial.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
