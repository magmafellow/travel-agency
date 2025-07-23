import './best-vacation-plan.scss'
import ResponsiveContainer from "../../components/ui/responsive-container"
import CardPlan from "../../components/ui/card-plan/card-plan"
import 'swiper/css';

export default function BestVacationPlan() {
  return (
    <div className="best-vacation-plan">
      <ResponsiveContainer className="best-vacation-plan__container">
        <h2>
          Best <span>vacation plan</span>
        </h2>
        <p>
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
        <div className="best-vacation-plan__nav"></div>
        <div className="best-vacation-plan__swiper swiper">
          <div className="swiper-wrapper">
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan />
            </div>
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan />
            </div>
            <div className="best-vacation-plan__slide swiper-slide">
              <CardPlan />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
