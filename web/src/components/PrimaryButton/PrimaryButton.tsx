interface PrimaryButtonProps {
  title: string
  fontSize?: string
  icon?: React.ReactNode
  onPress?: () => void
}

const PrimaryButton = ({
  title,
  fontSize,
  icon,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <button
      className="custom-transition flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-10 py-3 text-base capitalize text-white"
      style={{ fontSize: fontSize }}
      onClick={onPress}
    >
      {icon}
      {title}
    </button>
  )
}

export default PrimaryButton
