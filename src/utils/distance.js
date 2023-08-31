export const distance = (value, unit1, unit2) => {
  const defaultValue = [
    { pied: 0.3048 },
    { yard: 0.9144 },
    { mille: 1609.344 },
    { inch: 0.0254 },
    { km: 1000 },
    { m: 1 },
    { dm: 0.1 },
    { cm: 0.01 },
    { mm: 0.001 },
  ];

  if (!unit2) {
    return unit1 === "m" ? value * 3.2808398950131 : value / 3.2808398950131;
  } else if (unit2) {
    const enterUnit = defaultValue.find((obj) => unit1 in obj); // recupère l'objet qui correspond à unit1 en m

    const exitUnit = defaultValue.find((obj) => unit2 in obj); // recupère l'objet qui correspond à unit2 en m

    const entrieInMetre = Object.values(enterUnit)[0] * value; // recupère valeure de unit2 en mètre et multiplie par la valeure d'entrée
    const outInMetre = Object.values(exitUnit)[0]; // recupère valeure de unit2 en mètre

    return entrieInMetre / outInMetre;
  }
};
