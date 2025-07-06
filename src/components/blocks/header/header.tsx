import { Button } from "../../ui/button"
import ResponsiveContainer from "../../ui/responsive-container"

import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <ResponsiveContainer className="header__container">
        <a href="#" className="header__logo">
          <span className="typo-h3 header__logo-title">Trabook</span>
          <img
            className="header__logo-img"
            src="/public/images/front/logo.svg"
            alt="logotype trabook"
          />
        </a>

        <div className="header__nav">
          <ul className="header__menu menu-nav">
            <li className="menu-nav__item">
              <a className="menu-nav__link" href="#">
                Home
              </a>
            </li>
            <li className="menu-nav__item">
              <a className="menu-nav__link" href="#">
                About
              </a>
            </li>
            <li className="menu-nav__item">
              <a className="menu-nav__link" href="#">
                Destination
              </a>
            </li>
            <li className="menu-nav__item">
              <a className="menu-nav__link" href="#">
                Tour
              </a>
            </li>
            <li className="menu-nav__item">
              <a className="menu-nav__link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="header__btn-container">
          <Button className="button_brand button_ghost">Login</Button>
          <Button className="button_brand button_primary button__header">
            Sign up
          </Button>
        </div>

        <div className="burger burger-header">
          <span className="burger__stick burger__stick_01"></span>
          <span className="burger__stick burger__stick_02"></span>
          <span className="burger__stick burger__stick_03"></span>
        </div>
      </ResponsiveContainer>
    </header>
  )
}

export default Header
