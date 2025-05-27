import { Text, Title } from '@mantine/core'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'

import { Link } from '@redwoodjs/router'

import Logo from '../../assets/images/weeleegreen.png'

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="md:py28 container mx-auto space-y-8 px-5 py-20 md:grid md:grid-cols-5 md:gap-10">
        <div className="col-span-2">
          <img alt="logo" src={Logo} className="mb-5" />
          <Text className="mb-2 text-sm font-medium text-white">
            Contact us on{' '}
            <span className="text-secondary hover:cursor-pointer">
              0800 800 888
            </span>
          </Text>

          <Text className="mb-3 text-sm font-light text-white">
            We specialize in quality pre-owned vehicles, offering competitive
            financing and reliable customer support.
          </Text>

          <Text className="text-xs font-light text-white">
            © {new Date().getFullYear()}{' '}
            <span className="font-medium">CAR DEALERSHIP.</span> ALL RIGHTS
            RESERVED.
          </Text>
        </div>

        {/* Company Links  */}
        <div>
          <Title className="mb-3 text-lg font-medium text-white md:mb-6">
            Company
          </Title>
          <ul className="flex flex-col gap-2">
            <Link
              to={'/landing'}
              className="custom-transition text-sm font-light text-white hover:cursor-pointer hover:text-secondary"
            >
              Contact Us
            </Link>
            <Link
              to={'/landing'}
              className="custom-transition text-sm font-light text-white hover:cursor-pointer hover:text-secondary"
            >
              Banking Partners
            </Link>
            <Link
              to={'/landing'}
              className="custom-transition text-sm font-light text-white hover:cursor-pointer hover:text-white/80"
            >
              About Us
            </Link>
            <Link
              to={'/landing'}
              className="custom-transition text-sm font-light text-white hover:cursor-pointer hover:text-white/80"
            >
              FAQs
            </Link>
          </ul>
        </div>

        {/* Legal Links  */}
        <div>
          <Title className="mb-3 text-lg font-medium text-white md:mb-6">
            Legal
          </Title>
          <ul className="flex flex-col gap-2">
            <Link
              to={'/landing'}
              className="custom-transition text-sm font-light text-white hover:cursor-pointer hover:text-secondary"
            >
              Terms & Conditions
            </Link>
            <Link
              to={'/landing'}
              className="custom-transition text-sm font-light text-white hover:cursor-pointer hover:text-secondary"
            >
              Legal & Compliance
            </Link>
            <Link
              to={'/landing'}
              className="custom-transition text-sm font-light text-white hover:cursor-pointer hover:text-white/80"
            >
              Privacy Policy
            </Link>
          </ul>
        </div>

        {/* Follow Us Links  */}
        <div>
          <Title className="mb-3 text-lg font-medium text-white md:mb-6">
            Follow Us
          </Title>
          <ul className="flex items-center gap-2">
            <Link
              to={'/landing'}
              className="custom-transition font-light text-white hover:cursor-pointer hover:text-secondary"
            >
              <FacebookRoundedIcon fontSize="large" className="text-white" />
            </Link>
            <Link
              to={'/landing'}
              className="custom-transition font-light text-white hover:cursor-pointer hover:text-secondary"
            >
              <FacebookRoundedIcon fontSize="large" className="text-white" />
            </Link>
            <Link
              to={'/landing'}
              className="custom-transition font-light text-white hover:cursor-pointer hover:text-secondary"
            >
              <FacebookRoundedIcon fontSize="large" className="text-white" />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
