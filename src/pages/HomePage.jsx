import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Search, Target, UserCheck,
  TrendingUp, RefreshCw, Clock, Shield, Coins,
  FileText, Database, Scale, User, ChevronDown
} from 'lucide-react'
import { images } from '../data/images'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Button from '../components/ui/Button'

/* ═══════════════════════════════════════
   PRODUCT IMAGE SELECTOR
   ═══════════════════════════════════════ */

const productImages = [
  '/images/mywellnessq-new.png',
  '/images/mywellnessq-labs.png',
  '/images/oncodea.png',
  '/images/breathe.jpeg',
  '/images/tomme.png',
]

const productLines = [
  { name: 'MyWellnessQ', desc: 'Patient/member front door', color: '#6237A0' },
  { name: 'MyWellnessQ Labs', desc: 'Immediate demand monetization and buyer-behavior data', color: '#9B71D6' },
  { name: 'Oncodea / MMyeloma', desc: 'First owned specialty margin', color: '#D7CFE6' },
  { name: 'Breathe', desc: 'Acute-care workflow value and site economics', color: '#9B71D6' },
  { name: 'TOMME', desc: 'Shared decision, routing, and learning layer across all of it', color: '#6237A0' },
]

/* ═══════════════════════════════════════
   FAQ COMPONENT
   ═══════════════════════════════════════ */

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-brand-lavender/30">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full flex justify-between items-center py-6 text-left"
        >
          <span className="text-lg font-semibold text-brand-deep pr-8 font-heading">{q}</span>
          <ChevronDown
            className={`w-5 h-5 text-brand-primary shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {open && (
        <div className="pb-6">
          <p className="text-lg leading-relaxed font-light text-gray-600 font-body">{a}</p>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════
   SCROLL REVEAL WRAPPER
   ═══════════════════════════════════════ */

function Reveal({ children, className = '' }) {
  const { ref, isVisible } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════ */

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #28104E 0%, #3a1a6e 40%, #28104E 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${images.hero.primary})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/60 via-transparent to-brand-deep" aria-hidden="true" />

        <Reveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4">
            Person Health
          </p>
          <h1
            className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8 font-heading"
          >
            Earlier signals.<br />Safer next steps.
          </h1>
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed font-light text-brand-lavender font-body">
            Person Health is the multimodal health action platform for screening, early detection, and clinician-reviewed diagnosis support. Powered by TOMME, our governed intelligence engine, we turn breath, blood, labs, symptoms, claims, EHR, and behavior into the safest next step — and help get it completed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/platform#tomme">See how TOMME works</Button>
          </div>
          <div className="flex justify-center gap-8 text-sm text-brand-lavender/80 font-body">
            <span>Multimodal evidence</span>
            <span className="text-brand-medium" aria-hidden="true">·</span>
            <span>Governed intelligence</span>
            <span className="text-brand-medium" aria-hidden="true">·</span>
            <span>Closed-loop action</span>
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 1: THE PROBLEM ─── */}
      <section className="bg-gradient-to-b from-white via-brand-light to-white py-10 lg:py-14">
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4 text-center">
            The Problem
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-brand-deep font-heading text-center">
            Healthcare generates signals every day.<br className="hidden lg:inline" /> The gap is what happens next.
          </h2>
          <p className="text-lg leading-relaxed font-light text-gray-600 font-body max-w-2xl mb-16 text-center mx-auto">
            Eligible people do not screen. Abnormal results do not close. Symptomatic people delay care.
          </p>

          {/* Three problem cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Eligible but inactive', body: 'Screening is due, but outreach is generic, distrust is high, and the next step feels heavier than the risk.', tag: 'Eligibility exists. Activation doesn\u2019t.' },
              { title: 'Abnormal but lost\u00A0to\u00A0follow-up', body: 'Results arrive, but nothing reliably converts them into scheduling, escalation, or clinician-reviewed recovery.', tag: 'Detection happens. Completion doesn\u2019t.' },
              { title: 'Symptomatic but\u00A0delayed', body: 'People wait, minimize, search online, or avoid the system entirely because uncertainty, fear, cost, and friction dominate behavior.', tag: 'Symptoms present. Action stalls.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-brand-lavender/30 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <h3 className="text-base font-semibold text-brand-deep mb-4 font-heading whitespace-nowrap">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light font-body flex-1">{item.body}</p>
                <p className="text-sm font-medium text-brand-primary font-body whitespace-nowrap" aria-label={item.tag}>
                  <span aria-hidden="true">&rarr;</span> {item.tag}
                </p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-brand-deep rounded-2xl p-8 lg:p-10 mb-12">
            <p className="text-xl leading-relaxed font-light text-brand-lavender font-body">
              Risk models predict. Operations send reminders. But almost no layer in healthcare is jointly responsible for trust, readiness, follow-through, and learning.
            </p>
          </div>

          {/* Care lanes */}
          <h3 className="text-xl font-semibold text-brand-deep mb-8 text-center font-heading">
            Three care lanes keep the framework safe and useful
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Search, title: 'Screening', body: 'Well populations. Evidence-backed eligibility. Gentle routing and recovery.' },
              { icon: Target, title: 'Early detection', body: 'Abnormal-signal follow-up. More urgency, more evaluation, more escalation.' },
              { icon: UserCheck, title: 'Diagnosis support', body: 'Clinician-reviewed, higher-risk cases. The model informs — it does not replace judgment.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-brand-lavender/30 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }} aria-hidden="true">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-deep mb-2 font-heading">{item.title}</h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed font-light font-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/platform" variant="ghost">See how Person Health closes the gap</Button>
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 2: THE PLATFORM ─── */}
      <section className="py-10 lg:py-14" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">
            The Platform
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            One platform. One engine.<br />Multiple ways to&nbsp;enter.
          </h2>
          <p className="text-lg leading-relaxed font-light text-brand-lavender font-body max-w-2xl mb-16 text-center mx-auto">
            MyWellnessQ stays the front door. Every product line shares one data layer, one intelligence engine, and one workflow surface.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
            <div className="space-y-1" role="tablist" aria-label="Product lines">
              {productLines.map((item, i) => {
                const isActive = activeProduct === i
                return (
                  <div
                    key={i}
                    role="tab"
                    tabIndex={0}
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveProduct(i)}
                    onFocus={() => setActiveProduct(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') { e.preventDefault(); setActiveProduct((i + 1) % productLines.length) }
                      if (e.key === 'ArrowUp') { e.preventDefault(); setActiveProduct((i - 1 + productLines.length) % productLines.length) }
                    }}
                    className={`border-l-4 pl-8 py-5 rounded-r-xl transition-colors duration-200 cursor-pointer ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    style={{ borderLeftColor: item.color, borderLeftWidth: isActive ? '6px' : '4px' }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-1 font-heading">{item.name}</h3>
                    <p className="text-brand-lavender text-[15px] font-light font-body">{item.desc}</p>
                  </div>
                )
              })}
            </div>
            <div
              className="sticky top-24 w-full max-w-xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a0a35] border border-white/10 shadow-lg flex items-center justify-center p-4"
              role="tabpanel"
              aria-label={`${productLines[activeProduct].name} preview`}
            >
              <img
                key={productImages[activeProduct]}
                src={productImages[activeProduct]}
                alt={`${productLines[activeProduct].name} product interface`}
                className="w-full h-full object-contain rounded-2xl transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <Button href="/platform#tomme">See how TOMME works</Button>
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 3: TOMME CALLOUT ─── */}
      <section className="py-10 lg:py-14" style={{ background: 'linear-gradient(135deg, #28104E 0%, #1a0a35 100%)' }}>
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4">
            TOMME
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading">
            The engine behind all of it
          </h2>
          <p className="text-lg leading-relaxed font-light text-brand-lavender font-body max-w-2xl mx-auto mb-10">
            Every product line feeds TOMME. Every signal TOMME processes strengthens every product line. It is not a feature — it is the shared intelligence layer that makes the platform compound.
          </p>
          <Button href="/platform#tomme">See how TOMME works</Button>
        </Reveal>
      </section>


      {/* ─── SECTION 4: WHY BUYERS CARE ─── */}
      <section className="bg-gradient-to-b from-white via-brand-light to-white py-10 lg:py-14">
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4 text-center">
            Why Buyers Care
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-brand-deep font-heading text-center">
            The value shows up in completion, timing, and economics.
          </h2>
          <p className="text-lg leading-relaxed font-light text-gray-600 font-body max-w-2xl mb-16 text-center mx-auto">
            Person Health is designed to improve measurable workflow outcomes — not just generate more insights.
          </p>

          <div className="grid md:grid-cols-5 gap-5 mb-16">
            {[
              { icon: TrendingUp, title: 'Increase screening completion' },
              { icon: RefreshCw, title: 'Recover abnormal-result follow-up' },
              { icon: Clock, title: 'Reduce signal-to-action days' },
              { icon: Shield, title: 'Lower leakage and avoidable escalation' },
              { icon: Coins, title: 'Expand retained revenue and contribution margin' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white border border-brand-lavender/30 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }} aria-hidden="true">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm font-medium text-brand-deep leading-snug font-body">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Effect cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Patient effect', body: 'Fear drops. Clarity rises. The next step feels safer, smaller, and more worth doing.' },
              { label: 'Healthcare effect', body: 'More completed screenings, faster abnormal-result recovery, better continuity.' },
              { label: 'Economic effect', body: 'Higher retention, more paid engagement, better unit economics, lower avoidable cost.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-deep rounded-2xl p-8">
                <p className="text-sm font-medium text-brand-medium uppercase tracking-wider mb-3 font-body">{item.label}</p>
                <p className="text-white text-[15px] leading-relaxed font-light font-body">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm italic mb-10 font-body">
            Trust improves uptake. Uptake is what opens the economic flywheel.
          </p>

          <div className="text-center">
            <Button href="/evidence" variant="ghost">See the workflow economics</Button>
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 5: TRUST BY DESIGN ─── */}
      <section className="py-10 lg:py-14" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">
            Trust by Design
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            Trust is built into the recommendation.
          </h2>
          <p className="text-lg leading-relaxed font-light text-brand-lavender font-body max-w-2xl mb-16 text-center mx-auto">
            Every clinically meaningful next step should show provenance, uncertainty, and the conditions for human review.
          </p>

          <div className="grid md:grid-cols-4 gap-5 mb-16">
            {[
              { icon: FileText, title: 'Source attributes', q: 'What is this model? Who owns it? What population is it for?' },
              { icon: Database, title: 'Provenance + recency', q: 'What data triggered this? How current? What is missing?' },
              { icon: Scale, title: 'Uncertainty + fairness', q: 'How sure is the system? Which subgroups need monitoring?' },
              { icon: User, title: 'Human control', q: 'When does the case stop and require clinician review?' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#351566]/60 to-brand-deep/90 border border-white/10 rounded-2xl p-7 hover:border-brand-medium/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }} aria-hidden="true">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3 font-heading">{item.title}</h3>
                <p className="text-brand-lavender text-sm leading-relaxed font-light font-body">{item.q}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-lavender/80 text-sm italic mb-10 font-body">
            The more a recommendation could influence diagnosis or treatment, the more explicit the validation, monitoring, and human review must become.
          </p>

          <div className="text-center">
            <Button href="/evidence#methodology">Read the governance methodology</Button>
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 6: EVIDENCE PREVIEW ─── */}
      <section className="bg-gradient-to-b from-white via-brand-light to-white py-10 lg:py-14">
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4 text-center">
            Evidence
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-brand-deep font-heading text-center">
            Every claim resolves to proof.
          </h2>
          <p className="text-lg leading-relaxed font-light text-gray-600 font-body max-w-2xl mb-16 text-center mx-auto">
            The homepage tells the story. The evidence library substantiates it.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-brand-lavender/30 shadow-card">
              <p className="text-sm font-medium text-brand-primary mb-2 font-body">Oncodea — Breast CED | Baylor Scott & White / VERITY</p>
              <p className="text-3xl font-bold text-brand-deep mb-3 font-heading">94.5% / 96%</p>
              <p className="text-gray-600 text-sm leading-relaxed font-light font-body">
                Sensitivity / specificity. AUC 0.99 across 437 blinded subjects. 94% Stage 0–I detection.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-brand-lavender/30 shadow-card">
              <p className="text-sm font-medium text-brand-primary mb-2 font-body">Oncodea — Multiple Myeloma | Mayo Clinic</p>
              <p className="text-3xl font-bold text-brand-deep mb-3 font-heading">91% / 92%</p>
              <p className="text-gray-600 text-sm leading-relaxed font-light font-body">
                Sensitivity / specificity. AUC 0.987 for MGUS vs. SMM. Under 48-hour turnaround. COGS below $20.
              </p>
            </div>
          </div>

          {/* Stat badges */}
          <div className="flex justify-center gap-16 mb-12" role="list" aria-label="Key statistics">
            {[
              { num: '40+', label: 'issued patents' },
              { num: '30+', label: 'pending' },
              { num: '<1 min', label: 'test time' },
            ].map((s, i) => (
              <div key={i} className="text-center" role="listitem">
                <p className="text-4xl font-bold mb-1 stat-gradient font-heading" aria-hidden="true">{s.num}</p>
                <span className="sr-only">{s.num} {s.label}</span>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-body" aria-hidden="true">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/evidence" variant="ghost">Explore the evidence library</Button>
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 7: AUDIENCE ─── */}
      <section className="py-10 lg:py-14" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">
            Get Started
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            One company story, different buying lenses.
          </h2>
          <p className="text-lg leading-relaxed font-light text-brand-lavender font-body max-w-2xl mb-16 text-center mx-auto">
            Each audience sees the same platform, the same trust architecture, the same evidence — through the lens that matters to them.
          </p>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              { title: 'Health Systems', desc: 'Workflow economics and pilot path', to: '/solutions' },
              { title: 'Clinicians', desc: 'Rationale, review, and follow-through', to: '/solutions' },
              { title: 'Investors', desc: 'Commercialization ladder and compounding', to: '/solutions' },
              { title: 'Patients', desc: 'Clarity, confidence, and next steps', to: '/solutions' },
              { title: 'Partners', desc: 'Platform, evidence, and co-development', to: '/solutions' },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="bg-gradient-to-br from-[#351566]/60 to-brand-deep/90 border border-white/10 rounded-2xl p-6 text-center hover:border-brand-medium/30 hover:-translate-y-1 transition-all duration-300 block"
              >
                <h3 className="text-base font-semibold text-white mb-2 font-heading">{item.title}</h3>
                <p className="text-brand-lavender text-xs leading-relaxed font-light font-body">{item.desc}</p>
              </Link>
            ))}
          </div>

        </Reveal>
      </section>


      {/* ─── FAQ ─── */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-brand-light to-white">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4 text-center">
            Frequently Asked Questions
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-brand-deep font-heading text-center">
            Common questions
          </h2>

          <div className="mt-12">
            <FAQ
              q="What is TOMME?"
              a="TOMME stands for Trusted Orchestrated Multimodal Markov Engine. It is the governed intelligence core inside Person Health. It fuses breath, blood, genetics, labs, claims, EHR, symptoms, and behavior into a single state picture — then selects the safest next step, routes it into a real workflow, and measures whether it was completed."
            />
            <FAQ
              q="What is a multimodal health action platform?"
              a="A multimodal health action platform combines multiple diagnostic and behavioral signal types into one decision layer. The difference from a traditional analytics tool is that the platform is accountable for action, not just insight. It routes recommendations into real workflows and tracks whether the action was completed."
            />
            <FAQ
              q="How do you increase screening completion?"
              a="Person Health models each person's readiness, trust, friction, and channel preference — then delivers the smallest safe next step through the right channel at the right time. The platform measures completion, not just eligibility."
            />
            <FAQ
              q="How do you reduce loss to follow-up after abnormal results?"
              a="Person Health treats every abnormal finding as an open case that requires completion — not just a notification. The platform routes follow-up into navigator queues, clinician inboxes, or patient CTAs and tracks closure."
            />
            <FAQ
              q="What is governed clinical AI in screening and diagnosis support?"
              a="Governed clinical AI means every recommendation shows its provenance, exposes uncertainty, flags missing data, and defines the conditions under which human review is required. Person Health separates three care lanes with escalating governance requirements."
            />
          </div>

        </Reveal>
      </section>
    </>
  )
}
