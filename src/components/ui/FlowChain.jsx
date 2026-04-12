import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'

export default function FlowChain({ steps = [] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3" role="list" aria-label="Process flow">
      {steps.map((step, i) => (
        <Fragment key={i}>
          <div
            className="px-6 py-3 bg-gradient-to-r from-brand-deep to-brand-primary/80 border border-brand-lavender/15 rounded-full text-white text-sm font-body font-medium shadow-lg shadow-black/20"
            role="listitem"
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ChevronRight className="w-5 h-5 text-brand-medium/60 shrink-0" aria-hidden="true" />
          )}
        </Fragment>
      ))}
    </div>
  )
}
