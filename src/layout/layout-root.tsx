import { Head } from "minista"

const LayoutRoot = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/scss/main.scss" />
      </Head>
      {children}
    </>
  )
}

export default LayoutRoot
