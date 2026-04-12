import { motion } from 'framer-motion'
import {
  Building, Stethoscope, BarChart3, Users, Handshake
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Button from '../components/ui/Button'

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

const audiences = [
  {
    icon: Building,
    title: 'Health Systems',
    subtitle: 'Workflow economics and pilot path',
    body: 'One patient. Multiple signals. One unified decision layer.',
    sections: [
      { title: 'Trusted capability', desc: 'Higher testing volumes, earlier confirmed need, longer patient retention, and better economics.' },
      { title: 'What becomes possible', desc: 'More complete first-line screening, conditions that surface before crises, patients who stay in the ecosystem, and lower avoidable cost.' },
      { title: 'What the platform measures', desc: 'Completion rates, retention metrics, leak reduction, margin expansion.' },
    ],
    closing: 'Not a new test. It is a clinical workflow accelerator.',
  },
  {
    icon: Stethoscope,
    title: 'Clinicians',
    subtitle: 'Rationale, review, and follow-through',
    body: 'The model informs. It does not replace judgment.',
    sections: [
      { title: 'Source attributes', desc: 'What is this model? Who owns it? What population is it for?' },
      { title: 'Provenance + recency', desc: 'What data triggered this? How current? What is missing?' },
      { title: 'Uncertainty + fairness', desc: 'How sure is the system? Which subgroups need monitoring?' },
      { title: 'Human control', desc: 'When does the case stop and require clinician review?' },
    ],
    closing: 'Every recommendation shows its rationale. You decide. That boundary is non-negotiable.',
  },
  {
    icon: BarChart3,
    title: 'Investors',
    subtitle: 'Commercialization ladder and compounding',
    body: 'One integrated platform. Compounding intelligence. Multiple monetization layers.',
    sections: [
      { title: 'Revenue infrastructure', desc: '2+ tests at launch · 100K+ tests/month capacity · 2 lab facilities · cost + 10% wholesale pricing.' },
      { title: 'What we book', desc: 'Incremental D2C and B2B2B revenue · MyWellnessQ programs and workflow fees · Owned-product revenue as Oncodea and Breathe go live.' },
      { title: 'Commercialization ladder', desc: 'MyWellnessQ front door → Paid programs + workflow fees → Oncodea specialty margin → Longitudinal data moat → Breathe site economics.' },
    ],
    closing: 'Legacy partner-lab revenue is real proof the infrastructure exists — but it is not consolidated into Person Health revenue.',
  },
  {
    icon: Users,
    title: 'Patients + Members',
    subtitle: 'Clarity, confidence, and next steps',
    body: 'Clearer access, less confusion, better odds of acting early.',
    sections: [
      { title: 'Why am I seeing this?', desc: 'Every recommendation shows what triggered it, what data was used, and why it matters — in plain language.' },
      { title: 'What does it mean?', desc: 'Context is provided alongside every finding — what is normal, what needs follow-up, and what the evidence says.' },
      { title: 'What happens next?', desc: 'Your clinician reviews the recommendation and decides on the next step. You are never left without a clear path forward.' },
    ],
    closing: 'Every recommendation is backed by clinical evidence and reviewed by a real clinician before it reaches you.',
  },
  {
    icon: Handshake,
    title: 'Partners',
    subtitle: 'Platform, evidence, and co-development',
    body: 'The platform creates value across the care and financing ecosystem.',
    sections: [
      { title: 'Providers + health systems', desc: 'More completed screening, less leakage, better quality performance.' },
      { title: 'Health plans + insurers', desc: 'Earlier risk identification, lower avoidable medical cost.' },
      { title: 'Self-insured employers', desc: 'Lower trend, reduced absence and friction.' },
      { title: 'Banks + care financing', desc: 'Consent-based payment design for diagnostics and prevention.' },
      { title: 'Underwriters + actuaries', desc: 'Aggregated portfolio modeling and risk segmentation under ethical guardrails.' },
    ],
    closing: null,
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(40,16,78,0.88), rgba(58,26,110,0.88) 40%, rgba(40,16,78,0.88)), url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80) center/cover no-repeat' }}
      >
        <Reveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-4">Solutions</p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] tracking-tight mb-6 font-heading">
            One company story, different buying lenses.
          </h1>
          <p className="text-lg text-brand-lavender font-light max-w-2xl leading-relaxed font-body mx-auto">
            Each audience sees the same platform, the same trust architecture, the same evidence — through the lens that matters to them.
          </p>
        </Reveal>
      </section>

      {/* ─── AUDIENCE SECTIONS ─── */}
      <div>
        {audiences.map((audience, i) => {
          const isDark = i % 2 === 1
          return (
            <section key={i} className={`py-14 lg:py-18 ${isDark ? 'bg-brand-light' : 'bg-white'}`}>
              <Reveal className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }}
                      aria-hidden="true"
                    >
                      <audience.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-brand-deep leading-[1.15] mb-2 font-heading">
                        {audience.title}
                      </h2>
                      <p className="text-[15px] font-medium text-brand-primary mb-4 font-body">{audience.subtitle}</p>
                      <p className="text-lg text-gray-600 font-light leading-relaxed font-body">{audience.body}</p>
                    </div>
                  </div>
                  <div>
                    {audience.sections.map((s, j) => (
                      <div key={j} className="border-l-[3px] border-brand-primary/30 pl-5 mb-5">
                        <h4 className="text-base font-semibold text-brand-deep mb-1 font-heading">{s.title}</h4>
                        <p className="text-[15px] text-gray-600 font-light leading-relaxed font-body">{s.desc}</p>
                      </div>
                    ))}
                    {audience.closing && (
                      <p className="text-sm text-brand-primary italic font-body">{audience.closing}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </section>
          )
        })}

        <section className="py-14 lg:py-18 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <Button href="/contact">Request partnership discussion</Button>
          </div>
        </section>
      </div>
    </>
  )
}
