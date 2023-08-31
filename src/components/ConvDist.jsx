import { useState } from "react";
import { distance } from "../utils/distance";
import { distValue } from "../utils/data";

export default function ConvDist() {
  const [result, setResult] = useState(0);
  const [entries, setEntries] = useState("m");
  const [output, setOutput] = useState("pied");

  const handleChange = (e) => {
    const result = distance(e.target.value, entries, output);
    setResult(Number(result.toFixed(4)));
  };

  return (
    <div className="distContent">
      <div className="distInput">
        <label id="inputSelect">Choose a unit:</label>
        <select
          name="inputSelect"
          id="inputSelect"
          onChange={(e) => setEntries(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          {distValue.map((val, index) => (
            <option key={index} value={Object.keys(val)[0]}>
              {Object.keys(val)[0]}
            </option>
          ))}
        </select>

        <label id="inputValue">valeur:</label>
        <input
          type="text"
          onChange={handleChange}
          id="inputValue"
          placeholder={result}
        />
      </div>
      <div className="distOutput">
        <label id="outputSelect">Choose a unit:</label>
        <select
          name="outputSelect"
          id="outputSelect"
          onChange={(e) => setOutput(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          {distValue.map((val, index) => (
            <option key={index} value={Object.keys(val)[0]}>
              {Object.keys(val)[0]}
            </option>
          ))}
        </select>
        <label id="outputValue">valeur:</label>
        <input
          type="text"
          id="pieds"
          onChange={handleChange}
          placeholder={result}
        />
      </div>
    </div>
  );
}
