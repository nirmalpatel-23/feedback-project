import React from "react";
import spinnerimg from "../assets/spinnerimg.gif";

function Spinner() {
  return (
    <img
      src={spinnerimg}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
