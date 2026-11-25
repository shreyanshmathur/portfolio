import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useRootScrollVars } from './hooks/motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Experience from './pages/Experience'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  useRootScrollVars()
  return (
    <div className="app">
      <ScrollToTop />
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/truefan" element={<Navigate to="/experience" replace />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Old routes from the previous site */}
        <Route path="/projects/*" element={<Navigate to="/experience" replace />} />
        <Route path="/activities" element={<Navigate to="/about" replace />} />
        <Route path="/skills" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}
