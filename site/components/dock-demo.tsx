"use client"

import { BlocksIcon, CircleIcon, HexagonIcon, OctagonIcon, PentagonIcon, SquareIcon, TriangleIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-is-mobile"
import { Dock, DockCard, DockCardInner, DockDivider } from "./ui/dock"

const gradients = [
  "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
  null,
  "https://img.freepik.com/premium-vector/code-icon-3d-rendering-digital-symbol_593228-80.jpg",
  "https://cdn3d.iconscout.com/3d/premium/thumb/writing-hand-gesture-6580706-5526772.png",
  "https://img.freepik.com/premium-psd/box-3d-icon-general-ui-icon_431668-1280.jpg",
  null,
  "https://ouch-cdn2.icons8.com/_qv0GZ-TvUNz7L6kTDY6jQTK0ZL8PBgeSRketqzOyB0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png",
  "https://static.vecteezy.com/system/resources/previews/027/224/005/non_2x/x-3d-logo-free-png.png",
]

export const NavDock = () => {
  const openIcons = [
    <CircleIcon className="h-8 w-8 rounded-full fill-black stroke-black" />,
    <TriangleIcon className="h-8 w-8 rounded-full fill-black stroke-black" />,
    <SquareIcon className="h-8 w-8 rounded-full fill-black stroke-black" />,
    <PentagonIcon className="h-8 w-8 rounded-full fill-black stroke-black" />,
    <HexagonIcon className="h-8 w-8 rounded-full fill-black stroke-black" />,
    <OctagonIcon className="h-8 w-8 rounded-full fill-black stroke-black" />,
    null,
    <BlocksIcon className="h-8 w-8 rounded-full fill-black stroke-black" />,
  ]

  const isMobile = useIsMobile()

  const responsiveOpenIcons = isMobile ? openIcons.slice(3, openIcons.length) : openIcons
  const responsiveGradients = isMobile ? gradients.slice(3, gradients.length) : gradients

  return (
    <div className="flex items-center justify-center">
      <Dock>
        {responsiveGradients.map((src, index) =>
          src ? (
            <DockCard
              key={src}
              id={`${index}`}
            >
              <DockCardInner
                src={src}
                id={`${index}`}
              >
                {responsiveOpenIcons[index]}
              </DockCardInner>
            </DockCard>
          ) : (
            <DockDivider key={index} />
          ),
        )}
      </Dock>
    </div>
  )
}
