import React from "react";
// import {operators}

export const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="operator_button">{props.operators.char}</button>
      }
    </>
  );
};