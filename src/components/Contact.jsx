import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `היי הילה! 👋\nשם: ${formData.name}\nטלפון: ${formData.phone}\nשירות: ${formData.service}\nהודעה: ${formData.message}`
    window.open(
      `https://wa.me/message/N4I2BDIEKGBYF1?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="scroll-reveal font-serif text-4xl md:text-5xl font-light text-soft-black text-center mb-3">
          בואו נדבר
        </h2>
        <div className="scroll-reveal heading-ornament mx-auto mb-6"><span /></div>
        <p className="scroll-reveal text-center text-taupe font-light mb-16 max-w-md mx-auto">
          רוצים לשמור רגע? ספרו לי קצת על מה שאתם מחפשים ואחזור אליכם בהקדם.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="scroll-reveal form-accent space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-charcoal mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-sand bg-transparent py-3 text-charcoal font-light focus:border-warm-brown focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-charcoal mb-2">
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-sand bg-transparent py-3 text-charcoal font-light focus:border-warm-brown focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm text-charcoal mb-2">
                סוג צילום
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border-b border-sand bg-transparent py-3 text-charcoal font-light focus:border-warm-brown focus:outline-none transition-colors appearance-none"
              >
                <option value="">בחרו שירות</option>
                <option value="משפחה">צילומי משפחה</option>
                <option value="זוגיות">צילומי זוגיות</option>
                <option value="הריון">צילומי הריון</option>
                <option value="אירועים">צילומי אירועים</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-charcoal mb-2">
                ספרו לי קצת
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-sand bg-transparent py-3 text-charcoal font-light focus:border-warm-brown focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-soft-black text-off-white py-4 font-light text-sm hover:bg-warm-brown transition-colors duration-500"
            >
              שליחה בוואטסאפ
            </button>
          </form>

          {/* Contact info */}
          <div className="scroll-reveal flex flex-col justify-center space-y-8" style={{ transitionDelay: '0.15s' }}>
            <div>
              <h3 className="font-serif text-xl text-soft-black mb-3">דברו איתי</h3>
              <p className="text-taupe font-light text-sm">
                מענה תוך 24 שעות. אני פה בשבילכם.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/N4I2BDIEKGBYF1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center group-hover:bg-sand transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-warm-brown">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.257-.154-2.876.855.855-2.876-.154-.257A8 8 0 1112 20z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-charcoal font-light group-hover:text-warm-brown transition-colors duration-300">
                וואטסאפ
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hila.photo.art"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center group-hover:bg-sand transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-warm-brown">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-charcoal font-light group-hover:text-warm-brown transition-colors duration-300">
                אינסטגרם
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+972529571799"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center group-hover:bg-sand transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-warm-brown">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-charcoal font-light group-hover:text-warm-brown transition-colors duration-300">
                052-957-1799
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
