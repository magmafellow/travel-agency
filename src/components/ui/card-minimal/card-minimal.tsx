import "./card-minimal.scss"

type Props = {
  className?: string
  title: string
  description?: string
  imgUrl: string
}

const CardMinimal = ({ imgUrl, title, description, className }: Props) => {
  return (
    <div className={`card-minimal ${className}`}>
      <img className="card-minimal__img" src={imgUrl} alt="" />
      <div className="card-minimal__box">
        <div className="card-minimal__title">{title}</div>
        {description && (
          <div className="card-minimal__description">{description}</div>
        )}
      </div>
    </div>
  )
}

export default CardMinimal
