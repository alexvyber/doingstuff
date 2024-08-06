import { Card } from "@/components/ui/card"
import { getAllArticles } from "@/lib/get-all-articles"
import { formatDate } from "@/lib/utils"

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <div className="md:border-l md:border-neutral-200 md:pl-6 md:dark:border-neutral-700/40">
      <div className="flex max-w-3xl flex-col gap-12">
        {articles.map((article) => (
          <Article key={article.slug} article={article} slugPath="articles" callToAction="Read More" />
        ))}
      </div>
    </div>
  )
}

function Article({ article, slugPath, callToAction }: { article: any; slugPath: string; callToAction: string }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/${slugPath}/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} className="md:hidden" decorate={true}>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        {/* <Card.Cta>{callToAction}</Card.Cta> */}
      </Card>
      <Card.Eyebrow as="time" dateTime={article.date} className="mt-1 hidden text-[13px] font-light md:block">
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}
