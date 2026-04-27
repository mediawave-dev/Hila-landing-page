const packages = [
  {
    title: 'חבילה זוגית / זוגית +1',
    duration: 'עד שעה צילומים',
    photos: 'עד 80 תמונות ערוכות',
    audience:
      'מתאימה לזוגות או לזוג עם תינוק קטן, למי שרוצה חוויה קצרה, נעימה ומדויקת.',
    price: '1,590',
  },
  {
    title: 'חבילה משפחתית',
    duration: 'עד שעה וחצי צילומים',
    photos: 'כ-100–120 תמונות ערוכות',
    audience:
      'מתאימה למשפחה גרעינית, למי שרוצה קצת יותר זמן להיפתח ולתפוס מגוון רחב של רגעים טבעיים ומשפחתיים.',
    price: '1,950',
  },
]

const includes = [
  'ליווי והכוונה לפני הצילומים',
  'אווירה נעימה ורגועה במהלך הסשן',
  'עריכה מקצועית ששומרת על מראה טבעי ונקי',
]

export default function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-charcoal text-center mb-4">
          חבילות צילום
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-8"><span /></div>
        <p className="scroll-reveal text-center text-charcoal/75 font-light max-w-xl mx-auto mb-16 md:mb-20 leading-relaxed">
          בחרתי ליצור עבורכם כמה אפשרויות, כדי שתוכלו לבחור את החוויה שהכי מתאימה לכם.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20">
          {packages.map((pkg, index) => (
            <article
              key={pkg.title}
              className="scroll-reveal relative bg-dusty-rose/60 border border-warm-brown/15 px-8 md:px-10 py-12 md:py-14 flex flex-col"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center mb-8">
                {pkg.title}
              </h3>

              <ul className="space-y-3 mb-8 text-charcoal/85 font-light text-center">
                <li>{pkg.duration}</li>
                <li>{pkg.photos}</li>
              </ul>

              <p className="text-sm text-charcoal/70 font-light leading-relaxed text-center mb-10 flex-1">
                {pkg.audience}
              </p>

              <div className="flex items-baseline justify-center gap-1 pt-6 border-t border-warm-brown/15">
                <span className="font-serif text-4xl md:text-5xl font-light text-charcoal">
                  {pkg.price}
                </span>
                <span className="font-serif text-2xl text-charcoal/70">₪</span>
              </div>
            </article>
          ))}
        </div>

        {/* Custom packages callout */}
        <div className="scroll-reveal max-w-2xl mx-auto text-center mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-4">
            מחפשים משהו קצת אחר?
          </h3>
          <p className="text-charcoal/75 font-light leading-relaxed mb-6">
            צילומי חלאקה, גיל שנה, משפחות מורחבות או חבילות מורחבות — אפשר לבנות יחד חבילה שמתאימה בדיוק לכם.
          </p>
          <a
            href="#contact"
            className="inline-block text-sm font-light tracking-wider text-warm-brown hover:text-charcoal border-b border-warm-brown/40 hover:border-charcoal pb-1 transition-colors duration-300"
          >
            שלחו לי הודעה ואכוון אתכם למה שהכי נכון
          </a>
        </div>

        {/* What's included */}
        <div className="scroll-reveal max-w-2xl mx-auto text-center">
          <div className="w-10 h-[1px] bg-warm-brown/50 mx-auto mb-6" />
          <h4 className="font-serif text-xl font-light text-charcoal mb-6">
            כל החבילות כוללות
          </h4>
          <ul className="space-y-3 text-charcoal/80 font-light">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
