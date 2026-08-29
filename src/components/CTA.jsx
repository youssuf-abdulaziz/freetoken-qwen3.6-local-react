import ScrollReveal from './ScrollReveal'
import styles from './CTA.module.css'

function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.cta__bgText}>LET'S TALK</div>
      <div className={styles.cta__inner}>
        <ScrollReveal>
          <h2 className={styles.cta__title}>
            Ready to bring your vision to life?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className={styles.cta__text}>
            Let us talk about your project. Whether you need a landing page or a
            full-stack application, we would love to hear from you.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <a
            href="mailto:hello@pixelcraft.studio"
            className={styles.cta__btn}
          >
            Get in Touch{' '}
            <i className={`${styles.cta__btnIcon} bi bi-send`} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTA
