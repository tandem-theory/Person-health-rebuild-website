import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import EvidencePage from './pages/EvidencePage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ADA: Skip navigation link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

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
