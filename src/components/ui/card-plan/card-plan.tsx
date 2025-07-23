import "./card-plan.scss"

export default function CardPlan() {
  return (
    <div className="card-plan">
      <img
        className="card-plan__img"
        src="/images/components/card-plan/preview-01.png"
        alt=""
      />
      <div className="card-plan__main-bar">
        <div className="card-plan__title typo-h3">Rome, Italy</div>
        <div className="card-plan__price">$5,42k</div>
      </div>
      <div className="card-plan__sub-bar">
        <div className="card-plan__trip">
          <img
            className="card-plan__trip-img"
            src="/images/fill/needle.svg"
            alt=""
          />
          <div className="card-plan__trip-label">10 day Trip</div>
        </div>
        <div className="card-plan__review">
          <img
            className="card-plan__review-img"
            src="/images/color/star.svg"
            alt=""
          />
          <div className="card-plan__review-label">4.8</div>
        </div>
      </div>
    </div>
  )
}
