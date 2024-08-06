import { cx, type ClassValue } from "cvax"
import { twMerge } from "tailwind-merge"

export function cn(...classes: ClassValue[]): string {
  return twMerge(cx(...classes))
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
