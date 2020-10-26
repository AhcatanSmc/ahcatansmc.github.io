import React from "react";
import "../App.css";
import { Animated } from "react-animated-css";

const Logoleft = () => {
  return (
    <Animated
      animationIn="fadeInLeft"
      animationInDuration={1000}
      isVisible={true}
    >
      <div className="Logoleft">
        <p>
          <a href="http://natachacamus.design" className="link">
            Natacha Camus
          </a>
        </p>
      </div>
    </Animated>
  );
};

export default Logoleft;
