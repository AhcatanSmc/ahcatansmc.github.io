import React from "react";
import "../App/App.css";
import "./Mainpage.css";
import { Animated } from "react-animated-css";

const Mainpage = ({ onRouteChange }) => (
  <div>
    <div className="App">
      <div className="header">
        <Animated
          animationIn="fadeInDown"
          animationInDuration={1000}
          isVisible={true}
        >
          <div className="Button">
            <button className="Buttonstyle" onClick={() => onRouteChange("CV")}>
              CV
            </button>
            <button
              className="Buttonstyle"
              onClick={() => onRouteChange("Bio")}
            >
              BIO
            </button>
            <button
              className="Buttonstyle"
              onClick={() => onRouteChange("Contact")}
            >
              CONTACT
            </button>
          </div>
        </Animated>
        <div className="Homepage">
          <h1 className="Title">Hi, my name is Natacha</h1>
          <h2 className="Title">& I'm a Digital Creative.</h2>
          <img
            src={require("../../Images/ncpicture.jpg")}
            className="App-picture"
            alt="pictureNC"
          />
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/natacha-camus-a70a10106/"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <img
              class="Socials-icons"
              src={require("../../Images/linkedin.png")}
              alt="linkedin-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/junespectacular/"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <img
              class="Socials-icons"
              src={require("../../Images/insta.png")}
              alt="insta-icon"
            />
          </a>
          <a
            href="https://github.com/AhcatanSmc"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <img
              class="Socials-icons"
              src={require("../../Images/github.png")}
              alt="github-icon"
            />
          </a>
          <a
            href="mailto:natacha.camus@hotmail.com"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <img
              class="Socials-icons"
              src={require("../../Images/mail.png")}
              alt="mail-icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Mainpage;
