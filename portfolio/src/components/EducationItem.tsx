import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface EducationItemProps {
  degree: string
  school: string
  location: string
  graduation: string
  university: string | null
  gpa: string | null
  percentage: string | null
  specialization: string | null
  index: number
}

const EducationItem = ({
  degree,
  school,
  location,
  graduation,
  university,
  gpa,
  percentage,
  specialization,
  index,
}: EducationItemProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-primary-600 transition-all duration-500 hover-lift ${
        isVisible
          ? 'opacity-100 animate-slide-in-left'
          : 'opacity-0 -translate-x-10'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {degree}
          </h3>
          <p className="text-lg text-primary-600 font-semibold mb-1">{school}</p>
          <p className="text-gray-600 mb-2">
            <svg
              className="w-4 h-4 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {location}
          </p>
          {university && (
            <p className="text-gray-700 mb-2 font-medium">{university}</p>
          )}
        </div>
        <div className="mt-4 md:mt-0 md:text-right">
          <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full font-semibold transition-transform duration-300 hover:scale-110">
            {graduation}
          </span>
        </div>
      </div>

      {(gpa || percentage) && (
        <div className="flex flex-wrap gap-4 mt-4">
          {gpa && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">CGPA:</span>
              <span className="text-primary-600 font-bold">{gpa}</span>
            </div>
          )}
          {percentage && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Percentage:</span>
              <span className="text-primary-600 font-bold">{percentage}</span>
            </div>
          )}
        </div>
      )}

      {specialization && (
        <div className="mt-4 p-4 bg-white rounded-lg border border-primary-200 transition-all duration-300 hover:shadow-md">
          <p className="text-gray-700 italic">{specialization}</p>
        </div>
      )}
    </div>
  )
}

export default EducationItem

