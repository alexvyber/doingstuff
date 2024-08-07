import { cx } from "cvax"

import { CopyButton } from "./copy-button"

type Props = React.ComponentProps<"pre"> & {
  "data-raw"?: string
}

export const Pre = ({ children, className, ...props }: Props) => {
  return (
    <pre {...props} className={cx("relative", className)}>
      {props["data-raw"] && (
        <CopyButton
          text={props["data-raw"]}
          className="absolute right-2 top-2 h-5 rounded-md bg-neutral-200 px-1.5 text-xs disabled:opacity-70"
        />
      )}

      {children}
    </pre>
  )
}
