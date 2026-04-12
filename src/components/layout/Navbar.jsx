import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems, CTAs } from '../../data/content'
import { images } from '../../data/images'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] ${
        scrolled
          ? 'bg-brand-deep/95 backdrop-blur-md border-b border-brand-lavender/10 shadow-lg shadow-black/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
        <Link to="/" className="flex items-center" aria-label="Person Health home">
          <img src={images.logos.main} alt="Person Health" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            to={CTAs.primary.href}
            className="bg-brand-primary hover:bg-brand-medium text-white text-sm font-heading font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            {CTAs.primary.text}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-brand-deep border-t border-brand-lavender/10 px-6 py-4 space-y-1"
          role="menu"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.label}
                to={item.href}
                role="menuitem"
                className={`block px-4 py-2.5 text-sm font-body font-medium rounded-lg transition-colors duration-200 ${
                  isActive ? 'text-white bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            to={CTAs.primary.href}
            role="menuitem"
            className="block px-4 py-2.5 text-sm font-heading font-semibold text-brand-medium hover:text-white transition-colors duration-200"
          >
            {CTAs.primary.text}
          </Link>
        </div>
      )}
    </nav>
  )
}
