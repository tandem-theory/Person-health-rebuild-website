import SectionWrapper from '../components/layout/SectionWrapper'
import SectionLabel from '../components/ui/SectionLabel'

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 lg:pt-32 lg:pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #28104E 0%, #3a1a6e 40%, #28104E 100%)' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 to-brand-deep" aria-hidden="true" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <SectionLabel text="Legal" />
          <h1
            className="mt-4 font-heading font-bold text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-brand-lavender font-body font-light leading-relaxed max-w-3xl">
            Person Health is committed to protecting the privacy of every individual who interacts with our platform and website.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <SectionWrapper bg="light">
        <div className="max-w-3xl mx-auto prose-custom">
          <p className="text-sm text-gray-500 font-body mb-8">
            Effective Date: April 12, 2026 &nbsp;|&nbsp; Last Updated: April 12, 2026
          </p>

          {/* 1. Introduction */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            Person Health, Inc. ("Person Health," "we," "us," or "our") operates the website at personhealth.com and related digital properties. This Privacy Policy describes how we collect, use, and protect information when you visit our website or submit inquiries through our contact forms.
          </p>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            We do not sell, rent, trade, or otherwise share your personal information with third parties for their marketing purposes. This commitment applies to all categories of data we collect, including personally identifiable information (PII), protected health information (PHI), and company or organizational data.
          </p>

          {/* 2. Information We Collect */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            When you submit a contact form or request a partnership discussion, we may collect the following information:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              'Full name',
              'Email address',
              'Phone number (if voluntarily provided)',
              'Organization or company name',
              'Professional role or title',
              'Free-text message content',
              'Audience type selection (e.g., investor, health system, clinician, partner)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 font-body font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            We do not collect health information, medical records, diagnostic data, or any protected health information (PHI) through our website contact forms. Our clinical products and platform are governed by separate, HIPAA-compliant privacy and security policies.
          </p>

          {/* 3. How We Use Your Information */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            Information collected through our website is used exclusively for the following purposes:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              'To respond to your inquiry or partnership request',
              'To route your message to the appropriate team member based on your audience type',
              'To schedule and conduct follow-up conversations you have requested',
              'To send information you have specifically requested (e.g., investor materials, evidence documentation)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 font-body font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            We will not use your contact information to send unsolicited marketing communications. If you request information from us, we will provide it and will not add you to marketing lists without your explicit consent.
          </p>

          {/* 4. What We Do Not Do */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            4. What We Do Not Do With Your Data
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            Person Health makes the following commitments regarding your data:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              'We do not sell your personal information to any third party, under any circumstances.',
              'We do not rent, lease, or trade your contact information.',
              'We do not share your company or organizational data with competitors, marketing partners, or data brokers.',
              'We do not use your data for automated profiling, targeted advertising, or behavioral tracking.',
              'We do not disclose your information to third parties except as required by law or with your explicit written consent.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 font-body font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          {/* 5. Data Security */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            We implement reasonable administrative, technical, and physical safeguards to protect the information you provide against unauthorized access, disclosure, alteration, or destruction. These measures include encrypted data transmission (TLS/SSL), access controls limited to authorized personnel, and secure storage practices.
          </p>

          {/* 6. Data Retention */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            6. Data Retention
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            We retain contact information only as long as necessary to fulfill the purpose for which it was collected — typically to respond to your inquiry and conduct any follow-up conversations you have requested. You may request deletion of your information at any time by contacting us at the address below.
          </p>

          {/* 7. Your Rights */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            7. Your Rights
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              'Request access to the personal information we hold about you',
              'Request correction of any inaccurate information',
              'Request deletion of your personal information',
              'Withdraw any consent you have previously provided',
              'Lodge a complaint with a supervisory authority if you believe your rights have been violated',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 font-body font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            To exercise any of these rights, please contact us using the information provided in Section 10.
          </p>

          {/* 8. Cookies and Analytics */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            8. Cookies and Analytics
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            Our website may use essential cookies required for basic site functionality. We do not use third-party advertising cookies or cross-site tracking technologies. If we implement analytics tools in the future, we will update this policy accordingly and provide appropriate notice and consent mechanisms.
          </p>

          {/* 9. Children */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            9. Children's Privacy
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            Our website is not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child under 18, we will promptly delete it.
          </p>

          {/* 10. Contact */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            If you have questions about this Privacy Policy, wish to exercise your data rights, or have concerns about how your information is handled, please contact us:
          </p>
          <div className="bg-brand-light rounded-2xl p-6 border border-brand-lavender/30 mb-6">
            <p className="text-brand-deep font-heading font-semibold mb-1">Person Health, Inc.</p>
            <p className="text-gray-600 font-body font-light">
              Privacy Inquiries<br />
              <a href="mailto:privacy@personhealth.com" className="text-brand-primary hover:text-brand-deep transition-colors underline">
                privacy@personhealth.com
              </a>
            </p>
          </div>

          {/* 11. Changes */}
          <h2 className="text-2xl font-heading font-semibold text-brand-deep mt-12 mb-4">
            11. Changes to This Policy
          </h2>
          <p className="text-gray-600 font-body font-light leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Material changes will be communicated through a notice on our website.
          </p>

          {/* Divider */}
          <div className="section-divider my-12" aria-hidden="true" />

          <p className="text-sm text-gray-500 font-body italic">
            This Privacy Policy applies solely to information collected through the Person Health website (personhealth.com). Clinical products and platform services operated by Person Health are governed by separate privacy policies and, where applicable, Business Associate Agreements compliant with the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
