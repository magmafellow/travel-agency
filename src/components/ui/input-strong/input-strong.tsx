import "./input-strong.scss"

type Props = {
  className?: string
  htmlFor: string
  label: string
  labelClass?: string
  buttonText: string
  buttonClass?: string
  imgURL: string
  wrapperClass?: string
} & React.ComponentProps<"input">

export default function InputStrong({
  className,
  htmlFor,
  wrapperClass,
  labelClass,
  buttonClass,
  label,
  buttonText,
  imgURL,
  ...props
}: Props) {
  return (
    <div className={`input-strong ${wrapperClass ? wrapperClass : ''}`}>
      <input className={`input-strong__element ${className ? className : ''}`} {...props} />
      <label className={`input-strong__label ${labelClass ? labelClass : ''}`} htmlFor={htmlFor}>
        {label}
      </label>

      <button className={`${buttonClass ? buttonClass : ''} input-strong__button`}>
        {buttonText}
      </button>
      <img className="input-strong__icon" src={imgURL} alt="Email" />
    </div>
  )
}
