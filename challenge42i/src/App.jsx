import { useState } from "react";

import "./App.css";

import NonConstructibleChanges from "./components/non-ConstructibleChange/NonConstructibleChanges";
import TwoNumbersSum from "./components/twoNumberSum/TwoNumbersSum";

function App() {
  return (
    <>
      <TwoNumbersSum />
      <NonConstructibleChanges />
    </>
  );
}

export default App;
