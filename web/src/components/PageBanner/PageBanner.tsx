import { Badge } from '@mantine/core'

interface PageBannerProps {
  funFact: string
  title: string
  subTitle?: string
}

const PageBanner = ({ funFact, title, subTitle }: PageBannerProps) => {
  return (
    <div className="banner-background relative mb-10 bg-primary">
      {/* Background Overlay */}
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)]"></div>

      <div className="container relative z-20 mx-auto px-5 py-28">
        <div className="mb-3 text-center">
          <Badge color="#11BEA7" radius="md" variant="light">
            {funFact}
          </Badge>
        </div>
        <h4 className="mb-3 text-center text-3xl font-bold text-white md:text-5xl">
          {title}
        </h4>
        <p className="mx-auto w-full text-center text-xs text-white/80 md:w-[60%] md:text-base">
          {subTitle}
        </p>
      </div>
    </div>
  )
}

export default PageBanner
