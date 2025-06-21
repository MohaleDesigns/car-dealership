import { Text, TextInputProps } from '@mantine/core'

interface Props extends TextInputProps {
  data: string[]
  value?: string
  setValue?: (value: string) => void
  label?: string
  required?: boolean
  validationCondition?: boolean
  validationMessage?: string
  inputTip?: string
}

const FormInputOptions = ({
  data,
  value,
  setValue,
  label,
  required,
  validationCondition,
  validationMessage,
  inputTip,
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
      <div className="mt-1 flex w-full items-center justify-between gap-4">
        {data.map((t, i) => (
          <button
            key={i}
            className={`boder h-11 w-full rounded-lg border text-sm ${value === t ? 'bg-primary text-white' : 'bg-transparent'}`}
            onClick={() => setValue(t)}
          >
            {t}
          </button>
        ))}

        {validationCondition == true && (
          <Text className="text-sm text-red">{validationMessage}</Text>
        )}
      </div>
    </div>
  )
}

export default FormInputOptions
