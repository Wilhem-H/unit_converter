import { weightValue } from "./data";

export const unitePoids = (value, unit1, unit2) => {
  const enterUnit = weightValue.find((obj) => unit1 in obj); // recupère l'objet qui correspond à unit1 en m

  const exitUnit = weightValue.find((obj) => unit2 in obj); // recupère l'objet qui correspond à unit2 en m

  const entrieInLitre = Object.values(enterUnit)[0] * value; // recupère valeure de unit2 en mètre et multiplie par la valeure d'entrée
  const outInLitre = Object.values(exitUnit)[0]; // recupère valeure de unit2 en mètre

  return entrieInLitre / outInLitre;
};
