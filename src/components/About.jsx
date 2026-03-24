export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="scroll-reveal">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/photos/IMG_5502-web.jpg"
              alt="הילה - צלמת"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.15s' }}>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-soft-black mb-3">
            קצת עלי
          </h2>
          <div className="w-10 h-[1px] bg-warm-brown/50 mb-8" />
          <div className="space-y-5 text-charcoal font-light leading-relaxed">
            <p>
              היי, אני הילה. אמא לשניים + כלבה ;), צלמת שפשוט מאוהבת בשעת הזהב וחובבת אפייה מושבעת.
            </p>
            <p>
              עבורי, צילום הוא לא &quot;פוזות&quot;, אלא הדרך שלי להקפיא את כל הרגעים הקטנים האלו שנראים רגילים אבל בעצם הם הכל – חיבוק חזק, מבט חטוף וכל הרגש שביניהם. אני יודעת שלא כולם אוהבים לעמוד מול מצלמה (אגלה לך סוד - גם אני לא...), ולכן הכי חשוב לי לייצר לכם חוויה שבה פשוט תרגישו בנוח ותהיו אתם.
            </p>
            <p>
              אין דבר שמרגש אותי יותר מלקוחות שרואים את התוצאה ואומרים לי: &quot;לא חלמתי שאפשר להוציא מאיתנו תמונות כאלה&quot;.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
