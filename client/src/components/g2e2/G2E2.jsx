import { motion } from "framer-motion";
import { FaSolarPanel, FaBolt, FaLayerGroup, FaFlag } from "react-icons/fa";
import "./G2E2.css";

const solutions = [
  {
    Icon: FaSolarPanel,
    title: "Complete Renewable Energy",
    desc: "From solar power systems to EV charging and energy management, G2E2 provides reliable and eco-friendly solutions designed for homes, businesses and industries.",
  },
  {
    Icon: FaBolt,
    title: "Make Energy Work for You",
    desc: "Turn renewable energy into long-term value. Reduce energy costs, improve efficiency and create opportunities to earn through smart energy solutions.",
  },
  {
    Icon: FaLayerGroup,
    title: "Multiple Vendors. One Platform",
    desc: "Access solutions from multiple trusted vendors through one ecosystem, giving you more choices for technology, pricing, installation and support.",
  },
  {
    Icon: FaFlag,
    title: "Made in India. Built for the Future.",
    desc: "Supporting Indian innovation and sustainable development with renewable energy solutions designed to contribute to a cleaner and greener India.",
  },
];

const G2E2 = () => {
  return (
    <section className="g2e2-section">
      {/* Header */}
      <div className="g2e2-header">
        <div className="logo-container">
          <img src="./favicon.png" alt="G2E2" className="logo" />
          <h2>G2E2 Renewable Energy</h2>
        </div>
        <p className="tagline">
          Eco-friendly energy solutions for a cleaner, smarter future.
        </p>
      </div>

      <h1 className="main-heading">Smart Energy Solutions Start Here</h1>

      <div className="solutions-container">
        {solutions.map((item, index) => (
          <motion.div
            key={item.title}
            className="solution-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon */}
            <motion.div
              className="icon-wrapper"
              initial={{ x: 60, opacity: 0.7 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
            >
              <item.Icon className="solution-icon" />
            </motion.div>

            <div className="content">
              <h3 className="solution-title">{item.title}</h3>
              <p className="solution-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default G2E2;
