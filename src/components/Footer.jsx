import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-base border-t border-white/[0.04]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="font-display text-sm text-base leading-none">N</span>
              </div>
              <span className="font-display text-xl tracking-wider text-white">NEXUS AI</span>
            </div>
            <p className="font-body text-white/35 text-[13px] leading-relaxed max-w-xs mb-8">
              Where Brands Become Cinema. AI-generated commercials, brand films, and campaign content — delivered at speed, without compromise.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-card/50 border border-white/[0.06] font-mono text-[10px] text-white/40 hover:text-gold hover:border-gold/20 transition-all duration-300"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-card/50 border border-white/[0.06] font-mono text-[10px] text-white/40 hover:text-gold hover:border-gold/20 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-mono text-[10px] text-white/25 uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link to="/work" className="font-body text-[13px] text-white/50 hover:text-gold transition-colors duration-300">Work</Link>
              <Link to="/services" className="font-body text-[13px] text-white/50 hover:text-gold transition-colors duration-300">Services</Link>
              <Link to="/about" className="font-body text-[13px] text-white/50 hover:text-gold transition-colors duration-300">About</Link>
              <Link to="/contact" className="font-body text-[13px] text-white/50 hover:text-gold transition-colors duration-300">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] text-white/25 uppercase tracking-[0.2em] mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <span className="font-body text-[13px] text-white/50">hello@nexusai.studio</span>
              <span className="font-body text-[13px] text-white/50">Dubai, UAE</span>
              <Link to="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-gold/70 uppercase tracking-[0.15em] mt-2 hover:text-gold transition-colors duration-300">
                Start a project →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-white/20 tracking-wide">
            &copy; 2026 NEXUS AI. ALL PRODUCTIONS POWERED BY GENERATIVE INTELLIGENCE.
          </p>
          <p className="font-mono text-[10px] text-white/20 tracking-wide">
            Sharjah / Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  )
}
