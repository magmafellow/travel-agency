import "./exclusive-deals.scss"
import { ButtonCircle } from "../../components/ui/button"
import ResponsiveContainer from "../../components/ui/responsive-container"
import CardDeal from "../../components/ui/card-deal/card-deal"

export default function ExclusiveDeals() {
  return (
    <div className="exclusive-deals section-base">
      <ResponsiveContainer className="exclusive-deals__container">
        <h2 className="exclusive-deals__title typo-h2">
          Exclusive <span className="text-brand">deals & discounts</span>
        </h2>
        <p className="exclusive-deals__description typo-para-b">
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
        <div className="exclusive-deals__swiper swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="Madrid"
                imgURL="/images/sections/exclusive-deals/original-01.jpg"
                location="Spain"
                priceActual="$850"
                priceOld="$950"
                rating="4.8"
                title="Madrid"
              />
            </div>
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="Italy"
                imgURL="/images/sections/exclusive-deals/original-02.jpg"
                location="Italy"
                priceActual="$750"
                priceOld="$850"
                rating="4.5"
                title="Firenze"
              />
            </div>
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="Paris"
                imgURL="/images/sections/exclusive-deals/original-03.jpg"
                location="France"
                priceActual="$599"
                priceOld="$699"
                rating="4.4"
                title="Paris"
              />
            </div>
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="UK"
                imgURL="/images/sections/exclusive-deals/original-04.jpg"
                location="UK"
                priceActual="$850"
                rating="4.4"
                title="London"
              />
            </div>
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="Madrid"
                imgURL="/images/sections/exclusive-deals/original-01.jpg"
                location="Spain"
                priceActual="$850"
                priceOld="$950"
                rating="4.8"
                title="Madrid"
              />
            </div>
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="Italy"
                imgURL="/images/sections/exclusive-deals/original-02.jpg"
                location="Italy"
                priceActual="$750"
                priceOld="$850"
                rating="4.5"
                title="Firenze"
              />
            </div>
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="Paris"
                imgURL="/images/sections/exclusive-deals/original-03.jpg"
                location="France"
                priceActual="$599"
                priceOld="$699"
                rating="4.4"
                title="Paris"
              />
            </div>
            <div className="swiper-slide exclusive-deals__slide">
              <CardDeal
                imgAlt="UK"
                imgURL="/images/sections/exclusive-deals/original-04.jpg"
                location="UK"
                priceActual="$850"
                rating="4.4"
                title="London"
              />
            </div>
          </div>
        </div>
        <div className="exclusive-deals__nav">
          <ButtonCircle
            className="exclusive-deals__nav_prev"
            direction="left"
          />
          <ButtonCircle
            className="exclusive-deals__nav_next"
            direction="right"
          />
        </div>
      </ResponsiveContainer>
    </div>
  )
}
