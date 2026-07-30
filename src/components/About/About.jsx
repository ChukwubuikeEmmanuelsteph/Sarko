import { useEffect } from 'react'
import './About.css'

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.about .reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about__grid">
          <div className="about__image reveal">
            <img src="/images/man-woman.jpg" alt="Team working together" />
          </div>
          <div className="about__content reveal reveal-delay-2">
            <div className="about__accent"></div>
            <h2>
              We are a tech agency aimed <br/>at optimising and facilitating <br /> business growth
            
            </h2>
            <p>
              We are more than just a tech agency – we are your partners in innovation.
              Founded with a passion for technology and a vision to empower businesses, we
              specialise in crafting cutting-edge digital solutions that drive growth, efficiency,
              and success. Our team of expert developers, designers, and strategists work
              collaboratively to transform your ideas into reality. From web and mobile app
              development to cloud computing, AI integration, and cybersecurity, we leverage
              the latest technologies to create tailored solutions that meet your unique needs.
            </p>
            <a href="#services" className="about__btn">
              Discover More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


