import ScrollReveal from './ScrollReveal'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.badge}>
            <i className={`${styles.badge__icon} bi bi-stars`} />
            Full-Service Web Agency
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className={styles.title}>
            <span className={styles.title__brand}>PixelCraft</span>
            <span className={styles.title__tagline}>
              We build websites
              <br />
              that convert.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className={styles.subtitle}>
            We design, develop, and optimize high-performing websites and web
            applications. No fluff. Just results.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className={styles.actions}>
            <a href="#cta" className={`${styles.btn} ${styles.btnPrimary}`}>
              Start a Project{' '}
              <i className={`${styles.btn__icon} bi bi-arrow-right`} />
            </a>
            <a
              href="#portfolio"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              <i className={`${styles.btn__icon} bi bi-collection`} /> View Our
              Work
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className={styles.hero__visual}>
            <div className={styles.code__block}>
              <div className={styles.code__dots}>
                <span className={`${styles.code__dot} ${styles.code__dotRed}`} />
                <span className={`${styles.code__dot} ${styles.code__dotYellow}`} />
                <span className={`${styles.code__dot} ${styles.code__dotGreen}`} />
              </div>
              <pre className={styles.code__pre}>
                <code>
                  <span className={styles.code__keyword}>const</span>{' '}
                  <span className={styles.code__func}>buildWebsite</span>{' '}
                  <span className={styles.code__func}>= () =&gt;</span>{' '}
                  {'{'}
                  {'\n'}
                  {'  '}
                  <span className={styles.code__keyword}>return</span>{' '}
                  {'{'}
                  {'\n'}
                  {'    '}design:{' '}
                  <span className={styles.code__string}>'bold'</span>,
                  {'\n'}
                  {'    '}speed:{' '}
                  <span className={styles.code__number}>100</span>,
                  {'\n'}
                  {'    '}a11y:{' '}
                  <span className={styles.code__boolean}>true</span>
                  {'\n'}
                  {'  '}{'};'}
                  {'\n'}
                  {'};'}
                  <span className={styles.code__cursor}>&nbsp;</span>
                </code>
              </pre>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.marquee}>
          <div className={styles.marquee__track}>
            <span>
              WEB DESIGN &#8226; DEVELOPMENT &#8226; E-COMMERCE &#8226; UI/UX
              &#8226; BRAND IDENTITY &#8226; CREATIVE DIRECTION &#8226;
            </span>
            <span>
              WEB DESIGN &#8226; DEVELOPMENT &#8226; E-COMMERCE &#8226; UI/UX
              &#8226; BRAND IDENTITY &#8226; CREATIVE DIRECTION &#8226;
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
