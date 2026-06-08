import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Film, Clapperboard, Box, Share2, ChevronDown, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import MarqueeStrip from '../components/MarqueeStrip'

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
}

const letterVariants = {
  initial: { opacity: 0, y: 60, rotateX: -40 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
}

function AnimatedHeading({ text, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="initial"
      animate="animate"
      style={{ perspective: '1000px' }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: delay + i * 0.04 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

function SectionHeading({ label, title }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <span className="font-mono text-[10px] text-gold/80 uppercase tracking-[0.3em] block mb-3">{label}</span>
      {title && <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">{title}</h2>}
    </motion.div>
  )
}

const services = [
  {
    icon: Film,
    title: 'AI Ad Production',
    desc: 'We script, direct, and generate high-converting video ads using the latest generative AI models — indistinguishable from traditional production at a fraction of the cost and timeline.',
  },
  {
    icon: Clapperboard,
    title: 'Brand Films',
    desc: 'Long-form cinematic content that tells your brand story. Concept to screen, fully AI-driven with human creative oversight at every stage.',
  },
  {
    icon: Box,
    title: 'Product Commercials',
    desc: 'Category-defining product visuals. We make your product the hero — photorealistic renders, dynamic environments, cinematic lighting.',
  },
  {
    icon: Share2,
    title: 'Social Campaign Content',
    desc: 'Platform-native content engineered for attention. Cut-downs, hooks, format variations — all produced in one unified pipeline.',
  },
]

const projects = [
  { industry: 'LUXURY RETAIL', type: 'Brand Film', gradient: 'from-gold/20 via-amber-900/10 to-base' },
  { industry: 'F&B', type: 'Product Commercial', gradient: 'from-amber-900/30 via-orange-950/20 to-base' },
  { industry: 'TECH', type: 'AI Ad Campaign', gradient: 'from-slate-600/30 via-slate-800/20 to-base' },
  { industry: 'AUTOMOTIVE', type: 'Brand Film', gradient: 'from-gold/15 via-zinc-800/30 to-base' },
  { industry: 'FASHION', type: 'Social Campaign', gradient: 'from-rose-950/30 via-purple-950/20 to-base' },
  { industry: 'REAL ESTATE', type: 'Product Commercial', gradient: 'from-emerald-950/25 via-teal-950/15 to-base' },
]

const steps = [
  { num: '01', title: 'BRIEF', desc: 'You send us your brand, product, and campaign goals.' },
  { num: '02', title: 'CONCEPT', desc: 'We return a creative direction, script, and visual language within 48 hours.' },
  { num: '03', title: 'PRODUCTION', desc: 'Our AI pipeline generates, refines, and renders your final content.' },
  { num: '04', title: 'DELIVERY', desc: 'You receive broadcast-ready assets. Fast. No compromises.' },
]

const testimonials = [
  { quote: 'NEXUS AI delivered what our agency couldn\'t in six weeks — in five days. The quality is indistinguishable from a full shoot.', company: 'Al Fardan Group', industry: 'Luxury Retail' },
  { quote: 'We needed a brand film that felt cinematic but moved at startup speed. They understood the brief immediately and over-delivered.', company: 'Kitopi', industry: 'F&B Tech' },
  { quote: 'The production value is stunning. Our board thought we hired a full film crew. We didn\'t.', company: 'Proptech Ventures', industry: 'Real Estate' },
]

export default function Home() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' })
  const workRef = useRef(null)
  const workInView = useInView(workRef, { once: true, margin: '-80px' })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-80px' })
  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-80px' })

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-base">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
          {/* Radial spotlight from top */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(200,169,110,0.08),transparent_70%)]" />
          {/* Animated gold orbs */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                background: `radial-gradient(circle, rgba(200,169,110,${0.06 - i * 0.01}) 0%, transparent 70%)`,
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 2) * 30}%`,
              }}
              animate={{
                x: [0, 40 - i * 10, -(20 + i * 5), 0],
                y: [0, -(30 - i * 5), 20 + i * 10, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{
                duration: 18 + i * 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
          {/* Corner decorative lines */}
          <div className="absolute top-20 left-8 w-px h-32 bg-gradient-to-b from-gold/20 to-transparent hidden lg:block" />
          <div className="absolute top-20 right-8 w-px h-32 bg-gradient-to-b from-gold/20 to-transparent hidden lg:block" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.4em]">AI Production Studio</span>
          </motion.div>

          <AnimatedHeading
            text="YOUR BRAND."
            className="font-display text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] text-white"
          />
          <AnimatedHeading
            text="CINEMATIC."
            className="font-display text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] text-gold text-glow-gold"
            delay={0.3}
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-10 font-body text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            We produce AI-generated commercials and brand films for companies that refuse to look ordinary. Fast turnaround. Human direction. Generative output.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/work" className="btn-primary">
              <span>See Our Work</span>
              <ArrowRight size={14} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-white/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* SERVICES */}
      <section className="py-28 md:py-36 px-6 bg-base relative">
        <div className="absolute inset-0 spotlight" />
        <div className="max-w-7xl mx-auto relative">
          <SectionHeading label="WHAT WE DO" title="Services built for brands that demand more." />

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative p-8 md:p-10 bg-card/50 rounded-xl border border-white/[0.06] card-hover overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                    <service.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="font-body text-white/45 text-sm leading-[1.7]">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-10 md:p-16 rounded-2xl bg-gradient-to-br from-gold/[0.08] via-card/50 to-card/30 border border-gold/10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">Ready to produce?</h3>
              <Link to="/contact" className="btn-primary">
                <span>Start a Project</span>
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* SELECTED WORK */}
      <section className="py-28 md:py-36 px-6 bg-section relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(200,169,110,0.04),transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative">
          <SectionHeading label="SELECTED WORK" title="Recent productions." />

          <div ref={workRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={workInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative aspect-[4/3] rounded-xl bg-card/50 border border-white/[0.06] overflow-hidden card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                {/* Subtle inner pattern */}
                <div className="absolute inset-0 grid-pattern opacity-20" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="font-mono text-[9px] text-gold/80 uppercase tracking-[0.2em]">{project.industry}</span>
                  <p className="font-heading text-sm text-white/70 mt-1">{project.type}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center rounded-xl">
                  <span className="px-5 py-2.5 rounded-md border border-gold/60 text-gold font-mono text-[10px] uppercase tracking-widest">
                    View Project
                  </span>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          <p className="mt-12 font-mono text-[10px] text-white/25 text-center uppercase tracking-widest">More work available on request.</p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* PROCESS */}
      <section className="py-28 md:py-36 px-6 bg-base relative">
        <div className="absolute inset-0 spotlight" />
        <div className="max-w-7xl mx-auto relative">
          <SectionHeading label="HOW IT WORKS" title="From brief to broadcast in days." />

          <div ref={processRef} className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative text-center md:text-left group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-card border border-gold/20 mb-5 group-hover:border-gold/50 group-hover:glow-gold transition-all duration-300">
                  <span className="font-display text-2xl text-gold">{step.num}</span>
                </div>
                <h4 className="font-heading text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="font-body text-[13px] text-white/40 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 px-6 bg-section relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="WHAT BRANDS SAY" title="Trusted by teams that move fast." />

          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-8 rounded-xl bg-card/40 border border-white/[0.06] relative overflow-hidden card-hover"
              >
                {/* Quote mark */}
                <span className="absolute top-4 right-6 font-display text-6xl text-gold/10 leading-none">"</span>
                <p className="font-body text-[13px] text-white/60 leading-[1.8] italic mb-8 relative">{t.quote}</p>
                <div className="relative">
                  <p className="font-heading text-sm font-semibold text-white">{t.company}</p>
                  <p className="font-mono text-[9px] text-gold/70 uppercase tracking-[0.2em] mt-1">{t.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Logo strip */}
          <div className="mt-20 grid grid-cols-3 md:grid-cols-6 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-14 rounded-lg bg-card/30 border border-white/[0.04] flex items-center justify-center">
                <span className="font-mono text-[8px] text-white/15 uppercase tracking-widest">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
