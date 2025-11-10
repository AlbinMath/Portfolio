import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CertificateCard from './CertificateCard'

const Certificates = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  })

  const certificates = [
    {
      title: 'Cyber Security - Advanced Certificate',
      issuer: 'IBM',
      issueDate: '06/2024',
      verifyUrl: 'https://www.credly.com/badges/3252dde3-4174-4e20-9c75-9600166167cf',
    },
    {
      title: 'NPTEL Certification for Human Computer Interaction',
      issuer: 'NPTEL',
      issueDate: '05/2025',
      verifyUrl: 'https://nptel.ac.in/noc/E_Certificate/NPTEL25CS38S64860012504228974',
    },
    {
      title: 'NPTEL Certification for Cloud Computing',
      issuer: 'NPTEL',
      issueDate: '05/2025',
      verifyUrl: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104990045404228974.pdf',
    },
  ]

  return (
    <section id="certificates" className="py-20 px-4 bg-white" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Certificates
          </h2>
          <p className="text-gray-600 text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
