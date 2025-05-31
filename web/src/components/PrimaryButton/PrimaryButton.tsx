interface PrimaryButtonProps {
  title: string
  onPress?: () => void
}

const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
  return (
    <button
      className="custom-transition w-full rounded-lg bg-primary px-5 py-3 text-base capitalize text-white"
      onClick={onPress}
    >
      {title}
    </button>
  )
}

export default PrimaryButton
