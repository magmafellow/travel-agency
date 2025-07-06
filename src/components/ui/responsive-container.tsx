
type ComponentProps = {
  children: any
  className?: string
}

const ResponsiveContainer = ({ children, className }: ComponentProps) => {
  return (
    <div className={`responsive-container ${className}`}>
      {children}
    </div>
  )
}

export default ResponsiveContainer