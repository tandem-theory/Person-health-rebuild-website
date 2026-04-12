export default function StatBadge({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-heading font-extrabold stat-gradient" aria-hidden="true">
        {value}
      </div>
      {/* ADA: sr-only provides accessible text, visual label uses muted styling */}
      <span className="sr-only">{value} {label}</span>
      <div className="text-sm text-brand-lavender uppercase tracking-wide font-body font-medium mt-2" aria-hidden="true">
        {label}
      </div>
    </div>
  )
}
