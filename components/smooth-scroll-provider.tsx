"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // duración de la inercia (en segundos)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing expo
      orientation: "vertical",
      smoothWheel: true,
    })

    lenisRef.current = lenis

    // Integración con requestAnimationFrame
    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
