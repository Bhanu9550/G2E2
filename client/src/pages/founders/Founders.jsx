import { useEffect, useRef, useState } from "react";
import "./Founders.css";
import profile from "./../../assets/profile.avif";

const Founders = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);
  const founders = [
    {
      image: profile,
      name: "Arjun Mehta",
      experience: "10 years product development experience",
      education: "B.Tech. IIT Hyderabad, MBA IIM-B"
    },
    {
      image: profile,
      name: "Neha Reddy",
      experience: "11 years manufacturing & business experience",
      education: "B.E. Osmania University, MBA ISB"
    },
    {
      image: profile,
      name: "Vikram Rao",
      experience: "9 years software engineering experience",
      education: "B.Tech. JNTU Hyderabad, MS University of Texas"
    }
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) {
        return;
      }
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      if (
        scrollTop + viewportHeight * 0.7 >= sectionTop
      ) {
        setShowCards(true);
      } else {
        setShowCards(false);
      }
    };
    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true
      }
    );
    handleScroll();
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <section ref={sectionRef} className="founders-section" >
      <div className="founders-sticky">
        <div className="founders-container">
          <div className="founders-heading">
            <span className="section-label">
              OUR LEADERSHIP
            </span>
            <h2>
              Meet Our Founders
            </h2>
            <p> Meet the visionaries behind G2E2, bringing together experience, innovation and a shared commitment to building a greener future. </p>
          </div>
          <div className={`founders-grid ${showCards ? "founders-grid-visible" : "" }`} >
            {founders.map((founder, index) => (
              <div key={index} className="founder-card" >
                <div className="founder-image">
                  <img src={founder.image} alt={founder.name} />
                </div>
                <div className="founder-details">
                  <span className="founder-badge">
                    FOUNDER
                  </span>
                  <div className="founder-name-row">
                    <h3>
                      {founder.name}
                    </h3>
                  </div>
                  <div className="founder-info">
                    <div className="info-icon">
                      ▷
                    </div>
                    <p>
                      {founder.experience}
                    </p>
                  </div>
                  <div className="founder-info">
                    <div className="info-icon">
                      ▷
                    </div>
                    <p>
                      {founder.education}
                    </p>
                  </div>
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