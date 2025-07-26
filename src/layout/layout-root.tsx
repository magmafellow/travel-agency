import { Head } from "minista"
import MobileBurgerSheet from "../components/blocks/mobile-burger-sheet/mobile-burger-sheet"

const LayoutRoot = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        {/* Libraries */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/a11y-dialog@8/dist/a11y-dialog.min.js"
        ></script>

        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>

        {/* Custom code */}
        <link rel="stylesheet" href="/src/scss/main.scss" />
        <script type="module" src="/src/assets/js/index.js"></script>
      </Head>
      <div className="root typo-para-base">{children}</div>

      <MobileBurgerSheet />
    </>
  )
}

export default LayoutRoot
