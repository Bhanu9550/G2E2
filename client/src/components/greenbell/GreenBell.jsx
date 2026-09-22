import { motion } from "framer-motion";
import {
  FaChargingStation,
  FaLeaf,
  FaBolt,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import "./GreenBell.css";

const features = [
  { Icon: FaChargingStation, text: "EV Charging Stations" },
  { Icon: FaLeaf, text: "Clean Energy" },
  { Icon: FaBolt, text: "Smart Charging" },
  { Icon: FaShieldAlt, text: "Safe & Reliable" },
  { Icon: FaGlobe, text: "Sustainable Tomorrow" },
];

const GreenBell = () => {
  return (
    <>
      <section className="greenbell">
        <div className="greenbell-glow greenbell-glow-1"></div>
        <div className="greenbell-glow greenbell-glow-2"></div>

        <div className="greenbell-card">
          {/* Globe */}
          <motion.div
            className="greenbell-globe"
            initial={{ y: -120, opacity: 0, scale: 0.85 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src="/globeimg.png"
              alt="Global EV Network"
              className="globe-image"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="greenbell-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="greenbell-brand">
              <div className="logo-wrapper">
                <img src="/greenbelllogo.jpeg" alt="Green Bell" />
              </div>
              <h2>Green Bell</h2>
            </div>

            <span className="greenbell-label">EV CHARGING STATION</span>

            <h1>
              Smart Charging.
              <br />
              <span>Sustainable Future.</span>
            </h1>

            <p className="greenbell-description">
              Smart and sustainable EV charging infrastructure designed to power
              the future of clean mobility.
            </p>

            {/* Features */}
            <div className="greenbell-features">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="greenbell-feature"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                >
                  <feature.Icon className="feature-icon" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GreenBell;
