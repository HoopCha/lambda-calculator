import React, {useState} from "react";
import { numbers } from "../../../data";
import {NumberButton} from "./NumberButton";

export const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numberButton] = useState(numbers);
  const [activeNumber, setActiveNumber] = useState("0");
  console.log(activeNumber.button)
  return (
    <div className="numberButtonContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberButton.map((button, index) => (
        <NumberButton
          key={index}
          button={button}
          setActiveNumbers={() => props.setNumberDisplay(button)}
        />
      ))}
    </div>
  );
};
