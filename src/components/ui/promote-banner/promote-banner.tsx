import { ButtonBrand } from "../button"
import "./promote-banner.scss"

type Props = {
  label1: string
  label2: string
  label3: string

  text1: string
  text2: string
  text3: string
} & React.ComponentProps<"div">
export default function PromoteBanner({
  label1,
  label2,
  label3,
  text1,
  text2,
  text3,
  className,
  ...props
}: Props) {
  return (
    <div className={`promote-banner ${className}`}>
      <div className="promote-banner__trigger-box">
        <div className="promote-banner__cell">
          <div className="promote-banner__trigger">
            <div className="promote-banner__trigger-label typo-content">{label1}</div>
            <img
              className="promote-banner__trigger-icon"
              src="/images/fill/down.svg"
              alt="Down icon"
            />
          </div>
          <div className="promote-banner__text">{text1}</div>
        </div>
        <div className="promote-banner__cell">
          <div className="promote-banner__trigger">
            <div className="promote-banner__trigger-label typo-content">{label2}</div>
            <img
              className="promote-banner__trigger-icon"
              src="/images/fill/down.svg"
              alt="Down icon"
            />
          </div>
          <div className="promote-banner__text">{text2}</div>
        </div>
        <div className="promote-banner__cell">
          <div className="promote-banner__trigger">
            <div className="promote-banner__trigger-label typo-content">{label3}</div>
            <img
              className="promote-banner__trigger-icon"
              src="/images/fill/down.svg"
              alt="Down icon"
            />
          </div>
          <div className="promote-banner__text">{text3}</div>
        </div>
      </div>
      <div className="promote-banner__action-box">
        <ButtonBrand>Explore Now</ButtonBrand>
      </div>
    </div>
  )
}
