import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <a href="#" className={styles.footer__brand}>
          <i className={`${styles.footer__brandIcon} bi bi-code-slash`} />
          PixelCraft
        </a>
        <ul className={styles.footer__links}>
          {[
            { label: 'Services', href: '#services' },
            { label: 'Work', href: '#portfolio' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#cta' },
          ].map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.footer__link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.footer__socials}>
          {[
            { icon: 'bi-github', label: 'GitHub', href: 'https://github.com' },
            {
              icon: 'bi-linkedin',
              label: 'LinkedIn',
              href: 'https://linkedin.com',
            },
            {
              icon: 'bi-twitter-x',
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ].map((s, i) => (
            <li key={i}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__socialLink}
                aria-label={s.label}
              >
                <i className={`bi ${s.icon}`} />
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.footer__copy}>
          &copy; {new Date().getFullYear()} PixelCraft Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
