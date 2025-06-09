import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

import Banner from 'src/components/Banner/Banner'
import BrandsCard from 'src/components/BrandsCard/BrandsCard'
import CarCard from 'src/components/CarCard/CarCard'
import DownloadAppBanner from 'src/components/DownloadAppBanner/DownloadAppBanner'
import HeaderCard from 'src/components/HeaderCard/HeaderCard'
import LoanCalculator from 'src/components/LoanCalculator/LoanCalculator'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import ServiceCard from 'src/components/ServiceCard/ServiceCard'
import TestimonialCard from 'src/components/TestimonialCard/TestimonialCard'

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

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Verified Buyer',
      title: 'Easy to Understand',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat officiis aperiam quasi dolorum commodi reprehenderit sit aut. Enim, reiciendis.',
      ratings: 4,
      profile:
        'https://images.pexels.com/photos/20000981/pexels-photo-20000981/free-photo-of-portrait-of-an-african-man.jpeg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Verified Buyer',
      title: 'Highly Recommend',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat officiis aperiam quasi dolorum commodi reprehenderit sit aut. Enim, reiciendis.',
      ratings: 4.5,
      profile:
        'https://images.pexels.com/photos/20000981/pexels-photo-20000981/free-photo-of-portrait-of-an-african-man.jpeg',
    },
    {
      id: 3,
      name: '2023 Audi A3',
      role: 'Verified Buyer',
      title: 'Highly Recommend',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat officiis aperiam quasi dolorum commodi reprehenderit sit aut. Enim, reiciendis.',
      ratings: 4,
      profile:
        'https://images.pexels.com/photos/20000981/pexels-photo-20000981/free-photo-of-portrait-of-an-african-man.jpeg',
    },
    {
      id: 4,
      name: '2023 Audi A3',
      role: 'Verified Buyer',
      title: 'Highly Recommend',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat officiis aperiam quasi dolorum commodi reprehenderit sit aut. Enim, reiciendis.',
      ratings: 5,
      profile:
        'https://images.pexels.com/photos/20000981/pexels-photo-20000981/free-photo-of-portrait-of-an-african-man.jpeg',
    },
    {
      id: 5,
      name: '2023 Audi A3',
      role: 'Verified Buyer',
      title: 'Highly Recommend',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat officiis aperiam quasi dolorum commodi reprehenderit sit aut. Enim, reiciendis.',
      ratings: 3.5,
      profile:
        'https://images.pexels.com/photos/20000981/pexels-photo-20000981/free-photo-of-portrait-of-an-african-man.jpeg',
    },
  ]

  const slideTestimonialsDuplicate = [...testimonials, ...testimonials]

  return (
    <div>
      <Banner />
      <BrandsCard />

      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between">
          <HeaderCard
            title="Featured Listings"
            subTitle="Find the perfect ride for any occasion."
          />

          <PrimaryButton
            title="View More"
            rightIcon={
              <ArrowForwardRoundedIcon
                fontSize="small"
                className="text-white"
              />
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-2 pb-20 md:grid-cols-3 lg:grid-cols-4">
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
      </div>

      {/* Services */}
      <div className="container mx-auto grid grid-cols-1 gap-5 px-5 pb-20 lg:grid-cols-2 ">
        <ServiceCard
          title="Looking for a car to buy?"
          description="Discover your ideal car with us for every adventure, whether it's a road trip or business travel."
          buttonText="Explore Now"
          background="background-4"
          onButtonClick={() => console.log('Explore Now clicked')}
        />
        <ServiceCard
          title="Need help with financing?"
          description="Get the best financing options for your dream car with our expert assistance, contact us today!"
          buttonText="Get Started"
          background="background-5"
          onButtonClick={() => console.log('Get Started clicked')}
        />
      </div>

      {/* Loan Calculator Divider  */}
      <div className="background-3 relative mb-20 sm:rounded-lg">
        {/* Background Overlay */}
        <div className="absolute z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.5)]"></div>

        <div className="container relative z-20 mx-auto flex flex-col-reverse px-5 py-20 md:grid md:grid-cols-2 md:gap-5">
          <LoanCalculator />
          <div className="pb-5 md:p-5">
            <h4 className="mb-3 text-3xl font-bold text-white md:max-w-sm md:text-4xl">
              Want to Calculate Your Car Payment?
            </h4>
            <p className="text-sm font-light text-white md:max-w-sm md:text-base">
              Match with up to 4 lenders to get the lowest rate available with
              no markups, no fees, and no obligations.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-20">
        <div className="container mx-auto p-5">
          <HeaderCard
            title="What Our Customers Say"
            subTitle="Hear from those who found their dream cars with us."
          />
        </div>

        <div className="relative w-full overflow-hidden pb-5">
          <div className="slider-wrapper flex w-max animate-[slide_20s_linear_infinite] items-center gap-5">
            {slideTestimonialsDuplicate.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                title={testimonial.title}
                description={testimonial.description}
                profile={testimonial.profile}
                ratings={testimonial.ratings}
              />
            ))}
          </div>
        </div>
      </div>

      <DownloadAppBanner />
    </div>
  )
}

export default LandingPage
