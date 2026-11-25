import { useEffect, useRef, useState } from 'react'

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

/* One shared rAF-throttled scroll loop for every subscriber. */
const subs = new Set()
let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
    subs.forEach((fn) => fn())
  })
}
function subscribe(fn) {
  if (subs.size === 0) {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  }
  subs.add(fn)
  fn()
  return () => {
    subs.delete(fn)
    if (subs.size === 0) {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }
}

/* Writes --sy (scroll px) and --sp (page progress 0..1) on <html>. */
export function useRootScrollVars() {
  useEffect(() => {
    const root = document.documentElement
    return subscribe(() => {
      const y = window.scrollY
      const max = Math.max(1, root.scrollHeight - window.innerHeight)
      root.style.setProperty('--sy', String(y))
      root.style.setProperty('--sp', String(clamp(y / max)))
    })
  }, [])
}

/*
 * Scroll progress of an element.
 *  mode 'pin'  : 0 when its top hits the viewport top, 1 when its bottom hits the viewport bottom
 *               (use on a tall section with a sticky child).
 *  mode 'pass' : 0 when its top enters at the bottom, 1 when its bottom leaves at the top.
 *  mode 'enter': 0 when its top enters at the bottom, 1 when its top reaches 35% of the viewport.
 */
export function useScrollProgress(mode = 'pass') {
  const ref = useRef(null)
  const [p, setP] = useState(0)
  useEffect(() => {
    if (reducedMotion()) { setP(1); return }
    return subscribe(() => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let v
      if (mode === 'pin') v = -r.top / Math.max(1, r.height - vh)
      else if (mode === 'enter') v = (vh - r.top) / (vh * 0.65)
      else v = (vh - r.top) / (vh + r.height)
      v = clamp(v)
      setP((prev) => (Math.abs(prev - v) > 0.001 ? v : prev))
    })
  }, [mode])
  return [ref, p]
}

/* Fires once when the element scrolls into view. */
export function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (reducedMotion()) { setInView(true); return }
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, inView])
  return [ref, inView]
}

/* Number that counts up once `start` is true. */
export function CountUp({ to, from = 0, start = true, decimals = 0, prefix = '', suffix = '', duration = 1400, comma = false }) {
  // Static HTML carries the real figure; the client resets it and counts up when visible.
  const [v, setV] = useState(to)
  useEffect(() => {
    if (reducedMotion()) { setV(to); return }
    if (!start) { setV(from); return }
    let raf
    const t0 = performance.now()
    const step = (t) => {
      const k = clamp((t - t0) / duration)
      const eased = 1 - Math.pow(1 - k, 3)
      setV(from + (to - from) * eased)
      if (k < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, to, from, duration])
  const txt = comma ? Math.round(v).toLocaleString('en-IN') : v.toFixed(decimals)
  return <>{prefix}{txt}{suffix}</>
}

export const lerp = (a, b, t) => a + (b - a) * t
export const seg = (p, a, b) => clamp((p - a) / (b - a))
