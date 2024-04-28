import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, BG } from "../images/images";
import { Button } from "../components/components";
import "../styles/routes.css";

const Intro = () => {
  return (
    <div
      className="initialPage"
      style={{
        width: "100vw",
        height: "90vh",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="column-center"
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={Logo}
          alt="MedLink"
          class="logo-name"
          style={{ width: "auto", height: "30vh" }}
        />

        <div className="tag-line">
          <div className="button-head row-center" style={{ gap: "1em" }}>
            <div className="login">
              <Button
                text="LOGIN"
                style={{ width: "auto", backgrround: "transparent" }}
              />
            </div>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
              <div className="register">
                <Button text="REGISTER" style={{ width: "auto" }} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
