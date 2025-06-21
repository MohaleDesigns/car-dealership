import { Button } from '@mantine/core'

interface SecondaryButtonProps {
  title: string
  size?: string
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
  isWidthFull?: boolean
  onClick?: () => void
}

const SecondaryButton = ({
  title,
  size,
  leftSection,
  rightSection,
  isWidthFull,
  onClick,
}: SecondaryButtonProps) => {
  return (
    <Button
      className="border border-primary text-primary hover:bg-primary hover:text-white"
      size={size}
      radius="md"
      variant="outline"
      fullWidth={isWidthFull ? true : false}
      leftSection={leftSection}
      rightSection={rightSection}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default SecondaryButton
