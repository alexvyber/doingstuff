"use client"

import { useWindowSize } from "@/hooks/use-window-size"
import { useEffect, useRef, useState } from "react"

const spacingBig = 48
const spacingSmall = 16

export function BgGrid() {
  const [width, height] = useWindowSize()

  const h = height - height * 0.1
  const w = width - width * 0.04

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w + 1} ${h + 1}`}
      className="absolute rounded-3xl dark:shadow-2xl -z-10 dark:shadow-white/5 backdrop-blur-sm shadow-xl shadow-neutral-100"
    >
      <rect
        className="dark:stroke-neutral-800 stroke-neutral-200 dark:fill-neutral-900 fill-neutral-100/70"
        width={w}
        height={h}
        rx="24"
        key={1}
      />

      <rect
        className="dark:stroke-neutral-800 stroke-neutral-200 dark:fill-neutral-950 fill-[#fefefe]/70"
        width={w - 24}
        height={h - 24}
        x="12"
        y="12"
        rx="12"
        key={2}
      />

      {Array.from({ length: Math.floor(w / spacingSmall) }, (_, i) => (
        <line
          key={i}
          x1={(i + 1) * spacingSmall}
          x2={(i + 1) * spacingSmall}
          y1={0 + 12}
          y2={h - 12}
          className="dark:stroke-neutral-900 stroke-[#f6f6f6]"
          width={2}
        />
      ))}

      {Array.from({ length: Math.floor(h / spacingSmall) }, (_, i) => (
        <line
          key={i}
          y1={(i + 1) * spacingSmall}
          y2={(i + 1) * spacingSmall}
          x1={0 + 12}
          x2={w - 12}
          className="dark:stroke-neutral-900 stroke-[#f6f6f6]"
          width={2}
        />
      ))}

      {Array.from({ length: Math.ceil(w / spacingBig) }, (_, i) => (
        <line
          key={i}
          x1={(i + 1) * spacingBig}
          x2={(i + 1) * spacingBig}
          y1={0 + 12}
          y2={h - 12}
          className="dark:stroke-neutral-800 stroke-[#f1f1f1]"
          width={2}
        />
      ))}

      {Array.from({ length: Math.ceil(h / spacingBig) }, (_, i) => (
        <line
          key={i}
          y1={(i + 1) * spacingBig}
          y2={(i + 1) * spacingBig}
          x1={0 + 12}
          x2={w - 12}
          className="dark:stroke-neutral-800 stroke-[#f1f1f1]"
          width={2}
        />
      ))}

      <defs>
        <linearGradient id="Gradient1">
          <stop
            className="stop1"
            offset="0%"
          />
          <stop
            className="stop2"
            offset="50%"
          />
          <stop
            className="stop3"
            offset="0%"
          />
        </linearGradient>
        <linearGradient
          id="Gradient2"
          x1="0"
          x2="0"
          y1="0"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="black"
            stop-opacity="100"
          />
          <stop
            offset="50%"
            stop-color="#acacac"
          />
          <stop
            offset="100%"
            stop-color="black"
            stop-opacity="0"
          />
        </linearGradient>
      </defs>
      {/* <MovingLine /> */}
    </svg>
  )
}

function MovingLine() {
  const intervalId = useRef<any>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (count < 1200) {
        setCount((count) => count + 7)
      } else {
        clearInterval(intervalId.current)
      }
    }, 30)
    return () => {
      clearInterval(intervalId.current)
    }
  }, [count])

  return (
    <rect
      x="36"
      y={count}
      width="1"
      height="100"
      fill="url(#Gradient2)"
    />
  )
}
