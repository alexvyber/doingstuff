export type Book = {
  subject: string
  books: {
    title: string
    description: string
    href: string
    read: boolean
    imageSrc: string
    review: string
    status: string
  }[]
}

export const books: Book[] = [
  {
    subject: "TypeScript",
    books: [
      {
        title: "Learning TypeScript Enhance Your Web Development Skills Using Type-Safe JavaScript",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.learningtypescript.com/",
        read: true,
        imageSrc: "learning-typescript.png",
        review: "asdfadsf",
        status: "working",
      },
    ],
  },
  {
    subject: "JS-related",
    books: [
      {
        title:
          "Designing Web APIs with Strapi Get started with the Strapi headless CMS by building a complete learning management system API",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.packtpub.com/product/Designing-Web-APIs-with-Strapi/9781800560635",
        read: true,
        imageSrc: "strapi-cover.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
  {
    subject: "Non-Programming",
    books: [
      {
        title: "Speechless: Controlling Words, Controlling Minds",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Speechless-Controlling-Words-Minds/dp/1684510821",
        read: true,
        imageSrc: "speechless.jpg",
        review: "asdfadsf",
        status: "done",
      },
      {
        title: "Ego, Authority, Failure: Using Emotional Intelligence Like a Hostage Negotiator to Succeed as a Leader",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Speechless-Controlling-Words-Minds/dp/1684510821",
        read: true,
        imageSrc: "ego-authority.png",
        review: "asdfadsf",
        status: "working",
      },
      {
        title: "The End of the World Is Just the Beginning: Mapping the Collapse of Globalization Hardcover",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/End-World-Just-Beginning-Globalization/dp/006323047X",
        read: true,
        imageSrc: "the-end-of-the-world.png",
        review: "asdfadsf",
        status: "done",
      },
      {
        title: "Never Split the Difference: Negotiating As If Your Life Depended On It",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Never-Split-Difference-Negotiating-Depended-ebook/dp/B014DUR7L2",
        read: true,
        imageSrc: "never-split.jpg",
        review: "asdfadsf",
        status: "done",
      },
      {
        title: "Spiral Dynamics: Mastering Values, Leadership and Change",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Spiral-Dynamics-Mastering-Values-Leadership/dp/1405133562",
        read: true,
        imageSrc: "spiral-dynamics.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
  {
    subject: "Elixir",
    books: [
      {
        title: `Programming Phoenix 1.4
          Productive |> Reliable |> Fast
          `,
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://pragprog.com/titles/phoenix14/programming-phoenix-1-4/",
        read: true,
        imageSrc: "programming-phoenix-cover.jpg",
        review: "asdfadsf",
        status: "done",
      },
      {
        title: "Programming Phoenix LiveView",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://pragprog.com/titles/liveview/programming-phoenix-liveview/",
        read: true,
        imageSrc: "programming-phoenix-liveview.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
  {
    subject: "Other...",
    books: [
      {
        title: "Learning the vi and Vim Editors. Power and Agility Beyond Just Text Editing",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://pragprog.com/titles/phoenix14/programming-phoenix-1-4/",
        read: true,
        imageSrc: "vim-cover.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
]
