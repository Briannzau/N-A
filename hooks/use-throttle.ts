import { useCallback, useRef } from "react"

export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef(0)
  const timeoutId = useRef<NodeJS.Timeout>()

  return useCallback(
    ((...args) => {
      const now = Date.now()

      if (now - lastCall.current >= delay) {
        callback(...args)
        lastCall.current = now
      } else {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current)
        }

        timeoutId.current = setTimeout(() => {
          callback(...args)
          lastCall.current = Date.now()
        }, delay)
      }
    }) as T,
    [callback, delay]
  )
}
