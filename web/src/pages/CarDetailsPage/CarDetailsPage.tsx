// import { Link, routes } from '@redwoodjs/router'
import { Carousel } from '@mantine/carousel'
import {
  TextInput,
  Textarea,
  Button,
  Paper,
  Title,
  Divider,
  Text,
  Flex,
  Group,
} from '@mantine/core'

import { Metadata } from '@redwoodjs/web'
import '@mantine/carousel/styles.css'
import '@mantine/core/styles.css'

const car = {
  id: 1,
  name: 'Toyota Corolla 2022',
  price: 'R280,000',
  finance: 'R7,000',
  description:
    'This Toyota Corolla 2022 model offers a perfect balance of performance and comfort. Low mileage, well-maintained, and accident-free.',
  image:
    'https://www.exclusiveautomotivegroup.com/imagetag/3239/4/l/Used-2021-BMW-M4-Competition-1657047663.jpg',
  specifications: {
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '30,000 km',
    color: 'White',
    year: 2022,
  },
}

const CarDetailsPage = () => {
  return (
    <>
      <Metadata title="CarDetails" description="CarDetails page" />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-5 md:grid-cols-3">
          {/* Left: Description & Specs */}
          <div className="md:col-span-2">
            <Flex justify={'space-between'} mb={'md'}>
              <div>
                <Text className="mt-2 flex items-end gap-1 text-5xl font-black text-green-600">
                  {car.price}{' '}
                  <Text className="mb-1 text-sm font-normal text-green-600">
                    VAT
                  </Text>
                </Text>
                <Text className="mt-2 text-sm font-normal text-green-600">
                  finance from{' '}
                  <Text className="text-2xl font-bold text-green-600">
                    {car.finance} p/m
                  </Text>
                </Text>
              </div>

              <Title order={2}>{car.name}</Title>
            </Flex>

            <img
              src={car.image}
              alt={`${car.name}`}
              className="mb-5 h-[400px] w-full rounded-md object-cover"
            />

            <Paper shadow="sm" p="md" className="mb-5">
              <Title order={4}>Description</Title>
              <p className="mt-2 text-gray-700">{car.description}</p>
            </Paper>

            <Paper shadow="sm" p="md">
              <Title order={4}>Specifications</Title>
              <div className="mt-4 grid grid-cols-2 gap-4 text-gray-800">
                {Object.entries(car.specifications).map(([key, value]) => (
                  <div key={key}>
                    <strong className="capitalize">{key}:</strong> {value}
                  </div>
                ))}
              </div>
            </Paper>
          </div>

          {/* Right: Inquiry Form */}
          <div>
            <Button
              variant="light"
              size="lg"
              color="blue"
              fullWidth
              mb="md"
              radius="md"
            >
              Qucik Finance
            </Button>
            <Button
              variant="light"
              size="lg"
              color="blue"
              fullWidth
              mb="md"
              radius="md"
            >
              Qucik Call
            </Button>

            <Paper shadow="sm" p="md">
              <Title order={4}>Request Information</Title>
              <Divider my="sm" />
              <form className="flex flex-col gap-4">
                <TextInput label="Name" placeholder="Your name" required />
                <TextInput label="Email" placeholder="you@email.com" required />
                <TextInput
                  label="Phone"
                  placeholder="+27 000 000 000"
                  required
                />
                <Textarea
                  label="Message"
                  placeholder="I'm interested in this car..."
                  minRows={3}
                />
                <Button type="submit" fullWidth mt="md">
                  Submit Inquiry
                </Button>
              </form>
            </Paper>

            <Paper shadow="sm" p="md" className="mt-5">
              <Title order={4}>Payment Calculator</Title>
              <Divider my="sm" />

              <form
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  const price = parseFloat(car.price.replace(/[^\d.-]/g, '')) // Remove "R" and commas
                  const deposit = parseFloat(e.target.deposit.value)
                  const interest =
                    parseFloat(e.target.interest.value) / 100 / 12
                  const months = parseInt(e.target.term.value)

                  const loanAmount = price - deposit
                  const monthlyPayment =
                    (loanAmount * interest) /
                    (1 - Math.pow(1 + interest, -months))

                  const output = document.getElementById('monthlyPayment')
                  if (!isNaN(monthlyPayment) && output) {
                    output.textContent =
                      'Estimated Monthly Payment: R' + monthlyPayment.toFixed(2)
                  }
                }}
              >
                <TextInput
                  name="deposit"
                  label="Deposit (R)"
                  placeholder="e.g., 50000"
                  required
                />
                <TextInput
                  name="interest"
                  label="Interest Rate (%)"
                  placeholder="e.g., 10.5"
                  required
                />
                <TextInput
                  name="term"
                  label="Loan Term (months)"
                  placeholder="e.g., 60"
                  required
                />
                <div className="flex items-end">
                  <Button type="submit" fullWidth>
                    Calculate
                  </Button>
                </div>
                <div className="mt-2 md:col-span-2">
                  <Text
                    id="monthlyPayment"
                    className="text-lg font-bold text-green-700"
                  ></Text>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarDetailsPage
