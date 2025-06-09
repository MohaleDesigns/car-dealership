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
      name: 'Opel',
      numberOfCars: 400,
    },
    {
      icon: Icon2,
      name: 'BMW',
      numberOfCars: 400,
    },
    {
      icon: Icon3,
      name: 'Mercedes',
      numberOfCars: 900,
    },
    {
      icon: Icon4,
      name: 'Ford',
      numberOfCars: 1700,
    },
    {
      icon: Icon5,
      name: 'Peugeot',
      numberOfCars: 138,
    },
    {
      icon: Icon6,
      name: 'Hyundai',
      numberOfCars: 280,
    },
    {
      icon: Icon7,
      name: 'Toyota',
      numberOfCars: 200,
    },
    {
      icon: Icon8,
      name: 'Nissan',
      numberOfCars: 200,
    },
    {
      icon: Icon9,
      name: 'Mazda',
      numberOfCars: 200,
    },
  ]

  const slideBrandsDuplicate = [...brands, ...brands]

  return (
    <div className="mb-20 border-b border-primary/20 pb-10">
      <div className="container mx-auto p-5">
        <HeaderCard
          title="Premium Brands"
          subTitle="Unveil the Finest Selection of High-End Vehicles"
        />

        <div className="relative w-full overflow-hidden pb-5">
          <div className="slider-wrapper flex w-max animate-[slide_20s_linear_infinite] items-center gap-5">
            {slideBrandsDuplicate.map((brand, index) => (
              <div
                key={index}
                className="flex w-40 flex-col items-center justify-center rounded-lg border border-primary/20 p-5"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center">
                  <img
                    alt={`${brand.name}`}
                    src={brand.icon}
                    className="w-full"
                  />
                </div>
                <h4 className="mb-1 mt-2 text-sm font-semibold">
                  {brand.name}
                </h4>
                <p className="text-center text-[10px] font-medium text-primary/80">
                  {brand.numberOfCars} cars
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandsCard
