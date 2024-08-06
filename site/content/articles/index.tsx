import type { InferGetStaticPropsType } from "next"
import Head from "next/head"

import { Card } from "@/components/card"
import { SimpleLayout } from "@/layouts/simple-layout"
import { formatDate } from "@/lib/format-date"
import { getAllArticles } from "@/lib/get-all-articles"

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function ArticlesIndex({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="My writings about software"
        // marketing and sales
        // intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-neutral-100 md:pl-6 md:dark:border-neutral-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article
                key={article.slug}
                article={article}
                slugPath="articles"
                callToAction="Read More"
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

export function Article({ article, slugPath, callToAction }: { article: any; slugPath: string; callToAction: string }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/${slugPath}/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate={true}
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>{callToAction}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}
