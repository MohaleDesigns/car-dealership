interface PrimaryButtonProps {
  title: string
  fontSize?: string
  icon?: React.ReactNode
  onClick?: () => void
}

const PrimaryButton = ({
  title,
  fontSize,
  icon,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <button
      className="custom-transition flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-10 py-3 text-base capitalize text-white"
      style={{ fontSize: fontSize }}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  )
}

export default PrimaryButton
