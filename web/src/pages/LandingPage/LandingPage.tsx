// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <Metadata title="Landing" description="Landing page" />

      <h1 className="text-2xl text-green-600">LandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.tsx</code>
      </p>
      {/*
          My default route is named `landing`, link to me with:
          `<Link to={routes.landing()}>Landing</Link>`
      */}
    </>
  )
}

export default LandingPage
