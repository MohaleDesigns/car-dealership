// import { Link, routes } from '@redwoodjs/router'
import { Badge, Accordion } from '@mantine/core'

import { Metadata } from '@redwoodjs/web'

import classes from './FAQs.module.css'

const faqs = [
  {
    value: '1. Do you offer financing options for car purchases?',
    description:
      'Yes, we provide flexible financing options through our trusted partners. Whether you have a strong credit score or are working to improve it, we’ll help you find a payment plan that fits your budget.',
  },
  {
    value: '2. Can I trade in my current vehicle?',
    description:
      'Absolutely! We accept trade-ins. Simply bring your current vehicle in for an appraisal, and we’ll offer a competitive value that can be applied toward your new purchase.',
  },
  {
    value: '3. Are all the vehicles inspected before being listed?',
    description:
      'Yes, every car on our lot goes through a comprehensive inspection process by our certified mechanics to ensure safety, reliability, and performance.',
  },
  {
    value: '4. Do you offer warranties on used cars?',
    description:
      'Yes, many of our used cars come with limited warranties. We also offer extended warranty options for additional peace of mind.',
  },
  {
    value: '5. Can I schedule a test drive online?',
    description:
      'Definitely! You can book a test drive directly through our website or contact our team, and we’ll set up a convenient time for you.',
  },
]

const FaQsPage = () => {
  const items = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ))

  return (
    <>
      <Metadata title="FAQs" description="FAQs page" />

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
            Frequently Asked Questions
          </h4>
          <p className="mx-auto w-full text-center text-xs text-white/80 md:w-[60%] md:text-base">
            Your premier destination for high-quality vehicles. Explore our
            extensive inventory and find your dream car today.
          </p>
        </div>
      </div>

      {/* ==================== CONTENT BODY ==================== */}
      <div className="container mx-auto px-5 pb-16 pt-10 ">
        <Accordion
          variant="filled"
          radius="md"
          defaultValue="1. Do you offer financing options for car purchases?"
          classNames={classes}
          className="mx-auto w-full md:w-[70%]"
          styles={{
            content: {
              fontSize: '14px',
              color: '#737373',
              marginLeft: '10px',
              marginRight: '10px',
            },
          }}
        >
          {items}
        </Accordion>
      </div>
    </>
  )
}

export default FaQsPage
