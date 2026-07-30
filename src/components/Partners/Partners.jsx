import './Partners.css'

// const partners = [
//   {
//     name: 'Walmart',
//     svg: (
//       <svg viewBox="0 0 120 30" fill="currentColor">
//         <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif">
//           Walmart
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: 'Netflix',
//     svg: (
//       <svg viewBox="0 0 100 30" fill="currentColor">
//         <text x="0" y="22" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="2">
//           NETFLIX
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: 'InVision',
//     svg: (
//       <svg viewBox="0 0 100 30" fill="currentColor">
//         <rect x="0" y="5" width="20" height="20" rx="4" />
//         <text x="26" y="22" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">
//           invision
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: 'Yahoo',
//     svg: (
//       <svg viewBox="0 0 100 30" fill="currentColor">
//         <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="Inter, sans-serif">
//           YAHOO!
//         </text>
//       </svg>
//     ),
//   },
//   {
//     name: 'Amazon',
//     svg: (
//       <svg viewBox="0 0 100 30" fill="currentColor">
//         <text x="0" y="20" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">
//           amazon
//         </text>
//         <path d="M0 24 Q25 28 50 24 Q75 20 90 24" stroke="currentColor" strokeWidth="2" fill="none" />
//       </svg>
//     ),
//   },
// ]
const partners = [
  {
    name: 'Walmart',
    svg: (
      <svg viewBox="0 0 180 50" fill="currentColor">
        <text
          x="0"
          y="34"
          fontSize="30"
          fontWeight="800"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          Walmart
        </text>
      </svg>
    ),
  },

  {
    name: 'Netflix',
    svg: (
      <svg viewBox="0 0 180 50" fill="currentColor">
        <text
          x="0"
          y="34"
          fontSize="40"
          fontWeight="700"
          fontFamily="'Arial Narrow', Arial, sans-serif"
          letterSpacing="3"
        >
          NETFLIX
        </text>
      </svg>
    ),
  },

  {
    name: 'InVision',
    svg: (
      <svg viewBox="0 0 180 50">
        <rect
          x="0"
          y="8"
          width="34"
          height="34"
          rx="5"
          fill="currentColor"
        />

        <text
          x="9"
          y="31"
          fontSize="25"
          fontWeight="700"
          fill="white"
          fontStyle="italic"
        >
          in
        </text>

        <text
          x="42"
          y="34"
          fontSize="40"
          fontWeight="500"
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          vision
        </text>
      </svg>
    ),
  },

  {
    name: 'Yahoo',
    svg: (
      <svg viewBox="0 0 180 50" fill="currentColor">
        <text
          x="0"
          y="34"
          fontSize="40"
          fontWeight="400"
          fontFamily="'Times New Roman', serif"
        >
          YAHOO!
        </text>
      </svg>
    ),
  },

  {
    name: 'Amazon',
    svg: (
      <svg viewBox="0 0 180 50">
        <text
          x="0"
          y="31"
          fontSize="40"
          fontWeight="700"
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          amazon
        </text>

        <path
          d="M18 38 C40 48,85 48,115 38"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners__grid">
          {partners.map((p) => (
            <div key={p.name} className="partners__logo">
              {p.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
