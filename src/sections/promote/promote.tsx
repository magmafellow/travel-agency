import "./promote.scss"
import ResponsiveContainer from "../../components/ui/responsive-container"
import { Button } from "../../components/ui/button"
import CardMinimal from "../../components/ui/card-minimal/card-minimal"
import PromoteBanner from "../../components/ui/promote-banner/promote-banner"

const Main = () => {
  return (
    <main className="grow promote section-base">
      <ResponsiveContainer className="promote__container-primary">
        <div className="promote__textish">
          <h1 className="promote__title opacity-0 typo-h1">
            Get started your exciting{" "}
            <span className="text-brand">journey</span> with us.
          </h1>
          <p className="promote__description typo-para-a">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <Button className="promote__btn-discover button_brand button_outline">
            Discover Now
          </Button>
        </div>
        <div className="promote__picturish">
          {/* Relative container for decorations */}
          <div className="promote__picturish-shell opacity-0">
            <img
              className="promote__picturish-shell-guy"
              src="/images/sections/promote/guy.png"
              alt="Guy with thump up"
            />
            <img
              className="promote__picturish-shell-flies"
              src="/images/sections/promote/flies.svg"
              alt=""
            />
            <img
              className="promote__picturish-shell-ellipse"
              src="/images/sections/promote/ellipse-bg.svg"
              alt=""
            />

            <CardMinimal
              className="promote__card-minimal promote__card-minimal_google"
              title="Explore"
              description="Every cornar of the world with us"
              imgUrl="/images/color/google-maps.svg"
            />
            <CardMinimal
              className="promote__card-minimal promote__card-minimal_award"
              title="Best Tour Awards"
              imgUrl="/images/color/reward.svg"
            />
            <CardMinimal
              className="promote__card-minimal promote__card-minimal_star"
              title="27K"
              description="Customer Review"
              imgUrl="/images/color/star.svg"
            />
          </div>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer className="promote__container-subsidiary">
        <PromoteBanner
          label1="Location"
          label2="Date"
          label3="Guest"
          text1="Where are you going"
          text2="When you go"
          text3="Number of guest"
          className="promote__promote-banner"
        />
      </ResponsiveContainer>
    </main>
  )
}

export default Main
