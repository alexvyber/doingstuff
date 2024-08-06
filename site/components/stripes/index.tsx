import { cx } from "cvax"

import type { CSSProperties } from "react"

import stripe from "./stripes.module.css"

export type StripesProps = {
  className?: string
  stripesClasses: Record<string, CSSProperties>
  backgroundColor: string
}

export const Stripes = ({ className, stripesClasses, backgroundColor }: StripesProps) => (
  <div
    className={cx(
      stripe.StripeGrid,
      className,
      "pointer-events-none absolute -top-20 -z-10 -mx-4 my-auto h-[640px] w-[calc(100%+1rem)] overflow-hidden sm:h-[768px] md:h-[1050px] lg:m-auto lg:w-full",
    )}
  >
    <div
      style={{
        gridTemplateColumns: "1fr",
        minWidth: "0",
      }}
    >
      <div className={cx(stripe.gridy, "absolute -top-48 grid h-[100%] w-full -skew-y-[10deg]")}>
        <div
          className={cx("-z-10 row-span-full", backgroundColor)}
          style={{ gridColumn: "1/-1" }}
        />
      </div>
    </div>

    <div
      className={cx(
        "absolute flex h-full w-full -skew-y-[10deg] flex-col items-center justify-end overflow-hidden align-middle",
      )}
    >
      <div className={cx(stripe.gridy, "absolute grid h-[100%] w-full")}>
        {Object.entries(stripesClasses).map(([item, style], index) => (
          <div
            key={index}
            className={cx("rounded-lg", item)}
            style={style}
          />
        ))}
      </div>
    </div>
  </div>
)
