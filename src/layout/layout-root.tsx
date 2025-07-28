import { Head } from "minista"
import MobileBurgerSheet from "../components/blocks/mobile-burger-sheet/mobile-burger-sheet"
import Popovers from "../sections/popovers/popovers"

const LayoutRoot = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        {/* Libraries */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        {/* Dialogs */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/a11y-dialog@8/dist/a11y-dialog.min.js"
        ></script>

        {/* Tippy */}
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <script src="https://unpkg.com/tippy.js@6"></script>

        {/* Floating-ui */}
        {/* <script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.7.2"></script>
        <script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.2"></script> */}

        {/* GSAP */}
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>

        {/* Pristine Validation */}
        <script src="/libs/pristine.js"></script>

        {/* Date&Time Picker */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
        <script src="https://npmcdn.com/flatpickr/dist/l10n/ru.js"></script>
        
        {/* Custom code */}
        <link rel="stylesheet" href="/src/scss/main.scss" />
        <script type="module" src="/src/assets/js/index.js"></script>
      </Head>
      <div className="root typo-para-base">{children}</div>

      <Popovers />
      <MobileBurgerSheet />
    </>
  )
}

export default LayoutRoot
