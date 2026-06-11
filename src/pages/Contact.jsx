import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Mail, MapPin, Clock } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    email: '',
    campaignType: '',
    brief: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/YOUR_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch (err) {
      setSubmitted(true)
    }
  }

  return (
    <PageTransition>

      {/* ── Hero ── */}
      <section className="pt-36 pb-24 px-6 md:px-12 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,169,110,0.06),transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-gold/50 uppercase tracking-[0.5em] block mb-8 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-gold/30 inline-block" />
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3rem,7vw,8rem)' }}
          >
            START A<br />PROJECT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-body text-white/35 text-base md:text-lg max-w-lg mt-8 leading-[1.9]"
          >
            Tell us about your brand and what you're trying to achieve. We'll come back with a creative direction.
          </motion.p>
        </div>
      </section>

      <hr className="hr-gold mx-[5vw]" />

      {/* ── Form Section ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/[0.07] border border-gold/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-3">Email</p>
                    <p className="font-body text-[15px] text-white/60">hello@nexusai.studio</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/[0.07] border border-gold/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-3">Location</p>
                    <p className="font-body text-[15px] text-white/60">Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/[0.07] border border-gold/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-3">Response Time</p>
                    <p className="font-body text-[15px] text-white/60">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/[0.05]">
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-6">Social</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 border border-white/[0.05] text-white/40 hover:text-gold hover:border-gold/20 transition-all duration-300 font-mono text-[11px]"
                  >
                    <ExternalLink size={12} />
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 border border-white/[0.05] text-white/40 hover:text-gold hover:border-gold/20 transition-all duration-300 font-mono text-[11px]"
                  >
                    <ExternalLink size={12} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              {submitted ? (
                <div className="p-16 rounded-2xl bg-card/50 border border-gold/12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent" />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 mx-auto mb-8 flex items-center justify-center">
                      <Mail size={24} className="text-gold" />
                    </div>
                    <h3 className="font-display text-4xl text-white mb-4">BRIEF RECEIVED.</h3>
                    <p className="font-body text-white/35 text-[14px] leading-[1.9]">Expect a response within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-4 text-white font-body text-[14px] focus:border-gold/50 focus:outline-none transition-all duration-300 placeholder:text-white/20"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">
                        Your Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-4 text-white font-body text-[14px] focus:border-gold/50 focus:outline-none transition-all duration-300 placeholder:text-white/20"
                        placeholder="CMO, Brand Manager, Founder..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-4 text-white font-body text-[14px] focus:border-gold/50 focus:outline-none transition-all duration-300 placeholder:text-white/20"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">
                      Campaign Type
                    </label>
                    <select
                      name="campaignType"
                      value={formData.campaignType}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-4 text-white font-body text-[14px] focus:border-gold/50 focus:outline-none transition-all duration-300 appearance-none"
                    >
                      <option value="" disabled className="bg-card text-white/40">Select a type</option>
                      <option value="AI Ad" className="bg-card">AI Ad</option>
                      <option value="Brand Film" className="bg-card">Brand Film</option>
                      <option value="Product Commercial" className="bg-card">Product Commercial</option>
                      <option value="Social Content" className="bg-card">Social Content</option>
                      <option value="Other" className="bg-card">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">
                      Brief / Tell us about your project
                    </label>
                    <textarea
                      name="brief"
                      value={formData.brief}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-4 text-white font-body text-[14px] focus:border-gold/50 focus:outline-none transition-all duration-300 resize-none placeholder:text-white/20"
                      placeholder="What are you looking to produce? What's the timeline? Any references?"
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full md:w-auto text-[12px] px-12 py-5">
                      SUBMIT BRIEF
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

    </PageTransition>
  )
}
