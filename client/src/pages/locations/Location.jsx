import "./Location.css";

const locations = [
  {
    id: 1,
    city: "Vijayawada",
    state: "Andhra Pradesh",
    description:
      "Our Vijayawada office connects our team with customers and partners across the region.",
    mapQuery: "Vijayawada, Andhra Pradesh",
  },
  {
    id: 2,
    city: "Nellore",
    state: "Andhra Pradesh",
    description:
      "Our Nellore office supports our growing operations and clean-energy initiatives.",
    mapQuery: "Nellore, Andhra Pradesh",
  },
  {
    id: 3,
    city: "Eluru",
    state: "Andhra Pradesh",
    description:
      "Our Eluru office helps us expand our clean-energy presence across the region.",
    mapQuery: "Eluru, Andhra Pradesh",
  },
];

function Location() {
  return (
    <section className="location-section">

      {/* Section heading */}

      <div className="location-heading">
        <p>OUR LOCATIONS</p>

        <h2>
          Find us <span>near you</span>
        </h2>
      </div>


      {/* Location Cards */}

      <div className="location-cards">

        {locations.map((location, index) => (

          <div
            className="location-card"
            key={location.id}
            style={{
              top: `${100 + index * 25}px`,
              zIndex: index + 1,
            }}
          >

            {/* LEFT CONTENT */}

            <div className="location-content">

              {/* <span className="location-number">
                0{location.id}
              </span> */}

              <h2>{location.city}</h2>

              <h4>{location.state}</h4>

              <p>{location.description}</p>

              <button className="location-button">
                Get Directions
                <span>↗</span>
              </button>

            </div>


            {/* RIGHT MAP */}

            <div className="location-map">

              <iframe
                title={`${location.city} office location`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  location.mapQuery
                )}&output=embed`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-label">
                <span className="map-dot"></span>
                {location.city}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Location;