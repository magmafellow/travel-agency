import Header from "../components/blocks/header/header"
import Footer from "../components/blocks/footer/footer"
import LayoutRoot from "../layout/layout-root"
import Promote from "../sections/promote/promote"
import ThingsYouNeedToDo from "../sections/things-you-need-to-do/things-you-need-to-do"
import BestVacationPlan from "../sections/best-vacation-plan/best-vacation-plan"
import WhatPeopleSay from "../sections/what-people-say/what-people-say"
import LatestBlog from "../sections/latest-blog/latest-blog"
import ExclusiveDeals from "../sections/exclusive-deals/exclusive-deals"
import Subscribe from "../sections/subscribe/subscribe"

export default function () {
  return (
    <LayoutRoot>
      <Header />
      <Promote />
      <ThingsYouNeedToDo />
      <ExclusiveDeals />
      <BestVacationPlan />
      <WhatPeopleSay />
      <LatestBlog />
      <Subscribe />
      <Footer />
    </LayoutRoot>
  )
}
