import "./subscribe.scss"
import ResponsiveContainer from "../../components/ui/responsive-container"
import InputStrong from "../../components/ui/input-strong/input-strong"

export default function Subscribe() {
  return (
    <div className="subscribe-section section-base">
      <ResponsiveContainer className="subscribe__container">
        <div className="subscribe-section__block">
          <form id="subscribe-form" className="subscribe-section__block-inner">
            <h2 className="subscribe-section__title typo-h2">
              Subscribe and get exclusive deals & offer
            </h2>
            <div className="form-group">
              <InputStrong
                required
                minLength={3}
                maxLength={32}
                data-pristine-email-message="You provided incorrect email address"
                className="subscribe-section__input"
                buttonClass="subscribe-section__input-button"
                imgURL="/images/sections/subscribe/email.svg"
                labelClass="subscribe-section__input-label"
                buttonText="Subscribe"
                label="Enter email"
                type="email"
                htmlFor="email"
                placeholder=""
                id="email"
                name="email"
              />
            </div>
          </form>

          <img
            className="subscribe-section__ellipse"
            src="/images/sections/subscribe/ellipses.svg"
            alt="Ellipses"
          />
          <img
            className="subscribe-section__palms"
            src="/images/sections/subscribe/palms.svg"
            alt="Palms"
          />
        </div>
      </ResponsiveContainer>
    </div>
  )
}
