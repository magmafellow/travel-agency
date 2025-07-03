
type ComponentProps = {
  children: any
}

const ResponsiveContainer = ({ children }: ComponentProps) => {
  return (
    <div className="responsive-container">
      {children}
    </div>
  )
}

export default ResponsiveContainer