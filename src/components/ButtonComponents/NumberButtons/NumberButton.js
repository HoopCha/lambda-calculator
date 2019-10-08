import React from "react";



export const NumberButton = props => {
  var testNumber = 0;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */ 
      <button className="number_button" onClick={() => (testNumber = props.numbers)}>
      {props.numbers}
      </button>
      }
       </>
  );
};