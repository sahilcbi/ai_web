// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticElement from './MagneticElement'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)
  const linkRefs = useRef([])
  const location = useLocation()
  const isHome = location.pathname === '/'
  // On home: transparent until scroll. On all other pages: always frosted.
  const frosted = scrolled || !isHome

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  // Position underline under active link on mount/route change
  useEffect(() => {
    const activeIdx = navLinks.findIndex(l => l.path === location.pathname)
    if (activeIdx !== -1 && linkRefs.current[activeIdx] && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = linkRefs.current[activeIdx].getBoundingClientRect()
      setUnderline({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      })
    } else {
      setUnderline(u => ({ ...u, opacity: 0 }))
    }
  }, [location.pathname])

  const handleMouseEnter = (idx) => {
    if (linkRefs.current[idx] && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = linkRefs.current[idx].getBoundingClientRect()
      setUnderline({ left: linkRect.left - navRect.left, width: linkRect.width, opacity: 1 })
    }
  }

  const handleMouseLeave = () => {
    // snap back to active
    const activeIdx = navLinks.findIndex(l => l.path === location.pathname)
    if (activeIdx !== -1 && linkRefs.current[activeIdx] && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = linkRefs.current[activeIdx].getBoundingClientRect()
      setUnderline({ left: linkRect.left - navRect.left, width: linkRect.width, opacity: 1 })
    } else {
      setUnderline(u => ({ ...u, opacity: 0 }))
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          frosted
            ? 'bg-base/85 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <MagneticElement strength={0.1}>
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="font-display text-base text-base relative z-10 group-hover:text-black transition-colors duration-500">N</span>
              </div>
              <span className="font-display text-xl tracking-widest text-white group-hover:text-gold transition-colors duration-500">
                NEXUS AI
              </span>
            </Link>
          </MagneticElement>

          {/* Desktop links with sliding underline */}
          <div ref={navRef} className="hidden md:flex items-center gap-10 relative">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                ref={el => linkRefs.current[idx] = el}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                className={`font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-white' : 'text-white/40 hover:text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Sliding gold underline */}
            <div
              className="nav-underline"
              style={{
                left: `${underline.left}px`,
                width: `${underline.width}px`,
                opacity: underline.opacity,
              }}
            />
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticElement strength={0.2}>
              <Link to="/contact" className="btn-primary text-[10px] px-7 py-3">
                Initiate Project
              </Link>
            </MagneticElement>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/80"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-4 right-4 z-[999] bg-base/95 backdrop-blur-2xl border border-white/[0.06] rounded-2xl p-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-mono text-[11px] uppercase tracking-[0.3em] ${
                    location.pathname === link.path ? 'text-gold' : 'text-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary text-[10px] mt-2">
                Initiate Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}