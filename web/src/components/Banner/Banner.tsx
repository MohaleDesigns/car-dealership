import { useState } from 'react'

import { Tabs, Button, Badge } from '@mantine/core'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import SearchIcon from '@mui/icons-material/Search'

import FormDropDown from '../Form/FormDropDown/FormDropDown'
import FormMultiSelect from '../Form/FormMultiSelect/FormMultiSelect'
import FormTextInput from '../Form/FormTextInput/FormTextInput'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Banner = () => {
  const [carType, setCarType] = useState('all')

  return (
    <div className="banner-background relative mb-20 bg-gray-800">
      {/* Background Overlay */}
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)]"></div>

      <div className="container relative z-20 mx-auto px-5 pb-10 pt-40">
        {/* Title & Subtitle */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-2">
            <Badge
              color="#11BEA7"
              radius="md"
              variant="light"
              className="mb-3 inline-block"
            >
              200, 000+ cars to pick from
            </Badge>
            <h4 className="mb-3 text-center text-3xl font-bold text-white md:text-start md:text-5xl">
              Find your next vehicle today!
            </h4>
            <p className="text-center text-xs text-white/80 md:text-start md:text-base">
              Your premier destination for high-quality vehicles. Explore our
              extensive inventory and find your dream car today.
            </p>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Filters */}
        <div className="rounded-lg bg-white p-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Button
                variant={carType === 'all' ? 'light' : 'outline'}
                size="xs"
                color="#11BEA7"
                onClick={() => setCarType('all')}
              >
                All Cars
              </Button>
              <Button
                variant={carType === 'new' ? 'light' : 'outline'}
                size="xs"
                color="#11BEA7"
                onClick={() => setCarType('new')}
              >
                New Cars
              </Button>
              <Button
                variant={carType === 'used' ? 'light' : 'outline'}
                size="xs"
                color="#11BEA7"
                onClick={() => setCarType('used')}
              >
                Used Cars
              </Button>
            </div>

            <Button
              leftSection={
                <ContactSupportIcon
                  fontSize="small"
                  className="text-[#303318]"
                />
              }
              className="font-normal"
              color="#303318"
              variant="transparent"
            >
              Need Help?
            </Button>
          </div>

          <div className="mt-6 rounded-lg border border-primary/20 p-4">
            <div className="mb-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
              <FormDropDown
                data={[
                  { value: '0', label: 'R0' },
                  { value: '25000', label: 'R25 000' },
                  { value: '30000', label: 'R30 000' },
                  { value: '35000', label: 'R35 000' },
                  { value: '40000', label: 'R40 000' },
                  { value: '45000', label: 'R45 000' },
                  { value: '50000', label: 'R50 000' },
                  { value: '55000', label: 'R55 000' },
                  { value: '60000', label: 'R60 000' },
                  { value: '65000', label: 'R65 000' },
                  { value: '70000', label: 'R70 000' },
                  { value: '75000', label: 'R75 000' },
                  { value: '80000', label: 'R80 000' },
                  { value: '85000', label: 'R85 000' },
                  { value: '90000', label: 'R90 000' },
                  { value: '95000', label: 'R95 000' },
                  { value: '100000', label: 'R100 000' },
                  { value: '125000', label: 'R125 000' },
                  { value: '130000', label: 'R130 000' },
                  { value: '135000', label: 'R135 000' },
                  { value: '140000', label: 'R140 000' },
                  { value: '145000', label: 'R145 000' },
                  { value: '150000', label: 'R150 000' },
                  { value: '155000', label: 'R155 000' },
                  { value: '160000', label: 'R160 000' },
                  { value: '165000', label: 'R165 000' },
                  { value: '170000', label: 'R170 000' },
                  { value: '175000', label: 'R175 000' },
                  { value: '180000', label: 'R180 000' },
                ]}
                placeholder="Min Price"
              />
              <FormDropDown
                data={[
                  { value: '200000', label: 'R200 000' },
                  { value: '250000', label: 'R250 000' },
                  { value: '300000', label: 'R300 000' },
                  { value: '350000', label: 'R350 000' },
                  { value: '400000', label: 'R400 000' },
                  { value: '450000', label: 'R450 000' },
                  { value: '500000', label: 'R500 000' },
                  { value: '550000', label: 'R550 000' },
                  { value: '600000', label: 'R600 000' },
                  { value: '650000', label: 'R650 000' },
                  { value: '700000', label: 'R700 000' },
                  { value: '750000', label: 'R750 000' },
                  { value: '800000', label: 'R800 000' },
                  { value: '850000', label: 'R850 000' },
                  { value: '900000', label: 'R900 000' },
                  { value: '950000', label: 'R950 000' },
                  { value: '1000000', label: 'R1 000 000' },
                ]}
                placeholder="Max Price"
              />
              <FormMultiSelect
                data={[
                  { value: 'hatchback', label: 'Hatchback' },
                  { value: 'sedan', label: 'Sedan' },
                  { value: 'bus', label: 'Bus' },
                  { value: 'coupe', label: 'Coupe' },
                  { value: 'double_cab', label: 'Double Cab' },
                  { value: 'single_cab', label: 'Single Cab' },
                  { value: 'truck', label: 'Truck' },
                  { value: 'van', label: 'Van' },
                  { value: 'mpv', label: 'MPV' },
                  { value: 'rv', label: 'RV' },
                  { value: 'suv', label: 'SUV' },
                ]}
                placeholder="Body Type"
              />
              <FormMultiSelect
                data={[
                  { value: 'automatic', label: 'Automatic' },
                  { value: 'manual', label: 'Manual' },
                ]}
                placeholder="Transmission"
              />
              <PrimaryButton
                title="Search"
                fontSize="14px"
                icon={<SearchIcon fontSize="small" className="text-white" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
