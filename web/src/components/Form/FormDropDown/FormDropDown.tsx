import { Select, rem, Text } from '@mantine/core'

type SelectItem = { label: string; value: string }
interface Props {
  setValue?: (value: string) => void
  value?: string
  data: SelectItem[]
  placeholder: string
  label?: string
  required?: boolean
  disabled?: boolean
  validationCondition?: boolean
  validationMessage?: string
  inputTip?: string
}
const FormDropDown = ({
  setValue,
  value,
  data,
  placeholder,
  label,
  required,
  disabled,
  validationCondition,
  validationMessage,
  inputTip,
  ...rest
}: Props) => {
  return (
    <div className="w-full">
      {label != '' && (
        <label className="text-sm">
          {label} {required && <span className="text-red">*</span>}
          {inputTip && (
            <span className="text-xs font-semibold text-gray-400">
              {inputTip}
            </span>
          )}
        </label>
      )}
      <div className="mt-1 w-full">
        <Select
          value={value}
          placeholder={placeholder}
          data={data ? data : [{ label: 'No Data Found', value: 'error' }]}
          onChange={(selected) => {
            setValue(selected)
          }}
          disabled={disabled}
          radius="md"
          styles={{
            input: {
              outline: 'none',
              height: rem(45),
            },
            wrapper: {
              border: 'none',
              outline: 'none',
            },
            root: {
              border: 'none',
              outline: 'none',
            },
          }}
          {...rest}
        />
        {validationCondition == true && (
          <Text className="text-sm text-red">{validationMessage}</Text>
        )}
      </div>
    </div>
  )
}

export default FormDropDown
