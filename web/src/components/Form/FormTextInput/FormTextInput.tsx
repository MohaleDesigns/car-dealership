import { Text, TextInput, TextInputProps, rem } from '@mantine/core'
interface Props extends TextInputProps {
  value?: string
  placeHolder?: string
  setValue?: any
  type?: string
  label?: string
  required?: boolean
  validationCondition?: boolean
  validationMessage?: string
  inputTip?: string
}
const FormTextInput = ({
  value,
  setValue,
  placeHolder,
  type,
  label,
  required,
  validationCondition,
  validationMessage,
  inputTip,
  ...rest
}: Props) => {
  return (
    <div className="w-full">
      {label != '' && label ? (
        <label className="text-sm">
          {label} {required ? <span className="text-red">*</span> : ''}{' '}
          {inputTip ? (
            <span className="text-xs font-semibold text-gray-400">
              {inputTip}
            </span>
          ) : (
            ''
          )}
        </label>
      ) : (
        required && <span className={`text-sm text-red`}>Required *</span>
      )}
      <div className="mt-1 flex w-full flex-col">
        <TextInput
          className={
            'w-full text-primary outline-none placeholder:text-gray-400 focus:ring-transparent'
          }
          type={type ? type : 'text'}
          value={value}
          radius="md"
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeHolder}
          onScroll={undefined}
          styles={{
            input: {
              height: rem(45),
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

export default FormTextInput
