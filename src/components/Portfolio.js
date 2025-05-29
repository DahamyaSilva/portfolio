import React from 'react';
import './Portfolio.css';
import Navigation from './Navigation';
import profileImage from '../images/Dahamya.jpg';
import uowLogo from '../images/UniversityOfWestminster.png';
import pbmvLogo from '../images/PanaduraBalikaLogo.jpg';
import findMyLawyerImage from '../images/FindMyLawyer.jpg';
import lifeBelowWaterImage from '../images/LifeBelowWater.jpg';
import planeSeatManagementImage from '../images/PlaneSeatManagement.jpg';
import ticketingSystemImage from '../images/TicketingSystem.jpg';
import artPageImage from '../images/ArtPage.jpg';
import financeTrackerImage from '../images/FinanceTracker.jpg';
// Import icons from react-icons
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaPython, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiJavascript, SiMysql } from 'react-icons/si';

function Portfolio() {
  const certifications = [
    {
      title: "React Essential Training",
      issuer: "LinkedIn Learning",
      date: "March 2025",
      description: "Comprehensive training covering React fundamentals, components, hooks, and modern React development practices. Topics include creating elements, writing components, using React hooks, and understanding libraries like Next and Vite.",
      link: "https://www.linkedin.com/learning/certificates/df78e96be07c5ed2a17ab4669adc462112a3574a66b4a2aff3f5b771ad5ddf91?trk=share_certificate"
    }
  ];

  return (
    <div className="portfolio-container">
      <Navigation />
      <main>
        <section id="hero" className="hero-section">
          <h1 className="name">Dahamya Silva</h1>
          <h2 className="title">Software Engineering Undergraduate</h2>
        </section>

        <section id="about" className="about-section">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="profile-image-container">
              <img src={profileImage} alt="Dahamya Silva" className="profile-image" />
            </div>

            <div className="about-text-container">
              <p className="about-text">
                Software Engineering undergraduate at the University of Westminster focused on academic excellence and technical skill development. Committed to building strong foundations in software development while transforming theoretical knowledge into practical solutions through collaborative projects and continuous learning, preparing for an impactful career in software engineering.
              </p>

              <div className="social-links">
                <a href="https://github.com/DahamyaSilva" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub className="social-icon" />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/dahamya-s-0b2118295" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin className="social-icon" />
                  <span>LinkedIn</span>
                </a>
                <a href={process.env.PUBLIC_URL + '/cv/DahamyaSilvaCV.pdf'} download="DahamyaSilvaCV.pdf" className="social-link cv-link">
                  <FaFileAlt className="social-icon" />
                  <span>Download CV</span>
                </a>
              </div>

            </div>

          </div>

        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-item">
              <FaJava className="skill-icon" />
              <span className="skill-name">Java</span>
            </div>
            <div className="skill-item">
              <FaReact className="skill-icon" />
              <span className="skill-name">React</span>
            </div>
            <div className="skill-item">
              <SiJavascript className="skill-icon" />
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-item">
              <FaHtml5 className="skill-icon" />
              <span className="skill-name">HTML</span>
            </div>
            <div className="skill-item">
              <FaCss3Alt className="skill-icon" />
              <span className="skill-name">CSS</span>
            </div>
            <div className="skill-item">
              <FaPython className="skill-icon" />
              <span className="skill-name">Python</span>
            </div>
            <div className="skill-item">
              <SiMysql className="skill-icon" />
              <span className="skill-name">MySQL</span>
            </div>
          </div>
        </section>
        <section id="education" className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-container">
            <div className="education-item">
              <div className="education-logo-container">
                <img src={uowLogo} alt="University of Westminster" className="education-logo" />
              </div>
              <div className="education-details">
                <h3 className="education-title">University of Westminster</h3>
                <p className="education-school">B.Eng Software Engineering</p>
                <p className="education-period">2023 - 2027</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-logo-container">
                <img src={pbmvLogo} alt="Panadura Balika Maha Vidyalaya" className="education-logo" />
              </div>
              <div className="education-details">
                <h3 className="education-title">Panadura Balika Maha Vidyalaya</h3>
                <p className="education-school">GCE Advanced Level (Biological Science)</p>
                <p className="education-school">GCE Ordinary Level</p>
                <p className="education-period">2014 - 2023</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            <div className="project-item">
              <div className="project-image-container">
                <img src={findMyLawyerImage} alt="Find My Lawyer Project" className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Find My Lawyer</h3>
                <p className="project-description">
                  A web applicationconnecting clients with specialized legal professionals based on specific legal needs, case complexity, and budget, ensuring efficient, appropriate legal representation while helping attorneys find well-matched clients.
                </p>
                <div className="project-tech-stack">
                  <div className="tech-item">
                    <span className="tech-name">React.js</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">Node.js</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">SQL Server</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src={lifeBelowWaterImage} alt="Life Below Water Project" className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Life Below Water</h3>
                <p className="project-description">
                  A website focused on conserving and sustainably using our oceans, seas, and marine resources for global well-being.
                </p>
                <div className="project-tech-stack">
                  <div className="tech-item">
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">JavaScript</span>
                  </div>
                </div>
                <a href="https://github.com/DahamyaSilva/LifeBelowWater.git" target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub <FaGithub className="link-icon" />
                </a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src={planeSeatManagementImage} alt="Plane Seat Management Project" className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Plane Seat Management</h3>
                <p className="project-description">
                  A system for managing airplane seat bookings, allowing users to purchase, cancel, and search for seats while viewing seating plans and ticket information.
                </p>
                <div className="project-tech-stack">
                  <div className="tech-item">
                    <span className="tech-name">Java</span>
                  </div>
                </div>
                <a href="https://github.com/DahamyaSilva/PlaneManagement.git" target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub <FaGithub className="link-icon" />
                </a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src={ticketingSystemImage} alt="Ticketing System Project" className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Ticketing System</h3>
                <p className="project-description">
                  A simulation of a multi-threaded system where vendors add tickets to a shared pool while customers purchase them concurrently, demonstrating thread synchronization techniques for safely managing shared resources.
                </p>
                <div className="project-tech-stack">
                  <div className="tech-item">
                    <span className="tech-name">Java</span>
                  </div>
                </div>
                <a href="https://github.com/DahamyaSilva/concurrent-ticketing-system.git" target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub <FaGithub className="link-icon" />
                </a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src={artPageImage} alt="DEE's Art Project" className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">DEE's Art</h3>
                <p className="project-description">
                  The website showcases a collection of my digital art, featuring a variety of art pieces and drawing processes created using Ibis Paint X. It also provides an in-depth look into my drawing processes.
                </p>
                <div className="project-tech-stack">
                  <div className="tech-item">
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">CSS</span>
                  </div>
                </div>
                <a href="https://github.com/DahamyaSilva/art-page.git" target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub <FaGithub className="link-icon" />
                </a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image-container">
                <img src={financeTrackerImage} alt="Finance Tracker Project" className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Finance Tracker</h3>
                <p className="project-description">
                A responsive personal finance web app featuring transaction management, real-time analytics, interactive charts, and local data persistence. 
                </p>
                <div className="project-tech-stack">
                  <div className="tech-item">
                    <span className="tech-name">JavaScript</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-item">
                    <span className="tech-name">CSS</span>
                  </div>
                </div>
                <a href="https://github.com/DahamyaSilva/FinanceTracker.git" target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub <FaGithub className="link-icon" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-container">
            <div className="certification-item">
              <div className="certification-details">
                <h3 className="certification-title">Learning the JavaScript Language</h3>
                <p className="certification-issuer">LinkedIn Learning</p>
                <p className="certification-date">December 2024</p>
                <a href="https://www.linkedin.com/learning/certificates/18b367b27698e1550a784e14df3b9be39eb03406c74f837955b2330f39154729?trk=share_certificate" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="certification-link">
                  View Certificate
                </a>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-details">
                <h3 className="certification-title">Java Object-Oriented Programming</h3>
                <p className="certification-issuer">LinkedIn Learning</p>
                <p className="certification-date">December 2024</p>                
               <a href="https://www.linkedin.com/learning/certificates/9bb9804196ef2632753062dfd60d1ce98c17a42244eb2160f175d44ed893a9ef?trk=share_certificate" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="certification-link">
                  View Certificate
                </a>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-details">
                <h3 className="certification-title">Java Threads</h3>
                <p className="certification-issuer">LinkedIn Learning</p>
                <p className="certification-date">January 2025</p>
                <a href="https://www.linkedin.com/learning/certificates/4d43f6fc0c1393bc0c4b1aa4e3884e289c3fc7527a0db39ba8755718fcef6ed3?trk=share_certificate" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="certification-link">
                  View Certificate
                </a>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-details">
                <h3 className="certification-title">React Essential Training</h3>
                <p className="certification-issuer">LinkedIn Learning</p>
                <p className="certification-date">March 2025</p>
                <a href="https://www.linkedin.com/learning/certificates/df78e96be07c5ed2a17ab4669adc462112a3574a66b4a2aff3f5b771ad5ddf91?trk=share_certificate" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="certification-link">
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:dahamyapsilva@gmail.com">dahamyapsilva@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+94 778738048">+94 778738048</a>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Portfolio; 