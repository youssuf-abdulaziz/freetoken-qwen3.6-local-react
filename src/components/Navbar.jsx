import { useState, useEffect } from 'react'
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
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting)
        if (!intersecting.length) {
          setActive('')
          return
        }
        const bandY = window.innerHeight * 0.425
        const crossing = intersecting.filter(
          (e) =>
            e.boundingClientRect.top <= bandY && e.boundingClientRect.bottom >= bandY
        )
        const pool = crossing.length ? crossing : intersecting
        const best = pool.reduce((a, b) => {
          const da = Math.abs(
            a.boundingClientRect.top + a.boundingClientRect.height / 2 - bandY
          )
          const db = Math.abs(
            b.boundingClientRect.top + b.boundingClientRect.height / 2 - bandY
          )
          return da - db
        })
        setActive('#' + best.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={styles.appHeader}>
      <nav className={styles.navbar} aria-label="Primary">
        <a href="#" className={styles.brand}>
          <i className={`${styles.brandIcon} bi bi-code-slash`} />
          PixelCraft
        </a>

        <ul className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    isActive
                      ? `${styles.link} ${styles['link--active']}`
                      : styles.link
                  }
                  aria-current={isActive ? 'true' : undefined}
                >
                  <svg
                    className={styles.linkFrame}
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M2.5 2 H97.5 A2.5 2.5 0 0 1 100 4.5 V25.5 A2.5 2.5 0 0 1 97.5 28 H2.5 A2.5 2.5 0 0 1 0 25.5 V4.5 A2.5 2.5 0 0 1 2.5 2 Z" />
                    <path
                      className={styles.linkFrame__notch}
                      d="M38 27 H62"
                    />
                  </svg>
                  <span className={styles.linkText}>
                    <i aria-hidden="true" className={`bi ${link.icon}`} />
                    {link.label}
                  </span>
                </a>
              </li>
            )
          })}
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
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    isActive
                      ? `${styles.bottomBar__link} ${styles['bottomBar__link--active']}`
                      : styles.bottomBar__link
                  }
                  aria-current={isActive ? 'true' : undefined}
                >
                  <svg
                    className={styles.linkBracket}
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M2 12 V2 H12" />
                    <path d="M98 18 V28 H88" />
                  </svg>
                  <span className={styles.bottomBar__linkText}>
                    <i aria-hidden="true" className={`bi ${link.icon}`} />
                    {link.label}
                  </span>
                </a>
              </li>
            )
          })}
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