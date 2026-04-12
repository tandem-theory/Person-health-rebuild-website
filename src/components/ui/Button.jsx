import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  size = 'md',
  icon: Icon,
  type = 'button',
}) {
  const base = 'inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-300 group'

  const variants = {
    primary: `${base} bg-gradient-to-r from-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0`,
    secondary: `${base} border-2 border-brand-lavender/30 text-white hover:bg-white/10 hover:border-brand-lavender/50`,
    ghost: `${base} text-brand-primary hover:text-brand-deep`,
    light: `${base} bg-white text-brand-deep shadow-md hover:shadow-lg hover:-translate-y-0.5`,
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm gap-2',
    md: 'px-8 py-3.5 text-base gap-2.5',
    lg: 'px-10 py-4 text-lg gap-3',
  }

  const cls = `${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`
  const IconComponent = Icon || ArrowRight

  if (href) {
    // External links
    if (href.startsWith('http')) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
          <IconComponent className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </a>
      )
    }
    return (
      <Link to={href} className={cls} onClick={onClick}>
        {children}
        <IconComponent className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
      <IconComponent className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
    </button>
  )
}
