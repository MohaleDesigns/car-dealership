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

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false)

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
              className={`custom-transition flex items-center justify-between rounded-lg border border-white px-2.5 py-2 text-start text-sm text-white decoration-transparent hover:cursor-pointer hover:bg-darkGreen/20 focus:bg-slate-200  focus:text-slate-600 xl:text-base`}
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
        className="custom-transition flex items-center justify-between gap-2 rounded-lg border border-white px-3 py-2 text-sm text-white decoration-transparent hover:cursor-pointer hover:bg-darkGreen/20 focus:bg-slate-200 focus:text-slate-600 xl:text-base"
      >
        {link.icon}
        {link.label}
      </a>
    )
  })

  return (
    <div className="bg-primary">
      <div className="container mx-auto flex items-center justify-between gap-2 p-5">
        <h1 className="rounded-lg bg-primary px-5 py-2 text-2xl font-bold text-white">
          Logo
        </h1>
        {/* Menu for large screens */}
        <div className="hidden md:block">
          <div className="flex items-center gap-3">{items}</div>
        </div>

        {/* Menu for mobile */}
        <div className="block md:hidden">
          <Button
            variant="transparent"
            color="#B40001"
            className="px-0"
            onClick={open}
          >
            <MenuIcon />
          </Button>
          <Drawer
            opened={opened}
            onClose={close}
            size="80%"
            withCloseButton={false}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            transitionProps={{
              transition: 'rotate-left',
              duration: 150,
              timingFunction: 'linear',
            }}
            styles={{
              header: {
                backgroundColor: '#2F2F2F',
              },
              content: {
                backgroundColor: '#2F2F2F',
              },
            }}
          >
            <div className="flex h-[95vh] w-full flex-col justify-between">
              {/* Menu list */}
              <div>
                <div className="flex-center-between mb-5 rounded-lg bg-primary px-5 py-2">
                  <h1 className="text-2xl font-bold text-secondary">Logo</h1>

                  <Button
                    variant="transparent"
                    color="#2F2F2F"
                    className="px-0"
                    onClick={close}
                  >
                    <CloseIcon />
                  </Button>
                </div>
                <div className="flex flex-col gap-3">{items}</div>
              </div>

              {/* Social platforms */}
              <div className="flex-center-between gap-2 border-t border-gray-400 pt-3 text-slate-400">
                <p className="text-dark-400 text-sm">
                  © {new Date().getFullYear()} <strong>CAR DEALERSHIP.</strong>{' '}
                  ALL RIGHTS RESERVED.
                </p>
                <div>
                  <FacebookIcon className="custom-transition hover:cursor-pointer hover:text-primary" />
                  <InstagramIcon className="custom-transition  hover:cursor-pointer hover:text-primary" />
                  <XIcon
                    fontSize="small"
                    className="custom-transition hover:cursor-pointer hover:text-primary"
                  />
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Header
