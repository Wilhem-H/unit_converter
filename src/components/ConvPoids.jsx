import { useState } from "react";
import { unitePoids } from "../utils/unitePoids";
import { TableauKilos } from "./TableauKilos";

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
    <div>
      <div>
        <label>valeur en kg</label>
        <input
          type="text"
          id="kilos"
          value={kilos}
          onChange={handleKilosChange}
        />
      </div>
      <div>
        <label>valeur en livre</label>
        <input
          type="text"
          id="livres"
          value={livres}
          onChange={handleLivresChange}
        />
      </div>
      <TableauKilos />
    </div>
  );
}
