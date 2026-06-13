import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const stats = [
  { label: 'Projects Delivered', value: '40+' },
  { label: 'Avg Turnaround', value: '5 Days' },
  { label: 'Markets Served', value: 'GCC, South Asia, Global' },
  { label: 'Cost Reduction vs Traditional', value: '~70%' },
]

const team = [
  { role: 'AI Creative Director', desc: 'Shapes the vision. Bridges human creativity with generative output.' },
  { role: 'Creative Technologist', desc: 'Builds and refines the generative pipeline for maximum fidelity.' },
  { role: 'Brand Strategist', desc: 'Ensures every frame serves the business objective and brand position.' },
]

const beliefs = [
  { title: 'AI is the medium. Taste is the differentiator.', desc: 'Technology generates. Humans direct. The best output comes from the intersection of speed and intention.' },
  { title: 'Brands deserve cinematic quality at any budget.', desc: 'Traditional production gatekeeps quality behind six-figure budgets. We believe every brand with a strong vision deserves broadcast-grade content.' },
  { title: 'Speed without compromise is not a contradiction.', desc: 'Our pipeline proves that fast turnaround and high production value can coexist. We do not cut corners. We cut timelines.' },
]

export default function About() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' })
  const beliefsRef = useRef(null)
  const beliefsInView = useInView(beliefsRef, { once: true, margin: '-80px' })

  return (
    <PageTransition>

      {/* ── Hero ── */}
      <section className="pt-40 md:pt-44 pb-24 px-6 md:px-12 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,169,110,0.06),transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-8 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-gold/30 inline-block" />
            About
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3rem,7vw,8rem)' }}
          >
            WE ARE<br />NEXUS AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-body text-white/35 text-base md:text-lg mt-8 max-w-md leading-[1.9]"
          >
            A generative production studio. Where speed meets taste.
          </motion.p>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── Philosophy + Stats ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-base relative">
        <div className="max-w-[1400px] mx-auto">
          <div ref={statsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-12">Our Philosophy</span>
              <p className="font-body text-white/45 text-[15px] leading-[2] mb-8">
                NEXUS AI is a generative production studio built for brands that demand more. We combine the speed of AI with the taste of human creative direction to produce cinematic content — brand films, commercials, and campaign assets — that would traditionally require six-figure budgets and months of lead time.
              </p>
              <p className="font-body text-white/45 text-[15px] leading-[2] mb-8">
                We are not a tool. We are not a platform. We are a studio. Our clients come to us with a vision, and we return with content that exceeds it.
              </p>
              <p className="font-body text-white/45 text-[15px] leading-[2]">
                Based in the UAE, serving the GCC and beyond — across luxury, technology, F&B, automotive, and real estate.
              </p>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 relative overflow-hidden self-start"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent" />
              <div className="relative">
                <h3 className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.4em] mb-12">Studio at a Glance</h3>
                <div className="space-y-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex justify-between items-baseline pb-6 border-b border-zinc-800 last:border-0 last:pb-0">
                      <span className="font-body text-[13px] text-white/35">{stat.label}</span>
                      <span className="font-heading text-lg font-semibold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── Team ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(200,169,110,0.02),transparent_60%)]" />
        <div className="max-w-[1400px] mx-auto relative">
          <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-8">The Team</span>
          <h2 className="font-display text-white leading-[0.88] mb-6" style={{ fontSize: 'clamp(2rem,4vw,4.5rem)' }}>
            DIRECTORS,<br />TECHNOLOGISTS<br />&amp; STRATEGISTS.
          </h2>
          <p className="font-body text-white/35 text-[14px] mb-16 max-w-lg leading-[1.9]">
            We assemble the right team for every project — lean, senior, and deeply experienced in both traditional creative production and generative AI.
          </p>

          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group p-10 rounded-2xl bg-card/40 border border-white/[0.05] relative overflow-hidden hover:border-gold/15 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-base border border-gold/15 mb-10 flex items-center justify-center">
                    <span className="font-display text-xl text-gold">0{i + 1}</span>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-white mb-4">{member.role}</h4>
                  <p className="font-body text-[13px] text-white/35 leading-[1.9]">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── Beliefs ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-base relative">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-8">What We Believe</span>
          <h2 className="font-display text-white leading-[0.88] mb-16 md:mb-20" style={{ fontSize: 'clamp(2rem,4vw,4.5rem)' }}>
            OUR PRINCIPLES.
          </h2>

          <div ref={beliefsRef} className="flex flex-col">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={beliefsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-10 md:gap-20 items-start py-14 md:py-16 border-b border-white/[0.05] last:border-0"
              >
                <span className="text-gold/20 font-display text-7xl leading-none mt-[-8px] flex-shrink-0 hidden md:block">&ldquo;</span>
                <div>
                  <h4 className="font-heading text-xl md:text-2xl font-semibold text-white mb-5 leading-[1.3]">{belief.title}</h4>
                  <p className="font-body text-[14px] text-white/35 leading-[1.9] max-w-2xl">{belief.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_50%,rgba(200,169,110,0.05),transparent_70%)]" />
        <div className="max-w-[900px] mx-auto relative">
          <span className="font-mono text-[10px] text-gold/40 uppercase tracking-[0.5em] block mb-10">Ready?</span>
          <h2 className="font-display text-white leading-[0.85] mb-10" style={{ fontSize: 'clamp(2.5rem,6vw,7rem)' }}>
            PITCH US<br /><span className="text-shimmer">YOUR BRAND.</span>
          </h2>
          <p className="font-body text-white/30 text-[15px] mb-14 max-w-sm mx-auto leading-[1.9]">
            If your brand demands cinematic quality and refuses to wait months for it, we should talk.
          </p>
          <Link to="/contact" className="btn-primary group">
            <span>Start a Project</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </PageTransition>
  )
}
