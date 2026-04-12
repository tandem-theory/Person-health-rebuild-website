export default function Card({ variant = 'light', borderColor, children, className = '' }) {
  if (variant === 'dark') {
    return (
      <div
        className={`bg-dark-card backdrop-blur-xl border border-brand-lavender/10 rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-brand-medium/30 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_0_30px_rgba(98,55,160,0.15)] hover:-translate-y-0.5 transition-all duration-300 ${className}`}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      className={`bg-white border border-brand-lavender/30 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-brand-primary/30 transition-all duration-300 ${className}`}
      style={borderColor ? { borderTopWidth: '4px', borderTopColor: borderColor } : undefined}
    >
      {children}
    </div>
  )
}
