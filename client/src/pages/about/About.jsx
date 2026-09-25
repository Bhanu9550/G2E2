
import { useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive'
import leaf_logo from "../../assets/leaf_logo.png";
import "./About.css";

const About = () => {
  const isMobileSize = useMediaQuery({ maxWidth: 450 })
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const boxRef = useRef(null);
  const cardsRef = useRef(null);
  const contentRef = useRef(null);
  const leafRef = useRef(null);


  useEffect(() => {
    const startWidth = isMobileSize ? 350 : 500;
    const startHeight = isMobileSize ? 350 : 500;
    const handleScroll = () => {
      const container = containerRef.current;
      const sticky = stickyRef.current;
      const box = boxRef.current;
      const cards = cardsRef.current;
      const content = contentRef.current;
      const leaf = leafRef.current;

      if (!container || !sticky || !box || !cards || !content || !leaf) return;

      const rect = container.getBoundingClientRect();
      const maxScroll = container.offsetHeight - window.innerHeight;

      let progress = -rect.top / maxScroll;
      progress = Math.max(0, Math.min(progress, 1));

      const shapeProgress = Math.min(progress / 0.45, 1);
      const easedShape = shapeProgress * shapeProgress * (3 - 2 * shapeProgress);
      
      const maxWidth = container.clientWidth;

      const width = startWidth + (maxWidth - startWidth) * easedShape;
     
      const maxHeight = sticky.clientHeight;
      const desiredHeight = startHeight + (maxHeight - startHeight) * easedShape;
      const height = Math.min( desiredHeight, maxHeight);
      const radius = 50 - easedShape * 42;

      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.borderRadius = `${radius}%`;

      const leafProgress = Math.min( progress / 0.65, 1);
      const leafY = (height - leaf.offsetHeight - 30) * leafProgress;
      leaf.style.transform = `translate(-50%, ${leafY}px)`;

      const contentProgress = Math.min(
        Math.max((progress - 0.25) / 0.25, 0),1 );
      content.style.opacity = contentProgress;
      content.style.transform = `translateY(${40 - contentProgress * 40}px)`;

      const cardProgress = Math.min(
        Math.max((progress - 0.5) / 0.5, 0), 1 );
      const maxCardMovement = Math.max(
        0, cards.scrollWidth - box.clientWidth + 100 );

      cards.style.transform = `translateX(${-maxCardMovement * cardProgress}px)`; };

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler,{ passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobileSize]);

  return (
    <>
      <section className="about-container" ref={containerRef}    >
        <div className="about-sticky" ref={stickyRef}>
          <div className="about-section" ref={boxRef}>
            <img ref={leafRef} className="about-leaf" src={leaf_logo} alt=""/>
            <div className="about-content" ref={contentRef}>
              <div className="about-heading">
                <h1>ABOUT</h1>
                <span>GLOBAL GREEN ECO ENERGY</span>

                <p>G2E2 is building a connected ecosystem of
                  sustainable energy solutions focused on creating
                  a cleaner and smarter future.
                </p>
              </div>

              <div className="cards-wrapper">
                <div className="about-cards" ref={cardsRef}>
                  <div className="about-card">
                    <div className="card-number">01</div>
                    <h3>Green Bell</h3>
                    <p>
                      Smart EV charging infrastructure designed
                      for the future of electric mobility.
                    </p>
                  </div>

                  <div className="about-card">
                    <div className="card-number">02</div>
                    <h3>Solar Energy</h3>
                    <p>Clean and efficient solar energy solutions
                      for homes, businesses and industries.
                    </p>
                  </div>

                  <div className="about-card">
                    <div className="card-number">03</div>
                    <h3>Green Infrastructure</h3>
                    <p>Sustainable infrastructure connecting
                      technology, energy and everyday life.
                    </p>
                  </div>

                  <div className="about-card">
                    <div className="card-number">04</div>
                    <h3>Smart Energy</h3>
                    <p>Intelligent energy systems built around
                      efficiency, connectivity and sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

