import { useState } from "react";
import { volume } from "../utils/volume";
import { volValue } from "../utils/data";

import "./ConvDist.css";

export default function ConvVol() {
  const [outputResult, setOutputResult] = useState(0);
  const [inputResult, setInputResult] = useState(0);
  const [entries, setEntries] = useState("m");
  const [output, setOutput] = useState("m");
  const [value, setValue] = useState(0);

  const handleChangeOutput = (e) => {
    setValue(e.target.value);
    const result = volume(e.target.value, entries, output);
    setInputResult(Number(result.toFixed(4)));
  };

  const handleChangeInput = (e) => {
    setValue(e.target.value);
    const result = volume(e.target.value, entries, output);
    setOutputResult(Number(result.toFixed(4)));
  };

  const newEntries = (e) => {
    setEntries(e.target.value);
    const result = volume(value, e.target.value, output);
    setOutputResult(Number(result.toFixed(4)));
  };

  const newOutput = (e) => {
    setOutput(e.target.value);
    const result = volume(value, entries, e.target.value);
    setOutputResult(Number(result.toFixed(4)));
  };

  return (
    <div className="distContent">
      <h2>Volume</h2>
      <h3>Unit :</h3>
      <div className="distSelector">
        <div>
          <label>In : </label>
          <select name="inputSelect" id="inputSelect" onChange={newEntries}>
            <option value="">--Please choose an option--</option>
            {volValue.map((val) => (
              <option key={Object.keys(val)[0]} value={Object.keys(val)[0]}>
                {Object.keys(val)[0]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>To : </label>
          <select name="output" id="outputSelect" onChange={newOutput}>
            <option value="">--Please choose an option--</option>
            {volValue.map((val) => (
              <option key={Object.keys(val)[0]} value={Object.keys(val)[0]}>
                {Object.keys(val)[0]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="distValue">
        <div className="distValue1">
          <label>Valeur:</label>
          <input
            type="text"
            onChange={handleChangeInput}
            id="inputValue"
            // value={inputResult}
          />
        </div>
        <div className="distValue2">
          <label>Résultat :</label>
          <input
            type="text"
            id="outputValue"
            onChange={handleChangeOutput}
            value={outputResult}
          />
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
}
