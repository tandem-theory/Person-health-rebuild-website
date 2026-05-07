import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  User, ClipboardPlus, Handshake,
  Compass, Microscope, FileText, CheckCircle2,
  HeartPulse, Droplet, Wind, Sparkles,
  Search, TestTube, MessageSquare, Target, Stethoscope, RefreshCw,
  Activity, Navigation, LineChart,
  Plus, ArrowRight,
  ShieldCheck, Lock, Info,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Button from '../components/ui/Button'

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
   FAQ
   ═══════════════════════════════════════ */

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-brand-lavender/40 py-5">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full flex justify-between items-start gap-6 text-left"
        >
          <span className="text-lg font-semibold text-brand-deep font-heading leading-snug">{q}</span>
          <Plus
            className={`w-5 h-5 text-brand-primary shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {open && (
        <div className="mt-4">
          <p className="text-[15px] leading-relaxed font-light text-gray-600 font-body">{a}</p>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════
   ENGAGEMENT — orbital diagram (desktop) data
   ═══════════════════════════════════════ */

const orbitalStages = [
  { num: '01', name: 'Discover',  icon: Search,        body: 'Wellness, longevity, genetics, biomarkers, and prevention — explored through introductory pricing and personalized pathways.' },
  { num: '02', name: 'Test',      icon: TestTube,      body: 'At-home genetics, wellness panels, and cash-pay diagnostics. Simple onboarding. No provider required to begin.' },
  { num: '03', name: 'Understand', icon: MessageSquare, body: 'QCoach explains results, surfaces what matters, and personalizes what comes next. The static number becomes a behavior loop.' },
  { num: '04', name: 'Go deeper', icon: Target,        body: 'Advanced biomarkers, hormones, metabolic and cardiovascular health, inflammation, and longitudinal monitoring — personalized to results, behavior, and goals.' },
  { num: '05', name: 'Clinical activation', icon: Stethoscope, body: 'When findings warrant physician oversight, MyClinicQ picks up the workflow. The consumer experience doesn’t break at the handoff.' },
  { num: '06', name: 'Continuous engagement', icon: RefreshCw, body: 'Patients return to MyWellnessQ for new results, recommendations, and ongoing QCoach support. Prevention, diagnostics, and clinical care become one loop.' },
]

const ORBIT_POSITIONS = [
  { left: '37.5%',  top: '28.35%', tx: 'translate(calc(-100% - 36px), -100%)', align: 'right' },
  { left: '62.5%',  top: '28.35%', tx: 'translate(36px, -100%)',                 align: 'left'  },
  { left: '75%',    top: '50%',    tx: 'translate(36px, -50%)',                  align: 'left'  },
  { left: '62.5%',  top: '71.65%', tx: 'translate(36px, 0)',                     align: 'left'  },
  { left: '37.5%',  top: '71.65%', tx: 'translate(calc(-100% - 36px), 0)',       align: 'right' },
  { left: '25%',    top: '50%',    tx: 'translate(calc(-100% - 36px), -50%)',    align: 'right' },
]

const ORBIT_NODE_COORDS = [
  { x: 375, y: 283.5 },
  { x: 625, y: 283.5 },
  { x: 750, y: 500 },
  { x: 625, y: 716.5 },
  { x: 375, y: 716.5 },
  { x: 250, y: 500 },
]

/* ═══════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ─── HERO (dark purple) ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #28104E 0%, #3a1a6e 50%, #28104E 100%)' }}
      >
        <Reveal className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-32 pb-10 lg:pb-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy 7/12 */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body mb-6">
              Early detection + guided next steps
            </p>
            <h1 className="font-heading font-semibold leading-[1.05] tracking-tight text-[clamp(2.5rem,5vw,3.5rem)]">
              <span className="text-white">Find health risks earlier.</span>
              <span className="block text-brand-medium">Know what to do next.</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-brand-lavender leading-relaxed font-light font-body max-w-xl">
              Person Health helps people screen earlier, understand their results, and take the right next step — through lab testing, genetics, blood and breath detection, and guided support that doesn&rsquo;t end at a PDF.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="https://mywellnessq.com" variant="light">Start with MyWellnessQ</Button>
              <Button href="https://mywellnessq.com" variant="secondary">Refer or order for patients</Button>
            </div>

            {/* Stat pill row — dark translucent cards (copy verbatim from guide) */}
            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl">
              <div className="rounded-2xl px-5 py-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="font-heading font-semibold text-3xl lg:text-4xl text-brand-medium leading-none">70+</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-brand-lavender font-medium font-body">tests available today</p>
              </div>
              <div className="rounded-2xl px-5 py-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="font-heading font-semibold text-3xl lg:text-4xl text-brand-medium leading-none">3,000+</p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-brand-lavender font-medium font-body">biomarkers across the suite</p>
              </div>
              <div className="rounded-2xl px-5 py-4 border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-brand-medium shrink-0" aria-hidden="true" />
                <p className="font-heading font-semibold text-base lg:text-lg text-white leading-snug">
                  Guided by <span className="text-brand-medium">TOMME</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: hero image — square aspect to remove stretched look */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div
              className="mx-auto rounded-2xl overflow-hidden shadow-card-hover"
              style={{ aspectRatio: '1/1', maxWidth: 460, maxHeight: 460 }}
            >
              <img
                src="/images/home/hero-01.jpg"
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>
          </div>
        </Reveal>

        {/* Three-act loop band — dark numbered step cards */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-12 lg:pb-16">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-3 flex flex-col justify-center">
                <p className="font-heading text-white text-lg lg:text-xl leading-snug font-semibold">From curiosity to clinical care.</p>
                <p className="mt-2 text-sm text-brand-lavender italic font-body">A continuous engagement loop, not a single transaction.</p>
                <a href="#engagement" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-medium hover:text-white transition font-body">
                  See the engagement loop <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
              {[
                { n: '01', t: 'Discover & test.', d: 'Genetics, biomarkers, and wellness panels through MyWellnessQ.' },
                { n: '02', t: 'Understand & go deeper.', d: 'QCoach explains results and personalizes what comes next.' },
                { n: '03', t: 'Activate clinical care.', d: 'Seamless handoff to provider-supported workflows.' },
              ].map((step) => (
                <div
                  key={step.n}
                  className="md:col-span-3 rounded-2xl px-6 py-7 border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col"
                >
                  <p className="font-heading font-semibold text-5xl text-brand-medium leading-none">{step.n}</p>
                  <span className="mt-3 inline-flex self-start items-center rounded-full border border-brand-medium/40 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-lavender font-body">
                    {step.t}
                  </span>
                  <p className="mt-3 text-sm text-brand-lavender/85 leading-relaxed font-light font-body">{step.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* ─── SECTION 1: CHOOSE YOUR PATH ─── */}
      <section id="paths" className="bg-white">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          {/* Header trio centered above the cards (#29580294) */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">
              Choose your path
            </p>
            <h2 className="font-heading font-semibold text-[clamp(2rem,4vw,2.5rem)] leading-tight tracking-tight">
              <span className="text-brand-deep">Start in the way</span>{' '}
              <span className="text-brand-primary">that fits you.</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed font-light font-body">
              Person Health serves individuals, clinicians, and organizations. Each path connects to the same platform: early signal, guided action, and measurable follow-up.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: User,
                eyebrow: 'For individuals',
                title: 'Buy or request a test.',
                body: 'Start with MyWellnessQ for lab, wellness, genetics, and specialty screening pathways.',
                bullets: ['Browse tests and panels', 'Order online or through a clinician', 'Get help understanding what to do next'],
                cta: 'Browse tests',
                href: 'https://mywellnessq.com',
              },
              {
                icon: ClipboardPlus,
                eyebrow: 'For clinicians',
                title: 'Order for patients.',
                body: 'Use Person Health to extend screening, simplify patient education, and track next-step completion.',
                bullets: ['Request provider access', 'Order supported test pathways', 'Receive structured results and patient-friendly guidance'],
                cta: 'Request provider access',
                href: 'https://mywellnessq.com',
                anchorId: 'clinicians',
              },
              {
                icon: Handshake,
                eyebrow: 'For partners',
                title: 'Build an early-detection program.',
                body: 'Work with Person Health on pilots for health systems, labs, employers, payers, and research partners.',
                bullets: ['Define a population or disease pathway', 'Use blood, breath, lab, or behavior workflows', 'Measure follow-up, engagement, and outcomes'],
                cta: null,
                href: null,
                anchorId: 'partners',
              },
            ].map((card, i) => (
              <article
                key={i}
                id={card.anchorId}
                className="group relative bg-white rounded-2xl border border-brand-lavender/50 p-7 lg:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Intentional accent: thicker gradient bar */}
                <div
                  className="absolute top-0 left-7 right-7 h-1 rounded-b-full"
                  style={{ background: 'linear-gradient(90deg, #6237A0 0%, #9B71D6 100%)' }}
                  aria-hidden="true"
                />
                {/* Header row: copy left, icon right (#29579242) */}
                <div className="flex items-start justify-between gap-4 mt-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-medium font-body">{card.eyebrow}</p>
                    <h3 className="mt-2 font-heading font-semibold text-xl text-brand-deep leading-snug">{card.title}</h3>
                  </div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }}
                    aria-hidden="true"
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed text-[0.95rem] font-light font-body">{card.body}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-gray-700 font-body">
                  {card.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-brand-medium shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                {/* CTA pinned to bottom for horizontal alignment across cards (omitted when card has no destination) */}
                {card.href && card.cta && (
                  card.href.startsWith('http') ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:text-brand-deep transition font-body"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-4 py-2 group-hover:bg-brand-lavender/60 transition">
                        {card.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={card.href}
                      className="mt-auto pt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:text-brand-deep transition font-body"
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-4 py-2 group-hover:bg-brand-lavender/60 transition">
                        {card.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </Link>
                  )
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 2: HOW IT WORKS ─── */}
      <section id="how-it-works" className="bg-brand-light">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          {/* Centered header trio (#29580485) */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">
              How it works
            </p>
            <h2 className="font-heading font-semibold text-[clamp(2rem,4vw,2.5rem)] leading-tight tracking-tight">
              <span className="text-brand-deep">Earlier information only matters</span>{' '}
              <span className="text-brand-primary">when it leads to action.</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed font-light font-body">
              Person Health combines testing, result interpretation, behavior guidance, and follow-up so people don&rsquo;t get stuck after receiving health information.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { n: '01', icon: Compass,       t: 'Choose a path.',          d: 'Start with a wellness panel, genetics, specialty test, clinician order, or partner program.' },
              { n: '02', icon: Microscope,    t: 'Collect the signal.',     d: 'Use labs, blood, breath, genetics, and health context to find earlier signals.' },
              { n: '03', icon: FileText,      t: 'Understand clearly.',     d: 'Results are organized into simple language, key findings, and what requires attention.' },
              { n: '04', icon: CheckCircle2,  t: 'Complete the next step.', d: <><span className="text-brand-deep font-medium">TOMME</span> helps translate, orient, motivate, monitor, and evaluate until action is completed.</> },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-heading font-semibold text-brand-primary text-3xl leading-none">{step.n}</span>
                  <step.icon className="w-10 h-10 text-brand-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-brand-deep text-lg leading-snug">{step.t}</h3>
                <p className="mt-2 text-[0.95rem] text-gray-600 leading-relaxed font-light font-body">{step.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 3: THE PLATFORM ─── */}
      <section id="platform" className="bg-white">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          {/* Centered header trio (#29580498) — wider container so headline + subhead fit one line */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">
              The platform
            </p>
            <h2 className="font-heading font-semibold text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight tracking-tight whitespace-normal lg:whitespace-nowrap">
              <span className="text-brand-deep">One front door.</span>{' '}
              <span className="text-brand-primary">Multiple ways to find earlier signals.</span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-gray-600 leading-relaxed font-light font-body lg:whitespace-nowrap">
              Person Health brings together live testing today and proprietary detection pathways for the future.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: HeartPulse, title: 'MyWellnessQ', body: 'The consumer front door for lab, wellness, genetics, and specialty test panels available today.' },
              { icon: Droplet,    title: 'MyBloodQ',    body: 'Proprietary blood-based early-detection technology for clinical pathways and specialty diagnostics.' },
              { icon: Wind,       title: 'MyBreathQ',   body: 'Non-invasive breath-based sensing designed to identify disease-related signals from a simple sample.' },
              { icon: Sparkles,   title: 'TOMME',       body: 'The guided action engine that helps people understand, act, track, and complete the next step.', dark: true },
            ].map((card, i) => (
              <article
                key={i}
                className={
                  card.dark
                    ? 'bg-brand-deep rounded-2xl p-7 text-white relative overflow-hidden border border-transparent flex flex-col'
                    : 'bg-white rounded-2xl border border-brand-lavender/50 p-7 hover:border-brand-medium hover:shadow-card transition flex flex-col'
                }
              >
                {/* Icon + title row (icon left, title right) per #29579310 */}
                <div className="flex items-center gap-4">
                  <div
                    className={
                      card.dark
                        ? 'w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 shrink-0'
                        : 'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0'
                    }
                    style={card.dark ? undefined : { background: 'linear-gradient(135deg, #6237A0, #28104E)' }}
                    aria-hidden="true"
                  >
                    <card.icon className={card.dark ? 'w-7 h-7 text-brand-lavender' : 'w-7 h-7 text-white'} strokeWidth={1.6} />
                  </div>
                  <h3 className={`font-heading font-semibold text-lg ${card.dark ? '' : 'text-brand-deep'}`}>{card.title}</h3>
                </div>
                <p className={`mt-4 text-[0.95rem] leading-relaxed font-light font-body ${card.dark ? 'text-white/80' : 'text-gray-600'}`}>{card.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>


      {/* ─── BRIDGE BAND ─── */}
      <div className="bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-center">
          <p className="text-sm italic text-gray-500 font-body">The platform is the architecture. This is how a person actually moves through it.</p>
        </div>
      </div>


      {/* ─── SECTION 4: ENGAGEMENT LAYER ─── */}
      <section id="engagement" className="relative bg-gradient-to-b from-brand-light via-brand-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-12 lg:pb-16">

          {/* Section opener */}
          <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">
                Earlier engagement. Better outcomes.
              </p>
              <h2 className="font-heading font-semibold text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.05] tracking-tight">
                <span className="text-brand-deep">Earlier engagement starts</span>
                <span className="block text-brand-primary">before clinical activation.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-[1.65] font-light font-body">
                MyWellnessQ is the consumer front door — not an ecommerce storefront. It opens the platform to people through affordable cash-pay testing, guided wellness, and AI-supported education, long before a traditional clinical workflow begins.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="mx-auto rounded-2xl overflow-hidden shadow-card-hover" style={{ aspectRatio: '16/10', maxWidth: 520 }}>
                <img src="/images/home/loop-hero.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>

          {/* Orbital diagram (desktop only) — thicker ring, ball synced w/ node pulses, ball z-on-top */}
          <Reveal className="hidden lg:block mt-14">
            <div className="relative mx-auto" style={{ aspectRatio: '1/1', maxWidth: 820 }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                  <marker id="orbArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M0 0 L10 5 L0 10 Z" fill="#6237A0" />
                  </marker>
                </defs>

                {/* Outer ring */}
                <circle cx="500" cy="500" r="250" fill="none" stroke="#9B71D6" strokeWidth="6" strokeOpacity="0.45" />

                {/* Curved arrows along path */}
                <g fill="none" stroke="#9B71D6" strokeWidth="1.6">
                  <path d="M 402,270 A 250 250 0 0 1 598,270" markerEnd="url(#orbArr)" />
                  <path d="M 651,300 A 250 250 0 0 1 748,470" markerEnd="url(#orbArr)" />
                  <path d="M 748,530 A 250 250 0 0 1 651,700" markerEnd="url(#orbArr)" />
                  <path d="M 598,730 A 250 250 0 0 1 402,730" markerEnd="url(#orbArr)" />
                  <path d="M 349,700 A 250 250 0 0 1 252,530" markerEnd="url(#orbArr)" />
                  <path d="M 252,470 A 250 250 0 0 1 349,300" markerEnd="url(#orbArr)" />
                </g>

                {/* Animated pulse dot traveling around the ring — drawn BEFORE node circles so it z-orders BEHIND them (#29580341) */}
                <circle r="10" fill="#6237A0">
                  <animateMotion dur="12s" repeatCount="indefinite" rotate="auto"
                    path="M 500,250 A 250 250 0 0 1 500,750 A 250 250 0 0 1 500,250 Z" />
                </circle>

                {/* Stage node circles — pulse synced to ball arrival */}
                {ORBIT_NODE_COORDS.map((p, i) => {
                  const arrivalTimes = [11, 1, 3, 5, 7, 9]
                  const begin = Math.max(0, arrivalTimes[i] - 0.96)
                  return (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="36" fill="#fff" stroke="#9B71D6" strokeWidth="3">
                        <animate
                          attributeName="r"
                          values="36;36;44;36;36"
                          keyTimes="0;0.04;0.08;0.16;1"
                          dur="12s"
                          begin={`${begin}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-width"
                          values="3;3;5;3;3"
                          keyTimes="0;0.04;0.08;0.16;1"
                          dur="12s"
                          begin={`${begin}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  )
                })}
              </svg>

              {/* Stage node icons (positioned over SVG circles) — larger */}
              {ORBIT_NODE_COORDS.map((p, i) => {
                const Icon = orbitalStages[i].icon
                return (
                  <div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${(p.x / 1000) * 100}%`,
                      top: `${(p.y / 1000) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Icon className="w-7 h-7 text-brand-primary" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                )
              })}

              {/* TOMME center node */}
              <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 200 }}>
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center shadow-card" style={{ background: 'linear-gradient(135deg, #28104E, #6237A0)' }}>
                    <Sparkles className="w-9 h-9 text-brand-lavender" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-heading font-semibold text-brand-deep text-xl tracking-tight">TOMME</p>
                  <p className="text-[0.625rem] uppercase tracking-[0.18em] text-brand-medium font-medium mt-1.5 font-body">Governed Behavior Engine</p>
                  <p className="mt-3 text-sm text-gray-600 leading-snug italic font-body">Signals flow into completed action.</p>
                </div>
              </div>

              {/* Stage descriptors — dark purple bg restored (#29580616), light-purple number, white pill label */}
              {orbitalStages.map((s, i) => {
                const pos = ORBIT_POSITIONS[i]
                return (
                  <article
                    key={s.num}
                    className="absolute rounded-2xl border border-brand-medium/30 px-5 py-5 text-center shadow-card flex flex-col items-center justify-center"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: pos.tx,
                      width: 220,
                      height: 220,
                      background: 'linear-gradient(135deg, rgba(53,21,102,0.95) 0%, rgba(40,16,78,0.97) 100%)',
                    }}
                  >
                    <p className="font-heading font-semibold text-brand-medium text-3xl leading-none">{s.num}</p>
                    <span className="mt-2 inline-flex items-center rounded-full bg-white px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-brand-primary font-body">
                      {s.name}
                    </span>
                    <p className="mt-2.5 text-[0.75rem] text-brand-lavender leading-snug font-light font-body">{s.body}</p>
                  </article>
                )
              })}
            </div>
          </Reveal>

          {/* Mobile / tablet: vertical sequence */}
          <div className="lg:hidden mt-10 space-y-8">
            {orbitalStages.map((s, i) => (
              <Reveal key={s.num}>
                <div className="relative pl-16">
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center font-heading font-semibold text-sm ${
                      i === orbitalStages.length - 1
                        ? 'bg-brand-primary text-white border-2 border-brand-primary'
                        : 'bg-white text-brand-primary border-2 border-brand-medium'
                    }`}
                  >
                    {s.num}
                  </div>
                  {i < orbitalStages.length - 1 && <div className="absolute left-[23px] top-12 -bottom-8 w-px bg-brand-medium/60" aria-hidden="true" />}
                  <div className="flex items-center gap-3 mb-1">
                    <s.icon className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                    <h3 className="font-heading font-semibold text-brand-deep text-lg">{s.name}</h3>
                  </div>
                  <p className="mt-1 text-[0.95rem] text-gray-600 leading-relaxed font-light font-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
            <div className="pl-16 -mt-2 flex items-center gap-3 text-brand-primary">
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] font-body">Returns to 01</span>
            </div>
          </div>
        </div>

        {/* "The loop continues" reinforcement strip — DARK PURPLE per #29579424 */}
        <div className="relative" style={{ background: 'linear-gradient(180deg, #28104E 0%, #351566 50%, #28104E 100%)' }}>
          <Reveal className="max-w-5xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-lavender font-body text-center mb-8">The loop continues</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {[
                { icon: Activity,    t: 'Signals',       d: 'Continuous biomarker, lab, and behavior data.' },
                { icon: Navigation,  t: 'Guidance',      d: 'Plain-language next-step direction.' },
                { icon: LineChart,   t: 'Monitoring',    d: 'Tracked over time, surfaced when relevant.' },
                { icon: RefreshCw,   t: 'Re-engagement', d: 'Brought back at the moment of decision.' },
              ].map((it, i) => (
                <div key={i} className="rounded-2xl p-5 lg:p-6 border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:border-brand-medium/40 transition">
                  <div
                    className="mx-auto w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }}
                    aria-hidden="true"
                  >
                    <it.icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                  </div>
                  <p className="mt-4 font-heading font-semibold text-white text-base">{it.t}</p>
                  <p className="mt-1.5 text-[0.8125rem] text-brand-lavender leading-relaxed font-body font-light">{it.d}</p>
                </div>
              ))}
            </div>

            {/* Closing pull-quote — moved here, tighter to "loop continues" (#29579432) */}
            <figure className="mt-10 lg:mt-12 max-w-4xl mx-auto text-center">
              <blockquote className="font-heading font-semibold text-2xl sm:text-3xl lg:text-[2rem] leading-[1.25] tracking-tight">
                <span className="text-white">Most platforms begin and end at the same moment a result lands.</span>
                <span className="block mt-2 text-brand-medium">Person Health begins earlier — and continues longer.</span>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>


      {/* ─── SECTION 5: WHY DIFFERENT ─── */}
      <section id="why" className="bg-white">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          {/* Top row: copy left + image right (image vertically centered against left col) — #29580307 */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">
                Why Person Health is different
              </p>
              <h2 className="font-heading font-semibold text-[clamp(2rem,4vw,2.5rem)] leading-tight tracking-tight">
                <span className="text-brand-deep">We do not stop</span>{' '}
                <span className="text-brand-primary">at a result.</span>
              </h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed font-light font-body max-w-xl">
                Most testing experiences end with a PDF or portal notification. Person Health is built to keep going — explain the signal, guide action, track what happened, and learn from the outcome.
              </p>

              <ol className="mt-8 space-y-6">
                {[
                  { t: 'Signal origination', d: 'Breath, blood, labs, genetics, and health context.' },
                  { t: 'Action support',     d: 'Plain-language guidance, reminders, clinician pathways, and follow-up.' },
                  { t: 'Outcome loop',       d: 'Completion, adherence, results movement, and real-world evidence.' },
                ].map((step, i, arr) => (
                  <li key={i} className="relative pl-10">
                    <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-brand-primary flex items-center justify-center" aria-hidden="true">
                      <span className="w-2 h-2 rounded-full bg-brand-primary" />
                    </span>
                    {i < arr.length - 1 && <span className="absolute left-3 top-9 -bottom-7 w-px bg-brand-lavender" aria-hidden="true" />}
                    <h3 className="font-heading font-semibold text-brand-deep text-lg">{step.t}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-gray-600 leading-relaxed font-light font-body">{step.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right col: image only — vertically centered against left col headline + bullets */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-card-hover" style={{ aspectRatio: '4/3' }}>
                <img src="/images/home/diff-01.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Full-width medium-purple text box — extends across both columns below — #29579962 */}
          <div
            className="mt-10 rounded-2xl p-7 lg:p-10 text-white"
            style={{ background: 'linear-gradient(135deg, #9B71D6 0%, #6237A0 100%)' }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85 font-body">Person Health</p>
            <p className="mt-3 font-heading font-semibold text-xl lg:text-[1.625rem] leading-[1.25]">Clear results. Better next steps.</p>
            <p className="mt-3 text-white/85 leading-relaxed text-[0.95rem] lg:text-base font-body font-light max-w-3xl">
              Our goal is to replace confusion with sequence: what was found, why it matters, and what to do next.
            </p>
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 6: TRUST ─── */}
      <section id="trust" className="bg-brand-light">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
          {/* Centered header trio (#29580516) — headline + subhead each fit one line */}
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">
              Trust basics
            </p>
            <h2 className="font-heading font-semibold text-2xl lg:text-[1.875rem] leading-tight tracking-tight lg:whitespace-nowrap">
              <span className="text-brand-deep">Built for health information,</span>{' '}
              <span className="text-brand-primary">not casual browsing.</span>
            </h2>
            <p className="mt-4 text-base lg:text-[1.0625rem] text-gray-600 leading-relaxed font-light font-body lg:whitespace-nowrap">
              Safety, clinical oversight, privacy, and substantiation should be easy to find — not buried in a footer.
            </p>
          </div>

          {/* Four icon items spread across full width — no longer pills/buttons (#29580017) */}
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-start">
            {[
              { icon: ShieldCheck,   label: 'Clinical oversight' },
              { icon: Lock,          label: 'Privacy-first design' },
              { icon: Info,          label: 'Clear limitations' },
              { icon: MessageSquare, label: 'Accessible language' },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6237A0, #28104E)' }}
                  aria-hidden="true"
                >
                  <item.icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                </div>
                <span className="text-base lg:text-lg text-brand-deep font-semibold font-heading leading-snug">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>


      {/* ─── SECTION 7: FAQ ─── */}
      <section id="faq" className="bg-white">
        <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          {/* Centered header (#29580519) */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary font-body mb-4">
              Common questions
            </p>
            <h2 className="font-heading font-semibold text-[clamp(2rem,4vw,2.25rem)] leading-tight tracking-tight">
              <span className="text-brand-deep">Plain answers</span>{' '}
              <span className="text-brand-primary">before people click.</span>
            </h2>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-x-12 gap-y-0">
            <FAQ
              q="Is Person Health a replacement for my doctor?"
              a="No. Person Health helps you screen earlier, understand results, and prepare for the right next step. It does not replace emergency care or your relationship with a licensed clinician."
            />
            <FAQ
              q="What can I buy today?"
              a="MyWellnessQ is the starting point for available lab, wellness, genetics, and specialty test options. Availability depends on test type, location, and clinical requirements."
            />
            <FAQ
              q="What happens after I get a result?"
              a="You receive clear education and next-step guidance through QCoach. When appropriate, Person Health connects the result to clinician review, follow-up testing, or care navigation through MyClinicQ."
            />
            <FAQ
              q="How do clinicians and partners work with Person Health?"
              a="Clinicians can request ordering access. Health systems, labs, payers, employers, and research partners can discuss pilots and early-detection workflows."
            />
          </div>
        </Reveal>
      </section>


      {/* ─── SECTION 8: CTA ─── */}
      <section id="cta" className="relative">
        <div style={{ background: 'linear-gradient(135deg, #28104E 0%, #6237A0 100%)' }}>
          <Reveal className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-white">
              <img src="/images/home/logo-reverse.png" alt="Person Health" className="h-8 w-auto opacity-90" />
              {/* Header + supporting copy on one line/two compact lines (#29579498) */}
              <h2
                id="start"
                className="mt-6 font-heading font-semibold leading-[1.1] tracking-tight text-[clamp(2rem,4vw,2.5rem)]"
              >
                Ready to start?
                <span className="block mt-2 text-lg lg:text-xl text-white/80 font-light font-body leading-relaxed">
                  Choose a test, request provider access, or discuss a partnership with Person Health.
                </span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://mywellnessq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-deep font-semibold rounded-full px-8 py-4 text-base hover:bg-brand-light transition font-body shadow-md"
                >
                  Browse tests <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="mx-auto rounded-2xl overflow-hidden shadow-card-hover" style={{ aspectRatio: '16/9', maxWidth: 520 }}>
                <img src="/images/home/cta-01.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
