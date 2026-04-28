const services = [
  {
    title: 'צילומי משפחה',
    image: '/gallery/general/3U2A4714_websize.jpg',
    objectPosition: 'center 30%',
    paragraphs: [
      'יש רגעים ביום־יום שאנחנו לא מספיק עוצרים עליהם.',
      'חיוך קטן, חיבוק אקראי, מבט של אהבה.',
      'צילומי משפחה הם בדיוק זה — זמן איכות אמיתי יחד, שאני פשוט מתעדת מהצד. לא צילומים מאולצים שלא מרגישים אתכם.',
      'אני יוצרת עבורכם חוויה נעימה, זורמת ולא מבוימת, כדי שתקבלו תמונות שמרגישות כמו החיים עצמם — עם כל הרגש, החום והחיבור שביניכם.',
    ],
  },
  {
    title: 'צילומי זוגיות',
    image: '/gallery/family/family-036.jpg',
    objectPosition: 'center 40%',
    paragraphs: [
      'לא צריך אירוע מיוחד כדי לעצור רגע ולהיזכר למה בחרתם אחד בשנייה.',
      'צילומי זוגיות הם הזדמנות לצאת מהשגרה, להיות יחד, לצחוק, להתקרב — והקסם קורה מעצמו.',
      'אני שם רק כדי לתפוס אתכם בדיוק כמו שאתם. בלי פוזות מוגזמות ובלי לחץ. רק אתם והלב שלכם.',
    ],
  },
  {
    title: 'צילומי ברית / ה',
    image: '/gallery/family/family-041.jpg',
    objectPosition: 'center 35%',
    imageInset: '/gallery/family/family-040.jpg',
    insetAlt: 'יד תינוק אוחזת אצבע של מבוגר',
    paragraphs: [
      'הרגעים הראשונים האלה עוברים כל כך מהר.',
      'צילומי ברית/ה הם לא רק תיעוד של האירוע, אלא של כל מה שמסביב — ההתרגשות, המשפחה, החיבוקים והאהבה.',
      'אני מצלמת ברגישות ובשקט, ותופסת גם את הרגעים הקטנים שאולי בכלל לא שמתם לב אליהם.',
      'כי בסוף, אלה הזיכרונות שנשארים.',
    ],
  },
  {
    title: 'צילומי גיל שנה',
    image: '/gallery/family/3U2A4306_websize.jpg',
    objectPosition: 'center 30%',
    paragraphs: [
      'גיל שנה זה גיל מיוחד! מצד אחד הקטנים שלנו כבר בעלי אישיות עם אופי, ומצד שני עדיין כל כך תינוקיים ומתוקים.',
      'בצילומים אני לא מצפה מהם "לשתף פעולה" — אני נותנת להם לזוז, לחקור, להיות מי שהם, ואני שם כדי לתפוס אותם בדיוק ברגעים הכי יפים.',
      'לפעמים זה צחוק מתגלגל, לפעמים מבט סקרן, ולפעמים גם קצת בלגן — וזה בדיוק הקסם.',
      'אלה התמונות שבאמת מזכירות איך הם היו, בדיוק בתקופה הזאת.',
    ],
  },
  {
    title: 'צילומי חלאקה',
    image: '/gallery/halake/IMG_8234_websize.jpg',
    objectPosition: 'center 30%',
    paragraphs: [
      'בוק חלאקה הוא זמן לעצור רגע, לתעד את הילד כמו שהוא עכשיו — לפני השינוי.',
      'עם הלוק המתוק, השיער שעוד רגע יורד, והאופי שכבר כל כך נוכח.',
      'אני יוצרת עבורכם חוויה רגועה ונעימה, בלי לחץ ובלי למהר לשום מקום, כדי שתקבלו תמונות טבעיות, מדויקות ואמיתיות.',
      'כי זה הרגע הזה — שאת מסתכלת עליו ויודעת שהוא כבר לא יחזור בדיוק ככה.',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-dusty-rose">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-charcoal text-center mb-4">
          שירותים
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-20 md:mb-24"><span /></div>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const flipped = index % 2 === 1
            return (
              <article
                key={service.title}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                <div
                  className={`scroll-reveal relative -mx-6 md:mx-0 ${
                    flipped ? 'md:order-2' : ''
                  }`}
                >
                  <div className="hover-frame relative aspect-[4/5] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover"
                      style={{
                        ...(service.objectPosition && { objectPosition: service.objectPosition }),
                        imageRendering: 'high-quality',
                      }}
                      data-parallax="-0.05"
                      loading="lazy"
                    />
                  </div>
                  {service.imageInset && (
                    <div
                      className="service-inset absolute z-20 w-[55%] md:w-[50%] aspect-[4/3] bg-off-white p-2 md:p-3 shadow-2xl [bottom:-0.5rem] [inset-inline-end:0.5rem] md:[bottom:-1rem] md:[inset-inline-end:-1.25rem]"
                    >
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={service.imageInset}
                          alt={service.insetAlt || ''}
                          className="w-full h-full object-cover"
                          style={{ imageRendering: 'high-quality' }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`scroll-reveal ${flipped ? 'md:order-1' : ''}`}
                  style={{ transitionDelay: '0.15s' }}
                >
                  <div className="w-10 h-[1px] bg-warm-brown/50 mb-6" />
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-6">
                    {service.title}
                  </h3>
                  <div className="space-y-4 text-charcoal/80 font-light leading-relaxed">
                    {service.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
