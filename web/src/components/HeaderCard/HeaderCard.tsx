interface HeaderCardProps {
  title: string
  subTitle: string
}

const HeaderCard = ({ title, subTitle }: HeaderCardProps) => {
  return (
    <div className="mb-8 rounded-md border-l-4 border-l-secondary/50 px-3 py-2 ">
      <h4 className="text-xl font-bold md:text-4xl">{title}</h4>
      <p className="text-xs text-primary/80">{subTitle}</p>
    </div>
  )
}

export default HeaderCard
