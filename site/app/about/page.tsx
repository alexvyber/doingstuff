import Image from "next/image"

import { BgGrid } from "@/components/bg-grid/bg-grid"
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, TwitterIcon } from "@/components/icons"
import { SocialLink } from "@/components/social-link"
import { Stripes, type StripesProps } from "@/components/stripes"
import { Subheading } from "@/components/typography"
import portraitImage from "@/images/avatar.jpg"

export const socialLinks = [
  {
    href: "https://x.com/alexvyber_dev",
    icon: TwitterIcon,
    title: "Twitter",
  },
  {
    href: "https://instagram.com/alexvyber",
    icon: InstagramIcon,
    title: "Instagram",
  },
  {
    href: "mailto:alexvyber@gmail.com",
    icon: MailIcon,
    title: "Contact by EMail",
  },
  {
    href: "https://github.com/alexvyber",
    icon: GitHubIcon,
    title: "Follow on GitHub",
  },
  {
    href: "https://linkedin.com/in/alexvyber",
    icon: LinkedInIcon,
    title: "Follow on LinkedIn",
  },
] as const

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="relative h-full min-h-screen w-full p-3 sm:p-4 md:p-6 lg:px-16 lg:py-12">
        <BgGrid />

        {/* <div className="absolute top-28 left-28 w-48 h-48 rounded-lg shadow-2xl transform rotate-[-10deg] bg-neutral-100 dark:bg-neutral-800" /> */}
        {/* <div className="absolute top-36 left-56 w-48 h-48 rounded-lg shadow-2xl transform rotate-[8deg] bg-neutral-50 dark:bg-neutral-900" /> */}

        {/* <div className="absolute top-36 right-48 w-48 h-64 rounded-lg shadow-2xl transform rotate-[8deg] bg-neutral-100 dark:bg-neutral-700" /> */}
        {/* <div className="absolute top-28 right-28 w-24 h-24 bg-white rounded-full shadow-2xl transform rotate-[10deg] dark:bg-neutral-800" /> */}

        <div className="absolute inset-0 mx-auto flex w-full max-w-4xl items-center justify-center px-10">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rotate-3 rounded-2xl bg-neutral-100 object-cover transition duration-300 ease-out hover:rotate-0 hover:scale-105 hover:shadow-2xl dark:bg-neutral-800 dark:shadow-neutral-900/30"
                />
              </div>
            </div>

            <div className="lg:order-first lg:row-span-2">
              <Subheading>Hi! I'm Alexey Sokolov. I'm writing software and doing stuff...</Subheading>
            </div>
            <div className="lg:pl-20">
              <ul className="space-y-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={link.href} href={link.href} icon={link.icon} className="">
                    {link.title}
                  </SocialLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Stripes
          className="opacity-100"
          stripesClasses={getStripesClasses()}
          backgroundColor="bg-neutral-100 dark:bg-neutral-950 "
        />
      </div>
    </div>
  )
}

function getStripesClasses() {
  return {
    "ring ring-neutral-300 dark:ring-neutral-700": {
      gridRow: "-9",
      gridColumn: "span 10/0",
    },
    "bg-neutral-200  dark:bg-neutral-500": {
      gridRow: "-7",
      gridColumn: "span 5/8",
    },
    "ring ring-neutral-300 dark:ring-neutral-900": {
      gridRow: "-6",
      gridColumn: "viewport-start/span 10",
    },
    "bg-neutral-200 dark:bg-neutral-500": {
      gridRow: "-5",
      gridColumn: "span 7/9",
    },
    "bg-neutral-300 dark:bg-neutral-400": {
      gridRow: "-5",
      gridColumn: "span 5/7",
    },
    "bg-neutral-200 dark:bg-neutral-900": {
      gridRow: "-10",
      gridColumn: "span 4 / viewport-end",
    },
    "bg-neutral-300 dark:bg-neutral-800": {
      gridRow: "-9",
      gridColumn: "span 5 / viewport-end",
    },
    "bg-neutral-200 dark:bg-neutral-600": {
      gridRow: "-4",
      gridColumn: "span 7 / viewport-end",
    },
    "bg-neutral-200 dark:bg-neutral-700": {
      gridRow: "-3",
      gridColumn: "span 5/-4",
    },
    "ring dark:ring-neutral-600 ring-neutral-200": {
      gridRow: "-2",
      gridColumn: "span 5 / viewport-end",
    },
    "bg-neutral-300 dark:bg-neutral-500": {
      gridRow: "7",
      gridColumn: "span 3/5",
    },
  } satisfies StripesProps["stripesClasses"]
}
