interface PrimaryButtonProps {
  title: string
  fontSize?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isWidthFull?: boolean
  onClick?: () => void
}

const PrimaryButton = ({
  title,
  fontSize,
  leftIcon,
  rightIcon,
  isWidthFull,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`custom-transition flex ${isWidthFull && 'w-full'} items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-normal capitalize text-white sm:text-sm`}
      style={{ fontSize: fontSize }}
      onClick={onClick}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  )
}

export default PrimaryButton
