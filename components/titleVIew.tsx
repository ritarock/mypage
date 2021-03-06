import Link from 'next/link'

export default function TitleBoard({
  articleData,
}: {
  articleData: {
    id: number
    title: string
    tags: string[]
  }[]
}): JSX.Element {
  return (
    <>
      <p className="mx-3">Articles:</p>
      <div className="mx-5">
        {articleData.map(({ id, title, tags }) => (
          <div key={id}>
            {`${formatDate(id)}: `}
            <Link href="/articles/[id]" as={`/articles/${id}`}>
              <a className="text-blue-500">{title}</a>
            </Link>
            <span> : Tags [{tags.join(', ')}]</span>
          </div>
        ))}
      </div>
    </>
  )
}

function formatDate(date: number) {
  return (
    String(date).substr(0, 4) +
    '/' +
    String(date).substr(4, 2) +
    '/' +
    String(date).substr(6, 2)
  )
}
