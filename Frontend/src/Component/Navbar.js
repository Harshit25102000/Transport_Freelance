import React from "react";
import logo from "../asset/Logo-1-PNG-with-transparnet.png";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className=" ">
      <nav
        className="navbar navbar-expand-lg "
        style={{
          background: "linear-gradient(#bf953f, #333333)",
          height: "130px",
        }}
      >
        <div className="container-fluid mynav">
          <div className="d-flex w-100 justify-content-center align-item-center  ">
            <div className="logoicon ">
              <img
                src={logo}
                alt=""
                style={{ width: "90px ", height: "50px", cursor: "pointer" }}
                className=" ms-4 animate__heartBeat   "
              />{" "}
              <div className="d-flex   justify-content-evenly">
                <div className="d-flex ms-3 my-3   ">
                  <a className="" aria-current="page" to="/">
                    <i
                      className="fab fa-facebook-f"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        fontSize: "12px",
                        backgroundColor: "#3b5998",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    ></i>
                  </a>
                  <a className="ms-2" aria-current="page" to="/">
                    <i
                      className="fab fa-twitter"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        fontSize: "12px",
                        backgroundColor: "#00acee",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    ></i>
                  </a>
                  <a className="ms-2" aria-current="page" to="/">
                    <i
                      className="fab fa-instagram"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        fontSize: "12px",
                        backgroundColor: "rgb(197, 54, 164)",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex w-100 justify-content-end ml-auto"
            style={{
              marginTop: "-56px",
            }}
          >
            <button
              className="navbar-toggler border-0 focus:outline-none shadow-none"
              type="button"
              data-bs-toggle="offcanvas" // Use offcanvas instead of collapse
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i
                className="fas fa-bars text-white"
                style={{
                  float: "right",
                  border: "none",
                  outline: "0",
                }}
              ></i>
            </button>
          </div>

          <Link className="navbar-brand  flogo " to="/">
            <img src={logo} alt="" className="logimg animate__heartBeat    "
              style={{
                marginRight: "-50px",
                zIndex: "1000",
              }}
            />
          </Link>{" "}
          <div className="w-50 justify-content-center d-flex  align-content-center">
            {" "}
          </div>
          {/* Remove the collapse class and use offcanvas class */}
          <div
            className="offcanvas offcanvas-start  w-75 bg-black d-flex "
            id="navbarSupportedContent"
            style={{
              marginRight: "50px",
            }}
          >
            <div className="offcanvas-header">
              <div
                style={{
                  marginLeft: "auto",
                }}
              >
                <i
                  className="fas fa-times text-white p-2"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{
                    fontSize: "20px",
                  }}
                ></i>
              </div>
            </div>

            <div className="offcanvas-body">
              <ul
                className="navbar-nav w-25   mb-2 mb-lg-0"
                style={{ justifyContent: "center" }}
              >
                {/* Move the logo outside the offcanvas */}

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <span
                      style={{
                        fontSize: "16px",
                        color:
                          window.location.pathname === "/" ? "Yellow" : "white",
                      }}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item ms-1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/fleet"
                  >
                    <span
                      style={{
                        fontSize: "16px",

                        color:
                          window.location.pathname === "/fleet"
                            ? "Yellow"
                            : "white",
                      }}
                    >
                      Fleet
                    </span>
                  </Link>
                </li>
                <li className="nav-item ms-1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    <span
                      style={{
                        fontSize: "16px",

                        color:
                          window.location.pathname === "/about"
                            ? "Yellow"
                            : "white",
                      }}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li className="nav-item ms-1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    <span
                      style={{
                        color:
                          window.location.pathname === "/contact"
                            ? "Yellow"
                            : "white",
                      }}
                    >
                      Contact
                    </span>
                  </Link>
                </li>
                <div className="d-flex w-50 ms-3 ">
                  <a className="flogo" aria-current="page" to="/">
                    <i
                      className="fab fa-facebook-f"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        fontSize: "12px",
                        backgroundColor: "#3b5998",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    ></i>
                  </a>
                  <a className="ms-2 flogo" aria-current="page" to="/">
                    <i
                      className="fab fa-twitter"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        fontSize: "12px",
                        backgroundColor: "#00acee",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    ></i>
                  </a>
                  <a className="ms-2 flogo" aria-current="page" to="/">
                    <i
                      className="fab fa-instagram"
                      style={{
                        cursor: "pointer",
                        color: "white",
                        fontSize: "12px",
                        backgroundColor: "rgb(197, 54, 164)",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    ></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
