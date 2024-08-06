import { StripesProps } from "@/components/stripes"

export type ProjectMeta = {
  author: string
  date: string
  title: string
  description: string
  tags: {
    slug: string
    title: string
  }[]
  logo: {
    src: string
    alt: string
  }
  keyLinks?: { title: string; href: string; description?: string }[]
  attributes: {
    label: string
    value: string
  }[]
  images?: {
    src: string
    alt: string
    overlay?: {
      src: string
      alt: string
    }
  }[]
  stripesClasses: StripesProps["stripesClasses"]
}

type AnimationBase =
  | "fade-in"
  | "zoom-out"
  | "zoom-in"
  | "mask-right"
  | "mask-left"
  | "slide-in-top"
  | "scale-x"
  | "slide-in-right"

export type CustomAnimation =
  | AnimationBase
  | `${AnimationBase} ${AnimationBase}`
  | `${AnimationBase} ${AnimationBase} ${AnimationBase}`

export type ReplaceKeyTypes<Obj, ReplaceKey extends keyof Obj, ReplaceType extends Obj[ReplaceKey]> = {
  [Key in keyof Obj]: Key extends ReplaceKey ? ReplaceType : Obj[Key]
}

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type PartialByKeys<Obj, Keys extends keyof Obj = keyof Obj> = Prettify<
  Partial<Pick<Obj, Keys>> & Omit<Obj, Keys>
>

export type RequiredByKeys<Obj, Keys extends keyof Obj = keyof Obj> = Prettify<
  Required<Pick<Obj, Keys>> & Omit<Obj, Keys>
>
