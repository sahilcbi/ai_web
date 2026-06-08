import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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
    desc: 'Before a single frame is generated, we develop the strategic foundation. Brand positioning, audience mapping, creative territories, and visual language — everything your campaign needs to resonate with the right people at the right time.',
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
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-16 md:py-20"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center`}>
        {/* Visual */}
        <div className={`${isReversed ? 'lg:order-2' : ''}`}>
          <div className="aspect-[16/10] rounded-xl bg-card/50 border border-white/[0.06] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.02]" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-display text-5xl text-gold/20">0{index + 1}</span>
                <p className="font-mono text-[10px] text-white/15 uppercase tracking-widest mt-2">{service.title}</p>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-gold/10 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-gold/10 rounded-br-xl" />
          </div>
        </div>

        {/* Content */}
        <div className={`${isReversed ? 'lg:order-1' : ''}`}>
          <div className="relative pl-6 border-l-2 border-gold/40">
            <span className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.2em]">Service 0{index + 1}</span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-3 mb-5">{service.title}</h3>
            <p className="font-body text-[14px] text-white/50 leading-[1.8] mb-8">{service.desc}</p>
            <ul className="space-y-3">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                  <span className="font-body text-[13px] text-white/40">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider between blocks */}
      {index < services.length - 1 && (
        <div className="mt-16 md:mt-20 section-divider" />
      )}
    </motion.div>
  )
}

export default function Services() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,169,110,0.06),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.3em]"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-white mt-4"
          >
            WHAT WE BUILD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-white/45 text-base md:text-lg max-w-2xl mt-6 leading-relaxed"
          >
            AI-powered production for brands that demand cinematic quality without the overhead of traditional pipelines. Every frame shaped by human creative direction, generated at machine speed.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 pb-24 bg-base">
        <div className="max-w-7xl mx-auto">
          {services.map((service, i) => (
            <ServiceBlock key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 px-6 bg-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(200,169,110,0.04),transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">Every production starts with a brief.</h2>
          <p className="font-body text-white/40 text-sm mb-10">Tell us what you need. We handle the rest.</p>
          <Link to="/contact" className="btn-primary">
            <span>Start a Project</span>
            <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
