import "./card-review.scss"

type Props = {
  comment: string
  author: string
  location: string
  className?: string
  avatarLetter: string
  demoVar: 0 | 1 | 2
}

export default function CardReview({
  comment,
  author,
  location,
  className,
  avatarLetter,
  demoVar,
}: Props) {
  return (
    <div className={`card-review ${className}`}>
      {/* <img
        className="card-review__avatar"
        src="/images/sections/what-people-say/avatar-01.jpg"
        alt="Avatar of review"
      /> */}
      <div
        className={`card-review__avatar-demo card-review__avatar-demo-${
          demoVar === 0 ? "a" : demoVar === 1 ? "b" : "c"
        }`}
      >
        {avatarLetter}
      </div>

      <p className="card-review__comment typo-content">“{comment}”</p>
      <div className="card-review__author ">{author}</div>
      <div className="card-review__location">{location}</div>
    </div>
  )
}
