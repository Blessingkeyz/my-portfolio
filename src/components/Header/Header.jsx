import { useState, useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Technologies' },
  { href: '#about', label: 'About' },
]

const socialLinks = [
  { href: 'https://www.github.com/blessingkeyz', icon: AiFillGithub },
  { href: 'https://www.linkedin.com/in/blessingkome/', icon: AiFillLinkedin },
  { href: 'https://www.twitter.com/blessingkeyzz', icon: AiFillTwitterCircle },
]

const Header = () => {
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
      ${scrolled
        ? 'bg-[#F2F2F2]/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm'
        : 'bg-[#F2F2F2]/80 dark:bg-dark-bg/80 backdrop-blur-sm lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none'
      }`}
    >
      <div className="max-w-content mx-auto px-4 pt-4 pb-3 md:px-12 md:pt-5 md:pb-4">
        <div className="flex items-center justify-between">

          <a href="/" className="flex items-center gap-2 text-dark-bg dark:text-white hover:opacity-80 transition-opacity shrink-0">
            <img
            src={isDark ? '/logo-dark.png' : '/logo-light.png'}
            alt="BlessingkeyzTheDev logo"
            className="h-7 w-auto sm:h-9 md:h-11"
          />
            <span className="text-base font-semibold sm:text-xl md:text-2xl">BlessingkeyzTheDev</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-lg text-slate-600 dark:text-white/75 hover:text-dark-bg dark:hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 shrink-0">
            <div className="hidden lg:flex items-center gap-1">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a key={href} href={href} className="p-2 rounded-full text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-[#212d45] transition-all hover:scale-110">
                  <Icon size="1.8rem" />
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-[#212d45] transition-all hover:scale-110"
            >
              {isDark ? <HiSun className="w-5 h-5 sm:w-6 sm:h-6" /> : <HiMoon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="flex lg:hidden p-2 rounded-full text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-[#212d45] transition-all"
            >
              {menuOpen ? <HiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <HiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="flex lg:hidden flex-col gap-1 mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-lg py-3 px-2 text-slate-600 dark:text-white/75 hover:text-dark-bg dark:hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-1 mt-3 pt-3 border-t border-slate-200 dark:border-white/10">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a key={href} href={href} className="p-2 rounded-full text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-[#212d45] transition-all hover:scale-110">
                  <Icon size="1.8rem" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
