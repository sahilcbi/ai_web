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
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,169,110,0.06),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.3em] block mb-5"
          >
            About
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-7xl md:text-[6.5rem] text-white leading-[0.9]"
          >
            WE ARE NEXUS AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-white/40 text-lg mt-8 max-w-xl leading-relaxed"
          >
            A generative production studio. Where speed meets taste.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Philosophy + Stats */}
      <section className="py-28 md:py-36 px-6 bg-base relative">
        <div className="absolute inset-0 spotlight" />
        <div className="max-w-7xl mx-auto relative">
          <div ref={statsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Editorial text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.3em] block mb-8">Our Philosophy</span>
              <p className="font-body text-white/60 text-[15px] leading-[1.9] mb-7">
                NEXUS AI is a generative production studio built for brands that demand more. We combine the speed of AI with the taste of human creative direction to produce cinematic content — brand films, commercials, and campaign assets — that would traditionally require six-figure budgets and months of lead time.
              </p>
              <p className="font-body text-white/60 text-[15px] leading-[1.9] mb-7">
                We are not a tool. We are not a platform. We are a studio. Our clients come to us with a vision, and we return with content that exceeds it. Every project is shaped by experienced creative directors who understand both the art of storytelling and the science of generative models.
              </p>
              <p className="font-body text-white/60 text-[15px] leading-[1.9]">
                Based in the UAE, serving the GCC and beyond. We work with brands across luxury, technology, F&B, automotive, and real estate — any company that refuses to settle for ordinary content.
              </p>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="rounded-2xl bg-card/50 border border-white/[0.06] p-10 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent" />
              <div className="relative">
                <h3 className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.3em] mb-10">Studio at a Glance</h3>
                <div className="space-y-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex justify-between items-baseline pb-6 border-b border-white/[0.06] last:border-0 last:pb-0">
                      <span className="font-body text-[13px] text-white/40">{stat.label}</span>
                      <span className="font-heading text-xl font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Team */}
      <section className="py-28 md:py-36 px-6 bg-section relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(200,169,110,0.03),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <span className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.3em] block mb-5">The Team</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5 max-w-2xl leading-snug">
            A network of AI directors, creative technologists, and brand strategists.
          </h2>
          <p className="font-body text-white/40 text-[14px] mb-16 max-w-xl leading-relaxed">
            We assemble the right team for every project — lean, senior, and deeply experienced in both traditional creative production and generative AI.
          </p>

          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group p-9 rounded-xl bg-card/40 border border-white/[0.06] card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-section border border-gold/15 mb-7 flex items-center justify-center">
                    <span className="font-display text-xl text-gold">0{i + 1}</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white mb-3">{member.role}</h4>
                  <p className="font-body text-[13px] text-white/40 leading-[1.7]">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Beliefs */}
      <section className="py-28 md:py-36 px-6 bg-base relative">
        <div className="absolute inset-0 spotlight" />
        <div className="max-w-7xl mx-auto relative">
          <span className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.3em] block mb-5">What We Believe</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">Our principles.</h2>

          <div ref={beliefsRef} className="mt-16 space-y-0">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={beliefsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex gap-7 items-start py-10 border-b border-white/[0.05] first:pt-0 last:border-0"
              >
                <span className="text-gold/40 font-display text-5xl leading-none mt-[-4px] flex-shrink-0">"</span>
                <div>
                  <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-3 leading-snug">{belief.title}</h4>
                  <p className="font-body text-[13px] text-white/40 leading-[1.8] max-w-2xl">{belief.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 bg-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(200,169,110,0.04),transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-5 leading-snug">
            We take on selective projects.<br className="hidden md:block" /> Pitch us yours.
          </h2>
          <p className="font-body text-white/40 text-[14px] mb-10 max-w-md mx-auto leading-relaxed">
            If your brand demands cinematic quality and refuses to wait months for it, we should talk.
          </p>
          <Link to="/contact" className="btn-primary">
            <span>Start a Project</span>
            <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
