import React, { useEffect } from "react";
import Navbar from "./Component/Navbar";
import "./App.css";

import Svg2 from "./asset/newimg/2.png";
import Svg1 from "./asset/newimg/1.png";
import Svg3 from "./asset/newimg/3.png";
import Svg4 from "./asset/newimg/4.png";
import Svg5 from "./asset/newimg/5.png";
import Svg6 from "./asset/newimg/6.png";
import CarSlider from "./Component/CarSlider";
import ContactFormHome from "./Component/ContactFormHome";
import Footer from "./Component/Footer";

function Home() {
  const [animation, setAnimation] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setAnimation("animate__animated animate__zoomIn ");
      } else {
        setAnimation("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div className="">
        <div className="container-fluid homeimge d-flex flex-column justify-content-center ">
          <h1 className="hometext animate__slideInDown">
            TRAVEL IN STYLE <br /> ON TIME
          </h1>
          <p className="hometext2">
            Travel in style with NYC’s Best fleet of Suv's, Sedans, limousines,
            Coaches and Sprinters. Our luxurious vehicles are perfect for all
            occasions; no matter the size. We've got you covered may it be for
            airport transfers to hourly charters, special events such as
            weddings, bachelor/bachelorette parties and much more. Let us worry
            about the driving while you kick back and relax.
          </p>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundColor: "#000000",
        }}
      >
        <div
          className="container "
          style={{
            width: "73%",
          }}
        >
          <div className="row  ">
            <div className="col-md-4 d-flex flex-column mt-5">
              <div className="mx-auto svgimg animate__zoomIn">
                <img src={Svg1} className={` img-fluid  ${animation}`} alt="" />
              </div>
              <div className="text-center mt-3 headtext text-white">
                SPECIAL EVENT
              </div>
              <div>
                <p
                  className="text-center "
                  style={{ color: "#999999 ", width: "73%", margin: "auto" }}
                >
                  Whether it’s a night out, a bachelor/bachelorette party, going
                  to and from a club, or sporting event, Zeus Transportation has
                  the best vehicles for the occasion.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5 ">
              <div className="mx-auto svgimg">
                <img src={Svg2} className={` img-fluid  ${animation}`} alt="" />
              </div>
              <div className="text-center mt-3 headtext text-white ">
                CORPORATE EVENTS
              </div>
              <div className="mx-auto ">
                <p
                  className="text-center "
                  style={{ color: "#999999 ", width: "73%", margin: "auto" }}
                >
                  Transportation is made easy with luxury service from Zeus
                  Transportation. Our fleet of sedans, SUVs, and vans, are ready
                  to assist you with all of your corporate travel needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="mx-auto svgimg">
                <img src={Svg3} className={` img-fluid  ${animation}`} alt="" />
              </div>
              <div className="text-center mt-3 headtext  text-white">
                VIP PROTECTION
                <br /> & ESCORTS
              </div>
              <div className="mx-auto ">
                <p
                  className="text-center "
                  style={{ color: "#999999 ", width: "73%", margin: "auto" }}
                >
                  VIP Protection & Police Escorts are available. Our Services
                  utilize Peace Officers from all around the name. Services can
                  be by undercover and/or fully uniformed officers.
                </p>
              </div>
            </div>
          </div>
          <div className="row " style={{ marginTop: "200px" }}>
            <div className="col-md-4 d-flex flex-column">
              <div className="mx-auto mt-2 svgimg">
                <img src={Svg4} className={` img-fluid  ${animation}`} alt="" />
              </div>
              <div className="text-center  headtext text-white ">
                WORLDWIDE SERVICES
              </div>
              <div>
                <p
                  className="text-center "
                  style={{ color: "#999999 ", width: "73%", margin: "auto" }}
                >
                  Zeus Transportation partners with affiliates around the world
                  to offer a network of trusted car service providers for our
                  clients in nearly every city worldwide. Serving 500+ cities
                  around the globe.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mx-auto mt-2 svgimg">
                <img
                  src={Svg5}
                  // style={{ marginBottom: "20px" }}
                  className={` img-fluid  ${animation}`}
                  alt=""
                />
              </div>
              <div className="text-center   headtext text-white">
                AIRPORT TRANSPORTATION
              </div>

              <div className="mx-auto ">
                <p
                  className="text-center "
                  style={{ color: "#999999 ", width: "73%", margin: "auto" }}
                >
                  Transportation is made easy with luxury service from Zeus
                  Transportation. Our fleet of sedans, SUVs, and vans, are ready
                  to assist you with all of your corporate travel needs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mx-auto mt-2 svgimg">
                <img src={Svg6} className={` img-fluid  ${animation}`} alt="" />
              </div>
              <div className="text-center  headtext  text-white">
                MEET & GREET
              </div>
              <div className="mx-auto ">
                <p
                  className="text-center "
                  style={{ color: "#999999 ", width: "73%", margin: "auto" }}
                >
                  Our Chauffeurs will greet you in baggage claim with a name
                  sign and a welcoming smile. They will assist with any luggage
                  and escort you to your awaiting Zeus Transportation vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ marginTop: "200px" }}>
          <CarSlider />
        </div>
        <div style={{ marginTop: "100px" }}>
          <ContactFormHome />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
