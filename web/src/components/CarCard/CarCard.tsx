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

interface Props {
  car: any
}

const CarCard = ({ car }: Props) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="max-w-sm">
      <Card.Section>
        <Image src={car.image} height={200} alt={`${car.name}`} />
      </Card.Section>

      <Text className="mt-2 flex items-end gap-1 text-4xl font-black text-primary">
        {car.price}{' '}
        <Text className="mb-1 text-xs font-normal text-primary">VAT</Text>
      </Text>
      <Text className="mt-2 text-xs font-normal text-primary">
        finance from{' '}
        <Text className="text-xl font-bold text-primary">
          {car.finance} p/m
        </Text>
      </Text>

      <Text className="my-3 text-lg font-extrabold uppercase text-black">
        {car.name}
      </Text>

      <Flex className="flex-center-between mt-3 border-t border-secondary pt-3">
        <Badge
          color="blue"
          variant="light"
          leftSection={<AccessTimeIcon fontSize="small" />}
        >
          {car.mileage}
        </Badge>
        <Badge
          color="blue"
          variant="light"
          leftSection={<LocalGasStationOutlinedIcon fontSize="small" />}
        >
          {car.fuel}
        </Badge>
        <Badge
          color="blue"
          variant="light"
          leftSection={<AccessTimeIcon fontSize="small" />}
        >
          {car.gearbox}
        </Badge>
      </Flex>

      {/* <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            // onClick={() => routes.CarDetailsPage()}
            onClick={() => customNavigate(routes.CarDetailsPage())}
          >
            View Details
          </Button> */}
    </Card>
  )
}

export default CarCard
