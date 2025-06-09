import { Text } from '@mantine/core'

import FormInputOptions from '../Form/FormInputOptions/FormInputOptions'
import FormTextInput from '../Form/FormTextInput/FormTextInput'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const LoanCalculator = () => {
  return (
    <div className="rounded-lg bg-white p-5">
      {/* Details  */}
      <div className="mb-5 rounded-lg bg-primary p-5">
        <div className="flex flex-col items-center justify-center">
          <Text className="mt-2 flex items-end gap-1 text-2xl font-bold text-white">
            R4,226
            <Text className="mb-1 text-xs font-normal text-white">pm</Text>
          </Text>
          <Text className="mt-2 text-sm font-normal text-white">
            Estimated Monthly Instalment
          </Text>
        </div>
      </div>

      {/* Form  */}
      <div className="mb-8 flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5 md:flex md:flex-col md:gap-3 lg:grid lg:grid-cols-2 lg:gap-5">
        <div className="col-span-2">
          <FormTextInput
            label="Price of vehicle"
            placeHolder="R200,000"
            required
          />
        </div>
        <FormTextInput label="Trade-in value" placeHolder="R0" required />
        <FormTextInput label="Deposit" placeHolder="R12,000" required />
        <FormTextInput label="Balloon rate (%)" placeHolder="0%" required />
        <FormTextInput label="Interest rate (%)" placeHolder="7%" required />
        <div className="col-span-2">
          <FormInputOptions
            label="Loarn Term"
            data={['12', '24', '48', '60', '72']}
          />
        </div>
      </div>

      {/* Button  */}
      <PrimaryButton title="Get quick finance" isWidthFull />
    </div>
  )
}

export default LoanCalculator
