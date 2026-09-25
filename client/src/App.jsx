import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Founders from "./pages/founders/Founders";
import Location from "./pages/locations/Location";
import EnergyOrbit from "./components/energyOrbit/EnergyOrbit"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
      <section id="home"></section>

      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="founders">
          <Founders />
        </section>

        <section id="services">
          <Services />
        </section>
        
        <section id="branches">
          <Location />
        </section>

        <section>
          <EnergyOrbit />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
