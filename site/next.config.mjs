import mdx from "@next/mdx"
import rehypePrism from "rehype-prism-plus"
import remarkSlugs from "remark-slug"
import rehypeHtml from "rehype-stringify"
import remarkGfm from "remark-gfm"
import rehypeCodeTitles from "rehype-code-titles"

const withMDX = mdx({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [rehypeCodeTitles, [rehypePrism, { showLineNumbers: true }], rehypeHtml],
    remarkPlugins: [remarkSlugs, remarkGfm],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
}

export default withMDX(nextConfig)
