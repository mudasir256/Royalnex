'use client'

import React, { useEffect, useRef, ReactNode } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<{ destroy: () => void; raf: (t: number) => void } | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    let mounted = true
    Promise.all([import('lenis'), import('gsap/ScrollTrigger')]).then(
      ([{ default: Lenis }, { default: ScrollTrigger }]) => {
        if (!mounted || typeof window === 'undefined') return
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        })
        lenisRef.current = lenis

        lenis.on('scroll', ScrollTrigger.update)

        const raf = (time: number) => {
          lenis.raf(time)
          rafRef.current = requestAnimationFrame(raf)
        }
        rafRef.current = requestAnimationFrame(raf)

        ScrollTrigger.refresh()
      }
    )

    return () => {
      mounted = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lenisRef.current?.destroy?.()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
