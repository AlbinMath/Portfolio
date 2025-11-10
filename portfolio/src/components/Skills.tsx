import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SkillCard from './SkillCard'

const Skills = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Web Development',
      skills: ['React', 'JavaScript', 'Node.js', 'HTML5', 'CSS3'],
      icon: '🌐',
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'PHP', 'JavaScript', 'Node.js'],
      icon: '💻',
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      icon: '🗄️',
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Git'],
      icon: '☁️',
    },
    {
      title: 'Cybersecurity',
      skills: ['Nmap', 'Wireshark', 'Cyber Forensics'],
      icon: '🔒',
    },
    {
      title: 'Operating Systems',
      skills: ['Windows', 'Linux'],
      icon: '🖥️',
    },
    {
      title: 'Tools & Software',
      skills: ['MS Word', 'MS Excel', 'MS PowerPoint'],
      icon: '🛠️',
    },
    {
      title: 'Soft Skills',
      skills: [
        'Problem-Solving',
        'Teamwork',
        'Time Management',
        'Adaptability',
        'Quick Learner',
        'Debugging and Troubleshooting',
      ],
      icon: '🌟',
    },
  ]

  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <p className="text-gray-600 text-lg">
            Technical expertise and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

