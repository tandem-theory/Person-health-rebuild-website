import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items = [], variant = 'dark' }) {
  const [openIndex, setOpenIndex] = useState(null)
  const baseId = useId()

  const isDark = variant === 'dark'

  return (
    <div className={`divide-y ${isDark ? 'divide-brand-lavender/10' : 'divide-brand-lavender/30'}`} role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const headingId = `${baseId}-heading-${i}`
        const panelId = `${baseId}-panel-${i}`

        return (
          <div key={i} role="listitem">
            <h3>
              <button
                id={headingId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`flex justify-between items-center w-full py-5 text-left font-heading font-semibold transition-colors duration-200 ${
                  isDark
                    ? 'text-white hover:text-brand-lavender'
                    : 'text-brand-deep hover:text-brand-primary'
                }`}
              >
                <span className="pr-8">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isDark ? 'text-brand-medium' : 'text-brand-primary'
                  } ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={`pb-5 font-body font-light leading-relaxed ${
                    isDark ? 'text-brand-lavender' : 'text-gray-600'
                  }`}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
