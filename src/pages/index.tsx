import { Head } from "minista"
import Header from "../components/blocks/header/header"
import Footer from "../components/blocks/footer/footer"
import LayoutRoot from "../layout/layout-root"

export default function () {
  return (
    <LayoutRoot>
      <div className="wrapper">
        <Header />

        <Footer />
      </div>
    </LayoutRoot>
  )
}
