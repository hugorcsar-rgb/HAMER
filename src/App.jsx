import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home/index.jsx'

// Scrolls to top of page when navigating between routes
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as we build each page:
            <Route path="/founders" element={<Founders />} />
            <Route path="/recruit"  element={<Recruit />} />
            <Route path="/consult"  element={<Consult />} />
            <Route path="/camps"    element={<Camps />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/inquire"  element={<Inquire />} />
        */}
      </Routes>
    </>
  )
}
