// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
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
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-colors duration-500 ${
        scrolled ? 'bg-base/70 backdrop-blur-2xl border-b border-white/[0.04]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
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

        <div className="hidden md:flex items-center gap-10 bg-white/[0.02] px-8 py-3 rounded-full border border-white/[0.05] backdrop-blur-md">
          {navLinks.map((link) => (
            <MagneticElement key={link.path} strength={0.2}>
              <Link
                to={link.path}
                className={`relative font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div layoutId="dot" className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />
                )}
              </Link>
            </MagneticElement>
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticElement strength={0.2}>
            <Link to="/contact" className="btn-primary text-[10px] px-7 py-3 rounded-full">
              Initiate Project
            </Link>
          </MagneticElement>
        </div>

        <button
          className="md:hidden text-white/80"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.nav>
  )
}