import { Text, Textarea, TextareaProps } from '@mantine/core'

interface Props extends TextareaProps {
  value?: string
  placeHolder?: string
  setValue?: (value: string) => void
  type?: string
  label?: string
  required?: boolean
  validationCondition?: boolean
  validationMessage?: string
  inputTip?: string
  minRows?: number
  maxRows?: number
}

const FormTextTextarea = ({
  value,
  setValue,
  placeHolder,
  label,
  required,
  validationCondition,
  validationMessage,
  inputTip,
  minRows,
  maxRows,
  ...rest
}: Props) => {
  return (
    <div className="w-full">
      {label != '' && label ? (
        <label className="text-sm">
          {label} {required && <span className="text-red">*</span>}
          {inputTip && (
            <span className="text-xs font-semibold text-gray-400">
              {inputTip}
            </span>
          )}
        </label>
      ) : (
        required && <span className={`text-sm text-red`}>Required *</span>
      )}
      <div className="mt-1 flex w-full flex-col">
        <Textarea
          className={
            'w-full text-primary outline-none placeholder:text-gray-400 focus:ring-transparent'
          }
          value={value}
          radius="md"
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder={placeHolder}
          autosize
          minRows={minRows}
          maxRows={maxRows}
          {...rest}
        />
        {validationCondition == true && (
          <Text className="text-sm text-red">{validationMessage}</Text>
        )}
      </div>
    </div>
  )
}

export default FormTextTextarea
