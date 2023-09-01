import { useState } from "react";
import { distance } from "../utils/distance";
import { distValue } from "../utils/data";

import "./ConvDist.css";

export default function ConvDist() {
  const [outputResult, setOutputResult] = useState(0);
  const [inputResult, setInputResult] = useState(0);
  const [entries, setEntries] = useState("m");
  const [output, setOutput] = useState("m");
  const [value, setValue] = useState(0);

  const handleChangeOutput = (e) => {
    setValue(e.target.value);
    const result = distance(e.target.value, entries, output);
    setInputResult(Number(result.toFixed(4)));
  };

  const handleChangeInput = (e) => {
    setValue(e.target.value);
    const result = distance(e.target.value, entries, output);
    setOutputResult(Number(result.toFixed(4)));
  };

  const newEntries = (e) => {
    setEntries(e.target.value);
    const result = distance(value, e.target.value, output);
    setOutputResult(Number(result.toFixed(4)));
  };

  const newOutput = (e) => {
    setOutput(e.target.value);
    const result = distance(value, entries, e.target.value);
    setOutputResult(Number(result.toFixed(4)));
  };

  return (
    <div className="distContent">
      <h2>Distance</h2>
      <h3>Unit : </h3>
      <div className="distSelector">
        <div>
          <label id="inputSelect">In : </label>
          <select
            className="fontColor"
            name="inputSelect"
            id="inputSelect"
            onChange={(e) => setEntries(e.target.value)}
          >
            <option className="fontColor" value="">--Please choose an option--</option>
            {distValue.map((val) => (
              <option className="fontColor" key={Object.keys(val)[0]} value={Object.keys(val)[0]}>
                {Object.keys(val)[0]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label id="outputSelect">To : </label>
          <select
            className="fontColor"
            name="output"
            id="outputSelect"
            onChange={(e) => setOutput(e.target.value)}
          >
            <option className="fontColor" value="">--Please choose an option--</option>
            {distValue.map((val) => (
              <option className="fontColor" key={Object.keys(val)[0]} value={Object.keys(val)[0]}>
                {Object.keys(val)[0]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="distValue">
        <div className="distValue1">
          <label id="inputValue">Value : </label>
          <input
            className="fontColor"
            type="text"
            onChange={handleChangeInput}
            id="inputValue"
            // value={inputResult}
          />
        </div>
        <div className="distValue2">
          <label id="outputValue">Result : </label>
          <input
          className="outputValue"
            type="text"
            id="outputValue"
            onChange={handleChangeOutput}
            value={outputResult + " " + output}
          />
        </div>
      </div>
    </div>
  );
}
