import './Hero.css'


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img src="/images/office-image.jpg" alt="Team collaborating on business ideas" />
      </div>
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__title">Digitalize your Business Ideas</h1>
        <p className="hero__subtitle">
          We are a fully dedicated corporate service agency providing modern and digital
          IT solutions and concepts to brands all over the world.
        </p>
        <div className="hero__buttons">
          <a href="#about" className="hero__btn hero__btn--primary">
            Explore Sarko
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Contact us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </a>
        </div>
      </div>

 
    </section>
  )
}

export default Hero
