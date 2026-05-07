import { useState } from 'react'
import { Users, ChevronDown } from 'lucide-react'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import CalloutBlock from '../components/ui/CalloutBlock'
import NumberedStack from '../components/ui/NumberedStack'
import Accordion from '../components/ui/Accordion'

/* ─────────── HERO ─────────── */
function CompanyHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #28104E 0%, #3a1a6e 40%, #28104E 100%)' }}>
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 to-brand-deep" aria-hidden="true" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <SectionLabel text="Company" />
        <h1
          className="mt-4 font-heading font-bold text-white leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Find health risks earlier.<br />Know what to do next.
        </h1>
        <p className="mt-6 text-lg lg:text-xl text-brand-lavender font-body font-light leading-relaxed max-w-3xl mx-auto">
          Person Health helps people screen earlier, understand their results, and take the right next step. We exist to close the gap between finding a health signal and acting on it.
        </p>
      </div>
    </section>
  )
}

/* ─────────── ABOUT ─────────── */
function AboutSection() {
  return (
    <SectionWrapper bg="light">
      <div className="text-center mb-12">
        <SectionLabel text="About" light />
        <h2
          className="mt-4 font-heading font-semibold text-brand-deep leading-[1.15] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          The space between signal and action
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-gray-600 font-body font-light leading-relaxed text-lg">
            Most testing experiences end with a PDF or a portal notification — and people get stuck. Detection is necessary, but not enough on its own. What closes the gap between a finding and a healthier outcome is guided action.
          </p>
          <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg">
            Person Health is built to keep going. We combine lab testing, genetics, blood and breath detection, and guided support on one platform — so people can find health risks earlier, understand what their results mean, and take the right next step. TOMME, our guided action engine, helps every signal flow into a completed action.
          </p>
          <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg">
            Detection finds the risk. Guided action closes the gap.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-card-hover">
          <img
            src="/images/mwq-dashboard.png"
            alt="MyWellnessQ platform dashboard"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

    </SectionWrapper>
  )
}

/* ─────────── ORIGINS ─────────── */
function OriginsSection() {
  return (
    <SectionWrapper id="origins" bg="dark">
      <div className="text-center">
        <SectionLabel text="Origins" />
      </div>
      <h2
        className="mt-4 font-heading font-semibold text-white leading-[1.15] tracking-[-0.01em] text-center"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
      >
        Where Person Health comes from
      </h2>
      <p className="mt-4 text-brand-lavender font-body font-light leading-relaxed text-lg max-w-3xl text-center mx-auto">
        Person Health was not built in a vacuum. It emerged from the convergence of four specialized capabilities — each contributing a critical piece of the platform.
      </p>

      <div className="mt-12">
        <NumberedStack items={[
          {
            title: 'Blood-based detection science',
            description: 'The clinical and scientific foundation for what is now MyBloodQ. Multimodal blood-based molecular analysis, AI-driven pattern recognition, and proprietary cancer signal enhancement — validated in IRB-approved clinical studies with leading academic medical centers. This became the first product family inside Person Health.',
            color: '#6237A0',
          },
          {
            title: 'Breath-based detection science',
            description: 'The scientific foundation for what is now MyBreathQ. Real-time breath VOC analysis brought non-invasive early detection into the platform — statistically significant disease signals across lung, sepsis, and COVID, with ovarian, colorectal, and TBI in the pipeline.',
            color: '#9B71D6',
          },
          {
            title: 'Laboratory infrastructure',
            description: 'CLIA-certified molecular testing labs provide the analytical backbone — sample processing, quality assurance, and result certification that gives every test its clinical weight.',
            color: '#CCE7FF',
          },
          {
            title: 'TOMME — the guided action engine',
            description: 'TOMME is the Governed Behavior Engine that fuses every modality — genetics, clinical labs, blood, breath, behavior — into a single picture of the person, then helps them understand their results, take the right next step, and stay supported all the way through to a completed action.',
            color: '#D7CFE6',
          },
        ]} />
      </div>

      <p className="mt-8 text-brand-lavender/80 font-body font-light italic text-[17px] max-w-5xl">
        These represent enabling lineage — not co-equal brands. Person Health is the platform. Everything else feeds&nbsp;into&nbsp;it.
      </p>
    </SectionWrapper>
  )
}

/* ─────────── MISSION ─────────── */
function MissionSection() {
  return (
    <div id="mission">
      <CalloutBlock
        headline="Find health risks earlier. Know what to do next."
        body="The Person Health mission is to help people find health risks earlier, understand what their results mean, and take the right next step — supported all the way through to a completed action."
        italic="The smallest safe next step, grounded in evidence, reviewed by clinicians, and tracked to completion."
      />
    </div>
  )
}

/* ─────────── LEADERSHIP ─────────── */
function LeadershipSection() {
  const [expandedBio, setExpandedBio] = useState(null)

  const bios = {
    'Ping Yeh': 'Cancer survivor and technology founder with data infrastructure leadership at Seagate and Dell, and co-founder of StemoniX. At Person Health, he is building a multimodal platform that transforms early health signals into action — driven by the belief that disease should never come as a surprise.',
    'Randy Schiestl': 'Veteran medtech operator who previously led global R&D at Boston Scientific, bringing complex medical technologies from concept to commercialization. At Person Health, he oversees operations, clinical validation, and deployment — translating advanced diagnostics into scalable, real-world healthcare solutions.',
    'Megan Flynn': 'Senior marketing executive with 25+ years spanning agency and brand-side leadership across healthcare, medical, and consumer industries. At Person Health, she bridges business strategy with go-to-market execution across media, creative, CRM, and full-funnel B2B and B2C marketing.',
    'Michael Weaver': 'Healthcare commercialization leader with 25+ years spanning startup and publicly traded companies across ambulatory, acute care, and physician-centric settings. At Person Health, he oversees growth strategy and market positioning across health systems and consumer channels.',
    'Parm Kang': 'Strategic finance executive combining institutional discipline with startup agility. At Person Health, he leads finance, investor reporting, runway planning, and institutional readiness — building the financial infrastructure to support growth from innovation to scaled deployment.',
    'Greg Sherwood': 'Scientific founder of Person Health\'s breath-based diagnostic technology and former Senior Fellow at Boston Scientific. He holds 87 patents in sensing and applied diagnostics, producing a patented platform designed to identify disease-associated biomarkers from a single breath.',
    'Ali Khammanivong': 'Molecular scientist and AI expert with a PhD in Cancer Biology & Bioinformatics from the University of Minnesota. At Person Health, he leads the molecular diagnostics platform for cancer-associated signal research, integrating genomics, proteomics, and machine learning.',
    'Dan Que Pham': 'Biotech operator and MyBloodQ co-founder, where she led development of an AI-based platform for early cancer detection through clinical validation at leading academic medical centers. At Person Health, she drives molecular diagnostics integration — bridging research, clinical validation, and commercialization.',
    'Raia Finc': 'Systems engineer with two decades of experience spanning DuPont and Boston Scientific. At Person Health, she leads electrical, mechanical, and software development of the breath-based diagnostic platform — translating innovation into production-ready systems.',
    'Thomas Sheehan': 'Visionary healthcare innovator and scientific founder driving Person Health\'s core technology strategy. As Chairman and Chief Innovation Officer, he leads the company\'s intellectual property portfolio and technology roadmap.',
    'Jennifer Schaumburg': 'Leads the systems that ensure Person Health operates with clear accountability, traceable execution, and controls that perform across regulated environments.',
    'Aaron Salinas': 'Security leader responsible for protecting Person Health\'s platform infrastructure, patient data, and operational systems.',
  }

  const photos = {
    'Thomas Sheehan': '/images/team/thomas-sheehan.jpg',
    'Ping Yeh': '/images/team/ping-yeh.jpg',
    'Parm Kang': '/images/team/parm-kang.jpg',
    'Michael Weaver': '/images/team/michael-weaver.jpg',
    'Megan Flynn': '/images/team/megan-flynn.jpg',
    'Randy Schiestl': '/images/team/randy-schiestl.jpg',
    'Greg Sherwood': '/images/team/greg-sherwood.jpg',
    'Raia Finc': '/images/team/raia-finc.jpg',
    'Ali Khammanivong': '/images/team/ali-khammanivong.jpg',
    'Dan Que Pham': '/images/team/dan-que-pham.jpg',
    'Jennifer Schaumburg': '/images/team/jennifer-schaumburg.jpg',
  }

  const groups = [
    {
      title: 'Executive Leadership',
      members: [
        { name: 'Thomas Sheehan', role: 'Chairman & Chief Innovation Officer' },
        { name: 'Ping Yeh', role: 'Chief Executive Officer' },
        { name: 'Parm Kang', role: 'Chief Financial Officer' },
        { name: 'Michael Weaver', role: 'Chief Growth Officer' },
        { name: 'Megan Flynn', role: 'Chief Marketing Officer' },
      ],
    },
    {
      title: 'Science & Platform',
      members: [
        { name: 'Randy Schiestl', role: 'Global Science & Operations' },
        { name: 'Greg Sherwood', role: 'MyBreathQ Scientific Lead' },
        { name: 'Raia Finc', role: 'VP of Volatile Diagnostics' },
        { name: 'Ali Khammanivong', role: 'MyBloodQ Scientific Lead' },
        { name: 'Dan Que Pham', role: 'VP of Molecular Diagnostics' },
      ],
    },
    {
      title: 'Trust and Controls',
      members: [
        { name: 'Jennifer Schaumburg', role: 'Head of Governance & Compliance' },
      ],
    },
  ]

  return (
    <SectionWrapper bg="light">
      <div className="text-center">
        <SectionLabel text="Leadership" light />
        <h2
          className="mt-4 font-heading font-semibold text-brand-deep leading-[1.15] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          The team
        </h2>
        <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg max-w-3xl mx-auto">
          Person Health is led by operators, scientists, and clinicians who have built and scaled healthcare infrastructure before.
        </p>
      </div>

      {groups.map((group) => (
        <div key={group.title} className="mt-12">
          <h3 className="font-heading font-semibold text-brand-deep text-lg mb-6 text-center">{group.title}</h3>
          <div className={`grid ${group.members.length === 1 ? 'grid-cols-1 max-w-xs' : group.members.length <= 3 ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 max-w-2xl' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-w-4xl'} gap-6 mx-auto`}>
            {group.members.map((member) => {
              const hasBio = bios[member.name]
              const isOpen = expandedBio === member.name
              const hasPhoto = photos[member.name]
              return (
                <button
                  key={member.name}
                  className="text-center group cursor-pointer flex flex-col items-center"
                  onClick={() => hasBio && setExpandedBio(isOpen ? null : member.name)}
                  aria-expanded={isOpen}
                >
                  <div className="w-28 h-28 lg:w-32 lg:h-32 shrink-0">
                    {hasPhoto ? (
                      <img
                        src={photos[member.name]}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover ring-[3px] ring-brand-primary/60 group-hover:ring-brand-primary/70 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-light ring-[3px] ring-brand-primary/60 flex items-center justify-center" aria-hidden="true">
                        <Users className="w-10 h-10 text-brand-primary/40" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                  <h4 className="font-heading font-semibold text-brand-deep text-sm mt-3 min-h-[2.5rem] flex items-start justify-center">{member.name}</h4>
                  <p className="text-xs text-gray-500 font-body font-light leading-snug">{member.role}</p>
                </button>
              )
            })}
          </div>
          {/* Expanded bio - renders below the grid for the selected person */}
          {group.members.some((m) => expandedBio === m.name) && (
            <div className="mt-6 bg-brand-deep rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                {photos[expandedBio] && (
                  <img
                    src={photos[expandedBio]}
                    alt={expandedBio}
                    className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-brand-medium/30"
                  />
                )}
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-white text-base">{expandedBio}</h4>
                  <p className="text-xs text-brand-lavender font-body font-light mt-0.5">
                    {group.members.find((m) => m.name === expandedBio)?.role}
                  </p>
                  <p className="mt-3 text-sm text-brand-lavender/90 font-body font-light leading-relaxed">
                    {bios[expandedBio]}
                  </p>
                </div>
                <button
                  onClick={() => setExpandedBio(null)}
                  className="text-brand-lavender/60 hover:text-white shrink-0 transition-colors"
                  aria-label="Close bio"
                >
                  <ChevronDown className="w-5 h-5 rotate-180" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="mt-10 text-center">
        <Button href="/contact" variant="ghost">Connect with the team</Button>
      </div>
    </SectionWrapper>
  )
}

/* ─────────── WHAT HEALTHCARE CAN LEARN ─────────── */
function LessonsSection() {
  return (
    <SectionWrapper bg="dark">
      <div className="text-center">
        <SectionLabel text="Perspective" />
      </div>
      <h2
        className="mt-4 font-heading font-semibold text-white leading-[1.15] tracking-[-0.01em] text-center"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
      >
        What healthcare can learn
      </h2>
      <p className="mt-4 text-brand-lavender font-body font-light leading-relaxed text-lg max-w-3xl text-center mx-auto">
        The problems Person Health solves are not new. But the answer — guided action that doesn&rsquo;t end at a PDF — requires a different way of thinking about health technology.
      </p>

      <div className="mt-12">
        <NumberedStack items={[
          {
            title: 'Detection without completion is waste',
            description: 'Every screening program that finds signals but fails to close the loop is burning resources. The measure of success is not how many signals you detect — it is how many you finish.',
            color: '#6237A0',
          },
          {
            title: 'Governance is not optional',
            description: 'AI in healthcare without structured evidence governance is a liability — for patients, clinicians, and health systems. Every recommendation must be evidence-cited, threshold-bound, and clinician-reviewed.',
            color: '#9B71D6',
          },
          {
            title: 'Clinicians must remain in the loop',
            description: 'AI-generated recommendations are routed through clinician review before reaching a patient. The platform recommends. Clinicians decide. That boundary is non-negotiable.',
            color: '#CCE7FF',
          },
          {
            title: 'Multimodal beats single-modal',
            description: 'No single biomarker or signal type captures the full picture. Combining genomic, proteomic, volatilomic, imaging, and behavioral data produces better clinical decisions.',
            color: '#D7CFE6',
          },
          {
            title: 'Infrastructure, not experiments',
            description: 'Healthcare needs governed platforms that work at scale — not research prototypes that work in demos. Person Health is built as infrastructure: certified, auditable, and deployable.',
            color: '#6237A0',
          },
        ]} />
      </div>

      <p className="mt-10 text-center text-brand-lavender/80 font-body font-light italic text-base max-w-3xl mx-auto">
        The healthcare system does not need more signals. It needs a way to help people finish what they already started.
      </p>

      <div className="mt-10 text-center">
        <Button href="/platform#tomme">See how TOMME works</Button>
      </div>
    </SectionWrapper>
  )
}

/* ─────────── FAQ ─────────── */
function CompanyFAQ() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel text="FAQ" light />
          <h2
            className="mt-4 font-heading font-semibold text-brand-deep leading-[1.15]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Company questions
          </h2>
        </div>

        <Accordion
          variant="light"
          items={[
            {
              question: 'How is Person Health organized as a platform?',
              answer: 'Person Health is one platform with multiple ways to find earlier signals. The product family — MyWellnessQ (the consumer front door), MyClinicQ (clinician-ordered tests), MyBloodQ (blood-based detection), MyBreathQ (breath-based detection), and MyGeneticsQ (baseline panels) — all feed TOMME, our guided action engine. One platform. One pathway. One outcome.',
            },
            {
              question: 'Is Person Health hiring?',
              answer: 'Person Health is growing across clinical science, platform engineering, regulatory, and commercial roles. Contact us through the contact page to express interest — include your area of expertise and what draws you to governed health infrastructure.',
            },
          ]}
        />

        <div className="mt-12 text-center">
          <Button href="/platform#tomme">See how TOMME works</Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

/* ─────────── PAGE ─────────── */
export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <AboutSection />
      <OriginsSection />
      <MissionSection />
      <LeadershipSection />
      <LessonsSection />
      <CompanyFAQ />
    </>
  )
}
