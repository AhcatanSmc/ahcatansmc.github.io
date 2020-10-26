import React from "react";
import "./Nav.css";

import Logoleft from "../Logoleft/Logoleft";
import Logoright from "../Logoright/Logoright";

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <Logoleft className="logoleft" />
        <Logoright className="logoright" />
      </div>
    </div>
  );
};

export default Nav;
