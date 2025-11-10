import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    details: string[]
    period: string
    technologies: string[]
    status: string
  }
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 shadow-lg border border-primary-200 hover-lift transition-all duration-500 ${
        isVisible
          ? 'opacity-100 animate-slide-in-up'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          {project.title}
        </h3>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold uppercase transition-transform duration-300 hover:scale-110">
          {project.status}
        </span>
      </div>

      <p className="text-gray-700 mb-4 text-lg leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {project.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="transition-colors duration-300 hover:text-primary-600">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-700 hover:scale-110"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-primary-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Period:</span> {project.period}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard

