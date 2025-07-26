import "./card-plan.scss"

type Props = {
  linkURL: string
  imgURL: string
  imgAlt: string
  title: string
  price: string
  tripLabel: string
  starRating: string
}

export default function CardPlan({
  linkURL,
  imgURL,
  imgAlt,
  title,
  price,
  tripLabel,
  starRating,
}: Props) {
  return (
    <div className="card-plan">
      <a className="card-plan__link" href={linkURL}></a>
      
      <img className="card-plan__img" src={imgURL} alt={imgAlt} />
      <div className="card-plan__main-bar">
        <div className="card-plan__title typo-h3">{title}</div>
        <div className="card-plan__price">{price}</div>
      </div>
      <div className="card-plan__sub-bar">
        <div className="card-plan__trip">
          <img
            className="card-plan__trip-img"
            src="/images/fill/needle.svg"
            alt=""
          />
          <div className="card-plan__trip-label">{tripLabel}</div>
        </div>
        <div className="card-plan__review">
          <img
            className="card-plan__review-img"
            src="/images/color/star.svg"
            alt=""
          />
          <div className="card-plan__review-label">{starRating}</div>
        </div>
      </div>
    </div>
  )
}
