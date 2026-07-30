import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="url(#footerLogoGrad)" strokeWidth="3" />
                <path d="M10 16C10 12.686 12.686 10 16 10" stroke="url(#footerLogoGrad)" strokeWidth="3" strokeLinecap="round" />
                <path d="M16 22C19.314 22 22 19.314 22 16" stroke="url(#footerLogoGrad)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Sarko</span>
            </a>
            <p>Digitalizing your business ideas through technological innovation</p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">Who we are</a></li>
              <li><a href="#services">Our services</a></li>
              <li><a href="#clients">Our clients</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Innovations</a></li>
              <li><a href="#services">Development</a></li>
              <li><a href="#services">Technology</a></li>
              <li><a href="#services">Design</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Need Help?</h4>
            <ul>
              <li><span>call us directly</span></li>
              <li><a href="tel:+2349806745633" className="footer__highlight">+234 980 674 5633</a></li>
              <li><span>Need Support?</span></li>
              <li><a href="mailto:sarko@gmail.com" className="footer__highlight">sarko@gmail.com</a></li>
            </ul>
          </div>

          <div className="footer__col footer__newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <p>Be the first to get the latest updates and news</p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" aria-label="Subscribe">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© Sarko | 2025 All Rights Reserved</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Copyright</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
