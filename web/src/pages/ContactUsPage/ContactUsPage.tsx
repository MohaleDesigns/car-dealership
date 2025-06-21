// import { Link, routes } from '@redwoodjs/router'
import { Badge, Flex } from '@mantine/core'

import { Metadata } from '@redwoodjs/web'

import FormTextInput from 'src/components/Form/FormTextInput/FormTextInput'
import FormTextTextarea from 'src/components/Form/FormTextTextarea/FormTextTextarea'

import BuyersIcon from '../../assets/images/illustrations/icon_buyers_guide.svg'
import BuyingIcon from '../../assets/images/illustrations/icon_buying.svg'
import SoldPricesIcon from '../../assets/images/illustrations/icon_sold_prices.svg'

const ContactUsPage = () => {
  return (
    <>
      <Metadata title="ContactUs" description="ContactUs page" />

      {/* ==================== BANNER ==================== */}
      <div className="banner-background relative mb-10 bg-primary">
        {/* Background Overlay */}
        <div className="absolute z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)]"></div>

        <div className="container relative z-20 mx-auto px-5 py-28">
          <div className="mb-3 text-center">
            <Badge color="#11BEA7" radius="md" variant="light">
              200, 000+ cars to pick from
            </Badge>
          </div>
          <h4 className="mb-3 text-center text-3xl font-bold text-white md:text-5xl">
            Contact Us
          </h4>
          <p className="mx-auto w-full text-center text-xs text-white/80 md:w-[60%] md:text-base">
            Need assistance with buying or selling a car? Don&apos;t worry we
            got you, contact us.
          </p>
        </div>
      </div>

      {/* ==================== FORM ==================== */}
      <div className="bg-background container relative z-10 mx-auto flex w-full flex-col gap-3 rounded-lg p-5 px-5 py-10 sm:grid sm:gap-5 md:-mb-20 md:mt-10 md:flex md:w-[70%] md:flex-col md:gap-3 md:p-16 md:shadow-lg lg:grid lg:grid-cols-2 lg:gap-5">
        <FormTextInput
          label="Email"
          placeHolder="e.g example@gmail.com"
          required
        />
        <FormTextInput
          label="Phone"
          placeHolder="e.g +27 61 465 5555"
          required
        />
        <FormTextInput label="Firstname" placeHolder="e.g John" required />
        <FormTextInput label="Lastname" placeHolder="e.g Doe" required />
        <div className="col-span-2">
          <FormTextTextarea
            label="Message"
            placeHolder="Type your message of enquiry here..."
            minRows={3}
            maxRows={4}
            required
          />
        </div>
      </div>

      {/* ==================== DETAILS & AREAS ==================== */}
      <div className="bg-primary px-5 py-10 md:py-40">
        <div className="container mx-auto flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5">
          <div className="bg-background rounded-lg p-5">
            <h4 className="mb-5 border-b border-primary/50 pb-4 text-xl font-bold text-primary">
              Reach Out
            </h4>

            <Flex direction="column" mb="md">
              <span className="font-medium text-primary">Phone:</span>
              <span className="text-sm text-primary">+27 61 465 5555</span>
            </Flex>
            <Flex direction="column" mb="md">
              <span className="font-medium text-primary">Email:</span>
              <span className="text-sm text-primary">example@gmail</span>
            </Flex>
            <Flex direction="column">
              <span className="font-medium text-primary">Address:</span>
              <span className="text-sm text-primary">
                012 System Road, Woodwind, Centurion, South Africa
              </span>
            </Flex>
          </div>
          <div className="p-5 md:col-span-2">
            <h4 className="mb-5 border-b border-white/50 pb-4 text-xl font-bold text-white">
              Areas We Oparate In
            </h4>

            <div className="mb-8 flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5">
              <Flex direction="column" mb="md" gap="xs">
                <span className="font-medium text-white">Gauteng:</span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Soweto
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Sandton{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Fourways{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Rosebank{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Centurion{' '}
                </span>
              </Flex>
              <Flex direction="column" mb="md" gap="xs">
                <span className="font-medium text-white">Limpopo:</span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Polokwane{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Lebowakgomo{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Mokopane{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Thohoyandou{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Tzaneen{' '}
                </span>
              </Flex>
              <Flex direction="column" mb="md" gap="xs">
                <span className="hidden font-medium text-white sm:block lg:hidden">
                  KZN:
                </span>
                <span className="font-medium text-white sm:hidden lg:block">
                  Kwa-Zulu Natal:
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Umhlanga{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Westville{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Chatsworth{' '}
                </span>
                <span className="text-xs text-white md:text-sm">
                  {'>'} Centurion{' '}
                </span>
              </Flex>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background container relative z-10 mx-auto flex w-full flex-col gap-10 rounded-lg px-5 py-20 sm:grid sm:gap-5 md:-mt-20 md:mb-20 md:flex md:w-[70%] md:flex-col md:gap-10 md:py-10 md:shadow-lg lg:grid lg:grid-cols-3 lg:gap-5">
        <div>
          <img
            src={BuyingIcon}
            className="m-auto h-40 w-40 object-cover"
            alt="Buying"
          />

          <h4 className="my-3 text-center text-base font-semibold text-primary">
            Buy A Car
          </h4>
          <p className="mx-auto text-center text-xs text-text sm:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
            dolor sit.
          </p>
        </div>
        <div>
          <img
            src={BuyersIcon}
            className="m-auto h-40 w-40 object-cover"
            alt="Buyers"
          />

          <h4 className="my-3 text-center text-base font-semibold text-primary">
            Sell A Car
          </h4>
          <p className="mx-auto text-center text-xs text-text sm:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.
          </p>
        </div>
        <div>
          <img
            src={SoldPricesIcon}
            className="m-auto h-40 w-40 object-cover"
            alt="Sold Prices"
          />

          <h4 className="my-3 text-center text-base font-semibold text-primary">
            Trends
          </h4>
          <p className="mx-auto text-center text-xs text-text sm:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet.
          </p>
        </div>
      </div>
    </>
  )
}

export default ContactUsPage
