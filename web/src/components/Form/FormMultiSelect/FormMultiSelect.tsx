import { MultiSelect, rem, Text } from '@mantine/core'

interface Props {
  setValue?: (value: string[]) => void
  value?: string[]
  data: string[]
  placeholder: string
  label?: string
  required?: boolean
  disabled?: boolean
  validationCondition?: boolean
  validationMessage?: string
  inputTip?: string
}

const FormMultiSelect = ({
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
          {label} {required && <text className="text-red">*</text>}
          {inputTip && (
            <span className="text-xs font-semibold text-gray-400">
              {inputTip}
            </span>
          )}
        </label>
      )}
      <div className="mt-1 w-full">
        <MultiSelect
          value={value}
          placeholder={placeholder}
          data={data ? data : [{ label: 'error', value: 'error' }]}
          onChange={(selected) => setValue(selected)}
          searchable
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

export default FormMultiSelect
