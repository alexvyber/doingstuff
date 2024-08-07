// @ts-check

import mdx from "@next/mdx"
import rehypePrism from "rehype-prism-plus"
import rehypeHtml from "rehype-stringify"
import remarkGfm from "remark-gfm"
import rehypeCodeTitles from "rehype-code-titles"
import { visit } from "unist-util-visit"

const withMDX = mdx({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      () => (tree) =>
        visit(tree, (node) => {
          const shouldAddRawData =
            node?.type === "element" && node?.tagName === "pre" && node.children[0].tagName === "code"

          if (shouldAddRawData) node.properties["data-raw"] = node.children[0].children?.[0].value
        }),
      rehypeCodeTitles,
      rehypePrism,
      rehypeHtml,
    ],
    remarkPlugins: [remarkGfm],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
}

export default withMDX(nextConfig)
