import { useEffect, useState } from 'react'

// Starts false on the server and on first client render (keeps hydration stable),
// then syncs to the real media query.
export function useMedia(query) {
  const [m, setM] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const fn = () => setM(mq.matches)
    fn()
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [query])
  return m
}
