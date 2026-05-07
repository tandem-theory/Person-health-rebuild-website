import { useEffect, useState, useMemo } from 'react'
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

// Web3Forms zero-config hCaptcha public sitekey (managed by Web3Forms)
const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'
const WEB3FORMS_ACCESS_KEY = '9e545dc3-fe96-4652-ab28-4cf51ca39abb'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const defaultTab = useMemo(() => {
    const param = searchParams.get('audience')
    return param && tabs.some((t) => t.key === param) ? param : 'investor'
  }, [searchParams])
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  // Load hCaptcha script once when the page mounts
  useEffect(() => {
    if (document.querySelector('script[src*="hcaptcha.com/1/api.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://js.hcaptcha.com/1/api.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    // Read hCaptcha token (set by the widget when user passes the challenge)
    const captchaToken = window.hcaptcha?.getResponse?.()
    if (!captchaToken) {
      setError('Please complete the CAPTCHA before submitting.')
      return
    }

    // Honeypot — should be empty. If it's filled, it's a bot.
    const honeypot = e.target.elements.botcheck?.value
    if (honeypot) {
      // Silently drop — pretend success so bots don't learn the trick
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Person Health inquiry — ${activeTab} — ${form.fullName}`,
          audience: activeTab,
          ...form,
          'h-captcha-response': captchaToken,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.message || 'Submission failed. Please try again or email us directly.')
        window.hcaptcha?.reset?.()
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
      window.hcaptcha?.reset?.()
    }
    setSubmitting(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 lg:pt-32 lg:pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #28104E 0%, #3a1a6e 40%, #28104E 100%)' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 to-brand-deep" aria-hidden="true" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <SectionLabel text="Contact" />
          <h1
            className="mt-4 font-heading font-bold text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Start the conversation.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-brand-lavender font-body font-light leading-relaxed max-w-3xl mx-auto">
            Whether you run a health system, practice medicine, invest in healthcare, or want to explore a partnership — we have a specific conversation ready for you.
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
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot — hidden from real users, attractive to bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 }}
                  aria-hidden="true"
                />

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

                {/* hCaptcha widget — auto-rendered by hCaptcha JS once it loads */}
                <div className="h-captcha" data-sitekey={HCAPTCHA_SITEKEY}></div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-body"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2.5 font-heading font-semibold rounded-xl px-8 py-3.5 text-base bg-gradient-to-r from-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                  {!submitting && <Send className="w-4 h-4" aria-hidden="true" />}
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
          <div className="mt-8 text-center">
            <Button href="/platform#tomme">See how TOMME works</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
