import { cx } from "cvax"

import Link from "next/link"

export type SocilLinkProps = {
  className: string
  href: string
  icon: React.FC<React.SVGAttributes<SVGSVGElement>>
}

export function SocialLink({ className, href, children, icon: Icon }: React.PropsWithChildren & SocilLinkProps) {
  return (
    <li className={cx(className)}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-neutral-800 transition hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-500"
      >
        <Icon className="h-6 w-6 flex-none fill-neutral-500 transition group-hover:fill-neutral-500" />
        <span className="ml-4 align-bottom">{children}</span>
      </Link>
    </li>
  )
}
