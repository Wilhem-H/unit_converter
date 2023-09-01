import { volume } from "./volume";
import { describe, it, expect } from "@jest/globals";

describe("convertisseur de volume", () => {
  it("doit convertir 1 l en  0.2199 gallons UK", () => {
    expect(volume(1, "l", "gallon (UK)")).toBeCloseTo(0.2199);
  });
});
