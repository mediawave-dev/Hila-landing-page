export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
              alt="הילה - צלמת"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-soft-black mb-8">
            קצת עלי
          </h2>
          <div className="space-y-5 text-charcoal font-light leading-relaxed">
            <p>
              היי, אני הילה. כבר למעלה מעשור שאני מלווה משפחות וזוגות ברגעים
              הכי משמעותיים שלהם, ותופסת את מה שמילים לא יכולות לתאר.
            </p>
            <p>
              אני מאמינה שהתמונות הכי יפות נולדות כשאנשים מרגישים בנוח —
              חיוך אמיתי, מבט שובב, חיבוק ספונטני. אני לא מביימת,
              אני פשוט נותנת לרגע לקרות.
            </p>
            <p>
              הסטודיו שלי הוא מקום חמים ואישי, ובצילומים בחוץ אני אוהבת
              למצוא את האור הרך שגורם לכולם להיראות הכי טוב שלהם.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
