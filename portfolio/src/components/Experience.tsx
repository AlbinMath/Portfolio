import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Flutter Developer Intern',
      company: 'Riss Technologies',
      location: 'Calicut',
      period: 'April 1 – April 30, 2025',
      responsibilities: [
        'Gained hands-on experience in Flutter for cross-platform mobile application development',
        'Worked on UI components, state management, and integration with backend APIs',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Experience
          </h2>
          <p className="text-gray-600 text-lg">
            Professional work experience and internships
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
