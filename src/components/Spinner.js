import React from "react";
import spinner from "../images/Walk.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={spinner}
        alt="loading"
        style={{ height: "70px", margin: "10px 0" }}
      />
    </div>
  );
};

export default Spinner;
