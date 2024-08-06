import { cx } from "cvax"

export function Heading({
  children,
  className,
  as: Comp = "h2",
  ...props
}: React.ComponentProps<"h1"> & { as?: "h1" | "h2" | "h3" | "h4" }) {
  return (
    <Comp className={cx("font-audiowide text-4xl sm:text-5xl md:text-6xl lg:text-7xl", className)} {...props}>
      {children}
    </Comp>
  )
}

export function Subheading({
  children,
  className,
  as: Comp = "h3",
  ...props
}: React.ComponentProps<"h1"> & { as?: "h2" | "h3" | "h4" | "h5" }) {
  return (
    <Comp className={cx("font-audiowide text-2xl sm:text-3xl md:text-4xl lg:text-5xl", className)} {...props}>
      {children}
    </Comp>
  )
}

export function Text({ children, className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cx(className)} {...props}>
      {children}
    </p>
  )
}
