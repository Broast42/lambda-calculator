import React from "react";

const NumberButton = (props) => {
  return (
    <button className="numbers">
      {props.text}
    </button>
    
  );
};

export default NumberButton;