import { motion, useInView, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ParticleBackground from '../components/ParticleBackground'
import MarqueeStrip from '../components/MarqueeStrip'

/* ─── Letter Split ─── */
const letterAnim = {
  initial: { y: '110%', opacity: 0 },
  animate: (i) => ({
    y: '0%', opacity: 1,
    transition: { duration: 0.9, delay: i * 0.035, ease: [0.16, 1, 0.3, 1] },
  }),
}

function SplitText({ text, className, delay = 0 }) {
  return (
    <span className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span key={i} custom={i + delay * 10} variants={letterAnim}
          initial="initial" animate="animate" className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

/* ─── Fade-up on scroll ─── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

/* ─── Animated Counter ─── */
function Counter({ target, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const num = parseFloat(target.replace(/[^0-9.]/g, ''))
    const ctrl = animate(count, num, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Number.isInteger(num) ? Math.round(v).toString() : v.toFixed(0)),
    })
    return ctrl.stop
  }, [inView])

  return <span ref={ref}>{display}{suffix}</span>
}

/* ─── Data ─── */
const services = [
  { num: '01', title: 'AI Ad Production', desc: 'High-converting video ads generated with human creative oversight. Indistinguishable from traditional production.' },
  { num: '02', title: 'Brand Films', desc: 'Long-form cinematic storytelling. Concept to final cut, fully AI-driven with experienced creative direction.' },
  { num: '03', title: 'Product Commercials', desc: 'Category-defining visuals. Photorealistic renders, dynamic environments, cinematic lighting.' },
  { num: '04', title: 'Social Campaigns', desc: 'Platform-native content engineered for attention. Hooks, cut-downs, format variations — unified pipeline.' },
]

const work = [
  { industry: 'Luxury Retail', type: 'Brand Film', size: 'large', gradient: 'from-gold/[0.12] via-amber-900/10 to-transparent' },
  { industry: 'F&B', type: 'Product Commercial', size: 'sm1', gradient: 'from-orange-900/20 via-amber-950/10 to-transparent' },
  { industry: 'Tech', type: 'Ad Campaign', size: 'sm2', gradient: 'from-slate-700/25 via-slate-900/15 to-transparent' },
  { industry: 'Automotive', type: 'Brand Film', size: 'full1', gradient: 'from-gold/[0.08] via-zinc-800/20 to-transparent' },
  { industry: 'Fashion', type: 'Campaign', size: 'full2', gradient: 'from-zinc-700/20 via-zinc-900/15 to-transparent' },
]

const stats = [
  { value: '40', suffix: '+', label: 'Productions Delivered' },
  { value: '5', suffix: ' days', label: 'Average Turnaround' },
  { value: '70', suffix: '%', label: 'Cost vs Traditional' },
  { value: '12', suffix: '', label: 'Markets Served' },
]

const clients = ['Dettol', 'Banana Boat', 'Hamdard', 'Finish', 'Dawlance', 'Bisconni', 'Unilever', 'L\'Oréal']

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.94])
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <PageTransition>

      {/* ══════════════════════════════════════════
          SECTION 1: HERO — Full-screen dramatic
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
        <ParticleBackground />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(5,5,5,0.95),transparent_50%)] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent z-[1]" />

        {/* Viewfinder corners — top-left */}
        <div className="absolute top-28 left-8 z-10 hidden lg:block">
          <div className="w-8 h-8 border-t border-l border-gold/40" />
        </div>
        {/* top-right */}
        <div className="absolute top-28 right-8 z-10 hidden lg:block">
          <div className="w-8 h-8 border-t border-r border-gold/40" />
        </div>
        {/* bottom-right */}
        <div className="absolute bottom-20 right-8 z-10 hidden lg:block">
          <div className="w-8 h-8 border-b border-r border-gold/40" />
        </div>

        {/* HUD: top status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-28 left-1/2 -translate-x-1/2 z-10 hidden lg:flex items-center gap-4"
        >
          <span className="font-mono text-[9px] text-gold/30 uppercase tracking-[0.4em]">NX-2026</span>
          <span className="w-1 h-1 rounded-full bg-gold/30" />
          <span className="font-mono text-[9px] text-gold/30 uppercase tracking-[0.4em]">Dubai, UAE</span>
          <span className="w-1 h-1 rounded-full bg-gold/30" />
          <span className="font-mono text-[9px] text-gold/30 uppercase tracking-[0.4em]">Est. 2024</span>
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="relative z-10 px-[5vw] pb-[8vh] md:pb-[12vh]">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.5em] mb-6 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-gold/40 inline-block" />
            AI Production Studio — Dubai
          </motion.p>

          {/* Headline */}
          <h1 className="font-display leading-[0.88] tracking-tight text-white" style={{ fontSize: 'clamp(3.5rem,9vw,10rem)' }}>
            <SplitText text="YOUR BRAND." />
            <br />
            <span className="text-shimmer">
              <SplitText text="CINEMATIC." delay={0.8} />
            </span>
          </h1>

          {/* Sub copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.9 }}
            className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div className="max-w-xs">
              <p className="font-body text-white/35 text-[14px] leading-[1.9]">
                AI-generated commercials and brand films for companies that refuse to look ordinary.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Link to="/work" className="btn-primary group">
                See Our Work
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[8px] text-white/20 uppercase tracking-[0.4em] [writing-mode:vertical-rl]">Scroll</span>
          <motion.div animate={{ scaleY: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
            <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2: MARQUEE
      ══════════════════════════════════════════ */}
      <MarqueeStrip />

      {/* ══════════════════════════════════════════
          SECTION 3: SHOWREEL
      ══════════════════════════════════════════ */}
      <section className="py-[14vh] md:py-[20vh] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <FadeUp>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/[0.06] bg-card group cursor-pointer viewfinder">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.05] via-card to-base" />
              <div className="absolute inset-0 grid-texture" />

              {/* Animated scan line */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              {/* Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gold/20 glow-pulse" style={{ transform: 'scale(1.6)' }} />
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                    <Play size={28} className="text-gold ml-1" fill="rgba(200,169,110,0.3)" />
                  </div>
                </div>
              </div>

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

      <hr className="hr-gold mx-[5vw]" />

      {/* ══════════════════════════════════════════
          SECTION 4: CLIENTS LOGO MARQUEE
      ══════════════════════════════════════════ */}
      <section className="py-[6vh] md:py-[8vh] overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-0 w-max animate-marquee">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="px-12 flex items-center gap-12">
              <span className="font-heading text-[11px] font-semibold text-white/20 uppercase tracking-[0.3em] whitespace-nowrap hover:text-white/50 transition-colors duration-300 cursor-default">{c}</span>
              <span className="w-1 h-1 rounded-full bg-gold/20 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ══════════════════════════════════════════
          SECTION 5: SERVICES — Editorial Stack
      ══════════════════════════════════════════ */}
      <section className="py-[12vh] md:py-[16vh] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-28">
              <div>
                <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-4">What We Do</span>
                <h2 className="font-display leading-[0.85] text-white" style={{ fontSize: 'clamp(3rem,7vw,7rem)' }}>
                  SERVICES
                </h2>
              </div>
              <Link to="/services" className="mt-6 md:mt-0 group font-mono text-[11px] text-white/30 uppercase tracking-[0.2em] hover:text-gold transition-colors flex items-center gap-2">
                View all <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeUp>

          <div className="flex flex-col divide-y divide-white/[0.05]">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-10 md:py-14 hover:border-gold/[0.12] transition-all duration-500 cursor-pointer">
                  <span className="font-display text-[4rem] md:text-[6rem] text-white/[0.03] group-hover:text-gold/[0.12] transition-colors duration-500 leading-none w-28 flex-shrink-0">
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-500" style={{ fontSize: 'clamp(1.4rem,2.5vw,2.2rem)' }}>
                      {s.title}
                    </h3>
                    <p className="font-body text-white/30 text-[14px] leading-[1.9] max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-gold/40 flex items-center justify-center transition-all duration-500 group-hover:bg-gold/5">
                      <ArrowUpRight size={16} className="text-white/20 group-hover:text-gold transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ══════════════════════════════════════════
          SECTION 6: SELECTED WORK — Asymmetric Grid
      ══════════════════════════════════════════ */}
      <section className="py-[12vh] md:py-[18vh] px-[5vw] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(200,169,110,0.025),transparent_65%)]" />
        <div className="max-w-[1400px] mx-auto relative">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
              <div>
                <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-4">Selected Work</span>
                <h2 className="font-display leading-[0.85] text-white" style={{ fontSize: 'clamp(3rem,7vw,7rem)' }}>
                  PRODUCTIONS
                </h2>
              </div>
              <Link to="/work" className="mt-6 md:mt-0 group font-mono text-[11px] text-white/30 uppercase tracking-[0.2em] hover:text-gold transition-colors flex items-center gap-2">
                Full portfolio <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeUp>

          {/* Asymmetric grid: large left + 2 stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Large featured */}
            <FadeUp>
              <div className="work-card group relative md:row-span-2 aspect-square md:aspect-auto rounded-2xl overflow-hidden border border-white/[0.05] bg-card cursor-pointer"
                style={{ minHeight: '420px' }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${work[0].gradient}`} />
                <div className="absolute inset-0 grid-texture opacity-40" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/[0.06] to-transparent" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                  <span className="font-mono text-[9px] text-gold/50 uppercase tracking-[0.3em] self-start px-3 py-1.5 rounded-full border border-gold/[0.12] bg-gold/[0.04]">
                    {work[0].type}
                  </span>
                  <div>
                    <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-2">{work[0].type}</p>
                    <h4 className="font-heading text-2xl md:text-3xl font-semibold text-white group-hover:text-gold transition-colors duration-500">{work[0].industry}</h4>
                  </div>
                </div>
                <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <ArrowUpRight size={16} className="text-gold" />
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Two stacked right */}
            <div className="flex flex-col gap-4">
              {work.slice(1, 3).map((w, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="work-card group relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.05] bg-card cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient}`} />
                    <div className="absolute inset-0 grid-texture opacity-40" />
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                      <span className="font-mono text-[8px] text-gold/40 uppercase tracking-[0.3em] self-start px-2.5 py-1 rounded-full border border-gold/[0.1] bg-gold/[0.03]">
                        {w.type}
                      </span>
                      <h4 className="font-heading text-lg md:text-xl font-semibold text-white group-hover:text-gold transition-colors duration-500">{w.industry}</h4>
                    </div>
                    <div className="absolute inset-0 bg-gold/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Bottom row: 2 equal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {work.slice(3).map((w, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="work-card group relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.05] bg-card cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient}`} />
                  <div className="absolute inset-0 grid-texture opacity-40" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <span className="font-mono text-[8px] text-gold/40 uppercase tracking-[0.3em] self-start px-2.5 py-1 rounded-full border border-gold/[0.1] bg-gold/[0.03]">
                      {w.type}
                    </span>
                    <h4 className="font-heading text-xl md:text-2xl font-semibold text-white group-hover:text-gold transition-colors duration-500">{w.industry}</h4>
                  </div>
                  <div className="absolute inset-0 bg-gold/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ══════════════════════════════════════════
          SECTION 7: STATS — Animated Counters
      ══════════════════════════════════════════ */}
      <section className="py-[12vh] md:py-[18vh] px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(200,169,110,0.02),transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="font-display text-white leading-none stat-value" style={{ fontSize: 'clamp(3rem,6vw,5.5rem)' }}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.25em] mt-3">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ══════════════════════════════════════════
          SECTION 8: PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-[12vh] md:py-[18vh] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <FadeUp>
            <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-4">How It Works</span>
            <h2 className="font-display leading-[0.85] text-white mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem,7vw,7rem)' }}>
              PROCESS
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { num: '01', title: 'Brief', desc: 'Share your brand, product, and campaign goals. We listen before we create.' },
              { num: '02', title: 'Concept', desc: 'Creative direction, script, and visual language returned within 48 hours.' },
              { num: '03', title: 'Production', desc: 'Our AI pipeline generates, refines, and renders to broadcast specification.' },
              { num: '04', title: 'Delivery', desc: 'Final assets delivered fast. No compromises. Ready to deploy on any platform.' },
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="relative group">
                  <span className="font-display text-5xl text-gold/15 group-hover:text-gold/30 transition-colors duration-500 mb-5 block">{step.num}</span>
                  {i < 3 && <div className="hidden md:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-white/[0.06] to-transparent" />}
                  <h4 className="font-heading text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="font-body text-[13px] text-white/25 leading-[1.9]">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ══════════════════════════════════════════
          SECTION 9: CTA — Dramatic Close
      ══════════════════════════════════════════ */}
      <section className="py-[14vh] md:py-[20vh] px-[5vw] text-center relative overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(200,169,110,0.06),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_50%_50%,rgba(200,169,110,0.04),transparent_60%)] glow-pulse pointer-events-none" />

        {/* Viewfinder corners */}
        <div className="absolute top-[15vh] left-[5vw] w-10 h-10 border-t border-l border-gold/25 hidden lg:block" />
        <div className="absolute top-[15vh] right-[5vw] w-10 h-10 border-t border-r border-gold/25 hidden lg:block" />
        <div className="absolute bottom-[15vh] left-[5vw] w-10 h-10 border-b border-l border-gold/25 hidden lg:block" />
        <div className="absolute bottom-[15vh] right-[5vw] w-10 h-10 border-b border-r border-gold/25 hidden lg:block" />

        <div className="relative max-w-[1100px] mx-auto">
          <FadeUp>
            <span className="font-mono text-[10px] text-gold/40 uppercase tracking-[0.6em] block mb-8 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-gold/30 inline-block" />
              Ready to Begin
              <span className="w-6 h-px bg-gold/30 inline-block" />
            </span>
            <h2 className="font-display leading-[0.88] tracking-tight text-white" style={{ fontSize: 'clamp(3rem,8vw,9rem)' }}>
              INITIATE<br />
              <span className="text-shimmer">PRODUCTION.</span>
            </h2>
            <p className="font-body text-white/25 text-[15px] mt-10 mb-14 max-w-sm mx-auto leading-[1.9]">
              Tell us about your brand. We'll return a creative direction within 48 hours.
            </p>
            <Link to="/contact" className="btn-primary text-[12px] px-14 py-5 group">
              Submit Brief
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeUp>
        </div>
      </section>

    </PageTransition>
  )
}
