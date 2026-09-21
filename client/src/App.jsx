import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <a href="#home"></a>

      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
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
