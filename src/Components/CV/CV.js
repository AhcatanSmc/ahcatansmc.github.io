import React from "react";
import "../App/App.css";
import "./CV.css";
import { Animated } from "react-animated-css";

const CV = ({ onRouteChange }) => (
  <div>
    <div className="App">
      <div className="header">
        <Animated
          animationIn="fadeInDown"
          animationInDuration={1000}
          isVisible={true}
        >
          <div className="Button">
            <button
              className="Buttonstyle"
              onClick={() => onRouteChange("Mainpage")}
            >
              HOME
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
        <div className="Text Homepage">
          <h1>PROFESSIONAL EXPERIENCE</h1>
          <p> June 2020 - Present : </p> <hr></hr>
          <br />
          <p>
            {" "}
            <b>Content Creator & Community Manager (Freelance)</b> <br />
            <br />
            Creating visual identities, images, video, AR filters and other
            digital content. Developed a 20K community on Instagram in 7 months.
            Creating content for partner brands. Managing communities. This
            includes concluding deals with brands, organisizing contests, and
            generally taking the best care of followers.
          </p>{" "}
          <br></br>
          <p> May 2019 - Present : </p> <hr></hr>
          <p>
            {" "}
            <b>Web Developper (Freelance) </b> <br />
            <br /> Creating sites and apps from zero with React, Node.js, SQL.
          </p>{" "}
          <br />
          <p> October 2018 - Present : </p> <hr></hr>
          <p>
            {" "}
            <b>Specialised Educator </b> <br />
            <br /> Organising activities with mentally handicapped people.{" "}
          </p>{" "}
          <br />
          <p> August 2017 - Jun 2020 : </p> <hr></hr>
          <p>
            {" "}
            <b>Psychologist </b> <br /> <br></br> Taking care of residents with
            psychological issues.{" "}
          </p>
          <br />
          <h1>EDUCATION</h1>
          <p> 2019 - 2020 :</p> <hr></hr>
          <p>
            {" "}
            <b>Certification in Clinical Psychotherapy</b>{" "}
          </p>{" "}
          <br></br>
          <p> 2015 - 2017 :</p> <hr></hr>
          <p>
            {" "}
            <b>Master Degree in Clinical Psychology</b>{" "}
          </p>{" "}
          <br></br>
          <p> 2011 - 2015 :</p> <hr></hr>
          <p>
            {" "}
            <b>Bachelor Degree in Psychology and Educational Sciences </b>
          </p>{" "}
          <br></br>
          <h1> Other Certifications </h1>
          <p> • Complete Roadmap to Senior Web Developer Diploma - Udemy </p>
          <p> • The Complete Web Developer: Zero to Mastery - Udemy </p>{" "}
          <br></br>
          <h1> Skills </h1>
          <p> Adobe Creative Cloud • After Effects • Premiere Pro</p>
          <p>
            Photoshop • Illustrator • Indesign • Lightroom • Procreate • Spark
            AR
          </p>
          <p>
            HTML • CSS • Javascript • React.js • Node.js • Redux • SQL • Github
            • Office Suite
          </p>{" "}
          <br></br>
          <h1>Langages</h1>
          <p> French • Mother tongue </p>
          <p> English • Good knowledge </p>
          <p> Dutch • School knowledge </p>
          <p> Japanese • Basic (currently working on it)</p> <br></br>
          <h1>Hobbies</h1>
          <p>Photography • Music • Cinema • Drawing • Sports</p>
          <p>Tech & Geeky Stuff • Avid Everyday Learner</p>
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

export default CV;
