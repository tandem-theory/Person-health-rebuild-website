import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send, CheckCircle } from 'lucide-react'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'

const tabs = [
  { key: 'investor', label: 'Investor' },
  { key: 'health-system', label: 'Health System' },
  { key: 'clinician', label: 'Clinician' },
  { key: 'partner', label: 'Partner' },
]

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  role: '',
  message: '',
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const defaultTab = useMemo(() => {
    const param = searchParams.get('audience')
    return param && tabs.some((t) => t.key === param) ? param : 'investor'
  }, [searchParams])
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <SectionLabel text="Contact" />
          <h1
            className="mt-4 font-heading font-bold text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Start the conversation.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-brand-lavender font-body font-light leading-relaxed max-w-3xl mx-auto">
            Whether you run a health system, practice medicine, invest in healthcare, or want to integrate — we have a specific conversation ready for you.
          </p>
        </div>
      </section>

      {/* Form section */}
      <SectionWrapper bg="light">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-12" role="alert">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <CheckCircle className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-semibold text-brand-deep text-2xl">Thank you.</h2>
              <p className="mt-4 text-gray-600 font-body font-light leading-relaxed text-lg">
                Your inquiry has been received. We will respond within two business days with information specific to your role and interests.
              </p>
              <div className="mt-8">
                <Button href="/" variant="ghost">Return to homepage</Button>
              </div>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <fieldset>
                <legend className="sr-only">Select your audience type</legend>
                <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Audience type">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      role="tab"
                      aria-selected={activeTab === tab.key}
                      className={`px-5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-all duration-200 ${
                        activeTab === tab.key
                          ? 'bg-gradient-to-r from-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25'
                          : 'bg-white border border-brand-lavender/30 text-brand-deep hover:border-brand-primary/30'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-body font-medium text-brand-deep mb-1.5">
                      Full Name <span className="text-brand-primary" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-lavender/30 bg-white text-brand-deep font-body font-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-medium text-brand-deep mb-1.5">
                      Email <span className="text-brand-primary" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-lavender/30 bg-white text-brand-deep font-body font-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-body font-medium text-brand-deep mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-lavender/30 bg-white text-brand-deep font-body font-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-body font-medium text-brand-deep mb-1.5">
                      Organization <span className="text-brand-primary" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      autoComplete="organization"
                      value={form.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-lavender/30 bg-white text-brand-deep font-body font-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-body font-medium text-brand-deep mb-1.5">
                    Your Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    autoComplete="organization-title"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-lavender/30 bg-white text-brand-deep font-body font-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium text-brand-deep mb-1.5">
                    Message <span className="text-brand-primary" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-lavender/30 bg-white text-brand-deep font-body font-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 font-heading font-semibold rounded-xl px-8 py-3.5 text-base bg-gradient-to-r from-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </>
          )}
        </div>
      </SectionWrapper>

      {/* Below-form CTAs */}
      <SectionWrapper bg="dark">
        <div className="text-center">
          <h2
            className="font-heading font-semibold text-white leading-[1.15]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Want to explore first?
          </h2>
          <p className="mt-4 text-brand-lavender font-body font-light leading-relaxed text-lg max-w-2xl mx-auto">
            Learn more about the platform, the evidence, and the team before starting a conversation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/platform#tomme">See how TOMME works</Button>
            <Button href="/evidence" variant="secondary">Explore the evidence library</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
