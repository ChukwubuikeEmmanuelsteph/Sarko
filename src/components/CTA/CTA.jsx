import { useEffect } from 'react'
import './CTA.css'

function CTA() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.cta .reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cta">
      <div className="cta__bg">
        <img src="/images/office-3.jpg" alt="Team working" />
        <div className="cta__overlay"></div>
      </div>
      <div className="cta__content reveal">
        <h2>
          Creative Solutions
          <br />
          for your Business
        </h2>
        <a href="#contact" className="cta__btn">
          Got a Project in mind
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default CTA
