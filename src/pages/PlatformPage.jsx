import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Wind, Droplets, Dna, Building2,
  FileBarChart, MessageSquare, Smartphone, Watch,
  RefreshCw, ShieldCheck, ScanEye, Zap
} from 'lucide-react'
import { images } from '../data/images'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'

const productImages = [
  '/images/mywellnessq-new.png',
  '/images/mywellnessq-labs.png',
  '/images/oncodea.png',
  '/images/breathe.jpeg',
  '/images/tomme.png',
]

const productLines = [
  { name: 'MyWellnessQ', role: 'Patient/member front door', detail: 'Consumer, clinician, and sponsor engagement. Ordering, results, guidance, and longitudinal conversion — all in one place. Every interaction becomes a trackable member journey.', color: '#6237A0' },
  { name: 'MyWellnessQ Labs', role: 'Immediate demand monetization and buyer-behavior data', detail: '70+ live tests, print-kit fulfillment, and complete ordering-to-results workflow. Every ordered test is a buyer-behavior datapoint that feeds back into the platform.', color: '#9B71D6' },
  { name: 'Oncodea / MMyeloma', role: 'First owned specialty margin', detail: 'Molecular fingerprinting detects cancer before symptoms from a simple blood draw. First wedge: multiple myeloma via Mayo Clinic collaboration. VERITY clinical trial active.', color: '#D7CFE6' },
  { name: 'Breathe', role: 'Acute-care workflow value and site economics', detail: 'Non-invasive breath screening via graphene nanosensor arrays. Results in under one minute. Pilot-first deployment with site economics, then broader rollout.', color: '#9B71D6' },
  { name: 'TOMME', role: 'Shared decision, routing, and learning layer across all of it', detail: 'Shared decision, routing, and learning layer across all product lines. Not a feature — the governed engine that makes every product line compound.', color: '#6237A0' },
]

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

export default function PlatformPage() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <>
      {/* HERO */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #28104E 0%, #4a1d8a 40%, #28104E 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${images.sections.tech})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 to-brand-deep" aria-hidden="true" />
        <Reveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4">The Platform</p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] tracking-tight mb-6 font-heading">
            One platform. One engine.<br />Multiple ways to enter.
          </h1>
          <p className="text-lg text-brand-lavender font-light max-w-2xl leading-relaxed font-body">
            Person Health organizes screening, early detection, and clinician-reviewed diagnosis support into a single governed workflow. Every product line feeds the same completion engine — TOMME.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT LINES */}
      <section className="bg-gradient-to-b from-white via-brand-light to-white py-14 lg:py-18">
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4 text-center">Product Families</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-brand-deep font-heading text-center">
            Five product lines. One completion engine.
          </h2>
          <p className="text-lg leading-relaxed font-light text-gray-600 font-body max-w-2xl mb-16 text-center mx-auto">
            Each line serves a different entry point, buyer, and signal type — but all share the same governed infrastructure for ingestion, scoring, routing, action, and closure.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
            <div className="space-y-3">
              {productLines.map((item, i) => {
                const isActive = activeProduct === i
                return (
                  <button
                    key={i}
                    onClick={() => setActiveProduct(isActive ? -1 : i)}
                    aria-expanded={isActive}
                    className={`w-full text-left bg-white rounded-2xl border-l-4 border border-brand-lavender/20 shadow-card transition-all duration-300 cursor-pointer ${isActive ? 'shadow-card-hover' : 'hover:shadow-card-hover'}`}
                    style={{ borderLeftColor: item.color, borderLeftWidth: isActive ? '6px' : '4px' }}
                  >
                    <div className="p-6 pb-3">
                      <h3 className="text-xl font-semibold text-brand-deep mb-1 font-heading">{item.name}</h3>
                      <p className="text-sm font-medium text-brand-primary font-body">{item.role}</p>
                    </div>
                    {isActive && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 text-[15px] leading-relaxed font-light font-body">{item.detail}</p>
                      </div>
                    )}
                  </button>
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
        </Reveal>
      </section>

      {/* TOMME DEEP DIVE */}
      <section id="tomme" className="py-14 lg:py-18" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">TOMME Core</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            TOMME — The engine behind all of it
          </h2>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-3xl mb-6 text-center mx-auto">
            TOMME is the governed intelligence core inside Person Health. It unifies clinical trajectory, behavior state, trust, and intervention response inside one model — so buyers experience one system, not disconnected tools.
          </p>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-3xl mb-16 text-center mx-auto">
            The engine does not generate recommendations and walk away — it selects the safest next step, routes it into a real workflow, tracks completion, and learns from the outcome.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Closes the loop', Icon: RefreshCw, desc: 'Most systems recommend. TOMME tracks whether the action was taken, completed, or abandoned — and adjusts.' },
              { title: 'Governed by design', Icon: ShieldCheck, desc: 'Safety gates, human-review thresholds, and transparency are built into the architecture, not added later.' },
              { title: 'Reads behavior', Icon: ScanEye, desc: 'Models readiness, trust, and friction alongside clinical signals — because detection without activation is waste.' },
              { title: 'Gets smarter', Icon: Zap, desc: 'Every completed action, every override, every drop-off improves the next recommendation.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card backdrop-blur-xl border border-brand-lavender/10 rounded-2xl p-6 hover:border-brand-medium/30 transition-all duration-300 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }} aria-hidden="true">
                  <item.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 font-heading">{item.title}</h3>
                  <p className="text-brand-lavender text-sm leading-relaxed font-light font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SIX-STEP WORKFLOW */}
      <section className="py-14 lg:py-18" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">Signal-to-Action Workflow</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            How one case moves through the OS
          </h2>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-2xl mb-16 text-center mx-auto">
            Six steps. Zero gaps. The product is accountable for completion, not just recommendation generation.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { n: '01', title: 'Sense', desc: 'New lab, symptom, claim, message, wearable, or screening-due event.' },
              { n: '02', title: 'Infer', desc: 'Clinical opportunity + trajectory + trust and friction.' },
              { n: '03', title: 'Decide', desc: 'Next best action subject to safety, evidence, consent, and fairness.' },
              { n: '04', title: 'Route', desc: 'Patient CTA, navigator task, clinician review, or urgent escalation.' },
              { n: '05', title: 'Complete', desc: 'Booked screening, workup, diagnosis support, or deferred path.' },
              { n: '06', title: 'Learn', desc: 'Response, drop-off, override, and outcome update the model.' },
            ].map((step, i) => (
              <div key={i} className="relative text-center py-10 px-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-all duration-300">
                <div
                  className="font-heading font-extrabold leading-[0.85] select-none mb-4"
                  style={{ fontSize: 'clamp(4rem, 6vw, 5.5rem)', color: 'rgba(155,113,214,0.3)', letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <span className="inline-flex items-center px-6 py-1.5 rounded-full border-[1.5px] border-brand-medium/35 text-brand-medium text-xs font-bold uppercase tracking-[0.16em] font-body mb-4">
                  {step.title}
                </span>
                <p className="text-base text-brand-lavender font-light leading-relaxed font-body mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-lavender/70 text-sm italic mb-10 font-body">
            The output is not another static risk score. It is a governed action system for getting the right person to the safest next step earlier.
          </p>
          <div className="text-center">
            <Button href="/contact?audience=platform">Request a platform walkthrough</Button>
          </div>
        </Reveal>
      </section>

      {/* SIGNAL FABRIC */}
      <section className="py-14 lg:py-18" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">Multimodal Signal Fabric</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            The signal fabric is multimodal by design
          </h2>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-2xl mb-16 text-center mx-auto">
            Each modality contributes a different slice of truth. TOMME fuses them into one daily state picture.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { icon: Wind, label: 'Breath + remote sensing', desc: 'Breathomics, pulmonary signals, home sensors' },
              { icon: Droplets, label: 'Blood + biomarkers', desc: 'Routine labs, biomarker trends, abnormal results' },
              { icon: Dna, label: 'Genetics + epigenetics', desc: 'Polygenic risk, variants, epigenetic aging' },
              { icon: Building2, label: 'EHR + labs + vitals', desc: 'Diagnoses, meds, referrals, scheduling' },
              { icon: FileBarChart, label: 'Claims + utilization', desc: 'Care gaps, leakage, utilization, adherence' },
              { icon: MessageSquare, label: 'Symptoms + questionnaires', desc: 'Patient-reported outcomes and screening tools' },
              { icon: Smartphone, label: 'Portal + SMS + app behavior', desc: 'Response history, trust signals, friction' },
              { icon: Watch, label: 'Wearables + home monitoring', desc: 'Continuous vitals and activity data' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-brand-medium/30 hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(98,55,160,0.2), rgba(40,16,78,0.4))', border: '1px solid rgba(155,113,214,0.2)' }} aria-hidden="true">
                  <item.icon className="w-6 h-6 text-brand-medium" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white mb-1 font-heading">{item.label}</p>
                  <p className="text-sm text-brand-lavender font-light font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/evidence">Explore the evidence library</Button>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-18 bg-gradient-to-b from-brand-light to-white">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">FAQ</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-brand-deep font-heading">
            Platform questions
          </h2>

          <div className="mt-12 border-t border-brand-lavender/30">
            <Accordion
              variant="light"
              items={[
                {
                  question: 'What is TOMME?',
                  answer: 'TOMME stands for Trusted Orchestrated Multimodal Markov Engine. It is the governed intelligence core inside Person Health. It fuses breath, blood, genetics, labs, claims, EHR, symptoms, and behavior into a single state picture — then selects the safest next step, routes it into a real workflow, and measures whether it completed.',
                },
                {
                  question: 'What is a multimodal health action platform?',
                  answer: 'A multimodal health action platform combines multiple diagnostic and behavioral signal types into one decision layer. The platform is accountable for action, not just insight. It routes recommendations into real workflows and tracks whether the action was completed.',
                },
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <Button href="/contact?audience=platform">Request a platform walkthrough</Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
