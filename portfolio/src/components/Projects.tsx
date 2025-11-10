import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'FreshCart',
      description:
        'Built FreshCart, an online marketplace for selling fresh products (fish, meat, vegetables, etc.) using the MERN stack.',
      details: [
        'Designed and integrated seller and customer roles with secure APIs',
        'Real-time inventory updates',
        'Responsive UI for seamless user experience',
      ],
      period: '07/2025 - 10/2025',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'MERN Stack'],
      status: 'completed',
    },
    {
      title: 'Network Analyzer',
      description:
        'Developed a Network Traffic Analyzer with a hybrid backend architecture using Python, Node.js, and C for efficient packet capture, filtering, and protocol-level analysis.',
      details: [
        'Implemented real-time monitoring and decoding of network packets',
        'Enabled detailed insights into source/destination information, ports, and protocol behavior',
        'Efficient packet capture and filtering',
      ],
      period: '11/2023 - 03/2024',
      technologies: ['Python', 'Node.js', 'C', 'Network Security'],
      status: 'completed',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Showcase of personal projects and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
