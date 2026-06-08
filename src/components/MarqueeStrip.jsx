export default function MarqueeStrip() {
  const items = [
    'AI AD PRODUCTION',
    'BRAND FILMS',
    'PRODUCT COMMERCIALS',
    'SOCIAL CAMPAIGN CONTENT',
    'ORIGINAL IP DEVELOPMENT',
    'CAMPAIGN STRATEGY',
  ]

  const marqueeContent = items.map((item, i) => (
    <span key={i} className="flex items-center gap-10">
      <span className="font-mono text-[11px] md:text-[13px] text-white/40 whitespace-nowrap uppercase tracking-[0.2em]">
        {item}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0" />
    </span>
  ))

  return (
    <div className="w-full bg-section/80 border-y border-white/[0.04] py-6 md:py-7 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-section to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-section to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        <div className="flex items-center gap-10 pr-10">
          {marqueeContent}
        </div>
        <div className="flex items-center gap-10 pr-10">
          {marqueeContent}
        </div>
        <div className="flex items-center gap-10 pr-10">
          {marqueeContent}
        </div>
        <div className="flex items-center gap-10 pr-10">
          {marqueeContent}
        </div>
      </div>
    </div>
  )
}
