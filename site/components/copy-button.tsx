"use client"

import { CopyIcon } from "lucide-react"

import { useState } from "react"

type Props = { text: string } & Omit<React.ComponentProps<"button">, `${string}Click${string}` | "disabled">

export const CopyButton = ({ text, ...props }: Props) => {
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(text)

    setIsCopied(true)

    setTimeout(() => setIsCopied(false), 2500)
  }

  return (
    <button disabled={isCopied} onClick={onCopy} {...props}>
      {isCopied ? "Copied!" : <CopyIcon className="h-3.5 w-3.5 stroke-neutral-700" />}
    </button>
  )
}
