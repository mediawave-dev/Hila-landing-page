const services = [
  {
    title: 'משפחה',
    description: 'צילומי משפחה טבעיים ומלאי חיים — כי כל משפחה היא סיפור ייחודי.',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
  },
  {
    title: 'זוגיות',
    description: 'לתפוס את הכימיה, את המבטים ואת הרגעים השקטים שביניכם.',
    image: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&q=80',
  },
  {
    title: 'הריון',
    description: 'תיעוד התקופה הקסומה הזו באור רך ובאווירה אינטימית.',
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&q=80',
  },
  {
    title: 'אירועים',
    description: 'מרגעי ההכנות ועד לריקוד האחרון — הכל נתפס בעדשה.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-16">
          שירותים
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl font-light text-soft-black mb-2">
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
