import ResponsiveContainer from "../components/ui/responsive-container"
import LayoutRoot from "../layout/layout-root"

import styles from "./styles.module.scss"

const Page = () => {
  return (
    <LayoutRoot>
      <ResponsiveContainer>
        <h1 className="typo-h1 mb-4">Headline 1, 64px</h1>
        <h2 className="typo-h2 mb-4">Headline 2, 48px</h2>
        <h3 className="typo-h3 mb-4">Headline 3, 24px</h3>
        <div className="typo-title mb-4">Title, 24px</div>
        <div className="typo-para-a mb-4">Paragraph 1, 20px</div>
        <div className="typo-para-b mb-4">Paragraph 2, 18px</div>
        <div className="typo-content mb-4">Content, 16px</div>
        <div className="typo-para-base mb-4">Paragraph, 16px, </div>
        <div style={{marginBottom: '50px'}} className="typo-nav">Nav Menu-16px</div>

        <div className={styles.groupOuter}>
          <div className={styles.group}>
            <div className="typo-h3">Color icon</div>
            <div className={styles.groupInner}>
              <img
                src="/src/assets/images/color/google-maps.svg"
                alt="google maps"
              />
              <img src="/src/assets/images/color/reward.svg" alt="reward" />
              <img src="/src/assets/images/color/star.svg" alt="star" />
            </div>
          </div>

          <div className={styles.group}>
            <div className="typo-h3">Fill icon</div>
            <div className={styles.groupInner}>
              <img
                src="/src/assets/images/fill/facebook.svg"
                alt="google maps"
              />
              <img src="/src/assets/images/fill/instagram.svg" alt="reward" />
              <img src="/src/assets/images/fill/x.svg" alt="star" />
              <img src="/src/assets/images/fill/mark.svg" alt="star" />
              <img src="/src/assets/images/fill/needle.svg" alt="star" />
            </div>
          </div>

          <div className={styles.group}>
            <div className="typo-h3">Outline icon</div>
            <div className={styles.groupInner}>
              <img
                src="/src/assets/images/outline/tasks.svg"
                alt="google maps"
              />
              <img src="/src/assets/images/outline/wallet.svg" alt="reward" />
              <img src="/src/assets/images/outline/needle.svg" alt="star" />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </LayoutRoot>
  )
}

export default Page
