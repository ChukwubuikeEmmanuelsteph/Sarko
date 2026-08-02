// import { useEffect, useRef } from "react";
// import "./Stats.css";

// function ProgressRing({ percentage, label }) {
//   const radius = 36;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (percentage / 100) * circumference;

//   // Unique gradient ID based on the label (avoids collisions)
//   const gradientId = `ring-${label.replace(/\s+/g, "-").toLowerCase()}`;

//   return (
//     <div className="stats__progress">
//       <div className="stats__progress-circle">
//         <svg width="90" height="90" viewBox="0 0 90 90">
//           <defs>
//             <linearGradient id={gradientId} x1="0" y1="0" x2="90" y2="90">
//               <stop offset="0%" stopColor="#EABDFC" />
//               <stop offset="100%" stopColor="#ffffff" />
//             </linearGradient>
//           </defs>

//           {/* Background circle */}
//           <circle
//             cx="45"
//             cy="45"
//             r={radius}
//             fill="none"
//             stroke="rgba(255,255,255,.12)"
//             strokeWidth="5"
//           />

//           {/* Progress circle */}
//           <circle
//             cx="45"
//             cy="45"
//             r={radius}
//             fill="none"
//             stroke={`url(#${gradientId})`}
//             strokeWidth="5"
//             strokeLinecap="round"
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//             transform="rotate(-90 45 45)"
//           />
//         </svg>
//         <span>{percentage}%</span>
//       </div>
//       <h4>{label}</h4>
//     </div>
//   );
// }

// export default function Stats() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("active");
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     // Only observe elements inside this component
//     const items = section.querySelectorAll(".reveal");
//     items.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       {/* ================= TOP BANNER ================= */}
//       <div className="stats__topbar">
//         <a href="#contact">
//           <span>
//             Save your precious time and effort spent trying to build a solution by
//             yourself.
//           </span>
//           <strong>Contact us today</strong>
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M7 17L17 7" />
//             <path d="M7 7h10v10" />
//           </svg>
//         </a>
//       </div>

//       {/* ================= MAIN SECTION ================= */}
//       <section  ref={sectionRef}>
//         <div className="stats_sec">
//         <div className="stats__background">
//           <div className="stats__gradient"></div>
//           <div className="stats__glow"></div>
//         </div>

//         <div className="container">
//           <div className="stats__wrapper">
//             {/* LEFT */}
//             <div className="stats__left reveal">
//               <div className="stats__line"></div>

//               <h2>
//                 We serve our clients across
//                 <br />
//                 various IT and tech industries
//               </h2>

//               <p>
//                 We are more than just a tech agency we are your partners in
//                 innovation. Founded with a passion for technology and a vision
//                 to empower businesses, we specialise in crafting cutting-edge
//                 digital solutions that drive growth.
//               </p>

//               <div className="stats__progress-wrapper">
//                 <ProgressRing
//                   percentage={95}
//                   label="Technological Solutions"
//                 />
//                 <ProgressRing
//                   percentage={75}
//                   label="Business Innovations"
//                 />
//               </div>

//               <div className="stats__bottom">
//                 <a href="#services" className="stats__button">
//                   Discover More
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M7 17L17 7" />
//                     <path d="M7 7h10v10" />
//                   </svg>
//                 </a>

//                 <div className="stats__clients">
//                   <div className="stats__avatars">
//                     <img src="/images/man-2.png" alt="Client" />
//                     <img src="/images/man-3.png" alt="Client" />
//                     <img src="/images/man 1.png" alt="Client" />
//                     <img src="/images/woman-1.png" alt="Client" />
//                   </div>
//                   <span>100+ Clients</span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="stats__right reveal">
//               <div className="stats__image">
//                 <img
//                   src="/images/office 2.jpg"
//                   alt="Team working together"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </section>
//     </>
//   );
// }



import { useEffect, useRef } from "react";
import "./Stats.css";

function CircleMeter({ value, title }) {
  const size = 36;
  const totalLength = 2 * Math.PI * size;
  const progressLength = totalLength - (value / 100) * totalLength;

  const uniqueGradient = `progress-${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <div className="meter">
      <div className="meter__circle">
        <svg viewBox="0 0 90 90" width="90" height="90">
          <defs>
            <linearGradient
              id={uniqueGradient}
              x1="0"
              y1="0"
              x2="90"
              y2="90"
            >
              <stop offset="0%" stopColor="#EABDFC" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          <circle
            cx="45"
            cy="45"
            r={size}
            fill="none"
            stroke="rgba(255,255,255,.12)"
            strokeWidth="5"
          />

          <circle
            cx="45"
            cy="45"
            r={size}
            fill="none"
            stroke={`url(#${uniqueGradient})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={totalLength}
            strokeDashoffset={progressLength}
            transform="rotate(-90 45 45)"
          />
        </svg>

        <span>{value}%</span>
      </div>

      <h4>{title}</h4>
    </div>
  );
}

export default function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const currentSection = statsRef.current;

    if (!currentSection) return;

    const animatedItems = currentSection.querySelectorAll(".fade-item");

    const revealObserver = new IntersectionObserver(
      (records) => {
        records.forEach((record) => {
          if (record.isIntersecting) {
            record.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    animatedItems.forEach((item) => revealObserver.observe(item));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      {/* Announcement */}

      <div className="announcement">
        <a href="#contact" className="announcement__link">
          <span>
            Save your precious time and effort spent trying to build a solution
            by yourself.
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

      {/* Main */}

      <section ref={statsRef} className="industry">
        <div className="industry__area">
          {/* Background Effects */}

          <div className="industry__effects">
            <div className="industry__blur"></div>
            <div className="industry__light"></div>
          </div>

          <div className="container">
            <div className="industry__layout">
              {/* Left Side */}

              <div className="industry__content fade-item">
                <div className="industry__accent"></div>

                <h2>
                  We serve our clients across
                  <br />
                  various IT and tech industries
                </h2>

                <p>
                  We are more than just a tech agency—we are your partners in
                  innovation. Founded with a passion for technology and a vision
                  to empower businesses, we specialize in crafting cutting-edge
                  digital solutions that drive growth.
                </p>

                <div className="industry__meters">
                  <CircleMeter
                    value={95}
                    title="Technological Solutions"
                  />

                  <CircleMeter
                    value={75}
                    title="Business Innovations"
                  />
                </div>

                <div className="industry__footer">
                  <a
                    href="#services"
                    className="industry__button"
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

                  <div className="industry__people">
                    <div className="industry__avatars">
                      <img
                        src="/images/man-2.png"
                        alt="Client"
                      />

                      <img
                        src="/images/man-3.png"
                        alt="Client"
                      />

                      <img
                        src="/images/man 1.png"
                        alt="Client"
                      />

                      <img
                        src="/images/woman-1.png"
                        alt="Client"
                      />
                    </div>

                    <span>100+ Clients</span>
                  </div>
                </div>
              </div>

              {/* Right Side */}

              <div className="industry__visual fade-item">
                <div className="industry__photo">
                  <img
                    src="/images/office 2.jpg"
                    alt="Team working together"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}