import AppStore from '../../assets/images/appstore.png'
import GooglePlay from '../../assets/images/googleplay.png'
import ThreeTrucks from '../../assets/images/trucks.png'

const DownloadAppBanner = () => {
  return (
    <div className="app-background mt-10 px-5 py-10">
      <div className="container mx-auto flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:gap-10">
        <div>
          <div className="mb-5">
            <h4 className="text-danger mb-1 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
              Carento App is Available
            </h4>
            <p className="text-center text-xs md:text-sm">
              Manage all your car rentals on the go with the Carento app
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <img
              src={GooglePlay}
              className="hover:cursor-pointer sm:w-40 md:w-48"
              alt="google store"
            />
            <img
              src={AppStore}
              className="hover:cursor-pointer sm:w-40 md:w-48"
              alt="app store"
            />
          </div>
        </div>
        <img src={ThreeTrucks} className="m-auto md:w-96" alt="trucks" />
      </div>
    </div>
  )
}

export default DownloadAppBanner
