import ResponsiveContainer from "../components/ui/responsive-container"
import LayoutRoot from "../layout/layout-root"

export default function Page() {
  return (
    <LayoutRoot>
      <div className="learn-box">
        <button id="button" aria-describedby="tooltip">
          My button
        </button>
        <div id="tooltip" role="tooltip">
          <span>My tooltip very long. Actually long</span>
          <div id="arrow"></div>
        </div>
      </div>
      <div className="learn-tall"></div>
    </LayoutRoot>
  )
}
