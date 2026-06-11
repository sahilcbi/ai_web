import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-base border-t border-zinc-900">

      {/* ── Main ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

          {/* Brand + tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                <span className="font-display text-sm text-base leading-none">N</span>
              </div>
              <span className="font-display text-2xl tracking-widest text-white">NEXUS AI</span>
            </div>
            <p className="font-body text-sm text-zinc-400 leading-[2] max-w-xs mb-10">
              Where brands become cinema. AI-generated commercials and brand films — delivered at speed, without compromise.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono text-[10px] text-gold uppercase tracking-[0.25em] hover:gap-3 transition-all duration-300"
            >
              Start a project
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em] mb-8">Pages</h4>
            <div className="flex flex-col gap-5">
              {[['/', 'Home'], ['/work', 'Work'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="font-body text-sm text-zinc-400 hover:text-gold transition-colors duration-300">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em] mb-8">Services</h4>
            <div className="flex flex-col gap-5">
              {['AI Ad Production', 'Brand Films', 'Product Commercials', 'Social Campaigns', 'Strategy'].map((s) => (
                <Link key={s} to="/services" className="font-body text-sm text-zinc-400 hover:text-gold transition-colors duration-300">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em] mb-8">Contact</h4>
            <div className="flex flex-col gap-5">
              <a href="mailto:hello@nexusai.studio" className="font-body text-sm text-zinc-400 hover:text-gold transition-colors duration-300">
                hello@nexusai.studio
              </a>
              <span className="font-body text-sm text-zinc-400">Dubai, UAE</span>
              <div className="flex gap-4 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-white/30 hover:text-gold transition-colors duration-300 uppercase tracking-[0.2em]">
                  IG
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-white/30 hover:text-gold transition-colors duration-300 uppercase tracking-[0.2em]">
                  LI
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-zinc-900 mx-0 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-zinc-600 tracking-[0.15em] uppercase">
            &copy; 2026 NEXUS AI &mdash; All productions powered by generative intelligence
          </p>
          <p className="font-mono text-[10px] text-zinc-600 tracking-[0.15em] uppercase">
            Dubai &mdash; Sharjah, UAE
          </p>
        </div>
      </div>

    </footer>
  )
}
