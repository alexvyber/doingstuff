import { cx } from "cvax"

import { cn } from "@/lib/utils"

const spacing = 24

export function BgGrid() {
  const w = 3480
  const width = w - w * 0.1

  return (
    <div
      className={cn(
        "h-full w-full",
        "overflow-hidden",
        "rounded-2xl shadow-2xl lg:rounded-3xl",
        "p-1 sm:p-2 lg:p-3",
        "border border-neutral-200 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 dark:border-neutral-800 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800"
      )}
    >
      <div
        className={cx(
          "border border-neutral-200",
          "relative h-full w-full overflow-hidden rounded-xl bg-white",
          "shadow-inner dark:border-neutral-800 dark:bg-[#101010] sm:rounded-[10px] lg:rounded-xl"
        )}
      >
        {Array.from({ length: Math.ceil(width / spacing) }, (_, i) => (
          <div
            key={i}
            style={{
              width: "1px",
              height: "100%",
              left: `${i * spacing}px`,
            }}
            className="absolute bg-neutral-200 dark:bg-neutral-800"
          />
        ))}

        {Array.from({ length: Math.ceil(width / spacing) }, (_, i) => (
          <div
            key={i}
            style={{
              height: "1px",
              width: "100%",
              top: `${i * spacing}px`,
            }}
            className="absolute bg-neutral-200 dark:bg-neutral-800"
          />
        ))}
      </div>
    </div>
  )
}
