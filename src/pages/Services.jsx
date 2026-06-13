import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const services = [
  {
    title: 'AI Ad Production',
    desc: 'We script, storyboard, and generate high-performing video ads using state-of-the-art generative AI. Every frame is intentional. Every cut is strategic. The result is indistinguishable from traditional production — at a fraction of the cost and timeline.',
    deliverables: ['30s / 60s hero ad spots', 'Performance-optimized cut-downs', 'A/B variant generation', 'Platform-specific formatting', 'Full script and storyboard'],
  },
  {
    title: 'Brand Films & Original IP',
    desc: 'Long-form cinematic brand storytelling built from concept to final delivery. We develop original creative direction, narrative structure, and visual identity — then produce the entire film through our generative pipeline with human oversight at every stage.',
    deliverables: ['2-5 minute brand narratives', 'Original story development', 'Visual identity systems', 'Behind-the-scenes production decks', 'Festival-grade finishing'],
  },
  {
    title: 'Product Commercials',
    desc: 'We make your product the hero. Photorealistic renders, dynamic environments, cinematic lighting, and motion design — all generated through AI with meticulous creative direction that ensures your product looks category-defining.',
    deliverables: ['Hero product films', 'Photorealistic 3D renders', 'Dynamic environment design', 'Multi-angle product showcases', 'E-commerce video assets'],
  },
  {
    title: 'Social Campaign Content',
    desc: 'Platform-native content engineered for attention and performance. We produce hooks, cut-downs, stories, reels, and format variations — all from one unified creative pipeline, maintaining brand consistency across every touchpoint.',
    deliverables: ['Reels and Stories packages', 'Hook-first ad creatives', 'Carousel and static assets', 'Platform-optimized ratios', 'Monthly content batches'],
  },
  {
    title: 'Campaign Strategy & Creative Direction',
    desc: 'Before a single frame is generated, we develop the strategic foundation. Brand positioning, audience mapping, creative territories, and visual language — everything your campaign needs to resonate with the right people.',
    deliverables: ['Brand positioning documents', 'Audience & channel strategy', 'Creative territory decks', 'Visual language guidelines', 'Campaign architecture'],
  },
  {
    title: 'Multi-Platform Delivery & Format Packages',
    desc: 'One production, infinite formats. We deliver your content pre-cut and formatted for every platform — from 16:9 broadcast to 9:16 stories, 1:1 feeds, and everything between. No re-shoots. No re-edits. Just deploy.',
    deliverables: ['16:9 / 9:16 / 1:1 / 4:5 formats', 'Platform-specific versioning', 'Subtitle and caption packages', 'Thumbnail and poster frames', 'Asset management documentation'],
  },
]

function ServiceBlock({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
        {/* Visual */}
        <div className={`${isReversed ? 'lg:order-2' : ''}`}>
          <div className="aspect-[16/10] rounded-2xl bg-card/50 border border-white/[0.05] relative overflow-hidden group viewfinder">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.02]" />
            <div className="absolute inset-0 grid-texture" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-display text-7xl text-gold/15 block">0{index + 1}</span>
                <p className="font-mono text-[9px] text-white/15 uppercase tracking-[0.4em] mt-2">{service.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`${isReversed ? 'lg:order-1' : ''}`}>
          <div className="pl-8 border-l border-gold/25">
            <span className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.4em] block mb-5">Service 0{index + 1}</span>
            <h3 className="font-display text-white mb-8 leading-[0.88]" style={{ fontSize: 'clamp(2rem,3.5vw,3.5rem)' }}>
              {service.title.toUpperCase()}
            </h3>
            <p className="font-body text-[14px] text-white/40 leading-[2] mb-10">{service.desc}</p>
            <ul className="space-y-4">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                  <span className="font-body text-[13px] text-white/35">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {index < services.length - 1 && (
        <hr className="mt-[10vh] hr-gold" />
      )}
    </motion.div>
  )
}

export default function Services() {
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
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3rem,7vw,8rem)' }}
          >
            WHAT WE<br />BUILD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-body text-white/35 text-base md:text-lg max-w-xl mt-8 leading-[1.9]"
          >
            AI-powered production for brands that demand cinematic quality without the overhead of traditional pipelines. Every frame shaped by human creative direction, generated at machine speed.
          </motion.p>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── Services List ── */}
      <section className="px-6 md:px-12 bg-base">
        <div className="max-w-[1400px] mx-auto">
          {services.map((service, i) => (
            <ServiceBlock key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_50%,rgba(200,169,110,0.05),transparent_70%)]" />
        <div className="max-w-[900px] mx-auto relative">
          <span className="font-mono text-[10px] text-gold/40 uppercase tracking-[0.5em] block mb-10">Start Now</span>
          <h2 className="font-display text-white leading-[0.85] mb-10" style={{ fontSize: 'clamp(2.5rem,6vw,7rem)' }}>
            EVERY PRODUCTION<br /><span className="text-shimmer">STARTS WITH A BRIEF.</span>
          </h2>
          <p className="font-body text-white/30 text-[15px] mb-14 max-w-sm mx-auto leading-[1.9]">
            Tell us what you need. We handle the rest.
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
