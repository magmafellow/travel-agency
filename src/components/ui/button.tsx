import { ReactNode } from "react"
import "./button.scss"

type ButtonProps = {
  children: ReactNode
  className?: string
}

export const ButtonBrand = ({ children, className }: ButtonProps) => {
  return (
    <div className={`button button_primary button_brand ${className}`}>
      {children}
    </div>
  )
}

export const ButtonOutline = ({ children }: ButtonProps) => {
  return <div className={`button button_outline button_brand`}>{children}</div>
}

export const ButtonGhost = ({ children }: ButtonProps) => {
  return <div className="button button_ghost button_brand">{children}</div>
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={`button ${className}`}>{children}</button>
}
