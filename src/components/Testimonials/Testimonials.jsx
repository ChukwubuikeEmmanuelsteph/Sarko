import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    image: "/images/man-4 (2).png",
    quote:
      "I have had the distinct privilege of working with some of the best tech companies in the industry, but none have left quite the same impact as Sarko. Their innovation, professionalism, and customer-centric approach have consistently exceeded our expectations.",
    name: "HIPPOLYTUS EMMANUEL",
    company: "canvoscorps",
  },
  {
    image: "/images/man-2.png",
    quote:
      "Sarko transformed our digital presence completely. Their team delivered beyond what we imagined possible. Their professionalism and attention to detail made them our trusted technology partner.",
    name: "SARAH JOHNSON",
    company: "TechFlow",
  },
  {
    image: "/images/man-3.png",
    quote:
      "Working with Sarko was one of the best decisions we made. Every milestone was delivered on time and beyond our expectations.",
    name: "MICHAEL CHEN",
    company: "NextWave",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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

    document.querySelectorAll(".testimonials .reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="testimonials">

      <div className="container">

        {/*======================
            SECTION TITLE
        =======================*/}

        <div className="testimonials__header reveal">

          <h2>
            Trusted by the world's elite CEOs
          </h2>

        </div>

        {/*======================
            MAIN LAYOUT
        =======================*/}

        <div className="testimonials__wrapper reveal">

          {/* LEFT ARROW */}

          <button
            className="testimonials__nav testimonials__nav--left"
            onClick={prevSlide}
            aria-label="Previous Testimonial"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* CENTER CONTENT */}

          <div className="testimonials__content">

            {/* IMAGE */}

            <div className="testimonials__photo">

              <img
                src={testimonial.image}
                alt={testimonial.name}
              />

              <div className="testimonials__quoteBadge">

                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10.5 11H7.5c0-2.4 1.5-4.5 4-5.4L10.7 4C7.2 5.1 5 8 5 11.8V20h8v-9zm8.5 0H16c0-2.4 1.5-4.5 4-5.4L19.2 4C15.7 5.1 13.5 8 13.5 11.8V20h8v-9z"/>
                </svg>

              </div>

            </div>

            {/* TEXT */}

            <div className="testimonials__text">

              <p className="testimonials__description">
                {testimonial.quote}
              </p>

              <div className="testimonials__author">

                <span className="testimonials__name">
                  {testimonial.name}
                </span>

                <span className="testimonials__company">
                  ({testimonial.company})
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT ARROW */}

          <button
            className="testimonials__nav testimonials__nav--right"
            onClick={nextSlide}
            aria-label="Next Testimonial"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>

    </section>
  );
}