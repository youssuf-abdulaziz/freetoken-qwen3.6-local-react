import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './Hero.module.css'

const stats = [
  { num: '200+', label: 'Projects', suffix: '' },
  { num: '98', label: 'Uptime', suffix: '%' },
  { num: '<24', label: 'Response', suffix: 'h' },
  { num: '8+', label: 'Years', suffix: '' },
  { num: '3x', label: 'Avg. ROI', suffix: '' },
]

const clients = [
  { name: 'Acme Co.', code: 'PXC-2401', status: 'LIVE' },
  { name: 'Lunar Labs', code: 'PXC-2402', status: 'DELIVERED' },
  { name: 'Northpeak', code: 'PXC-2403', status: 'DELIVERED' },
  { name: 'Voxel Studio', code: 'PXC-2404', status: 'LIVE' },
  { name: 'Arcform', code: 'PXC-2405', status: 'OPTIMIZING' },
  { name: 'Driftline', code: 'PXC-2406', status: 'DELIVERED' },
]

const processSteps = [
  { label: 'Discover', icon: 'bi-search' },
  { label: 'Design', icon: 'bi-palette' },
  { label: 'Build', icon: 'bi-gear' },
  { label: 'Launch', icon: 'bi-rocket-takeoff' },
]

const techBadges = [
  { name: 'React', icon: 'bi-filetype-jsx' },
  { name: 'TypeScript', icon: 'bi-filetype-tsx' },
  { name: 'Next.js', icon: 'bi-circle-fill' },
  { name: 'Node.js', icon: 'bi-box' },
  { name: 'Figma', icon: 'bi-file-earmark-diff' },
  { name: 'Three.js', icon: 'bi-box-fill' },
]

const differentiators = [
  { icon: 'bi-lightning', label: 'Speed First', desc: 'Every site ships under 3s load time. We measure performance before design.' },
  { icon: 'bi-graph-up-arrow', label: 'Conversion Built-in', desc: 'No generic templates. Every layout is engineered for a specific goal.' },
  { icon: 'bi-shield-check', label: 'A11y Standard', desc: 'WCAG 2.2 AA compliance isn\'t an upsell — it\'s the baseline.' },
]

const featuredWork = [
  { title: 'Voxel Store', cat: 'E-Commerce', metric: '+240% revenue' },
  { title: 'Northpeak CRM', cat: 'Web App', metric: '3x faster workflows' },
  { title: 'Arcform Site', cat: 'Brand Site', metric: '+180% leads' },
]

function Hero() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
      },
      { rootMargin: '100px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.hero__grid} />
      <div className={styles.hero__crosses} />

      {/* Corner brackets */}
      <div className={styles.hero__bracketTL} />
      <div className={styles.hero__bracketTR} />
      <div className={styles.hero__bracketBL} />
      <div className={styles.hero__bracketBR} />

      {/* Rulers */}
      <div className={styles.hero__rulerL} />
      <div className={styles.hero__rulerR} />

      <div className={styles.container}>
        {/* Top row — stamped entrance owned by the focal load sequence */}
        <div className={styles.hero__topRow}>
          <span className={styles.badge}>
            <i className={`${styles.badge__icon} bi bi-stars`} />
            Full-Service Web Agency
          </span>
          <span className={styles.liveBadge}>
            <span className={styles.liveDot} />
            Accepting Q4 Projects
          </span>
        </div>

        {/* Title — the authored focal stamp */}
        <h1 className={styles.title}>
          <span className={styles.title__brand}>PixelCraft</span>
          <span className={styles.title__tagline}>
            We build websites
            <br />
            that convert.
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          We design, develop, and optimize high-performing websites and web
          applications. No fluff. Just results.
        </p>

        {/* CTAs — single dominant primary + one supporting secondary */}
        <div className={styles.ctaRow}>
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

        {/* Differentiators */}
        <ScrollReveal delay={200}>
          <div className={styles.diffRow}>
            {differentiators.map((d, i) => (
              <div className={styles.diffCard} key={i}>
                <i className={`bi ${d.icon} ${styles.diffIcon}`} />
                <span className={styles.diffLabel}>{d.label}</span>
                <span className={styles.diffDesc}>{d.desc}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Process strip */}
        <ScrollReveal delay={250}>
          <div className={styles.processStrip}>
            {processSteps.map((step, i) => (
              <div className={styles.processStep} key={i}>
                <span
                  className={styles.processStep__watermark}
                  aria-hidden="true"
                >
                  <i className={`bi ${step.icon}`} />
                </span>
                <span className={styles.processStep__icon}>
                  <i className={`bi ${step.icon}`} />
                </span>
                <span className={styles.processStep__label}>{step.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Full stats row */}
        <ScrollReveal delay={300}>
          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <div className={styles.statCell} key={i}>
                <div className={styles.statCell__value}>
                  {s.num}<span className={styles.statCell__suffix}>{s.suffix}</span>
                </div>
                <div className={styles.statCell__label}>{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured Work */}
        <ScrollReveal delay={350}>
          <div className={styles.featuredSection}>
            <span className={styles.sectionLabel}>Featured Work</span>
            <div className={styles.featuredGrid}>
              {featuredWork.map((w, i) => (
                <div className={styles.featuredCard} key={i}>
                  <div className={styles.featuredCard__thumb}>
                    <span className={styles.featuredCard__metric}>{w.metric}</span>
                  </div>
                  <div className={styles.featuredCard__body}>
                    <span className={styles.featuredCard__cat}>{w.cat}</span>
                    <span className={styles.featuredCard__title}>{w.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tech stack */}
        <ScrollReveal delay={400}>
          <div className={styles.techStack}>
            <span className={styles.techStack__label}>Tech we ship with:</span>
            <div className={styles.techStack__pills}>
              {techBadges.map((t, i) => (
                <span className={styles.techStack__pill} key={i}>
                  <i className={`bi ${t.icon}`} />
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.marquee}>
          <div className={styles.marquee__track} ref={marqueeRef}>
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                WEB DESIGN &#8226; DEVELOPMENT &#8226; E-COMMERCE &#8226; UI/UX
                &#8226; BRAND IDENTITY &#8226; CREATIVE DIRECTION &#8226;
              </span>
            ))}
          </div>
        </div>

        <ScrollReveal delay={450}>
          <div className={styles.dossier}>
            <div className={styles.dossier__head}>
              <span className={styles.dossier__vol}>
                <i className={`bi bi-folder2-open ${styles.dossier__volIcon}`} />
                FIELD DOSSIER
                <span className={styles.dossier__volNum}>· PXC-2026</span>
              </span>
              <span className={styles.dossier__sheet}>
                SHEET A — CLIENT LEDGER
              </span>
            </div>
            <div className={styles.ledger}>
              {clients.map((c, i) => (
                <div className={styles.ledgerRow} key={i}>
                  <span className={styles.ledgerRow__n}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.ledgerRow__name}>{c.name}</span>
                  <span className={styles.ledgerRow__code}>{c.code}</span>
                  <span
                    className={
                      c.status === 'LIVE'
                        ? `${styles.ledgerRow__status} ${styles.ledgerRow__statusLive}`
                        : c.status === 'OPTIMIZING'
                        ? `${styles.ledgerRow__status} ${styles.ledgerRow__statusOpt}`
                        : styles.ledgerRow__status
                    }
                  >
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Hero
