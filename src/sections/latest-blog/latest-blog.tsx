import "./latest-blog.scss"

import CardBlog from "../../components/ui/card-blog/card-blog"
import ResponsiveContainer from "../../components/ui/responsive-container"

export default function LatestBlog() {
  return (
    <div className="latest-blog section-base">
      <ResponsiveContainer className="latest-blog__container">
        <h2 className="typo-h2 latest-blog__title">
          Get update with <span className="text-brand">latest blog</span>
        </h2>
        <div className="latest-blog__swiper swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-01.jpg"
                imgAlt="Orange beautiful house"
                title="The Amazing Difference a Year of Travelling."
                date="August 17, 2021"
              />
            </div>
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-02.jpg"
                imgAlt="Cute house on beach"
                title="Travel far enough, you meet yourself."
                date="July 27, 2021"
              />
            </div>
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-03.jpg"
                imgAlt="Africa columns"
                title="How to Save Money While Visiting Africa."
                date="June 23, 2021"
              />
            </div>{" "}
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-04.jpg"
                imgAlt="Rocks and Stones"
                title="Reflections on 5 Months of Travel: Time to Hang"
                date="May 03, 2021"
              />
            </div>
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-01.jpg"
                imgAlt="Orange beautiful house"
                title="The Amazing Difference a Year of Travelling."
                date="August 17, 2021"
              />
            </div>
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-02.jpg"
                imgAlt="Cute house on beach"
                title="Travel far enough, you meet yourself."
                date="July 27, 2021"
              />
            </div>
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-03.jpg"
                imgAlt="Africa columns"
                title="How to Save Money While Visiting Africa."
                date="June 23, 2021"
              />
            </div>{" "}
            <div className="swiper-slide latest-blog__slide">
              <CardBlog
                linkURL="#"
                imgURL="/images/sections/latest-blog/original-04.jpg"
                imgAlt="Rocks and Stones"
                title="Reflections on 5 Months of Travel: Time to Hang"
                date="May 03, 2021"
              />
            </div>
          </div>
          <div className="latest-blog__pagination">

          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
