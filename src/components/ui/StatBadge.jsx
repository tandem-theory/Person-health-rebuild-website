export default function StatBadge({ value, label }) {
  return (
    <div className="text-center bg-white/10 border border-brand-medium/20 rounded-2xl px-8 py-6">
      <div className="text-4xl lg:text-5xl font-heading font-extrabold stat-gradient" aria-hidden="true">
        {value}
      </div>
      <span className="sr-only">{value} {label}</span>
      <div className="text-sm text-brand-lavender uppercase tracking-wide font-body font-medium mt-2" aria-hidden="true">
        {label}
      </div>
    </div>
  )
}
