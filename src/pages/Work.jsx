import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,169,110,0.06),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.3em]"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-white mt-4"
          >
            SELECTED WORK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-white/45 text-base mt-4"
          >
            Full portfolio available on request.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-10 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-md font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'border-gold/50 text-gold bg-gold/[0.08] glow-gold'
                    : 'border-white/[0.08] text-white/40 hover:border-white/20 hover:text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-28 bg-base">
        <div className="max-w-7xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={`${project.industry}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative aspect-[4/3] rounded-xl bg-card/50 border border-white/[0.06] overflow-hidden card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 grid-pattern opacity-15" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-md bg-gold/[0.08] border border-gold/20 font-mono text-[8px] text-gold/80 uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <span className="font-mono text-[9px] text-white/35 uppercase tracking-[0.2em]">{project.industry}</span>
                  <p className="font-heading text-sm text-white/70 mt-1">{project.type}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center rounded-xl">
                  <span className="px-5 py-2.5 rounded-md border border-gold/60 text-gold font-mono text-[10px] uppercase tracking-widest hover:bg-gold hover:text-[#080808] transition-colors duration-300">
                    View Project
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-20 text-center">
            <p className="font-body text-white/40 text-sm mb-8">
              Interested in seeing more? We share full reels on request.
            </p>
            <Link to="/contact" className="btn-primary">
              <span>Get in Touch</span>
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
