import React from "react";
import img1 from "../asset/imgs/1.png";
import img2 from "../asset/imgs/2.png";
import img3 from "../asset/imgs/9.png";
import img4 from "../asset/imgs/4.png";
import img5 from "../asset/imgs/5.png";
import img6 from "../asset/imgs/6.png";
import img7 from "../asset/imgs/7.png";
import img8 from "../asset/imgs/8.png";
import { useNavigate } from "react-router-dom";

function Displyimg() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex bg-black ml-auto me-0  justify-content-end pe-5  py-3">
        <div className="ms-2 ">
          {/* full screen mode icon here */}
          <i
            class="fas fa-expand-arrows-alt text-light "
            style={{
              cursor: "pointer",
            }}
          ></i>
        </div>
        <div className="ms-2 ">
          {/* share icon here */}
          <div class="btn-group dropleft">
            <i
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="btn fas fa-share-alt text-light"
              style={{
                cursor: "pointer",
              }}
            ></i>
            <div class="dropdown-menu mt-4">
              <button class="dropdown-item " type="button">
                <a
                  className="text-black text-decoration-none"
                  href="https://www.facebook.com/"
                  target="_self"
                >
                  Share on Facebook
                </a>
              </button>
              <button class="dropdown-item " type="button">
                <a
                  className="text-black text-decoration-none"
                  href="https://twitter.com/"
                  target="_self"
                >
                  {" "}
                  Twitter
                </a>
              </button>
              <button class="dropdown-item " type="button">
                <a
                  className="text-black text-decoration-none"
                  href="https://www.instagram.com/"
                  target="_self"
                >
                  Pin it
                </a>
              </button>
              <button class="dropdown-item " type="button">
                {/* downlode image here */}
                <a
                  className="text-black text-decoration-none"
                  href={img1}
                  download={img1}
                >
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="ms-2 ">
          <i
            class="fas fa-times text-light"
            onClick={() => {
              navigate("/");
            }}
            style={{
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>
      <div className="bg-dark  ">
        <div
          id="carouselExampleControls"
          className=" bg-black carousel slide "
          style={{}}
          data-ride="carousel"
        >
          <div
            className="carousel-inner"
            style={{
              height: "100vh",
              margin: "auto",
            }}
          >
            <div className="carousel-item dimgtest active  ">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img1}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto  "
                alt="..."
              />
              <p className="mx-auto text-white text-center  ">
                2019 Mercedes Benz S ClassNclassName
              </p>
            </div>
            <div className="carousel-item dimgtest">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img2}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto"
                alt="..."
              />
              <p className="mx-auto text-white text-center">
                2021 Chevrolet Suburban
              </p>
            </div>
            <div className="carousel-item dimgtest">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img3}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto"
                alt="..."
              />
              <p className="mx-auto text-white text-center">
                2021 Chevrolet Suburban
              </p>
            </div>
            <div className="carousel-item dimgtest">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img4}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto"
                alt="..."
              />
              <p className="mx-auto text-white text-center">
                2019 Mercedes Benz Limo Sprinter
              </p>
            </div>
            <div className="carousel-item dimgtest">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img5}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto"
                alt="..."
              />
              <p className="mx-auto text-white text-center">
                2019 Mercedes Benz Limo Sprinter
              </p>
            </div>
            <div className="carousel-item dimgtest">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img6}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto"
                alt="..."
              />
              <p className="mx-auto text-white text-center">
                2023 Cadillac Escalade
              </p>
            </div>
            <div className="carousel-item dimgtest">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img7}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto"
                alt="..."
              />
              <p className="mx-auto text-white text-center">
                2018 Grech 25 Passenger Bus
              </p>
            </div>
            <div className="carousel-item dimgtest">
              <img
                style={{
                  cursor: "pointer",
                }}
                src={img8}
                onClick={() => {
                  navigate("/");
                }}
                className="d-block img-fluid mx-auto"
                alt="..."
              />
              <p className="mx-auto text-white text-center">
                This is dumy text
              </p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <i class="fas fa-arrow-left "></i>

            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <i class="fas fa-arrow-right "></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div>
        <span></span>
      </div>
    </>
  );
}

export default Displyimg;
