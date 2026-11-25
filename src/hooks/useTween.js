import { useEffect, useState } from 'react'
import { reducedMotion } from './motion'

/* 0 → 1 over `duration` ms once `start` becomes true (ease-out cubic). */
export function useTween(start, duration = 1600, delay = 0) {
  // Static HTML shows the finished state; the client rewinds and plays it when visible.
  const [p, setP] = useState(1)
  useEffect(() => {
    if (reducedMotion()) { setP(1); return }
    if (!start) { setP(0); return }
    let raf
    let t0
    const step = (t) => {
      if (t0 === undefined) t0 = t + delay
      const k = Math.min(1, Math.max(0, (t - t0) / duration))
      setP(1 - Math.pow(1 - k, 3))
      if (k < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, duration, delay])
  return p
}
