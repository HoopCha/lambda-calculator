import React, {useState} from "react";
import {numbers} from "../../../data";
import {NumberButton} from "./NumberButton";

export const Numbers = props => {
  // STEP 2 - add the imported data to state
const [numbersState] = useState(numbers)

console.log(numbers)

  return (
    <div>
      <div className="numbers_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}

        {numbersState.map((numbers, index) => (
             <NumberButton key={index} numbers={numbers} number={index}/>
        ))}
      </div>
    </div>
  );
};