import { useTheme } from '../useTheme'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#cta' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.appHeader}>
      <nav className={styles.navbar}>
        <a href="#" className={styles.brand}>
          <i className={`${styles.brandIcon} bi bi-code-slash`} />
          PixelCraft
        </a>

        <ul className={styles.nav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
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
          <button
            className={styles.mobileToggle}
            aria-label="Toggle menu"
            onClick={() => {}}
          >
            <i className="bi bi-list" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
