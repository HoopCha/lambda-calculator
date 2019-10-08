import React, {useState} from "react";
import {operators} from "../../../data";
import {OperatorButton} from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

export const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorsState] = useState(operators)
  const [activeOperator, setActiveOperator] = useState("");
  console.log(activeOperator.operators)

  return (
    <div>
      <div className="operators_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

          {operatorsState.map((button, index) => (
            <OperatorButton 
            key={index} 
            operators={button}
            setActiveOperator={() => props.setOperateDisplay(button)}
            />
        ))}
      </div>
    </div>
  );
};