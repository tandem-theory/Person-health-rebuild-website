import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import EvidencePage from './pages/EvidencePage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'

function ScrollToHashOrTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait for page to render, then scroll to the element
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
