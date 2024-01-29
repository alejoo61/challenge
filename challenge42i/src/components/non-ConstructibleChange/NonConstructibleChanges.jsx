import React, { useState } from "react";
import AutosizeInput from "react-18-input-autosize";
import { minChange } from "./minChange";

const NonConstructibleChanges = () => {
  const [coinsValue, setCoinsValue] = useState("");

  function handleCoinsChange(value) {
    setCoinsValue(value);
  }

  function renderOutput() {
    try {
      return (
        <p className="output_color">
          // Output:{" "}
          {JSON.stringify(minChange(JSON.parse("[" + coinsValue + "]")))}
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
      <h1>Non-Constructible Change</h1>
      <p>
        Esta función encuentra y devuelve el cambio mínimo que no se puede crear
        con el conjunto de monedas dado, luego itera sobre ellas acumulando el
        valor en currentMinChange hasta que encuentra una moneda que hace que no
        sea posible crear la siguiente cantidad.
      </p>
      <div className="code_container">
        <p>
          <span className="const_color">const</span>
          <span className="var_color">coins</span>
          <span className="equal_color">=</span>
          <span>[</span>
          <AutosizeInput
            type="text"
            placeholder="COINS"
            value={coinsValue}
            onChange={(e) => handleCoinsChange(e.target.value)}
          />
          <span>]</span>
          <span>;</span>
        </p>
        <p>
          <span className="function_color">minChange</span>
          <span>(</span>
          <span>coins</span>);
        </p>
        {renderOutput()}
      </div>
    </div>
  );
};

export default NonConstructibleChanges;
