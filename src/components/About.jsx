export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image — oval portrait frame */}
        <div className="scroll-reveal flex justify-center">
          <div
            className="w-[320px] h-[420px] md:w-[440px] md:h-[560px] overflow-hidden"
            style={{
              borderRadius: '50%',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src="/photos/IMG_5502-web.jpg"
              alt="הילה - צלמת"
              width={800}
              height={1067}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="scroll-reveal" style={{ transitionDelay: '0.15s' }}>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-soft-black mb-3">
            קצת עלי
          </h2>
          <div className="heading-ornament mb-8"><span /></div>
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
