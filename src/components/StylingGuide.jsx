const WHATSAPP_STYLING_LINK = `https://wa.me/972529571799?text=${encodeURIComponent(
  'היי הילה! אשמח להתייעץ מה ללבוש לצילומים 🙂'
)}`

const seasons = [
  {
    title: 'לקיץ ולאביב אני אוהבת במיוחד',
    swatches: [
      { name: 'שמנת', color: 'oklch(0.95 0.02 90)' },
      { name: 'קאמל', color: 'oklch(0.75 0.06 70)' },
      { name: 'אפרסק', color: 'oklch(0.87 0.055 50)' },
      { name: 'אפור בהיר', color: 'oklch(0.87 0.008 80)' },
      { name: 'ג׳ינס בהיר', color: 'oklch(0.78 0.035 250)' },
    ],
    textures: ['פשתן', 'כותנה', 'תחרה', 'פרחים עדינים', 'פסים'],
    note: 'שמלות קלילות שמתנופפות ברוח, מכנסיים קצרים, חולצות רכות ובדים נעימים.',
  },
  {
    title: 'לצילומי סתיו וחורף',
    swatches: [
      { name: 'חמרה', color: 'oklch(0.60 0.09 45)' },
      { name: 'חרדל', color: 'oklch(0.70 0.10 90)' },
      { name: 'ירוק יער', color: 'oklch(0.45 0.06 155)' },
      { name: 'בורדו', color: 'oklch(0.40 0.09 20)' },
      { name: 'חום', color: 'oklch(0.45 0.05 60)' },
    ],
    textures: ['סריגים', 'כובע צמר', 'ג׳קט ג׳ינס', 'קרדיגן', 'מגפיים', 'צעיף', 'מעיל', 'ועוד…'],
    note: null,
  },
]

export default function StylingGuide() {
  return (
    <section id="styling" className="py-24 md:py-32 bg-dusty-rose">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-4">
          מה ללבוש לצילומים?
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-10 md:mb-12"><span /></div>

        {/* Opening statement, the typographic moment of the section */}
        <div className="scroll-reveal text-center mb-10 md:mb-14">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-soft-black leading-[1.4]">
            קודם כל והכי חשוב: שיהיה נוח.
          </p>
          <p className="font-serif text-lg md:text-xl text-taupe mt-3">באמת נוח.</p>
        </div>

        <div className="scroll-reveal max-w-2xl mx-auto text-center space-y-5 text-charcoal/80 font-light leading-relaxed mb-16 md:mb-20">
          <p>
            לא נעלי עקב שאי אפשר ללכת איתן, ולא שמלה שצריך לסדר כל שנייה. המטרה היא שתרגישו
            בנוח, תזוזו בחופשיות, ותוכלו פשוט ליהנות מהזמן יחד.
          </p>
          <p>
            אפשר לבחור בגדים שכבר יש בארון, אפשר ״לשאול״ משהו מהמלתחה של החברה הכי
            סטייליסטית, ואפשר גם לנצל את ההזדמנות להתחדש בפריט חדש. מה שהכי כיף ונעים לכם.
          </p>
        </div>

        {/* Color palette advice */}
        <div className="scroll-reveal text-center mb-8">
          <div className="w-10 h-[1px] bg-warm-brown/50 mx-auto mb-6" />
          <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal">
            פלטת צבעים
          </h3>
        </div>

        <div className="scroll-reveal max-w-2xl mx-auto text-center space-y-5 text-charcoal/80 font-light leading-relaxed mb-12 md:mb-16">
          <p>תבחרו 2-3 גוונים שנראים טוב יחד, ותבנו סביבם את הלבוש של כל המשפחה.</p>
          <p>
            ולא, לא חייבים שכולם יהיו עם ג׳ינס וחולצה לבנה. זה אמנם הכי קל, אבל יש כל כך
            הרבה אפשרויות יפות ומעניינות יותר.
          </p>
          <p>
            אפשר לשלב הדפס פרחוני עדין, פסים, סריג עם טקסטורה יפה או בגד עם קצת עניין.
            העיקר שהכל ישתלב בהרמוניה.
          </p>
        </div>

        {/* Seasonal palette cards, swatches cascade in on reveal */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto mb-16 md:mb-20">
          {seasons.map((season, index) => (
            <article
              key={season.title}
              className="scroll-reveal bg-off-white border border-warm-brown/15 px-7 md:px-10 py-10 md:py-12 flex flex-col text-center"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <h4 className="font-serif text-xl md:text-2xl font-light text-charcoal mb-8">
                {season.title}
              </h4>

              <ul className="flex flex-wrap justify-center gap-4 md:gap-5 mb-8" aria-label={`גוונים מומלצים, ${season.title}`}>
                {season.swatches.map((swatch, i) => (
                  <li
                    key={swatch.name}
                    className="palette-swatch flex flex-col items-center gap-2.5"
                    style={{ transitionDelay: `${0.25 + i * 0.09}s` }}
                  >
                    <span className="flex w-12 h-12 md:w-14 md:h-14 rounded-full border border-warm-brown/20 p-[3px]">
                      <span
                        className="w-full h-full rounded-full"
                        style={{
                          background: swatch.color,
                          boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.06)',
                        }}
                      />
                    </span>
                    <span className="text-xs text-charcoal/70 font-light whitespace-nowrap">{swatch.name}</span>
                  </li>
                ))}
              </ul>

              <div className="w-10 h-[1px] bg-warm-brown/30 mx-auto mb-6" />

              <p className="text-sm text-charcoal/75 font-light leading-relaxed">
                {season.textures.join(' · ')}
              </p>

              {season.note && (
                <p className="mt-auto pt-6 text-sm text-taupe font-light leading-relaxed">
                  {season.note}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Personal note from Hila, bridge to contact */}
        <div className="scroll-reveal max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-4">
            וכמובן, תשלחו לי אופציות!
          </h3>
          <p className="text-charcoal/75 font-light leading-relaxed mb-6">
            אני הכי אוהבת לעזור בבחירה ולבנות יחד את הלוקים.
          </p>
          <a
            href={WHATSAPP_STYLING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-light text-warm-brown hover:text-charcoal border-b border-warm-brown/40 hover:border-charcoal pb-1 transition-colors duration-300"
          >
            שלחו לי בוואטסאפ ונבנה את הלוק יחד
          </a>
        </div>

        {/* Closing statement */}
        <div className="scroll-reveal max-w-xl mx-auto text-center mt-16 md:mt-20">
          <div className="w-10 h-[1px] bg-warm-brown/50 mx-auto mb-8" />
          <p className="font-serif text-xl md:text-2xl font-light text-charcoal leading-relaxed">
            תחשבו פחות על ״להתאים״ ויותר על להרגיש כמו עצמכם,
            <br className="hidden md:block" />{' '}
            בגרסה הכי יפה ונעימה שלכם. <span aria-hidden="true">🤍</span>
          </p>
        </div>
      </div>
    </section>
  )
}
