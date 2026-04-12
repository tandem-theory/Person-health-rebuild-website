/**
 * Section label — DM Sans, uppercase, brand accent.
 *
 * ADA: On dark backgrounds uses #9B71D6 (passes AA for bold 13px+).
 * On light backgrounds uses #6237A0 for stronger contrast on white.
 */
export default function SectionLabel({ text, light = false }) {
  return (
    <p
      className={`text-sm font-bold uppercase tracking-[0.18em] font-body mb-4 ${
        light ? 'text-brand-primary' : 'text-brand-lavender'
      }`}
    >
      {text}
    </p>
  )
}
