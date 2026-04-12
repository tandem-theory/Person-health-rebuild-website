export default function CalloutBlock({ headline, body, italic }) {
  return (
    <section className="bg-accent-section py-24 lg:py-32">
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
