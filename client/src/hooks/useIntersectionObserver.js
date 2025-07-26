import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver () {
    const [isObserved, setIsObserved] = useState(false)
    const refElement = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsObserved(entries[0].isIntersecting)
        }, { threshold: 0.1 })

        if (refElement.current) observer.observe(refElement.current)
        return () => { if (refElement.current) observer.unobserve(refElement.current) }
    }, [])

    return { isObserved, refElement }
}
