import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'

interface TestimonialCardProps {
  name: string
  role: string
  title: string
  description: string
  ratings?: number
  profile: string
}

const TestimonialCard = ({
  name,
  role,
  title,
  description,
  profile,
  ratings,
}: TestimonialCardProps) => {
  const fullStars = Math.floor(ratings)
  const hasHalfStar = ratings % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  console.log('TestimonialCard rendered with ratings:', ratings)

  return (
    <div className="border-border rounded-lg border p-5 shadow-xl shadow-black/5">
      <h2 className="mb-1 font-medium">{title}</h2>
      <p className="text-text text-xs">{description}</p>

      <div className="border-border mt-5 flex items-center justify-between gap-3 border-t pt-4">
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h4 className="mb-1 text-sm font-semibold">{name}</h4>
            <p className="text-text/70 text-xs">{role}</p>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-1">
          <span className="text-text text-end text-xs">
            ({Number.isFinite(ratings) ? ratings.toFixed(1) : '0.0'})
          </span>

          <div className="flex items-center">
            {Array.from({ length: fullStars }).map((_, idx) => (
              <StarIcon
                key={`full-${idx}`}
                className="text-yellow-500"
                fontSize="small"
              />
            ))}
            {hasHalfStar && (
              <StarHalfIcon
                key="half"
                className="text-yellow-500"
                fontSize="small"
              />
            )}
            {Array.from({ length: emptyStars }).map((_, idx) => (
              <StarBorderIcon
                key={`empty-${idx}`}
                className="text-yellow-500"
                fontSize="small"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
