import { useScrollAnimation } from '../hooks/useScrollAnimation'
import EducationItem from './EducationItem'

const Education = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Amal Jyothi College of Engineering Autonomous',
      location: 'Koovappally, Kerala',
      graduation: 'Present (Expected: 30/2026)',
      university: 'APJ Abdul Kalam Technological University (KTU)',
      gpa: null,
      percentage: null,
      specialization: null,
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      school: 'Yenepoya Institute of Arts, Science, Management & Commerce',
      location: 'Mangalore, Karnataka',
      graduation: '03/2024',
      university: 'Yenepoya (Deemed to be University)',
      gpa: '6.69',
      percentage: '66.9%',
      specialization: 'Specialized in IBM-integrated programs, Cyber Forensics, Data Analysis, and Cybersecurity.',
    },
    {
      degree: 'Government of Kerala Board Higher Secondary Examination',
      school: "St. Joseph's Higher Secondary School",
      location: 'New Naduvil, Kerala',
      graduation: '03/2021',
      university: null,
      gpa: null,
      percentage: '60%',
      specialization: null,
    },
    {
      degree: 'Secondary School Leaving Certificate',
      school: 'GHSS Sreepuram, Manakadavu',
      location: 'Manakadavu, Vellad, Kerala',
      graduation: '03/2019',
      university: null,
      gpa: null,
      percentage: '70%',
      specialization: null,
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-white" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Education
          </h2>
          <p className="text-gray-600 text-lg">
            Academic qualifications and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
