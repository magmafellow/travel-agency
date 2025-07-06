import { Head } from "minista"
import Header from "../components/blocks/header/header"
import Footer from "../components/blocks/footer/footer"
import LayoutRoot from "../layout/layout-root"
import ResponsiveContainer from "../components/ui/responsive-container"
import Main from "../components/blocks/main/main"

export default function () {
  return (
    <LayoutRoot>
      <Header />
      <Main />
      <Footer />
    </LayoutRoot>
  )
}
