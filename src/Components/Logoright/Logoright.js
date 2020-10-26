import React from "react";
import "./Logoright.css";
import { Animated } from "react-animated-css";

const Logoright = () => {
  return (
    <Animated
      animationIn="fadeInRight"
      animationInDuration={1000}
      isVisible={true}
    >
      <div className="Logoright">
        <p>Digital Creative</p>
      </div>
    </Animated>
  );
};

export default Logoright;
