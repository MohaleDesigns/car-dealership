// import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

import { Stepper, Button, Group } from '@mantine/core'

import { Metadata } from '@redwoodjs/web'

import PageBanner from 'src/components/PageBanner/PageBanner'

const SellACarPage = () => {
  const [active, setActive] = useState(1)
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current))
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <>
      <Metadata title="SellACar" description="SellACar page" />

      {/* BANNER */}
      <PageBanner
        funFact="10,000+ employees/staff"
        title="Sell You Car"
        subTitle="Get the best value for your car and receive the highest cash price directly deposited into your account."
      />

      {/* CONTENT BODY */}
      <div className="container mx-auto mb-10 p-5">
        <Stepper
          active={active}
          onStepClick={setActive}
          color="#11BEA7"
          radius="lg"
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Step 1" description="About you">
            Step 1 content: About you
          </Stepper.Step>
          <Stepper.Step label="Step 2" description="Car details">
            Step 2 content: Car details
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Car make & model">
            Step 3 content: Car make & model
          </Stepper.Step>
          <Stepper.Completed>
            <div className="my-10">
              <h4 className="mb-3 text-center text-2xl font-bold text-primary">
                Congradulation! 🥳
              </h4>
              <p className="text-center text-text">
                We will be in contact shortly after review everything.
              </p>
            </div>
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button
            radius="md"
            className="border border-primary text-primary hover:bg-primary hover:text-white"
            variant="outline"
            onClick={prevStep}
          >
            Back
          </Button>
          <Button
            radius="md"
            className="border border-primary bg-primary text-white hover:bg-transparent hover:text-primary"
            variant="fill"
            onClick={nextStep}
          >
            Next step
          </Button>
        </Group>
      </div>
    </>
  )
}

export default SellACarPage
