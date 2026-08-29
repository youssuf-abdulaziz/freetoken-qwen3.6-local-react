import ScrollReveal from './ScrollReveal'
import styles from './Portfolio.module.css'

const projects = [
  {
    n: '001',
    title: 'Finova Dashboard',
    cat: 'Web App',
    desc: 'A real-time financial analytics dashboard with interactive charts, dark mode, and team collaboration.',
    tags: ['React', 'TypeScript', 'D3.js'],
    icon: 'bi-graph-up',
    metric: '+240%',
    status: 'LIVE',
  },
  {
    n: '002',
    title: 'Verdant E-Commerce',
    cat: 'E-Commerce',
    desc: 'Full-featured online store for a sustainable fashion brand with headless CMS and Stripe integration.',
    tags: ['Next.js', 'Stripe', 'Sanity'],
    icon: 'bi-bag-check',
    metric: '3.2x',
    status: 'DELIVERED',
  },
  {
    n: '003',
    title: 'Atlas SaaS Landing',
    cat: 'Brand Site',
    desc: 'Conversion-optimized landing page for a B2B SaaS product with A/B testing and analytics.',
    tags: ['React', 'Tailwind', 'Motion'],
    icon: 'bi-rocket-takeoff',
    metric: '+180%',
    status: 'DELIVERED',
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.sectionHeader}>
        <ScrollReveal>
          <span className={styles.sectionLabel}>
            <i className="bi bi-collection" /> Our Work
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className={styles.sectionTitle}>Selected works, spec-side</h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className={styles.sectionSubtitle}>
            A dossier of websites and applications built for clients across
            industries, filed as engineering spec sheets.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.works}>
        <div className={styles.works__head}>
          <span className={styles.works__vol}>
            <i className={`bi bi-folder2-open ${styles.works__volIcon}`} />
            FIELD DOSSIER
            <span className={styles.works__volNum}>· PXC-2026</span>
          </span>
          <span className={styles.works__sheet}>
            SHEET B <span className={styles.works__sheetSep}>—</span> THE WORKS
          </span>
        </div>

        <div className={styles.works__grid}>
          {projects.map((project) => (
            <ScrollReveal key={project.title} delay={100 + project.n * 80}>
              <article className={styles.workCard}>
                <div className={styles.workCard__art}>
                  <span className={styles.workCard__cross} />
                  <span className={styles.workCard__n}>
                    <i className={`bi bi-hash ${styles.workCard__nIcon}`} />
                    {project.n}
                  </span>
                  <i className={`bi ${project.icon} ${styles.workCard__icon}`} />
                  <span className={styles.workCard__dim}>φ 16:10</span>
                </div>
                <div className={styles.workCard__body}>
                  <div className={styles.workCard__specs}>
                    <span className={styles.workCard__spec}>
                      <span className={styles.workCard__specLabel}>Cat</span>
                      {project.cat}
                    </span>
                    <span className={styles.workCard__spec}>
                      <span className={styles.workCard__specLabel}>Stack</span>
                      {project.tags.join(' · ')}
                    </span>
                  </div>
                  <h3 className={styles.workCard__title}>{project.title}</h3>
                  <p className={styles.workCard__desc}>{project.desc}</p>
                  <div className={styles.workCard__foot}>
                    <span className={styles.workCard__metric}>{project.metric}</span>
                    <span
                      className={
                        project.status === 'LIVE'
                          ? `${styles.workCard__status} ${styles.workCard__statusLive}`
                          : styles.workCard__status
                      }
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.works__stampRow}>
          <span className={styles.works__stamp}>
            <i className={`bi bi-patch-check-fill ${styles.works__stampIcon}`} />
            <span className={styles.works__stampText}>
              APPROVED
              <br />
              FOR BUILD
            </span>
          </span>
          <span className={styles.works__stampNote}>
            All works QA'd in-browser against conversion &amp; a11y baselines.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
