import { Link } from 'react-router-dom'
import { images } from '../../data/images'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', to: '/platform' },
      { label: 'TOMME', to: '/platform#tomme' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Care Lanes', to: '/solutions' },
      { label: 'Evidence', to: '/evidence' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/company' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-deep border-t border-brand-lavender/5 py-16" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" aria-label="Person Health home">
          <img src={images.logos.main} alt="Person Health" className="h-8 mb-8" />
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wide mb-4">
                {col.title}
              </h4>
              <nav aria-label={`${col.title} links`}>
                <ul className="space-y-3 list-none p-0 m-0">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-brand-lavender text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-brand-lavender/5 mt-12 pt-8">
          <p className="text-brand-lavender text-sm uppercase tracking-wider mb-4 text-center sm:text-left">
            MyWellnessQ &nbsp;|&nbsp; MyBreathQ &nbsp;|&nbsp; MyBloodQ &nbsp;|&nbsp; Powered by TOMME
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-brand-lavender text-sm">
              &copy; {new Date().getFullYear()} Person Health, Inc. All rights reserved.
            </p>
            <Link
              to="/privacy"
              className="text-brand-lavender text-sm hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
