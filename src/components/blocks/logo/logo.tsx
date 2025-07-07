type ComponentProps = {
  href?: string
  className?: string
}

const Logo = ({ href = "#", className }: ComponentProps) => {
  return (
    <a href={href} className={`logo ${className}`}>
      <span className="logo__title">Trabook</span>
      <img
        className="logo__img"
        src="/public/images/front/logo.svg"
        alt="logotype svg"
      />
    </a>
  )
}

export default Logo
