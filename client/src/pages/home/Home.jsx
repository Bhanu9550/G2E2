import { useEffect, useState } from 'react'
import hero_one from "../../../../assets/hero_one.png"
import hero_two from "../../../../assets/hero_two.png"
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: hero_one,
      position: "left",
      animation: "from-right",
      title: "Green Bell",
      description:
        "Building a cleaner future with accessible EV charging solutions.",
      button: "Explore Green Bell"
      
    },
    {
      image: hero_two,
      position: "right",
      animation: "from-left",
      title: "Powering a Greener Future",
      description:
        "Building a sustainable ecosystem through renewable energy, clean mobility and eco-friendly businesses.",
      button: "Explore Our Ecosystem"
    }
  ]
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  const slide = slides[currentSlide]
  return (
    <>
      <section className="hero-section">
        <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }} >
          <div className="hero-overlay"></div>
          <div key={currentSlide} className={`hero-content ${slide.position} ${slide.animation}`} >
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button>{slide.button}</button>
          </div>
          <button className="carousel-btn prev" onClick={prevSlide} >❮</button>
          <button className="carousel-btn next" onClick={nextSlide} >❯</button>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button key={index} className={ currentSlide === index   ? "dot active"   : "dot" } onClick={() => setCurrentSlide(index)} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;