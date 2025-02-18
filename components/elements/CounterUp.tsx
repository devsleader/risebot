'use client'
import React, { useState, useRef, useEffect } from 'react'
import CountUp from "react-countup"

interface CounterUpProps {
  count: number
  time: number
}

export default function CounterUp({ count, time }: CounterUpProps) {
  const [counterOn, setCounterOn] = useState<boolean>(false)
  const triggerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setCounterOn(true)
        } else {
          setCounterOn(false)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [])

  return (
    <span ref={triggerRef}>
      <CountUp
        end={count}
        duration={time}
        redraw={true}
        start={counterOn ? 0 : undefined}
      >
        {({ countUpRef }) => (
          <span ref={countUpRef}></span>
        )}
      </CountUp>
    </span>
  )
}