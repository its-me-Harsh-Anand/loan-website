import React, { useState } from "react"

function Navbar() {
  const [hidden, setHidden] = useState(true)

  return (
    <nav className="navbar navbar-expand-sm bg-white navbar-light sticky-top shadow">
      <div className="navbar">
        <a className="navbar-brand" href="/">
          <img
            src="assets/home/logo.svg"
            height={40}
            width={207}
            alt="logo"
            style={{ width: "90%", top: "0px" }}
            />
        </a>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setHidden(hidden ? false : true)}
        >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        // className="collapse navbar-collapse"
        className = {hidden ? "collapse navbar-collapse" : "collapse navbar-collapse show"}
        id="navbarResponsive"
        style={{ "margin-right": "20px" }}
        >
        <div className="navbar-nav ml-auto" style={{ "font-size": "16px" }}>
          <a
            className="nav-link navstyle nav-item"
            style={{ "font-family": "'Montserrat', sans-serif" }}
            href="/"
            >
            <b>Home</b>
          </a>
          <a
            className="nav-link navstyle nav-item"
            style={{ "font-family": "'Montserrat', sans-serif" }}
            href="/about-us"
            >
            <b>About Us</b>
          </a>
          <a
            className="nav-link navstyle nav-item"
            style={{
              "font-family": "'Montserrat', sans-serif",
              background: "#294767",
              padding: "5px 10px",
              color: "white",
              "border-radius": "5px",
            }}
            href="/emi-calculator"
            >
            <b>Emi Calculator</b>
          </a>
          <a
            className="nav-link navstyle nav-item"
            style={{ "font-family": "'Montserrat', sans-serif" }}
            href="/faq"
            >
            <b>FAQ</b>
          </a>
          <a
            className="nav-link navstyle nav-item"
            style={{ "font-family": "'Montserrat', sans-serif" }}
            href="/login"
            >
            <b>My Account</b>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
