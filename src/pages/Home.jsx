import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ParticleBackground from '../components/ParticleBackground'
import MarqueeStrip from '../components/MarqueeStrip'

/* ─── Animation Variants ─── */
const letterAnim = {
  initial: { y: '100%', opacity: 0 },
  animate: (i) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
  }),
}

function SplitText({ text, className, delay = 0 }) {
  return (
    <span className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i + delay * 10}
          variants={letterAnim}
          initial="initial"
          animate="animate"
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Data ─── */
const services = [
  { title: 'AI Ad Production', desc: 'High-converting video ads generated with human creative oversight. Indistinguishable from traditional production at a fraction of the timeline.' },
  { title: 'Brand Films', desc: 'Long-form cinematic storytelling. Concept to final cut, fully AI-driven with experienced creative direction at every stage.' },
  { title: 'Product Commercials', desc: 'Category-defining product visuals. Photorealistic renders, dynamic environments, cinematic lighting. Your product as the hero.' },
  { title: 'Social Campaigns', desc: 'Platform-native content engineered for attention. Hooks, cut-downs, format variations — all from one unified production pipeline.' },
]

const work = [
  { industry: 'Luxury Retail', type: 'Brand Film', gradient: 'from-gold/15 via-amber-900/10 to-transparent' },
  { industry: 'F&B', type: 'Product Commercial', gradient: 'from-orange-900/20 via-amber-950/10 to-transparent' },
  { industry: 'Tech', type: 'Ad Campaign', gradient: 'from-slate-700/25 via-slate-900/15 to-transparent' },
  { industry: 'Automotive', type: 'Brand Film', gradient: 'from-gold/10 via-zinc-800/20 to-transparent' },
]

const stats = [
  { value: '40+', label: 'Productions Delivered' },
  { value: '5', label: 'Day Avg Turnaround' },
  { value: '70%', label: 'Cost Reduction vs Traditional' },
  { value: '12', label: 'Markets Served' },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])

  return (
    <PageTransition>

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO — Full Viewport, Dramatic
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
        <ParticleBackground />

        {/* Gradient overlay at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent z-[1]" />

        {/* Corner decorative lines */}
        <div className="absolute top-24 left-8 w-px h-24 bg-gradient-to-b from-gold/30 to-transparent z-10 hidden lg:block" />
        <div className="absolute top-24 right-8 w-px h-24 bg-gradient-to-b from-gold/30 to-transparent z-10 hidden lg:block" />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 px-[5vw] pb-[8vh] md:pb-[12vh]">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.4em] mb-6"
          >
            AI Production Studio — Dubai, UAE
          </motion.p>

          {/* Main headline */}
          <h1 className="font-display text-[clamp(4rem,13vw,14rem)] leading-[0.82] tracking-tight text-white">
            <SplitText text="YOUR BRAND." />
            <br />
            <span className="text-gold">
              <SplitText text="CINEMATIC." delay={0.8} />
            </span>
          </h1>

          {/* Sub copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="font-body text-white/40 text-[15px] md:text-base leading-[1.8] max-w-md">
              We produce AI-generated commercials and brand films for companies that refuse to look ordinary.
            </p>
            <div className="flex gap-4 flex-shrink-0">
              <Link to="/work" className="btn-primary">
                See Our Work
              </Link>
              <Link to="/contact" className="btn-outline">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: MARQUEE STRIP
      ═══════════════════════════════════════════ */}
      <MarqueeStrip />

      {/* ═══════════════════════════════════════════
          SECTION 3: SHOWREEL / FEATURED
      ═══════════════════════════════════════════ */}
      <section className="py-[15vh] md:py-[20vh] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <FadeUp>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/[0.06] bg-card group cursor-pointer">
              {/* Gradient visual placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-card to-base" />
              <div className="absolute inset-0 grid-texture" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                  <Play size={28} className="text-gold ml-1" fill="rgba(200,169,110,0.3)" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.3em]">Showreel 2026</span>
              </div>
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.3em]">02:40</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: SERVICES — Editorial Stack
      ═══════════════════════════════════════════ */}
      <section className="py-[15vh] md:py-[20vh] px-[5vw] relative">
        <div className="max-w-[1400px] mx-auto">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-32">
              <div>
                <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.4em] block mb-4">What We Do</span>
                <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.85] text-white">
                  SERVICES
                </h2>
              </div>
              <Link to="/services" className="mt-6 md:mt-0 font-mono text-[11px] text-white/30 uppercase tracking-[0.2em] hover:text-gold transition-colors flex items-center gap-2">
                View all <ArrowRight size={12} />
              </Link>
            </div>
          </FadeUp>

          <div className="flex flex-col">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-16 py-12 md:py-16 border-t border-white/[0.06] hover:border-gold/20 transition-colors duration-500">
                  <span className="font-display text-[3.5rem] md:text-[5rem] text-white/[0.04] group-hover:text-gold/20 transition-colors duration-500 leading-none">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-500">
                      {s.title}
                    </h3>
                    <p className="font-body text-white/35 text-[14px] md:text-[15px] leading-[1.8] max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                  <ArrowRight size={20} className="text-white/10 group-hover:text-gold group-hover:translate-x-2 transition-all duration-500 hidden md:block mt-4" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: SELECTED WORK — Grid
      ═══════════════════════════════════════════ */}
      <section className="py-[15vh] md:py-[20vh] px-[5vw] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(200,169,110,0.03),transparent_60%)]" />
        <div className="max-w-[1400px] mx-auto relative">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
              <div>
                <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.4em] block mb-4">Selected Work</span>
                <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.85] text-white">
                  PRODUCTIONS
                </h2>
              </div>
              <Link to="/work" className="mt-6 md:mt-0 font-mono text-[11px] text-white/30 uppercase tracking-[0.2em] hover:text-gold transition-colors flex items-center gap-2">
                Full portfolio <ArrowRight size={12} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {work.map((w, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.05] bg-card cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient}`} />
                  <div className="absolute inset-0 grid-texture opacity-50" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                    <span className="font-mono text-[9px] text-gold/50 uppercase tracking-[0.3em] self-start px-3 py-1.5 rounded-full border border-gold/10 bg-gold/[0.03]">
                      {w.type}
                    </span>
                    <div>
                      <h4 className="font-heading text-xl md:text-2xl font-semibold text-white">{w.industry}</h4>
                      <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.2em] mt-2">{w.type}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gold/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <span className="btn-outline text-[10px] px-6 py-3">View Project</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: STATS — Minimal Counters
      ═══════════════════════════════════════════ */}
      <section className="py-[12vh] md:py-[15vh] px-[5vw] border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1} className="text-center md:text-left">
                <span className="font-display text-[clamp(3rem,6vw,5rem)] text-white leading-none">{s.value}</span>
                <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.2em] mt-3">{s.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: PROCESS — Horizontal Steps
      ═══════════════════════════════════════════ */}
      <section className="py-[15vh] md:py-[20vh] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <FadeUp>
            <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.4em] block mb-4">How It Works</span>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.85] text-white mb-20 md:mb-28">
              PROCESS
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { num: '01', title: 'Brief', desc: 'You share your brand, product, and campaign goals with us.' },
              { num: '02', title: 'Concept', desc: 'We return a creative direction, script, and visual language within 48 hours.' },
              { num: '03', title: 'Production', desc: 'Our AI pipeline generates, refines, and renders your content to broadcast spec.' },
              { num: '04', title: 'Delivery', desc: 'You receive final assets. Fast. No compromises. Ready to deploy.' },
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="relative">
                  {/* Number */}
                  <span className="font-display text-5xl text-gold/20 mb-5 block">{step.num}</span>
                  {/* Connecting line on desktop */}
                  {i < 3 && <div className="hidden md:block absolute top-7 left-full w-full h-px bg-white/[0.04]" />}
                  <h4 className="font-heading text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="font-body text-[13px] text-white/30 leading-[1.8]">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8: CTA — Dramatic Close
      ═══════════════════════════════════════════ */}
      <section className="py-[20vh] md:py-[25vh] px-[5vw] text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(200,169,110,0.04),transparent_70%)]" />

        <div className="relative max-w-[1000px] mx-auto">
          <FadeUp>
            <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.4em] block mb-8">Ready?</span>
            <h2 className="font-display text-[clamp(4rem,12vw,12rem)] leading-[0.82] tracking-tight text-white">
              INITIATE<br />
              <span className="text-gold">PRODUCTION.</span>
            </h2>
            <p className="font-body text-white/30 text-[15px] mt-8 mb-12 max-w-md mx-auto leading-[1.8]">
              Tell us about your brand. We'll come back with a creative direction within 48 hours.
            </p>
            <Link to="/contact" className="btn-primary text-[13px] px-12 py-5">
              Submit Brief
            </Link>
          </FadeUp>
        </div>
      </section>

    </PageTransition>
  )
}
