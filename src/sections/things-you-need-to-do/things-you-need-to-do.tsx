import "./things-you-need-to-do.scss"
import ResponsiveContainer from "../../components/ui/responsive-container"
import CardInstruction from "../../components/ui/card-instruction/card-instruction"

const ThingsYouNeedToDo = () => {
  return (
    <div className="things-you-need-to-do">
      <ResponsiveContainer className="things-you-need-to-do__container relative">
        <h2 className="typo-h2 things-you-need-to-do__title">
          Things you need <span className="text-brand">to do</span>
        </h2>
        <p className="things-you-need-to-do__description typo-para-b">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
        <div className="things-you-need-to-do__grid">
          <CardInstruction
            className="things-you-need-to-do__card-instruction"
            imgUrl="/public/images/outline/tasks.svg"
            decorUrl="/public/images/components/card-instruction/left.svg"
            imgAlt="Tasks img"
            title="Sign Up"
            description="Completes all the work associated with planning and processing"
          />
          <CardInstruction
            className="things-you-need-to-do__card-instruction"
            imgUrl="/public/images/outline/wallet.svg"
            decorUrl="/public/images/components/card-instruction/middle.svg"
            imgAlt="Wallet img"
            title="Worth of Money"
            description="After successful access then book from exclusive deals & pricing"
          />
          <CardInstruction
            className="things-you-need-to-do__card-instruction"
            imgUrl="/public/images/outline/needle.svg"
            imgAlt="Travel img"
            decorUrl="/public/images/components/card-instruction/right.svg"
            title="Exciting Travel"
            description="Start and explore a wide range of exciting travel experience."
          />
        </div>
      </ResponsiveContainer>
    </div>
  )
}

export default ThingsYouNeedToDo
