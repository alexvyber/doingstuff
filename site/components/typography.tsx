import { cx } from "cvax"

export function Heading({ children, className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cx("font-audiowide text-4xl sm:text-5xl md:text-6xl lg:text-7xl", className)}
      {...props}
    >
      {children}
    </h1>
  )
}

export function Text({ children, className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cx(className)}
      {...props}
    >
      {children}
    </p>
  )
}
