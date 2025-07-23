import Header from "../components/blocks/header/header"
import Footer from "../components/blocks/footer/footer"
import LayoutRoot from "../layout/layout-root"
import Promote from "../sections/promote/promote"
import ThingsYouNeedToDo from "../sections/things-you-need-to-do/things-you-need-to-do"
import BestVacationPlan from "../sections/best-vacation-plan/best-vacation-plan"

export default function () {
  return (
    <LayoutRoot>
      <Header />
      <Promote />
      <ThingsYouNeedToDo />
      <BestVacationPlan />
      <Footer />
    </LayoutRoot>
  )
}
