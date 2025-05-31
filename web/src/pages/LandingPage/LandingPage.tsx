import BrandsCard from 'src/components/BrandsCard/BrandsCard'
import CarCard from 'src/components/CarCard/CarCard'
import DownloadAppBanner from 'src/components/DownloadAppBanner/DownloadAppBanner'
import HeaderCard from 'src/components/HeaderCard/HeaderCard'
import LoanCalculator from 'src/components/LoanCalculator/LoanCalculator'

const LandingPage = () => {
  // Dummy data
  const cars = [
    {
      id: 1,
      name: '2021 BMW M4',
      price: 'R1,200,000',
      finance: 'R18,000',
      mileage: '25,000 km',
      gearbox: 'Automatic',
      fuel: 'Petrol',
      image:
        'https://www.exclusiveautomotivegroup.com/imagetag/3239/main/l/Used-2021-BMW-M4-Competition-1657047662.jpg',
    },
    {
      id: 2,
      name: '2022 Toyota Hilux',
      price: 'R850,000',
      finance: 'R8,000',
      mileage: '15,000 km',
      gearbox: 'Automatic',
      fuel: 'Diesel',
      image:
        'https://www.exclusiveautomotivegroup.com/imagetag/3239/4/l/Used-2021-BMW-M4-Competition-1657047663.jpg',
    },
    {
      id: 3,
      name: '2023 Audi A3',
      price: 'R600,000',
      finance: 'R7,000',
      mileage: '8,000 km',
      gearbox: 'Manual',
      fuel: 'Petrol',
      image:
        'https://www.exclusiveautomotivegroup.com/imagetag/3239/4/l/Used-2021-BMW-M4-Competition-1657047663.jpg',
    },
    {
      id: 4,
      name: '2023 Audi A3',
      price: 'R600,000',
      finance: 'R7,000',
      mileage: '8,000 km',
      gearbox: 'Manual',
      fuel: 'Petrol',
      image:
        'https://www.exclusiveautomotivegroup.com/imagetag/3239/4/l/Used-2021-BMW-M4-Competition-1657047663.jpg',
    },
  ]

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            price={car.price}
            finance={car.finance}
            mileage={car.mileage}
            gearbox={car.gearbox}
            fuel={car.fuel}
            image={car.image}
          />
        ))}
      </div>

      {/* Loan Calculator Divider  */}
      <div className="background-1 container mx-auto my-10 p-5 sm:rounded-lg">
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div>
            <HeaderCard
              title="Want to Calculate Your Car Payment?"
              titleColor="#fff"
              subTitle="Match with up to 4 lenders to get the lowest rate available with no markups, no fees, and no obligations."
              subTitleColor="#fff"
            />
          </div>
          <LoanCalculator />
        </div>
      </div>

      <BrandsCard />
      <DownloadAppBanner />
    </div>
  )
}

export default LandingPage
