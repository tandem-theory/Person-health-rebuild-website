export default function IconCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-dark-card backdrop-blur-xl border border-brand-lavender/10 rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-brand-medium/30 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_0_30px_rgba(98,55,160,0.15)] hover:-translate-y-0.5 transition-all duration-300 group flex items-start gap-5">
      {Icon && (
        <div className="w-14 h-14 p-3 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-deep/10 border border-brand-medium/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
          <Icon className="w-full h-full text-brand-medium" strokeWidth={1.5} />
        </div>
      )}
      <div>
        <h3 className="text-lg font-heading font-semibold text-white">{title}</h3>
        <p className="text-sm mt-2 text-brand-lavender font-body font-light leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
