import "./what-people-say.scss"
import ResponsiveContainer from "../../components/ui/responsive-container"
import { ButtonCircle } from "../../components/ui/button"
import CardReview from "../../components/ui/card-review/card-review"

export default function WhatPeopleSay() {
  return (
    <div className="what-people-say section-base">
      <ResponsiveContainer className="what-people-say__container">
        <div className="what-people-say__flies">
          <img
            src="/images/sections/what-people-say/flies.svg"
            alt="Flies svg decoration"
          />
        </div>

        <div className="what-people-say__info">
          <h2 className="what-people-say__title typo-h2">
            What people say <span className="text-brand">about us</span>
          </h2>
          <p className="what-people-say__description typo-para-b">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
          <div className="what-people-say__nav">
            <ButtonCircle
              className="what-people-say__nav_prev"
              direction="left"
            />
            <ButtonCircle
              className="what-people-say__nav_next"
              direction="right"
            />
          </div>
        </div>
        <div className="what-people-say__reviews">
          <div className="what-people-say__swiper swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide what-people-say__slide">
                <CardReview
                  demoVar={0}
                  avatarLetter="B"
                  className="what-people-say__slide-inner"
                  author="Mike taylor"
                  comment="On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                  location="Lahore, Pakistan"
                />
              </div>
              <div className="swiper-slide what-people-say__slide">
                <CardReview
                  demoVar={1}
                  avatarLetter="R"
                  className="what-people-say__slide-inner"
                  author="Chris Thomas"
                  comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro molestias laboriosam delectus est mollitia sit reiciendis placeat numquam, amet ea! Tenetur soluta illum ipsa nulla."
                  location="Lahore, Pakistan"
                />
              </div>
              <div className="swiper-slide what-people-say__slide">
                <CardReview
                  demoVar={2}
                  avatarLetter="A"
                  className="what-people-say__slide-inner"
                  author="Roman Aveglo"
                  comment="On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                  location="Lahore, Pakistan"
                />
              </div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
