import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

import PrimaryButton from '../PrimaryButton/PrimaryButton'

interface ServiceCardProps {
  title?: string
  description?: string
  buttonText?: string
  background?: string
  onButtonClick?: () => void
}

const ServiceCard = ({
  title,
  description,
  buttonText,
  background,
  onButtonClick,
}: ServiceCardProps) => {
  return (
    <div
      className={`image-background ${background} relative z-10 overflow-hidden rounded-lg`}
    >
      {/* Background Overlay */}
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)]"></div>
      <div className="relative z-20 p-10  sm:grid  sm:grid-cols-2 sm:gap-10">
        <div>
          <h2 className="mb-3 text-lg font-bold text-white md:text-2xl">
            {title}
          </h2>
          <p className="mb-5 text-xs text-white md:text-xs">{description}</p>
          <PrimaryButton
            title={buttonText}
            rightIcon={
              <ArrowForwardRoundedIcon
                fontSize="small"
                className="text-white"
              />
            }
            onClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
