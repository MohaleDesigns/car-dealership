interface HeaderCardProps {
  title: string
  titleColor?: string
  subTitle: string
  subTitleColor?: string
}

const HeaderCard = ({
  title,
  subTitle,
  titleColor,
  subTitleColor,
}: HeaderCardProps) => {
  return (
    <div className="mb-8 rounded-md border-l-4 border-l-secondary/50 px-3 py-2">
      <h4
        className="mb-1 text-xl font-bold md:text-4xl"
        style={{ color: titleColor || '#000' }}
      >
        {title}
      </h4>
      <p
        className="text-xs md:text-sm"
        style={{ color: subTitleColor || 'rgba(0, 0, 0, 0.8)' }}
      >
        {subTitle}
      </p>
    </div>
  )
}

export default HeaderCard
