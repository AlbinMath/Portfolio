import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface SkillCardProps {
  title: string
  skills: string[]
  icon: string
  index: number
}

const SkillCard = ({ title, skills, icon, index }: SkillCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover-lift transition-all duration-500 ${
        isVisible ? 'opacity-100 animate-scale-in' : 'opacity-0 scale-90'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl mb-4 text-center transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-300 hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard

