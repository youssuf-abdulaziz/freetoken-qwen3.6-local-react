import ScrollReveal from './ScrollReveal'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    icon: 'bi-code-slash',
    title: 'Web Development',
    desc: 'Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js for peak performance.',
  },
  {
    num: '02',
    icon: 'bi-palette',
    title: 'UI/UX Design',
    desc: 'User-centered design that looks bold and feels intuitive. We prototype, test, and refine every interaction.',
  },
  {
    num: '03',
    icon: 'bi-cart3',
    title: 'E-Commerce Solutions',
    desc: 'Scalable online stores with seamless checkout experiences, inventory management, and payment integration.',
  },
]

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.sectionHeader}>
        <ScrollReveal>
          <span className={styles.sectionLabel}>
            <i className="bi bi-grid" /> What We Do
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className={styles.sectionTitle}>
            Services that scale with your ambition
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className={styles.sectionSubtitle}>
            From concept to launch and beyond — we handle the full lifecycle so
            you can focus on growing your business.
          </p>
        </ScrollReveal>
      </div>
      <div className={styles.services__grid}>
        {services.map((service, i) => (
          <ScrollReveal key={service.num} delay={100 + i * 100}>
            <div className={styles.serviceCard}>
              <span className={styles.serviceCard__number}>
                {service.num}
              </span>
              <i
                className={`${styles.serviceCard__icon} bi ${service.icon}`}
              />
              <h3 className={styles.serviceCard__title}>
                {service.title}
              </h3>
              <p className={styles.serviceCard__desc}>{service.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Services
