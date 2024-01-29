import React, { useState } from "react";
import AutosizeInput from "react-18-input-autosize";
import { findPairWithSum } from "./findPairWithSum";

const TwoNumbersSum = () => {
  const [numbersValue, setNumbersValue] = useState("");
  const [sumValue, setSumValue] = useState(null);

  function handleSumChange(value) {
    setSumValue(value);
  }

  function handleNumbersChange(value) {
    setNumbersValue(value);
  }

  function renderOutput() {
    try {
      return (
        <p className="output_color">
          // Output:{" "}
          {JSON.stringify(
            findPairWithSum(JSON.parse("[" + numbersValue + "]"), sumValue)
          )}
        </p>
      );
    } catch (error) {
      return (
        <p className="error_color">// ERROR: The input format is incorrect.</p>
      );
    }
  }

  return (
    <div className="wrapper">
      <h1>Two Number Sum</h1>
      <p>
        Esta función encuentra y devuelve un par de números del array de entrada
        que suman al valor objetivo. Si no se encuentra ningún par, devuelve un
        array vacío.
      </p>
      <div className="code_container">
        <p>
          <span className="const_color">const</span>
          <span className="var_color">numbers</span>
          <span className="equal_color">=</span>
          <span>[</span>
          <AutosizeInput
            type="text"
            placeholder="VALUES"
            value={numbersValue}
            onChange={(e) => handleNumbersChange(e.target.value)}
          />
          <span>]</span>
          <span>;</span>
        </p>
        <p>
          <span className="const_color">const</span>
          <span className="var_color">targetSum</span>
          <span className="equal_color">=</span>
          <AutosizeInput
            type="text"
            placeholder="SUM"
            value={sumValue}
            onChange={(e) => handleSumChange(e.target.value)}
          />
          <span>;</span>
        </p>
        <p>
          <span className="function_color">findPairWithSum</span>
          <span>(</span>
          <span>numbers,</span>
          <span>targetSum</span>);
        </p>
        {renderOutput()}
      </div>
    </div>
  );
};

export default TwoNumbersSum;
