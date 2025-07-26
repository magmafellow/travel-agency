import { Button, ButtonBrand } from "../button"
import "./card-deal.scss"

type Props = {
  imgURL: string
  imgAlt: string
  title: string
  rating: string
  location: string
  priceOld?: string
  priceActual: string
  bookLabel?: string
}

export default function CardDeal({
  imgURL,
  imgAlt,
  title,
  rating,
  location,
  priceOld,
  priceActual,
  bookLabel = "Book Now",
}: Props) {
  return (
    <div className="card-deal" tabIndex={0}>
      <div className="card-deal__media">
        <img className="card-deal__media-img" src={imgURL} alt={imgAlt} />
      </div>
      <div className="card-deal__bar-main">
        <div className="card-deal__title">{title}</div>
        <div className="card-deal__rating">
          <img
            src="/images/color/star.svg"
            className="card-deal__rating-star"
          />
          <div className="card-deal__rating-number">{rating}</div>
        </div>
      </div>
      <div className="card-deal__bar-sub">
        <div className="card-deal__location">
          <img
            src="/images/fill/mark.svg"
            className="card-deal__location-img"
          />
          <div className="card-deal__locationg-name">{location}</div>
        </div>
        <div className="card-deal__price-box">
          {priceOld && <div className="card-deal__price-old">{priceOld}</div>}
          <div className="card-deal__price-actual">{priceActual}</div>
        </div>
      </div>

      <div className="card-deal__overlay">
        {/* <button className="card-deal__book">{bookLabel}</button> */}
        <ButtonBrand className="card-deal__book">Book Now</ButtonBrand>
      </div>
    </div>
  )
}
