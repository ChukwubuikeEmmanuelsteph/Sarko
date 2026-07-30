// import { useEffect } from 'react'
// import './Stats.css'

// function ProgressRing({ percentage, label }) {
//   const radius = 36
//   const circumference = 2 * Math.PI * radius
//   const offset = circumference - (percentage / 100) * circumference

//   return (
//     <div className="stats__ring">
//       <svg width="88" height="88" viewBox="0 0 88 88">
//         <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
//         <circle
//           cx="44"
//           cy="44"
//           r={radius}
//           fill="none"
//           stroke="url(#ringGrad)"
//           strokeWidth="4"
//           strokeLinecap="round"
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           transform="rotate(-90 44 44)"
//         />
//         <defs>
//           <linearGradient id="ringGrad" x1="0" y1="0" x2="88" y2="88">
//             <stop stopColor="#c084fc" />
//             <stop offset="1" stopColor="#f472b6" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <div className="stats__ring-text">
//         <span className="stats__ring-percent">{percentage}%</span>
//         <span className="stats__ring-label">{label}</span>
//       </div>
//     </div>
//   )
// }

// function Stats() {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add('active')
//         })
//       },
//       { threshold: 0.1 }
//     )
//     document.querySelectorAll('.stats .reveal').forEach((el) => observer.observe(el))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="stats section-padding">
//       <div className="stats__bg">
//         <img src="/images/stats-team.jpg" alt="Team" />
//         <div className="stats__overlay"></div>
//       </div>
//       <div className="container">
//         <div className="stats__top reveal">
//           <a href="#contact" className="stats__banner">
//             Save your precious time and effort spent trying to build a solution by yourself. Contact us today
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M7 17L17 7" />
//               <path d="M7 7h10v10" />
//             </svg>
//           </a>
//         </div>

//         <div className="stats__grid">
//           <div className="stats__content reveal reveal-delay-1">
//             <div className="stats__accent"></div>
//             <h2>
//               We serve our clients across various{' '}
//               <span className="gradient-text">IT and tech industries</span>
//             </h2>
//             <p>
//               We are more than just a tech agency – we are your partners in innovation.
//               Founded with a passion for technology and a vision to empower businesses, we
//               specialise in crafting cutting-edge digital solutions that drive growth.
//             </p>
//             <div className="stats__rings">
//               <ProgressRing percentage={95} label="Technological Solutions" />
//               <ProgressRing percentage={75} label="Business Innovations" />
//             </div>
//             <div className="stats__actions">
//               <a href="#services" className="stats__btn">
//                 Discover More
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M7 17L17 7" />
//                   <path d="M7 7h10v10" />
//                 </svg>
//               </a>
//               <div className="stats__avatars">
//                 <img src="/images/man-2.png" alt="Client" />
//                 <img src="/images/man-3.png" alt="Client" />
//                 <img src="/images/man 1.png" alt="Client" />
//                 <img src="/images/woman-1.png" alt="Client" />
//                 <span>100+ Clients</span>
//               </div>
//             </div>
//           </div>
//           <div className="stats__image reveal reveal-delay-2">
//             <img src="/images/office 2.jpg" alt="Team collaboration" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Stats

import { useEffect } from "react";
import "./Stats.css";

function ProgressRing({ percentage, label }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="stats__progress">

      <div className="stats__progress-circle">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <defs>
            <linearGradient id={`ring-${percentage}`} x1="0" y1="0" x2="90" y2="90">
              <stop offset="0%" stopColor="#EABDFC" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          <circle
            cx="45"
            cy="45"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,.12)"
            strokeWidth="5"
          />

          <circle
            cx="45"
            cy="45"
            r={radius}
            fill="none"
            stroke={`url(#ring-${percentage})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 45 45)"
          />
        </svg>

        <span>{percentage}%</span>
      </div>

      <h4>{label}</h4>

    </div>
  );
}

export default function Stats() {

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }

        });
      },
      {
        threshold: 0.15,
      }
    );

    document.querySelectorAll(".stats .reveal").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();

  }, []);

  return (
    <>
         <div className="stats__topbar">

          <a href="#contact">

            <span>
              Save your precious time and effort spent trying to build a solution by yourself.
            </span>

            <strong>Contact us today</strong>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>

          </a>

        </div>
    <section className="stats">

      <div className="stats__background">

        <div className="stats__gradient"></div>

        <div className="stats__glow"></div>

      </div>


      <div className="container">

        {/* ================= TOP BANNER ================= */}

        {/* ================= MAIN GRID ================= */}

        <div className="stats__wrapper">

          {/* LEFT */}

          <div className="stats__left reveal">

            <div className="stats__line"></div>

            <h2>
              We serve our clients across
              <br />
              various IT and tech industries
            </h2>

            <p>
              We are more than just a tech agency we are your partners in
              innovation. Founded with a passion for technology and a vision
              to empower businesses, we specialise in crafting cutting-edge
              digital solutions that drive growth.
            </p>

            <div className="stats__progress-wrapper">

              <ProgressRing
                percentage={95}
                label="Technological Solutions"
              />

              <ProgressRing
                percentage={75}
                label="Business Innovations"
              />

            </div>

            <div className="stats__bottom">

              <a
                href="#services"
                className="stats__button"
              >
                Discover More

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>

              </a>

              <div className="stats__clients">

                <div className="stats__avatars">

                  <img src="/images/man-2.png" alt="" />

                  <img src="/images/man-3.png" alt="" />

                  <img src="/images/man 1.png" alt="" />

                  <img src="/images/woman-1.png" alt="" />

                </div>

                <span>100+ Clients</span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="stats__right reveal">

            <div className="stats__image">

              <img
                src="/images/office 2.jpg"
                alt="Team working together"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
    </>
  );
}
