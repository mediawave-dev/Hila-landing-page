const services = [
  {
    title: 'משפחה',
    description: 'צילומי משפחה טבעיים ומלאי חיים — כי כל משפחה היא סיפור ייחודי.',
    image: '/gallery/family/family-009.jpg',
    objectPosition: 'center 30%',
  },
  {
    title: 'זוגיות',
    description: 'לתפוס את הכימיה, את המבטים ואת הרגעים השקטים שביניכם.',
    image: '/gallery/general/general-026.jpg',
  },
  {
    title: 'הריון',
    description: 'תיעוד התקופה הקסומה הזו באור רך ובאווירה אינטימית.',
    image: '/gallery/general/general-007.jpg',
    objectPosition: 'center 30%',
  },
  {
    title: 'אירועים',
    description: 'מרגעי ההכנות ועד לריקוד האחרון — הכל נתפס בעדשה.',
    image: '/gallery/family/family-041.jpg',
    objectPosition: 'center 40%',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-dusty-rose">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-charcoal text-center mb-4">
          שירותים
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-16"><span /></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="scroll-reveal group cursor-pointer"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="hover-frame relative aspect-[3/4] overflow-hidden mb-5 -mx-6 sm:mx-0">
                <img
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={1067}
                  className="w-full h-full object-cover"
                  style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
                  data-parallax="-0.06"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-light text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-sm font-light text-taupe leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
