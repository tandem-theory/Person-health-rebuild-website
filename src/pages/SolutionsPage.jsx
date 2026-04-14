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
    id: 'health-systems',
    icon: Building,
    title: 'Health Systems',
    subtitle: 'Workflow economics and pilot path',
    body: 'One patient. Multiple signals. One unified decision layer.',
    sections: [
      { title: 'Trusted capability', desc: 'The platform is designed to drive higher testing volumes, earlier confirmed need, longer patient retention, and improved economics.' },
      { title: 'What becomes possible', desc: 'More complete first-line screening, conditions that surface before crises, patients who stay in the ecosystem, and lower avoidable cost.' },
      { title: 'What the platform measures', desc: 'Completion rates, retention metrics, leak reduction, margin expansion.' },
    ],
    closing: 'Not a new test. It is a clinical workflow accelerator.',
  },
  {
    id: 'clinicians',
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
    id: 'investors',
    icon: BarChart3,
    title: 'Investors',
    subtitle: 'Commercialization ladder and compounding',
    body: 'One integrated platform. Compounding intelligence. Multiple monetization layers.',
    sections: [
      { title: 'Revenue infrastructure', desc: '2+ tests at launch · 100K+ tests/month capacity · 2 lab facilities · cost + 10% wholesale pricing.' },
      { title: 'What Person Health books', desc: 'Projected DTC and B2B2B revenue streams · MyWellnessQ programs and workflow fees · Owned-product revenue anticipated as Oncodea and Vocxi Breathe reach market.' },
      { title: 'Commercialization ladder', desc: 'MyWellnessQ front door → Paid programs + workflow fees → Oncodea specialty margin → Longitudinal data moat → Vocxi Breathe site economics.' },
    ],
    closing: 'Legacy partner-lab revenue is real proof the infrastructure exists — but it is not consolidated into Person Health revenue.',
  },
  {
    id: 'patients',
    icon: Users,
    title: 'Patients + Members',
    subtitle: 'Clarity, confidence, and next steps',
    body: 'Clearer access, less confusion, better odds of acting early.',
    sections: [
      { title: 'Why am I seeing this?', desc: 'Every recommendation shows what triggered it, what data was used, and why it matters — in plain language.' },
      { title: 'What does it mean?', desc: 'Context is provided alongside findings — including reference ranges, follow-up considerations, and relevant evidence.' },
      { title: 'What happens next?', desc: 'Your clinician reviews the recommendation and decides on the next step. The platform is designed to ensure a clear path forward is always available.' },
    ],
    closing: 'Recommendations are grounded in clinical evidence and reviewed by a clinician before reaching the end user.',
  },
  {
    id: 'partners',
    icon: Handshake,
    title: 'Partners',
    subtitle: 'Platform, evidence, and co-development',
    body: 'The platform creates value across the care and financing ecosystem.',
    sections: [
      { title: 'Providers + health systems', desc: 'More completed screening, less leakage, better quality performance.' },
      { title: 'Health plans + insurers', desc: 'Designed to support earlier risk identification and reduce avoidable medical cost.' },
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
        style={{ background: 'linear-gradient(135deg, #28104E 0%, #3a1a6e 40%, #28104E 100%)' }}
      >
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(40,16,78,0.5), rgba(40,16,78,0.85))' }} aria-hidden="true" />
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
            <section key={i} id={audience.id} className={`py-14 lg:py-18 ${isDark ? 'bg-brand-light' : 'bg-white'}`}>
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
                      <p className="text-lg text-gray-600 font-light leading-relaxed font-body mb-4">{audience.body}</p>
                      <a href="/contact" className="text-sm font-medium text-brand-primary hover:text-brand-deep inline-flex items-center gap-1 transition-colors font-body">
                        Request a meeting to find out more <span aria-hidden="true">&rarr;</span>
                      </a>
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

      </div>
    </>
  )
}
