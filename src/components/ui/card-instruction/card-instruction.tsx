import "./card-instruction.scss"

type Props = {
  className?: string
  title: string
  imgUrl: string
  imgAlt: string
  description: string
  decorUrl: string
}

const CardInstruction = ({ title, imgUrl, imgAlt, description, decorUrl, className }: Props) => {
  return (
    <div className={`card-instruction ${className}`}>
      <div className="card-instruction__decor">
        <img
          className="card-instruction__decor-elem"
          srcSet={decorUrl}
          alt="decor left item"
        />
      </div>

      <div className="card-instruction__picture">
        <img
          className="card-instruction__picture-img"
          src={imgUrl}
          alt={imgAlt}
        />
      </div>
      <div className="card-instruction__title typo-title">{title}</div>
      <div className="card-instruction__description">{description}</div>
    </div>
  )
}

export default CardInstruction
