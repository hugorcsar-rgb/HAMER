import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import CustomCursor from './CustomCursor.jsx'

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground nazari-texture">
      <CustomCursor />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
