import PrimaryButton from '../PrimaryButton/PrimaryButton'

interface ServiceCardProps {
  title?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
}

const ServiceCard = ({
  title,
  description,
  buttonText,
  onButtonClick,
}: ServiceCardProps) => {
  return (
    <div className="image-background background-4 relative z-10 overflow-hidden rounded-lg">
      {/* Background Overlay */}
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)]"></div>
      <div className="relative z-20 flex flex-col gap-10 p-10">
        <div>
          <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">
            {title}
          </h2>
          <p className="max-w-xs text-sm text-white md:text-sm">
            {description}
          </p>
        </div>
        <PrimaryButton title={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  )
}

export default ServiceCard
