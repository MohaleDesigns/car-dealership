import { Flex, Image, Card, Text } from '@mantine/core'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined'
import SpeedIcon from '@mui/icons-material/Speed'

interface Props {
  name: string
  price: string
  finance: string
  mileage: string
  gearbox: string
  fuel: string
  image: string
}

const CarCard = ({
  name,
  price,
  finance,
  mileage,
  gearbox,
  fuel,
  image,
}: Props) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="max-w-sm">
      <Card.Section>
        <Image src={image} height={200} alt={`${name}`} />
      </Card.Section>

      <Text className="my-3 text-lg font-bold text-black">{name}</Text>

      <Text className="flex items-end gap-1 text-2xl font-bold text-primary">
        {price}{' '}
        <Text className="mb-1 text-xs font-normal text-primary">VAT</Text>
      </Text>
      <Text className="mt-1 text-xs font-normal text-primary">
        finance from{' '}
        <Text className="text-lg font-bold text-primary">{finance} p/m</Text>
      </Text>

      <Flex className="flex-center-between mt-3 border-t border-t-primary/20 pt-4">
        <div className="flex items-center">
          <SpeedIcon fontSize="small" />
          <span className="ml-1 text-[11px]">{mileage}</span>
        </div>
        <div className="flex items-center">
          <LocalGasStationOutlinedIcon fontSize="small" />
          <span className="ml-1 text-[11px]">{fuel}</span>
        </div>
        <div className="flex items-center">
          <AccessTimeIcon fontSize="small" />
          <span className="ml-1 text-[11px]">{gearbox}</span>
        </div>
      </Flex>
    </Card>
  )
}

export default CarCard
