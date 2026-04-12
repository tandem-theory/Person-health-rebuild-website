import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const bgMap = {
  white: 'bg-white',
  light: 'bg-light-section',
  dark: 'bg-dark-section text-white',
  accent: 'bg-accent-section text-white',
}

export default function SectionWrapper({ id, bg = 'white', children, className = '' }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id={id} className={`py-18 lg:py-24 ${bgMap[bg] || ''} ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1200px] mx-auto px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}
