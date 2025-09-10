import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Award, Code, Users, Monitor, Shield } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image">
              <div className="avatar">AM</div>
            </div>
            <div className="profile-info">
              <h1 className="name">Albin Mathew</h1>
              <h2 className="title">Web Developer</h2>
              <p className="location">
                <MapPin size={16} />
                Kannur, Kerala
              </p>
            </div>
          </div>
          
          <div className="contact-info">
            <a href="mailto:albinmathew0602@gmail.com" className="contact-item">
              <Mail size={18} />
              albinmathew0602@gmail.com
            </a>
            <a href="tel:+919496176349" className="contact-item">
              <Phone size={18} />
              +91 9496176349
            </a>
            <a href="https://github.com/AlbinMath" target="_blank" rel="noopener noreferrer" className="contact-item">
              <Github size={18} />
              GitHub
            </a>
            <div  className="contact-item">
              <a href="www.linkedin.com/in/albinmathew2002"> <Linkedin size={18} /> LinkedIn</a>
             
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="about">
        <div className="container">
          <h3>About Me</h3>
          <p>
            I am Albin Mathew, currently pursuing MCA with a passion for technology and cybersecurity. 
            My hometown is Kannur in Kerala. I'm enthusiastic about technology and actively pursuing 
            knowledge in cybersecurity, aiming to develop skills in protecting systems and networks 
            while contributing to safer digital spaces.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <h3>Education</h3>
          <div className="education-timeline">
            <div className="education-item">
              <div className="year">2024-2026</div>
              <div className="details">
                <h4>Master of Computer Applications (MCA)</h4>
                <p>Amal Jyothi College of Engineering Autonomous, Koovappally, Kerala</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="year">2021-2024</div>
              <div className="details">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <p>Yenepoya Institute of Arts, Science, Management & Commerce, Mangalore, Karnataka</p>
                <p className="specialization">Add-ons: Cyber Forensics, Data Analytics, Cyber Security</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="year">2019-2021</div>
              <div className="details">
                <h4>Higher Secondary Education</h4>
                <p>St. Joseph's Higher Secondary School, New Naduvil, Kerala</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="year">2019</div>
              <div className="details">
                <h4>SSLC</h4>
                <p>GHSS Sreepuram, Manakadavu, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="container">
          <h3>Experience</h3>
          <div className="experience-item">
            <div className="company">RISS TECHNOLOGIES</div>
            <div className="role">Flutter Development Intern</div>
            <div className="duration">1 Month</div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="container">
          <h3>Certifications & Achievements</h3>
          <div className="cert-grid">
            <div className="cert-item featured">
              <Award className="cert-icon" />
              <h4>IBM Cyber Security Advanced Certificate</h4>
              <a href="https://www.credly.com/badges/3252dde3-4174-4e20-9c75-9600166167cf" 
                 target="_blank" rel="noopener noreferrer" className="cert-link">
                View Badge
              </a>
            </div>
            
            <div className="cert-item">
              <Award className="cert-icon" />
              <h4>NPTEL Cloud Computing</h4>
              <p>Online Certification</p>
            </div>
            
            <div className="cert-item">
              <Award className="cert-icon" />
              <h4>NPTEL Human Computer Interaction</h4>
              <p>Online Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <Code className="skill-icon" />
              <h4>Development</h4>
              <ul>
                <li>MERN Stack</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>React.js</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <Monitor className="skill-icon" />
              <h4>Design & Tools</h4>
              <ul>
                <li>Figma Design</li>
                <li>Wireshark</li>
                <li>Nmap</li>
                <li>Metasploit</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <Shield className="skill-icon" />
              <h4>Systems</h4>
              <ul>
                <li>Linux (Ubuntu, Kali)</li>
                <li>Windows</li>
                <li>Network Security</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <Users className="skill-icon" />
              <h4>Soft Skills</h4>
              <ul>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h3>Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h4>Network Analyzer</h4>
              <p className="project-type">BCA Major Project</p>
              <p>
                Built a comprehensive network analyzer with a web-based frontend using Python and Node.js. 
                The project focuses on network data analysis, fetching data like network traffic, protocols, 
                and redirecting sites for detailed analysis.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>Node.js</span>
                <span>Web Technologies</span>
              </div>
            </div>
            
            <div className="project-card">
              <h4>Fresh Cart</h4>
              <p className="project-type">MCA Mini Project</p>
              <p>
                Developed a responsive e-commerce platform for fresh products delivery including meats, 
                fish, vegetables, and fruits. Built using the MERN stack with Firebase integration 
                for enhanced functionality.
              </p>
              <div className="tech-stack">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Albin Mathew. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;