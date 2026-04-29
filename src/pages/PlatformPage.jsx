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
  { name: 'MyWellnessQ', role: 'The consumer front door (live today)', detail: 'DTC cash-pay testing platform. 70+ tests available, 3,000+ biomarkers measured. Where the relationship starts and the data begins.', color: '#6237A0' },
  { name: 'MyClinicQ', role: 'Clinician-ordered specialty tests', detail: 'Provider portal lane. Recurring orders, certified lab fulfillment, structured billing workflows, and longitudinal care. The clinician-facing extension of the Person Health platform.', color: '#9B71D6' },
  { name: 'MyBloodQ', role: 'Blood-based early detection (Person Health IP)', detail: 'Validated cancer detection from a simple blood draw. 94.5% sensitivity and 96% specificity on breast cancer (437-patient blinded study at a top-10 US hospital system). 90% sensitivity and 92% specificity on multiple myeloma (independent validation underway). 10–20× lower cost than the average competitor test.', color: '#D7CFE6' },
  { name: 'MyBreathQ', role: 'Breath-based early detection (Person Health IP)', detail: 'Non-invasive breath analysis. Statistically significant disease signals across lung, sepsis, and COVID (P-value <0.05). 60-second sample at home or point of care. Ovarian, colorectal, and TBI in pipeline with DoD interest.', color: '#9B71D6' },
  { name: 'MyGeneticsQ', role: 'Baseline genetic, hormonal, and metabolic panels', detail: 'Germline risk, pharmacogenomics, hormonal and metabolic baseline. The foundation context that makes every breath, blood, and clinical signal more actionable.', color: '#CCE7FF' },
  { name: 'TOMME', role: 'The behavior engine', detail: 'Translate. Orient. Motivate. Monitor. Evaluate. TOMME turns early detection into a completed next step — and proves the outcome. Not a chatbot — the action loop and behavior data engine no one else has.', color: '#6237A0' },
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
            The early-detection<br />action platform.
          </h1>
          <p className="text-lg text-brand-lavender font-light max-w-2xl leading-relaxed font-body">
            Multimodal early detection — breath, blood, labs, genetics, and behavior — feeds TOMME, the behavior engine that closes the gap between signal and outcome. Detection finds the risk. Behavior change closes the gap.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT LINES */}
      <section className="bg-gradient-to-b from-white via-brand-light to-white py-10 lg:py-14">
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4 text-center">Product Families</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-brand-deep font-heading text-center">
            Six product modules. One pathway. One behavior engine.
          </h2>
          <p className="text-lg leading-relaxed font-light text-gray-600 font-body max-w-2xl mb-16 text-center mx-auto">
            Each module serves a different entry point, buyer, and modality — but all feed one pathway: the early signal, the action loop, and the validated outcome.
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
      <section id="tomme" className="py-10 lg:py-14" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">TOMME</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            TOMME — The behavior engine that turns early detection into measurable action
          </h2>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-3xl mb-6 text-center mx-auto">
            Translate. Orient. Motivate. Monitor. Evaluate. TOMME is the action loop inside Person Health — the engine that turns multimodal early signals into a completed next step, routed to the right person, tracked to closure, and proven against outcomes.
          </p>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-3xl mb-16 text-center mx-auto">
            Data → Understand → Act → Track → Validate → Learn. The loop keeps going until the outcome is known.
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
      <section className="py-10 lg:py-14" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">Detection-to-Action Workflow</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            How one case moves through the pathway
          </h2>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-2xl mb-16 text-center mx-auto">
            Six steps. No gap left unaddressed. The platform is accountable for completion, not just recommendation generation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { n: '01', title: 'Sense', desc: 'New lab, symptom, claim, message, wearable, or screening-due event.' },
              { n: '02', title: 'Understand', desc: 'AI reads all signals together to build a picture of your health trajectory.' },
              { n: '03', title: 'Decide', desc: 'TOMME surfaces the highest-priority recommended action — not a score, a step forward.' },
              { n: '04', title: 'Guide', desc: 'Routes to the right person: the patient, a care navigator, or the doctor.' },
              { n: '05', title: 'Complete', desc: 'Booked screening, workup, diagnosis support, or deferred path.' },
              { n: '06', title: 'Learn', desc: 'Response, drop-off, override, and outcome update the model.' },
            ].map((step, i) => (
              <div key={i} className="relative text-center py-6 px-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-all duration-300">
                <div
                  className="font-heading font-extrabold leading-[0.85] select-none mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'rgba(185,155,230,0.45)', letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <span className="inline-flex items-center px-5 py-1 rounded-full border-[1.5px] border-brand-medium/35 text-brand-medium text-xs font-bold uppercase tracking-[0.16em] font-body mb-3">
                  {step.title}
                </span>
                <p className="text-[15px] text-brand-lavender font-light leading-relaxed font-body mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-lavender/70 text-sm italic mb-10 font-body">
            The output is not another static risk score. It is a governed action system for getting the right person to a safer next step earlier.
          </p>
          <div className="text-center">
            <Button href="/contact?audience=platform">Request a platform walkthrough</Button>
          </div>
        </Reveal>
      </section>

      {/* DETECTION FABRIC */}
      <section className="py-10 lg:py-14" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
        <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4 text-center">Multimodal Detection Fabric</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-white font-heading text-center">
            The detection fabric is multimodal by design
          </h2>
          <p className="text-lg text-brand-lavender font-light leading-relaxed font-body max-w-2xl mb-16 text-center mx-auto">
            Each modality contributes a different slice of truth. TOMME fuses them into one daily state picture and turns the picture into an action.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { icon: Wind, label: 'Breath + remote sensing', desc: 'Breathomics, rapid, anywhere' },
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
            <Button href="/evidence">Explore the evidence</Button>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-brand-light to-white">
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
                  answer: 'TOMME is the behavior engine inside Person Health. It fuses breath, blood, genetics, clinical context, and behavior into a single state picture — then surfaces a recommended next step, routes it into a real workflow, and measures whether it was completed. Translate. Orient. Motivate. Monitor. Evaluate.',
                },
                {
                  question: 'What is the early-detection action platform?',
                  answer: 'An early-detection action platform combines multiple modalities of early signal — breath, blood, genetics, clinical context, and behavior — and turns each signal into a completed action, not just an insight. Person Health owns the full data pathway: the early signal, the action loop, and the validated outcome.',
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
