import { Users } from 'lucide-react'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CalloutBlock from '../components/ui/CalloutBlock'
import NumberedStack from '../components/ui/NumberedStack'
import Accordion from '../components/ui/Accordion'
import { images } from '../data/images'

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
          Healthcare organized<br />around people.
        </h1>
        <p className="mt-6 text-lg lg:text-xl text-brand-lavender font-body font-light leading-relaxed max-w-3xl mx-auto">
          Person Health exists because the gap between finding a health signal and acting on it should not exist. We build the governed infrastructure to close it.
        </p>
      </div>
    </section>
  )
}

/* ─────────── ABOUT ─────────── */
function AboutSection() {
  return (
    <SectionWrapper bg="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel text="About" light />
          <h2
            className="mt-4 font-heading font-semibold text-brand-deep leading-[1.15] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            The space between signal and action
          </h2>
          <p className="mt-6 text-gray-600 font-body font-light leading-relaxed text-lg">
            Health systems generate signals every day — screening flags, lab anomalies, risk scores, behavioral indicators. But the distance between finding a signal and completing the right next step is where healthcare fails most people.
          </p>
          <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg">
            Person Health is a multimodal health action platform that connects screening, early detection, and clinician-reviewed diagnosis support into one governed workflow. The platform does not just detect — it completes.
          </p>
          <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg">
            Every signal that enters Person Health is scored, routed to the appropriate care lane, reviewed by a clinician, and tracked to closure. Nothing is lost between finding and action.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-card-hover">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
            style={{ filter: 'hue-rotate(240deg) saturate(1.3)' }}
            alt="Data visualization representing multimodal health signals"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button href="#origins" variant="ghost">Read our origins</Button>
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
            title: 'Oncodea — Cancer early detection science',
            description: 'The clinical and scientific foundation. Oncodea developed multimodal biomarker panels for cancer early detection — cfDNA methylation, protein markers, and clinical risk models. This became the first product family inside Person Health.',
            color: '#6237A0',
          },
          {
            title: 'Breathe — Respiratory signal science',
            description: 'Real-time breath VOC analysis brought population-scale, non-invasive screening into the platform. Breathe expanded Person Health\'s signal types beyond blood-based biomarkers.',
            color: '#9B71D6',
          },
          {
            title: 'MTL — Laboratory infrastructure',
            description: 'CLIA-certified molecular testing labs provided the analytical backbone — sample processing, quality assurance, and result certification that gives every signal its clinical weight.',
            color: '#CCE7FF',
          },
          {
            title: 'Governed workflow architecture',
            description: 'TOMME — the governed intelligence engine — was built to connect every signal type into a single completion workflow. This is the system that makes Person Health a platform, not a collection of tests.',
            color: '#D7CFE6',
          },
        ]} />
      </div>

      <p className="mt-10 text-brand-lavender/80 font-body font-light italic text-base max-w-3xl">
        These are enabling lineage — not co-equal brands. Person Health is the platform. Everything else feeds into it.
      </p>

      <div className="mt-10 text-center">
        <Button href="/platform#tomme" variant="secondary">See how TOMME works</Button>
      </div>
    </SectionWrapper>
  )
}

/* ─────────── MISSION ─────────── */
function MissionSection() {
  return (
    <div id="mission">
      <CalloutBlock
        headline="Earlier signals. Safer next steps."
        body="Our mission is to close the gap between health signal and health action — for every person, every time, with nothing lost in between."
        italic="The operational design goal: the smallest safe next step, governed by evidence, reviewed by clinicians, and tracked to completion."
      />
    </div>
  )
}

/* ─────────── LEADERSHIP ─────────── */
function LeadershipSection() {
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
        { name: 'Ali Khammanivong', role: 'Oncodea Scientific Lead' },
        { name: 'Greg Sherwood', role: 'Breathe Scientific Lead' },
        { name: 'Dan Que Pham', role: 'VP Molecular Diagnostics' },
      ],
    },
    {
      title: 'Compliance & Security',
      members: [
        { name: 'Jennifer Schaumburg', role: 'Compliance Lead' },
        { name: 'Aaron Salinas', role: 'Security Lead' },
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
          <h3 className="font-heading font-semibold text-brand-deep text-lg mb-6">{group.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.members.map((member) => (
              <Card key={member.name} variant="light">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-light border border-brand-lavender/30 flex items-center justify-center shrink-0" aria-hidden="true">
                    <Users className="w-6 h-6 text-brand-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-brand-deep text-sm">{member.name}</h4>
                    <p className="text-xs text-gray-600 font-body font-light mt-0.5">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-10 border-2 border-dashed border-brand-lavender/30 bg-brand-light p-6 rounded-2xl text-center">
        <p className="font-heading font-semibold text-brand-deep">Content Pending</p>
        <p className="text-sm text-gray-600 font-body font-light mt-1">Individual leadership bios will be added here.</p>
      </div>

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
        The problems Person Health solves are not new. But the approach — governed completion infrastructure — requires a different way of thinking about health technology.
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
            description: 'No AI-generated recommendation should reach a patient without clinician review. The platform recommends. Clinicians decide. That boundary is non-negotiable.',
            color: '#CCE7FF',
          },
          {
            title: 'Multimodal beats single-modal',
            description: 'No single biomarker or signal type captures the full picture. Combining genomic, proteomic, volatile compound, imaging, and behavioral data produces better clinical decisions.',
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
        The healthcare system does not need more signals. It needs a way to finish what it already started.
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
              answer: 'Person Health is a single platform with multiple product lines — MyWellnessQ, MyWellnessQ Labs, Oncodea / MMyeloma, and Breathe — all sharing one governed intelligence engine (TOMME). Buyers experience one system, one trust architecture, and one completion workflow, regardless of which entry point they use.',
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
