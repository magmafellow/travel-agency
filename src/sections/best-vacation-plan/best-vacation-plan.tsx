import "./best-vacation-plan.scss"
import ResponsiveContainer from "../../components/ui/responsive-container"
import CardPlan from "../../components/ui/card-plan/card-plan"
import { ButtonCircle } from "../../components/ui/button"

export default function BestVacationPlan() {
  return (
    <div className="best-vacation-plan section-base">
      <ResponsiveContainer className="best-vacation-plan__container">
        <div className="best-vacation-plan__palms">
          <img src="/images/sections/best-vacation-plan/palms.svg" alt="" />
        </div>
        <h2 className="best-vacation-plan__title typo-h2">
          Best <span className="text-brand">vacation plan</span>
        </h2>
        <p className="typo-para-b best-vacation-plan__description">
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
        <div className="best-vacation-plan__nav">
          <ButtonCircle
            className="best-vacation-plan__nav_prev"
            direction="left"
          />
          <ButtonCircle
            className="best-vacation-plan__nav_next"
            direction="right"
          />
        </div>
        <div className="best-vacation-plan__swiper swiper">
          <div className="swiper-wrapper">
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan
                title="Rome, Italty"
                price="$5,42k"
                imgAlt="Rome trip"
                tripLabel="10 Days Trip"
                starRating="4.8"
                imgURL="/images/components/card-plan/preview-01.png"
              />
            </div>
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan
                title="London, UK"
                price="$2,42k"
                imgAlt="London trip"
                tripLabel="07 Days Trip"
                starRating="4.7"
                imgURL="/images/components/card-plan/preview-02.png"
              />
            </div>
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan
                title="Osaka, Japan"
                price="$5,42k"
                imgAlt="Osaka trip"
                tripLabel="10 Days Trip"
                starRating="4.9"
                imgURL="/images/components/card-plan/preview-03.png"
              />
            </div>
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan
                title="Rome, Italty"
                price="$5,42k"
                imgAlt="Rome trip"
                tripLabel="10 Days Trip"
                starRating="4.8"
                imgURL="/images/components/card-plan/preview-01.png"
              />
            </div>
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan
                title="London, UK"
                price="$2,42k"
                imgAlt="London trip"
                tripLabel="07 Days Trip"
                starRating="4.7"
                imgURL="/images/components/card-plan/preview-02.png"
              />
            </div>
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan
                title="Osaka, Japan"
                price="$5,42k"
                imgAlt="Osaka trip"
                tripLabel="10 Days Trip"
                starRating="4.9"
                imgURL="/images/components/card-plan/preview-03.png"
              />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
