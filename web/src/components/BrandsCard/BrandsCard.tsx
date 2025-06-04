import Icon1 from '../../assets/icons/brands/icon-1.png'
import Icon2 from '../../assets/icons/brands/icon-2.png'
import Icon3 from '../../assets/icons/brands/icon-3.png'
import Icon4 from '../../assets/icons/brands/icon-4.png'
import Icon5 from '../../assets/icons/brands/icon-5.png'
import Icon6 from '../../assets/icons/brands/icon-6.png'
import Icon7 from '../../assets/icons/brands/icon-7.png'
import Icon8 from '../../assets/icons/brands/icon-8.png'
import Icon9 from '../../assets/icons/brands/icon-9.png'
import HeaderCard from '../HeaderCard/HeaderCard'

const BrandsCard = () => {
  const brands = [
    {
      icon: Icon1,
      name: 'Mazda',
      numberOfCars: 400,
    },
    {
      icon: Icon2,
      name: 'Mazda',
      numberOfCars: 400,
    },
    {
      icon: Icon3,
      name: 'Mazda',
      numberOfCars: 900,
    },
    {
      icon: Icon4,
      name: 'Mazda',
      numberOfCars: 1700,
    },
    {
      icon: Icon5,
      name: 'Mazda',
      numberOfCars: 138,
    },
    {
      icon: Icon6,
      name: 'Mazda',
      numberOfCars: 280,
    },
    // {
    //   icon: Icon7,
    //   name: 'Mazda',
    //   numberOfCars: 200,
    // },
    // {
    //   icon: Icon8,
    //   name: 'Mazda',
    //   numberOfCars: 200,
    // },
    // {
    //   icon: Icon9,
    //   name: 'Mazda',
    //   numberOfCars: 200,
    // },
  ]

  return (
    <div className="mb-20 border-b border-primary/20 p-5 pb-20">
      <div className="container mx-auto">
        <HeaderCard
          title="Premium Brands"
          subTitle="Unveil the Finest Selection of High-End Vehicles"
        />

        <div className="grid grid-cols-6 gap-4 ">
          {brands.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-lg border border-primary/20 p-5"
            >
              <img alt={`${b.name}`} src={b.icon} />
              <h4 className="mb-1 mt-2 text-sm font-bold">{b.name}</h4>
              <p className="text-xs font-medium text-primary/80">
                {b.numberOfCars} cars
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandsCard
