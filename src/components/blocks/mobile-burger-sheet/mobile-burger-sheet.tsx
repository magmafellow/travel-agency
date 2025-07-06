import { Button } from "../../ui/button"
import "./mobile-burger-sheet.scss"

const MobileBurgerSheet = () => {
  return (
    <div className="mobile-burger-sheet">

      <div className="burger burger-sheet">
      <span className="burger__stick burger__stick_01"></span>
          <span className="burger__stick burger__stick_02"></span>
          <span className="burger__stick burger__stick_03"></span>
      </div>
      
      <div className="mobile-burger-sheet__container">
        <div className="mobile-burger-sheet__logo">
          <a href="#" className="mobile-burger-sheet__logo">
            <span className="typo-h3 mobile-burger-sheet__logo-title">
              Trabook
            </span>
            <img
              className="mobile-burger-sheet__logo-img"
              src="/public/images/front/logo.svg"
              alt="logotype trabook"
            />
          </a>
        </div>
        <ul className="mobile-burger-sheet__menu">
          <li className="mobile-burger-sheet__item">
            <a href="#" className="mobile-burger-sheet__link">
              Home
            </a>
          </li>
          <li className="mobile-burger-sheet__item">
            <a href="#" className="mobile-burger-sheet__link">
              About
            </a>
          </li>
          <li className="mobile-burger-sheet__item">
            <a href="#" className="mobile-burger-sheet__link">
              Destination
            </a>
          </li>
          <li className="mobile-burger-sheet__item">
            <a href="#" className="mobile-burger-sheet__link">
              Tour
            </a>
          </li>
          <li className="mobile-burger-sheet__item">
            <a href="#" className="mobile-burger-sheet__link">
              Blog
            </a>
          </li>
        </ul>
        <div className="mobile-burger-sheet__btn-container">
          <Button className="button_brand button_ghost">Login</Button>
          <Button className="button_brand button_primary">Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default MobileBurgerSheet
