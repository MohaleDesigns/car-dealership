import Fotter from 'src/components/Fotter/Fotter'
import Header from 'src/components/Header/Header'

type PublicLayoutProps = {
  children?: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Fotter />
    </>
  )
}

export default PublicLayout
