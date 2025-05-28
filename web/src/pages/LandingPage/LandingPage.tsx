// import { Link, routes } from '@redwoodjs/router'
import { Carousel } from '@mantine/carousel'
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
import { useDisclosure } from '@mantine/hooks'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ApartmentIcon from '@mui/icons-material/Apartment'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import InventoryIcon from '@mui/icons-material/Inventory'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import XIcon from '@mui/icons-material/X'

import { navigate, routes } from '@redwoodjs/router'

import BrandsCard from 'src/components/BrandsCard/BrandsCard'
import CarCard from 'src/components/CarCard/CarCard'
import { customNavigate } from 'src/utils/prelineHandler'

const LandingPage = () => {
  const [opened, { open, close }] = useDisclosure(false)

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

  const menuLinks = [
    {
      icon: <TimeToLeaveIcon fontSize="small" />,
      label: 'Sell A Car',
      // link: routes.refunds(),
    },
    {
      icon: <TimeToLeaveIcon fontSize="small" />,
      label: 'Buy A Car',
      // link: routes.refunds(),
    },
    {
      icon: <InventoryIcon fontSize="small" />,
      label: 'Services',
      // link: routes.refunds(),
      link: '',
      links: [
        {
          label: 'Insurance',
          // link: routes.viewEvents(),
          extraFunctions: () => {},
        },
        {
          label: 'Maintenance',
          // link: routes.viewEvents(),
          extraFunctions: () => {},
        },
      ],
    },
    {
      icon: <LiveHelpIcon fontSize="small" />,
      label: 'FAQs',
      // link: routes.refunds(),
    },
    {
      icon: <ApartmentIcon fontSize="small" />,
      label: 'Contact Us',
      // link: routes.refunds(),
    },
  ]

  const items = menuLinks.map((link) => {
    const menuItems = link.links?.map((item, index) => (
      <Menu.Item
        key={index}
        // onClick={() => {
        //   item.extraFunctions()
        //   customNavigate(item.link)
        // }}
      >
        {item.label}
      </Menu.Item>
    ))

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={`custom-transition hover:bg-darkGreen/20 flex items-center justify-between rounded-lg border border-white px-2.5 py-2 text-start text-sm text-white decoration-transparent hover:cursor-pointer focus:bg-slate-200  focus:text-slate-600 xl:text-base`}
            >
              {link.icon}
              <div className="flex items-center">
                {link.label}
                <ExpandMoreIcon />
              </div>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className="custom-transition hover:bg-darkGreen/20 flex items-center justify-between gap-2 rounded-lg border border-white px-3 py-2 text-sm text-white decoration-transparent hover:cursor-pointer focus:bg-slate-200 focus:text-slate-600 xl:text-base"
      >
        {link.icon}
        {link.label}
      </a>
    )
  })

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <BrandsCard />
    </div>
  )
}

export default LandingPage
