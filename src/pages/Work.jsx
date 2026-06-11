import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const categories = ['ALL', 'AD FILMS', 'BRAND FILMS', 'PRODUCT', 'SOCIAL']

const projects = [
  { industry: 'LUXURY RETAIL', type: 'Brand Film', category: 'BRAND FILMS', gradient: 'from-gold/20 via-amber-900/10 to-base' },
  { industry: 'F&B', type: 'Product Commercial', category: 'PRODUCT', gradient: 'from-orange-950/40 via-amber-950/20 to-base' },
  { industry: 'TECH', type: 'AI Ad Campaign', category: 'AD FILMS', gradient: 'from-slate-600/30 via-slate-800/20 to-base' },
  { industry: 'AUTOMOTIVE', type: 'Brand Film', category: 'BRAND FILMS', gradient: 'from-gold/15 via-zinc-800/30 to-base' },
  { industry: 'FASHION', type: 'Social Campaign', category: 'SOCIAL', gradient: 'from-rose-950/35 via-purple-950/20 to-base' },
  { industry: 'REAL ESTATE', type: 'Product Commercial', category: 'PRODUCT', gradient: 'from-emerald-950/30 via-teal-950/15 to-base' },
  { industry: 'FINTECH', type: 'Ad Film', category: 'AD FILMS', gradient: 'from-blue-950/30 via-indigo-950/15 to-base' },
  { industry: 'HOSPITALITY', type: 'Brand Film', category: 'BRAND FILMS', gradient: 'from-amber-900/30 via-gold/10 to-base' },
  { industry: 'E-COMMERCE', type: 'Social Content', category: 'SOCIAL', gradient: 'from-violet-950/30 via-purple-950/15 to-base' },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-50px' })

  const filtered = activeFilter === 'ALL' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>

      {/* ── Hero ── */}
      <section className="pt-36 pb-24 px-6 md:px-12 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,169,110,0.06),transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-8 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-gold/30 inline-block" />
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3rem,7vw,8rem)' }}
          >
            SELECTED<br />WORK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-body text-white/35 text-base mt-8 leading-[1.9]"
          >
            Full portfolio available on request.
          </motion.p>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── Filter ── */}
      <section className="pt-10 pb-8 px-6 md:px-12 bg-base">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'border-gold/50 text-gold bg-gold/[0.08]'
                    : 'border-white/[0.07] text-white/35 hover:border-white/20 hover:text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="pb-24 px-6 md:px-12 bg-base">
        <div className="max-w-[1400px] mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div
                key={`${project.industry}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="work-card group relative aspect-[4/3] rounded-2xl bg-card/50 border border-white/[0.05] overflow-hidden cursor-pointer hover:border-gold/15 transition-colors duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 grid-texture opacity-30" />

                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1.5 rounded-full bg-gold/[0.08] border border-gold/15 font-mono text-[8px] text-gold/70 uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.25em] block mb-1">{project.industry}</span>
                  <p className="font-heading text-[15px] font-semibold text-white/70">{project.type}</p>
                </div>

                {/* Hover */}
                <div className="absolute inset-0 bg-black/65 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-2xl">
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gold/50 text-gold font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-base transition-colors duration-300">
                    <span>View Project</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-24 text-center">
            <p className="font-body text-white/30 text-[14px] mb-10 leading-[1.9]">
              Interested in seeing more? We share full reels on request.
            </p>
            <Link to="/contact" className="btn-primary group">
              <span>Get in Touch</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </PageTransition>
  )
}
