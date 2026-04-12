import { useState } from 'react'

export default function HoverGrid({ items = [] }) {
  const [active, setActive] = useState(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
          tabIndex={0}
          role="button"
          aria-expanded={active === i}
          className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 focus-visible:bg-white/5 transition-all duration-300 cursor-default group"
        >
          {item.icon && (
            <div
              className="w-10 h-10 p-2 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-deep/10 border border-brand-medium/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <item.icon className="w-full h-full text-brand-medium" strokeWidth={1.5} />
            </div>
          )}
          <div>
            <span className="font-heading font-semibold text-white">{item.label}</span>
            <div
              className={`text-sm mt-1 text-brand-lavender font-body font-light transition-all duration-200 overflow-hidden ${
                active === i ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {item.hoverText}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
