import React from "react";
import logo from "../asset/Logo-1-PNG-with-transparnet.png";
function Footer() {
  return (
    <div
      className="container-fluid outer pb-3 footerheight "
      style={{ backgroundColor: "#333333", alignContent: "center", justifyContent: "center", paddingTop: "50px" }}
    >
      <div
        className="row  container mx-auto text-white "
        style={{
          alignItems: "center",
        }}
      >
        <div className="col-md-4 phonemode2 my-2">
          <img
            src={logo}
            className="headerlogo  justify-content-center d-flex align-content-center mx-auto"
            alt=""
          />
        </div>
        <div className="col-md-4 ">
          <p className="footertext w-50 mx-auto md:w-100">
            Live 24/7 Dispatch
            <br /> Live radar tracking of flights <br />
            Greeters & Coordinators upon request
            <br /> Customized notifications of chauffeur status <br />
            Late model vehicles with WIFI & refreshments
          </p>
        </div>
        <div className="col-md-4  phonemode1">
          <img
            src={logo}
            className="headerlogo  justify-content-center d-flex align-content-center mx-auto"
            alt=""
          />
        </div>
        <div className="mt-5 col-md-4 sicons">
          <ul className="d-flex text-decoration-none">
            <li className="nav-item  ">
              <a className="nav-link active" aria-current="page" href="#">
                <i
                  className="fab fa-facebook-f"
                  style={{
                    color: "#f17c0e ",
                    fontSize: "20px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i
                  className="fab fa-twitter"
                  style={{
                    color: "#f17c0e ",
                    fontSize: "20px",

                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i
                  className="fab fa-instagram"
                  style={{
                    color: "#f17c0e ",
                    fontSize: "20px",
                    // backgroundColor: "rgb(197, 54, 164)",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="text-white text-center bottomtext  " >
        <span style={{ color: "gold" }}>Website Templates</span>{" "}
        <span> created with </span>
        <span style={{ color: "gold" }}> Website Builder .</span>
      </div>
    </div>
  );
}

export default Footer;
