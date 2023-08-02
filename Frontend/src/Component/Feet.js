import React from "react";
import Navbar from "./Navbar";
import img1 from "../asset/imgs/5.png";
import img2 from "../asset/imgs/1.png";
import img3 from "../asset/imgs/9.png";
import img4 from "../asset/imgs/11.png";
import Footer from "./Footer";
function Feet() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="heroimgbox">
        <p>
          ZEUS TRANSPORTATION OFFERS THE BEST SELECTION OF LUXURY VEHICLES TO
          GET YOU TO YOUR <br /> DESTINATION ON TIME.
        </p>
      </div>
      <div className="container">
        <div>
          <h1 className="text-center my-5 headtest  ">
            <span className="animate__rubberBand">SEDANS & SUVS</span>
          </h1>
        </div>
        <div className="row my-5">
          <div className="col-md-6 img-container">
            <img
              src={img1}
              className="img-fluid w-75 mx-auto justify-content-center d-flex"
              alt=""
            />
            <div className="inner-box">
              <div className="inner-text">
                <h4 className="  ">CADILLAC XTS</h4>
                <p className="">
                  Seats:3 <br /> Luggage:3 <br /> Amenities: Wifi <br />
                  Refreshments: Water
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 img-container">
            <img
              src={img2}
              alt=""
              className="img-fluid w-75 mx-auto justify-content-center d-flex"
            />{" "}
            <div className="inner-box">
              <div className="inner-text">
                <h4 className="  ">CADILLAC ESCALADE ESV</h4>
                <p className="">
                  Seats:3 <br /> Luggage:3 <br /> Amenities: Wifi <br />
                  Refreshments: Water
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 img-container">
            <img
              src={img1}
              alt=""
              className="img-fluid w-75 h-100 mx-auto justify-content-center d-flex"
            />
            <div className="inner-box">
              <div className="inner-text">
                <h4 className="  ">MERCEDES S</h4>
                <p className="">
                  Seats:3 <br /> Luggage:3 <br /> Amenities: Wifi <br />
                  Refreshments: Water
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 img-container">
            <img
              src={img2}
              alt=""
              className="img-fluid w-75 h-100 mx-auto justify-content-center d-flex"
            />
            <div className="inner-box">
              <div className="inner-text">
                <h4 className="  ">CADILLAC XTS</h4>
                <p className="">
                  Seats:3 <br /> Luggage:3 <br /> Amenities: Wifi <br />
                  Refreshments: Water
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Feet;
