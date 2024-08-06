import { cx, type ClassValue } from "cvax"
import { twMerge } from "tailwind-merge"

export function cn(...classes: ClassValue[]): string {
  return twMerge(cx(...classes))
}
