export type NavLink =
  | {
      title: string
      href: string
      links?: undefined
    }
  | {
      title: string
      href: string
      links: {
        title: string
        href: string
        base: string
      }[]
    }

export const navLinks: NavLink[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "1000Days",
    href: "/1000days",
  },
  {
    title: "Stuff",
    href: "/stuff",
    links: [
      { title: "Tools", href: "/using", base: "/stuff" },
      { title: "TODO", href: "/TODO", base: "/stuff" },
      { title: "Bloggers", href: "/bloggers", base: "/stuff" },
      { title: "Books", href: "/books", base: "/stuff" },
    ],
  },
]
