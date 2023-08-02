import React, { useState, useEffect } from "react";
import mail from "../asset/mailboximg.png";
import location from "../asset/location.png";
function ContactFormHome() {
  const [animatin1text, setAnimation1] = useState("");
  const [animation2text, setAnimation2] = useState("");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setAnimation1(
          "animate__animated animate__fadeInRight animate__delay-1s"
        );
        setAnimation2("animate__animated animate__fadeIn animate__delay-2s");
      } else {
        setAnimation1("");
        setAnimation2("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animatin1text, animation2text]);

  useEffect(() => {
    setRefresh(true);
  }, [animatin1text, animation2text]);

  // validation of input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState({
    name: "",
    email: "",
    message: "",
  });
  const validatename = () => {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    if (name !== "") {
      return true;
    }
    if (nameRegex.test(name)) {
      return true;
    } else {
      return false;
    }
  };
  const validateemail = () => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (email !== "") {
      return true;
    }
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };
  const validatemessage = () => {
    const messageRegex = /^[a-zA-Z0-9 ]{2,30}$/;
    if (message !== "") {
      return true;
    }

    if (messageRegex.test(message)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatename() && validateemail() && validatemessage()) {
      fetch("http://127.0.0.1:5000/submit_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            setName("");
            setEmail("");
            setMessage("");
            setWarning({
              name: "",
              email: "",
              message: "",
            });
            alert("Form submitted successfully");
            window.location.reload();
          } else {
            alert("Form not submitted, make sure you enter valid details");
            window.location.reload();
          }
        });
    } else {
      if (!validatename()) {
        setWarning({ ...warning, name: "enter valid name" });
      }
      if (!validateemail()) {
        setWarning({ ...warning, email: "enter valid email" });
      }
      if (!validatemessage()) {
        setWarning({ ...warning, message: "enter valid message" });
      }
    }
  };
  useEffect(() => {
    if (refresh) {
      if (validatename()) {
        setWarning({ ...warning, name: "" });
      }
      if (validateemail()) {
        setWarning({ ...warning, email: "" });
      }
      if (validatemessage()) {
        setWarning({ ...warning, message: "" });
      }
    }
  }, [name, email, message]);

  return (
    <div
      className="container w-75 pb-5"
      style={{
        marginTop: "120px",
      }}
    >
      <div className="row  my-3">
        <div className={`col-md-6 d-flex flex-column ${animation2text}`}>
          <div className="text-white">Ready to talk?</div>
          <div
            style={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "white",
            }}
          >
            Contact Us
          </div>
          <div className="text-white my-2">
            <img src={mail} style={{ width: "40px", height: "35px" }} alt="" />
            <span className="ms-1">info@zeustrans.com</span>
          </div>
          <div className="text-white my-2">
            <img
              src={location}
              style={{ width: "30px", height: "35px" }}
              alt=""
            />
            <span className="ms-1">105 Maxess Rd melville ,NY 11747</span>
          </div>
        </div>
        <div className={`col-md-6  ${animatin1text} `}>
          <form className={`text-white `}>
            <div className="form-group ">
              <input
                type="text"
                className="form-control focus:outline-none shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid white",
                  color: "white",
                  borderRadius: "0px",
                }}
              />
              {/* if warning then disply warning */}
              {warning.name && (
                <div className="text-danger">{warning.name}</div>
              )}
            </div>
            <div className="form-group my-3">
              <input
                type="email"
                className="form-control focus:outline-none shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Valid EMail"
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid white",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  color: "white",
                  borderRadius: "0px",
                }}
              />
              {/* if warning then disply warning */}
              {warning.email && (
                <div className="text-danger">{warning.email}</div>
              )}
            </div>
            {/* textarea field here  */}
            <div className="form-group my-3">
              <textarea
                className="form-control focus:outline-none shadow-none"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid white",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  color: "white",
                  borderRadius: "0px",
                }}
              ></textarea>
              {/* if warning then disply warning */}
              {warning.message && (
                <div className="text-danger">{warning.message}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn submit-btn shadow-none "
              onClick={handleSubmit}
              style={{
                background: " linear-gradient(to right, #bf953f, #fcf6ba)",
                color: "black",
                fontWeight: "700",
                fontSize: "1.25rem",
                padding: "0.5rem 1.5rem",
                borderRadius: "22px",
                marginTop: "1rem",
                border: "none",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactFormHome;
