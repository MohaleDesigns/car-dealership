import { Select, rem } from '@mantine/core'

interface Props {
  setValue?: any
  value?: any
  data: any
  placeholder: string
  label?: string
  required?: boolean
  disabled?: boolean
}
const FormDropDown = ({
  setValue,
  value,
  data,
  placeholder,
  label,
  required,
  disabled,
  ...rest
}: Props) => {
  return (
    <div className="w-full">
      {label != '' && (
        <label className="text-sm">
          {label} {required ? <text className="text-red">*</text> : ''}
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
      </div>
    </div>
  )
}

export default FormDropDown
