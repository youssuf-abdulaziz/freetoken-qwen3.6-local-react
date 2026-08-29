import { useTheme } from '../useTheme'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Services', href: '#services', icon: 'bi-hammer' },
  { label: 'About', href: '#about', icon: 'bi-person' },
  { label: 'Work', href: '#portfolio', icon: 'bi-grid' },
  { label: 'Contact', href: '#cta', icon: 'bi-envelope' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.appHeader}>
      <nav className={styles.navbar} aria-label="Primary">
        <a href="#" className={styles.brand}>
          <i className={`${styles.brandIcon} bi bi-code-slash`} />
          PixelCraft
        </a>

        <ul className={styles.nav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                <i aria-hidden="true" className={`bi ${link.icon}`} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#cta" className={styles.cta}>
            Start a Project <i className="bi bi-arrow-right" />
          </a>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <i className="bi bi-sun-fill" />
            ) : (
              <i className="bi bi-moon-fill" />
            )}
          </button>
        </div>
      </nav>

      <nav className={styles.bottomBar} aria-label="Primary">
        <ul className={styles.bottomBar__links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.bottomBar__link}>
                <i aria-hidden="true" className={`bi ${link.icon}`} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className={styles.bottomBar__cta}
          aria-label="Start a project"
        >
          <i aria-hidden="true" className="bi bi-plus-lg" />
          <span>Start</span>
        </a>
      </nav>
    </header>
  )
}

export default Navbar