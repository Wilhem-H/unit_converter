import { distValue } from "./data";

export const distance = (value, unit1, unit2) => {
  if (!unit2)
    return unit1 === "m" ? value * 3.2808398950131 : value / 3.2808398950131;

  const enterUnit = distValue.find((obj) => unit1 in obj); // recupère l'objet qui correspond à unit1 en m

  const exitUnit = distValue.find((obj) => unit2 in obj); // recupère l'objet qui correspond à unit2 en m

  const entrieInMetre = Object.values(enterUnit)[0] * value; // recupère valeure de unit2 en mètre et multiplie par la valeure d'entrée
  const outInMetre = Object.values(exitUnit)[0]; // recupère valeure de unit2 en mètre

  return entrieInMetre / outInMetre;
};
