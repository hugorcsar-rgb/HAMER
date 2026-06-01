import { useEffect, useRef } from 'react'

// Cursor personalizado HAMER: anillo de oro de 10px con retardo deliberado (~80ms),
// que se expande a 26px al pasar sobre enlaces y botones. Solo en punteros finos.
export default function CustomCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    if (!fine.matches) return

    const el = ref.current
    if (!el) return

    document.body.classList.add('hamer-has-cursor')

    // Posición objetivo (ratón) y posición renderizada (con lag)
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos = { ...target }
    let raf

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const isInteractive = (node) =>
      node && (node.closest?.('a, button, [role="button"], input, textarea, select, label'))

    const onOver = (e) => {
      el.classList.toggle('is-hovering', !!isInteractive(e.target))
    }

    const loop = () => {
      // Lerp ~0.16 ≈ retardo perceptible de ~80ms a 60fps
      pos.x += (target.x - pos.x) * 0.16
      pos.y += (target.y - pos.y) * 0.16
      el.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.body.classList.remove('hamer-has-cursor')
    }
  }, [])

  return <div ref={ref} className="hamer-cursor" aria-hidden="true" />
}
