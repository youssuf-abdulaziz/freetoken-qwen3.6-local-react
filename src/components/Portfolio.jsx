import ScrollReveal from './ScrollReveal'
import styles from './Portfolio.module.css'

const projects = [
  {
    title: 'Finova Dashboard',
    desc: 'A real-time financial analytics dashboard with interactive charts, dark mode, and team collaboration features.',
    tags: ['React', 'TypeScript', 'D3.js'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: 'bi-graph-up',
  },
  {
    title: 'Verdant E-Commerce',
    desc: 'Full-featured online store for a sustainable fashion brand with headless CMS and Stripe integration.',
    tags: ['Next.js', 'Stripe', 'Sanity'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    icon: 'bi-bag-check',
  },
  {
    title: 'Atlas SaaS Landing',
    desc: 'Conversion-optimized landing page for a B2B SaaS product with A/B testing and analytics.',
    tags: ['React', 'Tailwind', 'Motion'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: 'bi-rocket-takeoff',
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
          <h2 className={styles.sectionTitle}>Selected projects</h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className={styles.sectionSubtitle}>
            A showcase of websites and applications we have built for clients
            across industries.
          </p>
        </ScrollReveal>
      </div>
      <div className={styles.portfolio__grid}>
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={100 + i * 100}>
            <article className={styles.projectCard}>
              <div
                className={styles.projectCard__thumb}
                style={{ background: project.gradient }}
              >
                <i className={'bi ' + project.icon} />
              </div>
              <div className={styles.projectCard__body}>
                <h3 className={styles.projectCard__title}>
                  {project.title}
                </h3>
                <p className={styles.projectCard__desc}>
                  {project.desc}
                </p>
                <div className={styles.projectCard__tags}>
                  {project.tags.map((tag, j) => (
                    <span className={styles.tag} key={j}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
