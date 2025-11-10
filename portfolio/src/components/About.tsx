import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.2,
  })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 hover-lift transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image Placeholder */}
            <div
              ref={imageRef}
              className={`flex-shrink-0 transition-all duration-700 ${
                imageVisible
                  ? 'opacity-100 animate-scale-in'
                  : 'opacity-0 scale-90'
              }`}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 flex items-center justify-center text-white text-6xl md:text-8xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-gradient">
                AM
              </div>
            </div>

            {/* About Content */}
            <div
              ref={contentRef}
              className={`flex-1 text-center md:text-left transition-all duration-700 delay-200 ${
                contentVisible
                  ? 'opacity-100 animate-slide-in-right'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
                Albin Mathew
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary-600 mb-6 font-semibold animate-fade-in delay-100">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in delay-200">
              Passionate Full Stack Developer with hands-on experience in building modern web applications using React, Node.js, and database technologies. Currently pursuing a Master of Computer Applications (MCA) with specialization in IBM-integrated programs, Cyber Forensics, Data Analysis, and Cybersecurity. Strong analytical mindset with a solid understanding of secure system design, threat analysis, and data-driven problem solving. Driven to create efficient, scalable, and user-centric solutions while maintaining a strong focus on code quality and security standards.

              </p>
              
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    text: 'albinmathew0602@gmail.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    text: '+919496176348',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    text: 'Alakode, Kerala, India - 670571',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    text: 'LinkedIn Profile',
                    link: 'https://www.linkedin.com/in/albinmathew2002',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    text: 'GitHub Profile',
                    link: 'https://github.com/AlbinMath',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 hover:translate-x-2 ${
                      contentVisible
                        ? 'opacity-100 animate-fade-in'
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="transition-transform duration-300 hover:scale-110">
                      {item.icon}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 underline transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div
                className={`mt-6 transition-all duration-700 delay-500 ${
                  contentVisible ? 'opacity-100 animate-slide-in-up' : 'opacity-0'
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Malayalam', 'Tamil (Beginner)'].map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm transition-all duration-300 hover:bg-primary-200 hover:scale-110 cursor-default"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

