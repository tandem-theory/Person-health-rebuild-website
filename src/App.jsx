import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import EvidencePage from './pages/EvidencePage'
import CompanyPage from './pages/CompanyPage'
import PrivacyPage from './pages/PrivacyPage'

function ScrollToHashOrTop() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait for page to render, then scroll to the element
      const tryScroll = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      // Try immediately and after a delay (for page transitions)
      tryScroll()
      setTimeout(tryScroll, 150)
      setTimeout(tryScroll, 400)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ADA: Skip navigation link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <ScrollToHashOrTop />
      <Navbar />

      <main id="main-content" className="flex-1" role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/evidence" element={<EvidencePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
