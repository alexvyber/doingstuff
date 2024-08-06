import { cx } from "cvax"

import React from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"

import { PartialByKeys } from "@/lib/types"
import { ChevronRightIcon } from "../icons"

interface AsComponent {
  as?: keyof JSX.IntrinsicElements
}

interface ClassName {
  className?: string
}

function Card({ as: Component = "div", className, children }: React.PropsWithChildren & AsComponent & ClassName) {
  return <Component className={cx(className, "group relative flex flex-col items-start")}>{children}</Component>
}

function CardImage({ imageSrc }: { imageSrc: string }) {
  return <Image src={imageSrc} fill={true} className="aspect-h-9 aspect-w-16" alt="" />
}

function CardLink({
  children,
  target,
  ...props
}: React.PropsWithChildren & { target?: React.HTMLAttributeAnchorTarget } & LinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-4 z-0 scale-95 bg-neutral-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800/50 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

function CardTitle({
  as: Component = "h2",
  className,
  children,
  href,
  ...linkProps
}: React.PropsWithChildren &
  AsComponent &
  ClassName &
  PartialByKeys<Omit<LinkProps, "as">, "href"> & { target?: Extract<React.HTMLAttributeAnchorTarget, string> }) {
  return (
    <Component className={cx("text-base font-normal tracking-tight text-neutral-800 dark:text-neutral-100", className)}>
      {href ? (
        <Card.Link href={href} {...linkProps}>
          {children}
        </Card.Link>
      ) : (
        children
      )}
    </Component>
  )
}

function CardDescription({
  as: Component = "p",
  children,
  className,
}: React.PropsWithChildren & ClassName & AsComponent) {
  return (
    <Component className={cx("relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400", className)}>
      {children}
    </Component>
  )
}

function CardCta({ children }: React.PropsWithChildren) {
  return (
    <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-normal text-neutral-500">
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  dateTime: _dateTime,
  ...props
}: React.PropsWithChildren & ClassName & AsComponent & { decorate?: boolean; dateTime?: string | Date }) {
  return (
    <Component
      className={cx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-neutral-500 dark:text-neutral-500",
        decorate && "pl-3.5"
      )}
      {...props}
    >
      {decorate && (
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-neutral-200 dark:bg-neutral-500" />
        </span>
      )}
      {children}
    </Component>
  )
}

Card.Title = CardTitle
Card.Link = CardLink
Card.Image = CardImage
Card.Description = CardDescription
Card.Eyebrow = CardEyebrow
Card.Cta = CardCta

export { Card }
