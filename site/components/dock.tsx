"use client"

import Link from "next/link"

import { useIsMobile } from "@/hooks/use-is-mobile"
import { Dock, DockCard, DockCardInner, DockDivider } from "./ui/dock"

const gradients = [
  { href: "/", icon: "/images/gradient.webp", onMobile: true },
  null,
  { href: "/code", icon: "/images/code.avif", onMobile: true },
  { href: "/articles", icon: "/images/writing.webp", onMobile: true },
  { href: "/projects", icon: "/images/box.avif", onMobile: true },
  null,
  { href: "https://github.com/alexvyber", icon: "/images/gh.png", onMobile: false },
  { href: "https://x.com/alexvyber_dev", icon: "/images/x.webp", onMobile: false },
]

// TODO: work out mobile dock flicker

export const NavDock = () => {
  const isMobile = useIsMobile()

  const responsiveGradients = isMobile ? gradients.filter((g) => Boolean(g) && g?.onMobile) : gradients

  return (
    <div className="flex items-center justify-center">
      <Dock>
        {responsiveGradients.map((item, index) =>
          item ? (
            <Link key={item.href} href={item.href}>
              <DockCard id={`${index}`}>
                <DockCardInner src={item.icon} id={`${index}`} />
              </DockCard>
            </Link>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </div>
  )
}
