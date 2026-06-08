export default function MarqueeStrip() {
  const items = [
    'AI AD PRODUCTION',
    'BRAND FILMS',
    'PRODUCT COMMERCIALS',
    'SOCIAL CAMPAIGNS',
    'ORIGINAL IP',
    'CAMPAIGN STRATEGY',
  ]

  const marqueeContent = items.map((item, i) => (
    <span key={i} className="flex items-center gap-12 md:gap-16">
      <span className="font-mono text-[10px] md:text-[11px] text-white/25 whitespace-nowrap uppercase tracking-[0.25em]">
        {item}
      </span>
      <span className="w-1 h-1 rounded-full bg-gold/30 flex-shrink-0" />
    </span>
  ))

  return (
    <div className="w-full border-y border-white/[0.04] py-6 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16">{marqueeContent}</div>
        <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16">{marqueeContent}</div>
        <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16">{marqueeContent}</div>
        <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16">{marqueeContent}</div>
      </div>
    </div>
  )
}
