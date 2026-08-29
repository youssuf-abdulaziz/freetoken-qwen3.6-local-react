import ScrollReveal from './ScrollReveal'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <ScrollReveal>
            <span className={styles.sectionLabel}>
              <i className="bi bi-people" /> About Us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={styles.sectionTitle}>
              A small team with a big impact on the web
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={styles.text}>
              We are a tight-knit team of designers and engineers who care
              deeply about craft. Every pixel, every line of code is
              intentional. We partner with startups, agencies, and established
              brands to build digital products people love.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className={styles.stats}>
              {[
                { num: '8+', label: 'Years' },
                { num: '200+', label: 'Projects' },
                { num: '150+', label: 'Clients' },
                { num: '98%', label: 'Retention' },
              ].map((stat, i) => (
                <div className={styles.stat} key={i}>
                  <div className={styles.stat__number}>
                    {stat.num}
                  </div>
                  <div className={styles.stat__label}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <div className={styles.aboutVisual}>
            <div className={styles.composition}>
              <div
                className={`${styles.compBlock} ${styles['compBlock--orange']}`}
              >
                <i className="bi bi-palette-fill" />
              </div>
              <div
                className={`${styles.compBlock} ${styles['compBlock--lime']}`}
              >
                <i className="bi bi-lightning-fill" />
              </div>
              <div
                className={`${styles.compBlock} ${styles['compBlock--striped']}`}
              >
                <i className="bi bi-heart-fill" />
              </div>
              <div
                className={`${styles.compBlock} ${styles['compBlock--outlined']}`}
              >
                <i className="bi bi-gear-fill" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
