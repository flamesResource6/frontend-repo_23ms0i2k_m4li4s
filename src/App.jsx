import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe2, Sparkles, Map, Rocket, BadgeDollarSign, Building2, BriefcaseBusiness, Activity } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 120, damping: 14 } },
}

const glow = 'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-cyan-400/10 before:via-fuchsia-400/10 before:to-emerald-400/10 before:blur-xl before:content-[\'\']'

function Stat({ label, value }) {
  return (
    <motion.div variants={item} className={`relative rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-4 ${glow}`}>
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-widest text-white/60">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  )
}

function OpportunityCard({ title, description, icon: Icon, accent }) {
  return (
    <motion.div variants={item} whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`group relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 ring-1 ring-white/10 p-6 ${glow}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_200px_at_var(--x,50%)_-20%,rgba(255,255,255,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex items-start gap-4">
        <div className={`rounded-2xl p-3 ring-1 ring-white/10 bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/30`}>
          <Icon className="size-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{description}</p>
          <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
            Explore <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white">
      {/* HERO */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        {/* Spline 3D Cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(9,9,13,0)_0%,rgba(9,9,13,0.35)_40%,rgba(9,9,13,0.85)_100%)]" />

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
              <Sparkles className="size-4 text-white/90" />
              <span className="text-xs font-medium tracking-wide text-white/80">Planet Opportunities</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
              Amid the chaos, you deserve clarity.
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
              Think of this as your guide—crafted by makers, for makers—where every grant, every lab, and every residency is not just listed but brought to life. Animated journeys through global opportunities, each link a lifeline for founders and creators weathering the storm.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#explore" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-black/20 transition hover:bg-slate-100">
                Explore the map <ArrowRight className="size-4" />
              </a>
              <a href="/test" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/20 transition hover:bg-white/15">
                System check
              </a>
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="show" className="mt-10 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Stat label="Global Coverage" value="190+ countries" />
            <Stat label="Opportunities Tracked" value="12,000+" />
            <Stat label="Daily Updates" value="Realtime" />
            <Stat label="Always Free" value="Open Access" />
          </motion.div>
        </div>
      </section>

      {/* STORY SECTIONS */}
      <section id="explore" className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="mb-10 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">A living map of what’s possible</h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <OpportunityCard
            title="Grants"
            description="Urgent funds and catalytic capital. Filter by region, deadline, and focus area."
            icon={BadgeDollarSign}
            accent="from-emerald-500/30 to-teal-400/10"
          />
          <OpportunityCard
            title="Residencies"
            description="Homes for your next chapter—creative labs, research fellowships, and maker residencies."
            icon={Building2}
            accent="from-fuchsia-500/30 to-violet-400/10"
          />
          <OpportunityCard
            title="Jobs & Fellowships"
            description="Roles across climate, AI, arts, biotech, and more—curated for builders."
            icon={BriefcaseBusiness}
            accent="from-cyan-500/30 to-sky-400/10"
          />
          <OpportunityCard
            title="Layoffs Tracker"
            description="Track market shifts and hiring rebounds across ecosystems to plan your next move."
            icon={Activity}
            accent="from-rose-500/30 to-orange-400/10"
          />
          <OpportunityCard
            title="Global Labs"
            description="Where ideas scale: accelerators, R&D programs, and innovation hubs."
            icon={Globe2}
            accent="from-indigo-500/30 to-blue-400/10"
          />
          <OpportunityCard
            title="Launchpad"
            description="Guides, templates, and tools to apply fast—your edge in the noise."
            icon={Rocket}
            accent="from-amber-500/30 to-lime-400/10"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-14 overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Real-time ripples</h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                Every animated ripple signals hope. Watch updates unfold in real time—deadlines nearing, new labs emerging, jobs opening across the map.
              </p>
            </div>
            <div className="relative h-56 w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/10 to-emerald-400/20" />
              <div className="absolute inset-0 bg-[radial-gradient(600px_120px_at_50%_50%,rgba(255,255,255,0.18),transparent_60%)]" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROMISE SECTION */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 ring-1 ring-white/10 p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Your global launchpad</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                We know the markets shift, jobs disappear, and the search for stability never ends. So we built more than a directory—we built a living map. Lose yourself in fluid effects, drift through color-powered lists, feel each residency, grant, and job update unfold in real time.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-black/20">
                Start exploring <Map className="size-4" />
              </div>
            </div>
            <ul className="space-y-3">
              {[
                'High-animation interface that guides, not distracts',
                'Comprehensive, global, always-free listings',
                'Narrative design that reassures and empowers',
                'Realtime context: deadlines, shifts, signals',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-1 size-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                  <span className="text-white/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        <p>
          Built for founders and creators. Every card a chance. Every ripple a signal.
        </p>
      </footer>
    </div>
  )
}

export default App
