import { Head } from "minista"
import Header from "../components/blocks/header/header"
import Footer from "../components/blocks/footer/footer"
import LayoutRoot from "../layout/layout-root"
import ResponsiveContainer from "../components/ui/responsive-container"
import Main from "../sections/main/main"
import ThingsYouNeedToDo from "../sections/things-you-need-to-do/things-you-need-to-do"

export default function () {
  return (
    <LayoutRoot>
      <Header />
      <Main />
      <ThingsYouNeedToDo />
      <Footer />
    </LayoutRoot>
  )
}
