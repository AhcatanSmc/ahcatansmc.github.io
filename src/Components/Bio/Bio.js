import React from "react";
import "../App/App.css";
import { Animated } from "react-animated-css";

const Bio = ({ onRouteChange }) => (
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
            <button className="Buttonstyle" onClick={() => onRouteChange("CV")}>
              CV
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
          <h1>About me</h1>
          <p>
            <b>
              My name is Natacha and I’m a digital creative looking for new
              opportunities.{" "}
            </b>
            <br />
            <br />
            I’m currently freelancing in between the universes of graphic
            design, social media, and web-development.
            <br />
            <br /> After a first academic background and work experience in the
            field of psychology, I have since a few years back decided to lean
            more towards my natural passion for arts & visual creation, and
            started sharpening my creative side of my personality.
            <br />
            <br />
            Natively at ease with all things digital and being an avid everyday
            learner, I thought at some point it was thus time to put down the
            psychology books, open up my laptop and get to work on my keyboard.
            I started teaching myself how to code, designing visuals with the
            Adobe software suite and making use of the last of social media
            tools & trends to create & grow communities around concepts of my
            own creation. Having gathered some substantial experience & skills
            since then, I felt at some point this was definitely the right path
            for me in my professional life.
            <br />
            <br />
            Though I have been solely focused on my creative side for some time
            now, I also like to see my previous expertise as a strength. Coming
            from a different background allowed me to have a fresh and
            alternative perspective on creative things. I’ve also specialized in
            personality testing as a psychologist, which allowed me to naturally
            have a better understanding of the human behavior and our perception of
            things, which can prove to be quite useful when designing visuals,
            interact with people on social media or in the field of UX.
            <br />
            <br />
            In an effort to constantly improve my knowledge and learn new things
            every day, as a native French-speaker, I keep on practicing my
            English daily, and never stop mastering new tricks in new graphic
            design and web development. I also take Japanese classes for my own
            interest and I plan to start training to improve my Dutch shortly.
            <br />
            <br />
            Storytelling and making ideas come to life hold no secret for me.
            Searching for someone that can build things up from the ground and
            make them shine? I think I can definitely be the person you’re
            looking for.
          </p>{" "}
          <br></br>
          <h1> More about my skills</h1>
          <h2> Digital Content Creator</h2>
          <p>
            {" "}
            It's been four months now that I've succesfully developped a
            community of 19K+ followers on Instagram, centered around a carefully
            crafted concept and visual identity that I’ve made from scratch, on
            which I’m active everyday. I create visual content ranging from
            photography to reels, IGTVs, stories and also AR filters developed
            with Spark AR. You can check everything out{" "}
            <a
              href="https://www.instagram.com/junespectacular/"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              <b>here</b>
            </a>
            . I also have partnerships with several brands and I create content
            for them.
          </p>
          <h2> Community Management </h2>
          <p>
            {" "}
            Due to my presence on social media, I also manage all things
            regarding my community entirely by myself. This includes concluding
            deals with brands, organisizing contests, and generally taking the
            best care of my followers for example.
          </p>
          <h2>Web Development</h2>
          <p>
            As a result from teaching myself how to code, I can create websites
            from zero. As an example, I’ve made this portfolio website entirely
            on my own. I've used React to develop it, Photoshop to work on its images
            and background, and Procreate for each of my handmade logos. I've also made a
            dozen of other projects in the context of my learning, among which I
            built a entire face recognition app using React, Node.js, and
            PostgresQL, that you can check out on my <a
              href="https://github.com/AhcatanSmc"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              <b>GitHub</b>
            </a>.
          </p>
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

export default Bio;
