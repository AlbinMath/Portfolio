import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface CertificateCardProps {
  title: string
  issuer: string
  issueDate: string
  verifyUrl: string
  index: number
}

const CertificateCard = ({
  title,
  issuer,
  issueDate,
  verifyUrl,
  index,
}: CertificateCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 shadow-lg border border-primary-200 hover-lift transition-all duration-500 ${
        isVisible ? 'opacity-100 animate-scale-in' : 'opacity-0 scale-90'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="mb-4">
        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto transition-transform duration-300 hover:scale-110 hover:rotate-12">
          {issuer.charAt(0)}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
          {title}
        </h3>
        <p className="text-primary-600 font-semibold text-center mb-2">
          {issuer}
        </p>
        <p className="text-gray-600 text-center text-sm mb-4">
          Issued: {issueDate}
        </p>
      </div>

      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold hover:scale-105"
      >
        Verify Certificate
      </a>
    </div>
  )
}

export default CertificateCard

