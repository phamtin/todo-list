import React from "react";

import "./backdrop.scss";

const Backdrop = ({ show, clicked }) => {
  return (
    <div
      className={`backdrop ${show ? "backdrop__show" : "backdrop__hide"}`}
      onClick={clicked}
    ></div>
  );
};

export default Backdrop;
