import { Menu, Button, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ApartmentIcon from '@mui/icons-material/Apartment'
import CallIcon from '@mui/icons-material/Call'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InventoryIcon from '@mui/icons-material/Inventory'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'

import { routes } from '@redwoodjs/router'

import Logo from '../../assets/images/weeleegreen.png'
import SecondaryButton from '../SecondaryButton/SecondaryButton'

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const menuLinks = [
    {
      icon: <TimeToLeaveIcon fontSize="small" />,
      label: 'Sell A Car',
      link: routes.sellACar(),
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
      link: routes.faQs(),
    },
    {
      icon: <ApartmentIcon fontSize="small" />,
      label: 'Contact Us',
      link: routes.contactUs(),
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
              className={`custom-transition text-start text-sm hover:cursor-pointer ${opened ? 'text-white/80 hover:text-white/50' : 'text-primary hover:text-primary/80'}`}
            >
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
        className={`custom-transition text-sm hover:cursor-pointer ${opened ? 'text-white/80 hover:text-white/50' : 'text-primary hover:text-primary/80'}`}
      >
        {link.label}
      </a>
    )
  })

  return (
    <div className="bg-white ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-1 px-5 pt-5 md:justify-end ">
          <button className="custom-transition px-5 py-2 text-sm text-primary hover:text-primary/80">
            <CallIcon fontSize="small" className="" /> 0800 800 888
          </button>
          <SecondaryButton
            title="Login"
            leftSection={<LoginIcon fontSize="small" className="" />}
          />
        </div>

        <div className="flex items-center justify-between gap-2 p-5">
          <img alt="logo" src={Logo} className="w-40 md:w-48" />

          {/* Menu for large screens */}
          <div className="hidden md:block">
            <div className="flex items-center gap-5">{items}</div>
          </div>

          {/* Menu for mobile */}
          <div className="block md:hidden">
            <Button
              variant="transparent"
              className="px-0 text-primary"
              onClick={open}
            >
              <MenuIcon fontSize="medium" />
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
                  backgroundColor: '#002C5E',
                },
                content: {
                  backgroundColor: '#002C5E',
                },
              }}
            >
              <div className="flex h-[95vh] w-full flex-col justify-between">
                {/* Menu list */}
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <img alt="logo" src={Logo} className="w-36" />

                    <Button
                      variant="transparent"
                      className="px-0 text-white/50"
                      onClick={close}
                    >
                      <CloseIcon />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-5">{items}</div>
                </div>

                {/* Social platforms */}
                <div className="border-t border-white/20 pt-3">
                  <p className="text-xs text-white/50">
                    © {new Date().getFullYear()}{' '}
                    <strong>CAR DEALERSHIP.</strong> ALL RIGHTS RESERVED.
                  </p>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
