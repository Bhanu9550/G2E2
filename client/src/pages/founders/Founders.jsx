import { useEffect, useRef, useState } from "react";
import "./Founders.css";
import profile from "./../../assets/profile.avif";

const Founders = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const founders = [
    {
      image: profile,
      name: "Guttikonda Karthik",
      role: "Co-Founder",
    },
    {
      image: profile,
      name: "Rudraraju Nitin Varma",
      role: "Co-Founder",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + viewportHeight * 0.7 >= sectionTop) {
        setShowCards(true);
      } else {
        setShowCards(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="founders-section">
      <div className="founders-sticky">
        <div className="founders-container">

          {/* Heading */}
          <div className="founders-heading">
            <span className="section-label">
              OUR LEADERSHIP
            </span>

            <h2>Meet Our Founders</h2>

            <p>
              Meet the visionaries behind G2E2, bringing together
              experience, innovation and a shared commitment to
              building a greener future.
            </p>
          </div>

          {/* Founder Cards */}
          <div
            className={`founders-list ${
              showCards ? "founders-list-visible" : ""
            }`}
          >
            {founders.map((founder, index) => (
              <div className="founder-card" key={index}>

                <div className="founder-image">
                  <img
                    src={founder.image}
                    alt={founder.name}
                  />
                </div>

                <div className="founder-details">

                  <span className="founder-badge">
                    {founder.role}
                  </span>

                  <h3>{founder.name}</h3>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founders;