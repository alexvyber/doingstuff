import Image from "next/image"
import { Metadata } from "next/types"

import { ToolsSection } from "@/components/tool-section"
import { Card } from "@/components/ui/card"
import { bloggers } from "@/configs/bloggers"

export const metadata: Metadata = {
  title: "Stuff that I'm reading and watching",
}
export default function Bloggers() {
  return (
    <div className="space-y-20">
      {bloggers.map((platform) => {
        return (
          <ToolsSection title={platform.title} key={platform.title}>
            {platform.items.map((item) => (
              <Blogger title={item.title} href={item.href} key={item.href} logoIcon={item.logoIcon}>
                {item.description}
              </Blogger>
            ))}
          </ToolsSection>
        )
      })}
    </div>
  )
}

function Blogger({
  title,
  href,
  children,
  logoIcon,
}: React.PropsWithChildren & { href?: string; title: string; logoIcon: any }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} target="_blank">
        <div className="align-center flex items-center">
          <Image src={logoIcon} width={28} height={28} className="z-10 mr-3 inline h-6 w-6" alt="" />
          {title}
        </div>
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}
