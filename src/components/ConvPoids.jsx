import { useState } from "react";
import { unitePoids } from "../utils/unitePoids";

export default function ConvPoids() {
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    const result = unitePoids(e.target.value, e.target.id);
    setResult(Number(result.toFixed(4)));
  };

  return (
    <div>
      <div>
        <label>valeur en kg</label>
        <input
          type="text"
          onChange={handleChange}
          id="kilos"
          placeholder={result}
        />
      </div>
      <div>
        <label>valeur en livre</label>
        <input
          type="text"
          id="livres"
          onChange={handleChange}
          placeholder={result}
        />
      </div>
    </div>
  );
}
