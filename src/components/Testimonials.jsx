import ScrollReveal from './ScrollReveal'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Finova',
    quote:
      'PixelCraft transformed our platform. The new dashboard increased user engagement by 40% and our customers love the experience.',
    initial: 'S',
  },
  {
    name: 'Marcus Rivera',
    role: 'Founder, Verdant',
    quote:
      'They did not just build a store — they built a brand. Sales increased 3x in the first quarter after launch.',
    initial: 'M',
  },
  {
    name: 'Aisha Patel',
    role: 'Product Lead, Atlas',
    quote:
      'The attention to detail is remarkable. Every animation, every interaction was thoughtful. Our conversion rate doubled.',
    initial: 'A',
  },
]

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.sectionHeader}>
        <ScrollReveal>
          <span className={styles.sectionLabel}>
            <i className="bi bi-chat-quote" /> Testimonials
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className={styles.sectionTitle}>What our clients say</h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className={styles.sectionSubtitle}>
            Do not take our word for it — hear from the teams we have helped
            succeed.
          </p>
        </ScrollReveal>
      </div>
      <div className={styles.testimonials__grid}>
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={100 + i * 100}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialCard__quote}>&ldquo;</div>
              <p className={styles.testimonialCard__text}>{t.quote}</p>
              <div className={styles.testimonialCard__author}>
                <div className={styles.testimonialCard__avatar}>
                  {t.initial}
                </div>
                <div>
                  <div className={styles.testimonialCard__name}>
                    {t.name}
                  </div>
                  <div className={styles.testimonialCard__role}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
