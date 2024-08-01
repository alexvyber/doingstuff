import { type ClassValue, cx } from "cvax"
import { twMerge } from "tailwind-merge"

export function cn(...classes: ClassValue[]): string {
  return twMerge(cx(...classes))
}
