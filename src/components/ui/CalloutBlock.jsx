export default function CalloutBlock({ headline, body, italic }) {
  return (
    <section className="py-14 lg:py-18" style={{ background: 'linear-gradient(135deg, #4a1d8a 0%, #6237A0 50%, #4a1d8a 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-white mb-4">
          {headline}
        </h3>
        {body && (
          <p className="text-lg text-brand-lavender font-body font-light leading-relaxed">
            {body}
          </p>
        )}
        {italic && (
          <p className="text-base text-brand-lavender/80 italic font-body font-light mt-4">
            {italic}
          </p>
        )}
      </div>
    </section>
  )
}
