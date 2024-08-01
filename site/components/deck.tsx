"use client"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

export function Deck() {
  const ref = useRef<HTMLDivElement>(null)
  const baseWidth = 374
  const [x, setX] = useState(0)

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const res = e.currentTarget.getBoundingClientRect()
    const { pageX, pageY } = e
    setX(pageX - res.left)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setX(-1000)}
      //   onMouseEnter={() => {
      //     if (!ref.current) return
      //     ref.current.style.width = `${baseWidth * 1.15}px`
      //   }}
      //   onMouseLeave={() => {
      //     if (!ref.current) return
      //     ref.current.style.width = `${baseWidth}px`
      //   }}
      className={cn(
        "deck fixed bottom-4 z-10 flex  flex-row  rounded-full gap-3 pill items-end justify-center px-3 py-3 ",
        " dark:border-[#2c2c2c] border h-[74px] dark:shadow-2xl  dark:shadow-white/5",
        " border-neutral-300 border h-[74px] shadow-2xl shadow-neutral-900/40"
      )}
      style={{
        background: "radial-gradient(100% 100% at 50% 0,#fff 0,rgba(7,7,7,0.15) 100%),#fff",
        // background: "radial-gradient(50% 100% at 50% 0,#333 0,rgba(7,7,7,0) 100%),#1b1b1b",
      }}
    >
      {Array.from({ length: 6 }, (_, v) => (
        <DeckIcon
          key={v}
          style={{
            width: `${calculateWIdth(v, ref?.current?.getBoundingClientRect?.()?.width, x)}px`,
            height: `${calculateWIdth(v, ref?.current?.getBoundingClientRect?.()?.width, x)}px`,
            fontSize: `${(16 * calculateWIdth(v, ref?.current?.getBoundingClientRect?.()?.width, x)) / 48}px`,
          }}
        >
          {v}
        </DeckIcon>
      ))}
    </div>
  )
}

function DeckIcon({ children, style }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      style={style}
      className="flex relative z-10 justify-center items-center rounded-full border shadow-md opacity-90 btn-icon shrink-0 btn-container bg-neutral-100 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700 shadow-balck/90 pill row align-center"
    >
      <div style={{ fontSize: style?.fontSize }}>{children}</div>
    </div>
  )
}

function calculateWIdth(index: number, baseWidth: number, x: number) {
  if (!baseWidth) return 48
  const more = baseWidth / 6
  const iconEstate = (index + 1) * more
  const [minX, maxX] = [iconEstate - more * 4, iconEstate + more * 4]

  if (x < minX || x > maxX) return 48

  const center = iconEstate - more / 2

  const some = Math.abs(x - center)

  const other = more * 20

  return Math.max(48, 48 + 48 * ((other - some * 8) / other))
}
