import "./EnergyOrbit.css";

function EnergyOrbit() {
    return (
        <section className="energy-orbit-section">


            <div className="energy-orbit-title">
            </div>
            <div className="energy-orbit-title-inner">
                <h3>INNOVATION</h3>
                <h1>G2E2 Group</h1>
                <span>Driving Innovation </span>
                <span>Across INDIA</span>
            </div>
            <div className="energy-orbit">

                <div className="energy-center">

                    <div className="center-glow"></div>

                    <div className="center-logo">
                        <img
                            src="/main-logo.png"
                            alt="Global Green Eco Energy"
                        />
                    </div>

                </div>


                <div className="inner-orbit">

                    <div className="inner-orbit-path"></div>

                    <div className="leaf-orbit-item">

                        <img
                            src="./leaf.png"
                            alt="Eco leaf"
                        />

                    </div>

                </div>

                <div className="outer-orbit">

                    <div className="outer-orbit-path"></div>


                    {/* EV COMPANY LOGO */}

                    <div className="ev-logo-orbit">

                        <div className="orbit-badge">

                            <img
                                src="./ev-logo.png"
                                alt="A Green Bell EV"
                            />

                        </div>

                    </div>


                    {/* CHARGING PLUG */}

                    <div className="plug-orbit">

                        <div className="orbit-badge plug-badge">

                            <img
                                src="./charging-plug.png"
                                alt="EV Charging"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default EnergyOrbit;
