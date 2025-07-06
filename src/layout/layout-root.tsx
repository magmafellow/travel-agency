import { Head } from "minista"
import MobileBurgerSheet from "../components/blocks/mobile-burger-sheet/mobile-burger-sheet"

const LayoutRoot = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/scss/main.scss" />
        <script type="module" src='/src/assets/js/index.js'></script>
      </Head>
      <div className="root typo-para-base">{children}</div>

      <MobileBurgerSheet />
    </>
  )
}

export default LayoutRoot
