import { glob, readFile } from "node:fs/promises"
import { resolve } from "node:path"

import { default as generate } from "@babel/generator"
import { parse } from "@babel/parser"
import { compile } from "@mdx-js/mdx"

type Article = {
  slug: string
  author: string
  date: string
  title: string
  description: string
}

// TODO: rewrite it
// this is straight up stupid
// But hey, I learned bunch of new stuff
export async function getAllArticles(): Promise<Article[]> {
  const articles: Article[] = []

  const articlesPath = resolve(process.cwd(), "app/articles")

  for await (const file of glob(`${articlesPath}/**/*.mdx`)) {
    const slug = file.split("/").filter(Boolean).reverse()[1]

    const compiled = await compile(await readFile(file))

    if (typeof compiled.value === "string") {
      const ast = parse(compiled.value, { sourceType: "module" })

      const namedExport = ast.program.body.find(
        // @ts-expect-error
        (n) => n.type === "ExportNamedDeclaration" && n?.declaration?.declarations?.[0]?.id?.name === "metadata"
      )

      if (namedExport) {
        // @ts-expect-error
        const res = generate(namedExport?.declaration!)

        const some = res.code.replace("const metadata = ", "")

        const evalueated = eval(`(()=>{return ${some}})()`)

        if (!evalueated.date) evalueated.date = new Date().toLocaleDateString()

        articles.push({ slug, ...evalueated })
      }
    }
  }

  return articles.sort((a, z) => new Date(z.date).getTime() - new Date(a.date).getTime())
}
