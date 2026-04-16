import {
  Dna, Wind, Shield, ClipboardCheck,
  Heart, Activity, FlaskConical,
  Microscope, BarChart3,
} from 'lucide-react'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import IconCard from '../components/ui/IconCard'
import StatBadge from '../components/ui/StatBadge'
import Accordion from '../components/ui/Accordion'

/* ─────────── HERO ─────────── */
function EvidenceHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #28104E 0%, #4a1d8a 40%, #28104E 100%)' }}>
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 to-brand-deep" aria-hidden="true" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <SectionLabel text="Evidence" />
        <h1
          className="mt-4 font-heading font-bold text-white leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Built on clinical evidence,<br />not promises.
        </h1>
        <p className="mt-6 text-lg lg:text-xl text-brand-lavender font-body font-light leading-relaxed max-w-3xl mx-auto">
          Every Person Health product is validated through peer-reviewed research, IRB-approved trials, and real-world pilot data. This page is the proof.
        </p>
      </div>
    </section>
  )
}

/* ─────────── CLINICAL VALIDATION LIBRARY ─────────── */
function ValidationLibrary() {
  return (
    <SectionWrapper bg="light">
      <div className="text-center">
        <SectionLabel text="Clinical Validation Library" light />
      </div>
      <h2
        className="mt-4 font-heading font-semibold text-brand-deep leading-[1.15] tracking-[-0.01em] text-center"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
      >
        Oncodea — Cancer Signal Research
      </h2>
      <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg max-w-3xl text-center mx-auto">
        Multimodal biomarker analysis designed to support early-stage cancer signal identification. Each study is IRB-approved and multi-site validated.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Breast CED */}
        <Card variant="light">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 p-3 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }} aria-hidden="true">
              <Dna className="w-full h-full text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-brand-deep text-lg">Breast Cancer Early Detection</h3>
              <p className="text-brand-primary text-sm font-body font-medium">Oncodea CED Panel</p>
            </div>
          </div>
          <p className="text-gray-600 font-body font-light leading-relaxed text-sm">
            Multimodal molecular sensing platform combining advanced blood-based molecular analysis, AI-driven pattern recognition, and proprietary cancer signal enhancement. Designed to support early-stage breast cancer signal detection. Under development for average-risk and elevated-risk populations.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-brand-light rounded-lg p-3 text-center">
              <div className="text-lg font-heading font-bold stat-gradient">Multi-site</div>
              <div className="text-xs text-gray-600 font-body mt-0.5">Validation design</div>
            </div>
            <div className="bg-brand-light rounded-lg p-3 text-center">
              <div className="text-lg font-heading font-bold stat-gradient">IRB-approved</div>
              <div className="text-xs text-gray-600 font-body mt-0.5">Study status</div>
            </div>
          </div>
        </Card>

        {/* Multiple Myeloma */}
        <Card variant="light">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 p-3 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }} aria-hidden="true">
              <FlaskConical className="w-full h-full text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-brand-deep text-lg">Multiple Myeloma Screening</h3>
              <p className="text-brand-primary text-sm font-body font-medium">Oncodea MM Panel</p>
            </div>
          </div>
          <p className="text-gray-600 font-body font-light leading-relaxed text-sm">
            Blood-based analysis protocol under development for multiple myeloma-associated signal identification, with a pathway designed for integration into routine lab workflows. Focused on the pre-symptomatic window — where earlier identification may support better clinical decisions.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-brand-light rounded-lg p-3 text-center">
              <div className="text-lg font-heading font-bold stat-gradient">Blood-based</div>
              <div className="text-xs text-gray-600 font-body mt-0.5">Sample type</div>
            </div>
            <div className="bg-brand-light rounded-lg p-3 text-center">
              <div className="text-lg font-heading font-bold stat-gradient">Population</div>
              <div className="text-xs text-gray-600 font-body mt-0.5">Scale target</div>
            </div>
          </div>
        </Card>
      </div>

    </SectionWrapper>
  )
}

/* ─────────── BREATHE SIGNALS ─────────── */
function BreatheSignals() {
  return (
    <SectionWrapper id="breathe-signals" bg="dark">
      <div className="text-center">
        <SectionLabel text="Vocxi Breathe Signal Library" />
      </div>
      <h2
        className="mt-4 font-heading font-semibold text-white leading-[1.15] tracking-[-0.01em] text-center"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
      >
        Breath-based screening signals
      </h2>
      <p className="mt-4 text-brand-lavender font-body font-light leading-relaxed text-lg max-w-3xl text-center mx-auto">
        Real-time volatile organic compound analysis for population-scale screening. Each signal category has published or in-progress validation data.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <IconCard icon={Wind} title="Lung Cancer Triage" description="Breath VOC profiles under study for lung cancer triage support — identifying signal patterns associated with elevated risk." />
        <IconCard icon={Activity} title="Sepsis Early Warning" description="Real-time breath biomarkers under investigation for sepsis-associated signal identification in clinical settings." />
        <IconCard icon={Heart} title="Ovarian Cancer Markers" description="VOC signature analysis under development for ovarian cancer signal research — exploring identification in one of the hardest-to-detect cancer types." />
        <IconCard icon={Microscope} title="Toxicology Panels" description="Breath-based toxicology analysis under development for environmental and occupational exposure assessment." />
      </div>

      <p className="mt-10 text-center text-brand-lavender/80 font-body font-light italic text-base max-w-3xl mx-auto">
        All Vocxi Breathe signal products undergo the same evidence governance as Oncodea products — peer-reviewed validation, threshold-bound scoring, and clinician-reviewed outputs.
      </p>

      {/* Stat badges */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-12 lg:gap-20" role="list" aria-label="Key statistics">
        <StatBadge value="40+" label="Patents granted" />
        <StatBadge value="3,000+" label="Biomarkers" />
        <StatBadge value="1 min" label="Breath test time" />
        <StatBadge value="20+" label="Identified use cases" />
      </div>

    </SectionWrapper>
  )
}

/* ─────────── METHODOLOGY ─────────── */
function Methodology() {
  return (
    <SectionWrapper id="methodology" bg="light">
      <div className="text-center">
        <SectionLabel text="Methodology & Governance" light />
        <h2
          className="mt-4 font-heading font-semibold text-brand-deep leading-[1.15] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          How Person Health measures what matters
        </h2>
        <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg max-w-3xl mx-auto">
          Person Health tracks four KPI categories across every product line — ensuring clinical, behavioral, economic, and governance outcomes are measured from day one.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: ClipboardCheck, title: 'Clinical KPIs', items: ['Sensitivity / specificity', 'Positive predictive value', 'Time to diagnosis', 'Stage-shift rates'] },
          { icon: Heart, title: 'Behavioral KPIs', items: ['Screening activation rate', 'Follow-through completion', 'Time to first action', 'Patient comprehension'] },
          { icon: BarChart3, title: 'Economic KPIs', items: ['Cost per screening', 'Revenue per completed pathway', 'Retained margin rate', 'Payer value score'] },
          { icon: Shield, title: 'Governance KPIs', items: ['Audit trail completeness', 'Threshold compliance rate', 'Clinician override rate', 'Signal closure rate'] },
        ].map((col) => (
          <Card key={col.title} variant="light">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 p-3 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-deep flex items-center justify-center shrink-0" aria-hidden="true">
                <col.icon className="w-full h-full text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-brand-deep mt-3">{col.title}</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {col.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600 font-body font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-medium mt-1.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-gray-500 font-body font-light italic text-base max-w-3xl mx-auto">
        Every metric is tracked per product line, per care lane, and per deployment site — giving health systems and partners the granularity they need to prove value.
      </p>

    </SectionWrapper>
  )
}

/* ─────────── EVIDENCE CTA ─────────── */
function EvidenceCTA() {
  return (
    <SectionWrapper bg="dark">
      <div className="text-center">
        <Button href="/contact">Request evidence materials</Button>
      </div>
    </SectionWrapper>
  )
}

/* ─────────── FAQ ─────────── */
function EvidenceFAQ() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel text="FAQ" light />
          <h2
            className="mt-4 font-heading font-semibold text-brand-deep leading-[1.15]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Evidence questions
          </h2>
        </div>

        <Accordion
          variant="light"
          items={[
            {
              question: 'Are Person Health products FDA-cleared?',
              answer: 'Person Health products are in various stages of clinical validation and regulatory engagement. Oncodea panels are being validated through IRB-approved, multi-site studies. Vocxi Breathe signal products are progressing through validation stages with published and in-progress data. Regulatory status is disclosed on a per-product basis — contact us for current status on specific products.',
            },
            {
              question: 'How is the evidence governed?',
              answer: 'Every clinical claim made by the platform must be traceable to a specific evidence source — peer-reviewed publication, IRB-approved trial data, or validated pilot outcome. Recommendations operate within pre-defined clinical thresholds, and all scoring models are auditable. AI-generated recommendations are routed through clinician review before reaching a patient.',
            },
          ]}
        />

      </div>
    </SectionWrapper>
  )
}

/* ─────────── PAGE ─────────── */
export default function EvidencePage() {
  return (
    <>
      <EvidenceHero />
      <ValidationLibrary />
      <BreatheSignals />
      <Methodology />
      <EvidenceCTA />
      <EvidenceFAQ />
    </>
  )
}
