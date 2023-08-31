import { useState } from "react";
import { distance } from "../utils/distance";

export default function ConvDist() {
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    const result = distance(e.target.value, e.target.id);
    setResult(Number(result.toFixed(4)));
  };

  return (
    <div>
      <div>
        <label>valeur en mètre</label>
        <input
          type="text"
          onChange={handleChange}
          id="m"
          placeholder={result}
        />
      </div>
      <div>
        <label>valeur en pied</label>
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
