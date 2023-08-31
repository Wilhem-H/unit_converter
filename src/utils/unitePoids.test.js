// import { describe, it, expect } from "@jest/globals";
import { unitePoids } from "./unitePoids";

describe("convertisseur de Poids", () => {
  it("doit convertir des kilos en livres", () => {
    expect(unitePoids(1, "kilos")).toBeCloseTo(2.2046, 4);
    expect(unitePoids(10, "kilos")).toBeCloseTo(22.046, 4);
  });
  it("doit convertir des livres en kilos", () => {
    expect(unitePoids(1, "livres")).toBeCloseTo(0.4536, 4);
  });
});
