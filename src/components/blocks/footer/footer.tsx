import "./footer.scss"
import ResponsiveContainer from "../../ui/responsive-container"
import Logo from "../logo/logo"
import InstagramIcon from "../../icons/instagram"
import XIcon from "../../icons/x"
import FacebookIcon from "../../icons/facebook"

const Footer = () => {
  return (
    <footer className="footer">
      {/* footer top */}
      <ResponsiveContainer className="footer__container-01">
        <FooterBrand />
        <FooterTable />
      </ResponsiveContainer>
      <ResponsiveContainer>
        <div className="footer__delimiter"></div>
      </ResponsiveContainer>
      {/* footer bottom */}
      <ResponsiveContainer className="footer__container-02">
        <div className="footer__copyright">
          Copyright, Trabook 2025. All rights reserved.
        </div>
        <div className="footer__term">
          <a className="footer__term-link" href="#">
            Terms & Conditions
          </a>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}

const FooterBrand = () => {
  return (
    <div className="footer__brand">
      <Logo className="footer__logo" href={"#logo"} />
      <p className="footer__description">
        Book your trip in minute, get full Control for much longer.
      </p>
      <div className="footer__socials">
        <a className="footer__socials-link " href="#">
          {/* <img className="footer__socials-img social-shadow" src="/public/images/fill/facebook.svg" alt="facebook social" /> */}
          <FacebookIcon className="footer__socials-img social-shadow" />
        </a>
        <a className="footer__socials-link" href="#">
          {/* <img className="footer__socials-img" src="/public/images/fill/instagram.svg" alt="instagram social" /> */}
          <InstagramIcon className="footer__socials-img social-shadow" />
        </a>
        <a className="footer__socials-link " href="#">
          {/* <img className="footer__socials-img social-shadow" src="/public/images/fill/x.svg" alt="x social" /> */}
          <XIcon className="footer__socials-img social-shadow" />
        </a>
      </div>
    </div>
  )
}

const FooterTable = () => {
  return (
    <div className="footer__table">
      <div className="footer__table-col">
        <div className="footer__table-title">Company</div>
        <ul className="footer__table-menu">
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              About
            </a>
          </li>
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Careers
            </a>
          </li>
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Logistics
            </a>
          </li>
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Privacy & Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__table-col">
        <div className="footer__table-title">Contact</div>
        <ul className="footer__table-menu">
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Help/FAQ
            </a>
          </li>
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Press
            </a>
          </li>
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Affilates
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__table-col">
        <div className="footer__table-title">More</div>
        <ul className="footer__table-menu">
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Press Centre
            </a>
          </li>
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Our Blog
            </a>
          </li>
          <li className="footer__table-item">
            <a className="footer__table-link" href="#">
              Low fare tips
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
