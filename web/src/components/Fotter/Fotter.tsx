import {
  Menu,
  Button,
  Flex,
  Drawer,
  Image,
  Card,
  Text,
  Badge,
  Title,
  TextInput,
} from '@mantine/core'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import EmailIcon from '@mui/icons-material/Email'
import LocationPinIcon from '@mui/icons-material/LocationPin'
import PhoneIcon from '@mui/icons-material/Phone'

import Logo from '../../assets/images/weeleegreen.png'

const Fotter = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto grid grid-cols-4 gap-10 px-5 py-16">
        <div className="pr-5">
          <img alt="logo" src={Logo} className="mb-5 mt-1" />
          <Text className="text-customWhite">
            We specialize in quality pre-owned vehicles, offering competitive
            financing and reliable customer support.
          </Text>
        </div>

        {/* Contact */}
        <div className="pr-5">
          <Title className="text-customWhite mb-6 text-2xl font-extrabold">
            Contact
          </Title>
          <div className="mb-4 flex items-center gap-3">
            <LocationPinIcon fontSize="small" className="text-primary" />
            <Text size="md" className="text-customWhite">
              369 Panorama Road, Woodwind, Centurion, SA
            </Text>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <PhoneIcon fontSize="small" className="text-primary" />
            <Text size="md" className="text-customWhite">
              +27 123 456 789
            </Text>
          </div>

          <div className="flex items-center gap-3">
            <EmailIcon fontSize="small" className="text-primary" />
            <Text size="md" className="text-customWhite">
              info@cardealer.co.za
            </Text>
          </div>
        </div>

        {/* Qucik Links  */}
        <div>
          <Title className="text-customWhite mb-6 text-2xl font-extrabold">
            Quick Links
          </Title>
          <ul className="text-md space-y-4 text-blue-600">
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Home
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Browse Cars
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Financing
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Title className="text-customWhite mb-6 text-2xl font-extrabold">
            Quick Links
          </Title>
          <ul className="text-md space-y-4 text-blue-600">
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Home
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Browse Cars
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Financing
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRightIcon fontSize="medium" className="text-primary" />
              <a
                href="#"
                className="custom-transition text-customWhite hover:cursor-pointer hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-customWhite/20 container mx-auto border-t px-5 py-5">
        <p className="text-customWhite text-center text-sm">
          © {new Date().getFullYear()} <strong>CAR DEALERSHIP.</strong> ALL
          RIGHTS RESERVED.
        </p>
      </div>
    </div>
  )
}

export default Fotter
