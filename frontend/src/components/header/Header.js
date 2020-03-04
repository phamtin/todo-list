import React from "react";

import "./header.scss";
import Signout from "../logout/Signout";

const Header = () => {
  return (
    <div className="header">
      <h3> Todo App</h3>
      <Signout />
    </div>
  );
};

export default Header;
