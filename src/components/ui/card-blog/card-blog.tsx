import "./card-blog.scss"

type Props = {
  linkURL: string
  imgURL: string
  imgAlt?: string
  title: string
  date: string
}

export default function CardBlog({
  imgURL,
  imgAlt,
  linkURL,
  title,
  date,
}: Props) {
  return (
    <div className="card-blog">
      <a className="card-blog__link" href={linkURL}></a>

      <div className="card-blog__media">
        <img className="card-blog__media-img" src={imgURL} alt={imgAlt} />
      </div>
      <div className="card-blog__title">{title}</div>
      <div className="card-blog__date">{date}</div>
    </div>
  )
}
