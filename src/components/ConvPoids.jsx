import { useState } from "react";
import { unitePoids } from "../utils/unitePoids";
import "./ConvDist.css";

export default function ConvPoids() {
  const [kilos, setKilos] = useState();
  const [livres, setLivres] = useState();

  const handleKilosChange = (e) => {
    const value = e.target.value;
    setKilos(value);
    const poundsValue = unitePoids(value, "kilos");
    setLivres(Number(poundsValue.toFixed(4)));
  };

  const handleLivresChange = (e) => {
    const value = e.target.value;
    setLivres(value);
    const kilosValue = unitePoids(value, "livres");
    setKilos(Number(kilosValue.toFixed(4)));
  };

  return (
    <div className="distContent">
      <h2>weight</h2>
      <h3>Unit :</h3>
      <div className="distSelector">
        <label>Value in kg : </label>
        <input
          className="fontColor"
          type="text"
          id="kilos"
          value={kilos}
          onChange={handleKilosChange}
        />
      </div>
      <div>
        <label>Value in pounds : </label>
        <input
          className="fontColor"
          type="text"
          id="livres"
          value={livres}
          onChange={handleLivresChange}
        />
      </div>
    </div>
  );
}
