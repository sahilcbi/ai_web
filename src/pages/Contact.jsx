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
      {/* Hero */}
      <section className="pt-40 pb-10 px-6 bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(200,169,110,0.06),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.3em] block mb-5"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-7xl md:text-[6.5rem] text-white leading-[0.9]"
          >
            START A PROJECT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-white/40 text-base md:text-lg max-w-lg mt-8 leading-relaxed"
          >
            Tell us about your brand and what you're trying to achieve. We'll come back with a creative direction.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 py-20 md:py-28 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-gold/[0.08] border border-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">Email</p>
                    <p className="font-body text-[15px] text-white/70">hello@nexusai.studio</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-gold/[0.08] border border-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">Location</p>
                    <p className="font-body text-[15px] text-white/70">Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-gold/[0.08] border border-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">Response Time</p>
                    <p className="font-body text-[15px] text-white/70">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-14 pt-10 border-t border-white/[0.06]">
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-5">Social</p>
                <div className="flex gap-5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-card/50 border border-white/[0.06] text-white/50 hover:text-gold hover:border-gold/20 transition-all duration-300"
                  >
                    <ExternalLink size={13} />
                    <span className="font-mono text-[11px]">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-card/50 border border-white/[0.06] text-white/50 hover:text-gold hover:border-gold/20 transition-all duration-300"
                  >
                    <ExternalLink size={13} />
                    <span className="font-mono text-[11px]">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="p-14 rounded-2xl bg-card/50 border border-gold/15 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent" />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 mx-auto mb-6 flex items-center justify-center">
                      <Mail size={24} className="text-gold" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">Brief received.</h3>
                    <p className="font-body text-white/40 text-[14px]">Expect a response within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] block mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-card/50 border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[14px] focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-white/20"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] block mb-3">
                        Your Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full bg-card/50 border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[14px] focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-white/20"
                        placeholder="CMO, Brand Manager, Founder..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-card/50 border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[14px] focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 placeholder:text-white/20"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] block mb-3">
                      Campaign Type
                    </label>
                    <select
                      name="campaignType"
                      value={formData.campaignType}
                      onChange={handleChange}
                      required
                      className="w-full bg-card/50 border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[14px] focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none"
                    >
                      <option value="" disabled className="bg-card text-white/50">Select a type</option>
                      <option value="AI Ad" className="bg-card">AI Ad</option>
                      <option value="Brand Film" className="bg-card">Brand Film</option>
                      <option value="Product Commercial" className="bg-card">Product Commercial</option>
                      <option value="Social Content" className="bg-card">Social Content</option>
                      <option value="Other" className="bg-card">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] block mb-3">
                      Brief / Tell us about your project
                    </label>
                    <textarea
                      name="brief"
                      value={formData.brief}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-card/50 border border-white/[0.08] rounded-lg px-5 py-4 text-white font-body text-[14px] focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none placeholder:text-white/20"
                      placeholder="What are you looking to produce? What's the timeline? Any references?"
                    />
                  </div>

                  <div className="pt-3">
                    <button type="submit" className="btn-primary w-full md:w-auto">
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
