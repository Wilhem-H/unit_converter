import { distance } from "./distance";
import { describe, it, expect } from "@jest/globals";

describe("convertisseur de distance", () => {
  it("doit convertir 1 m en 3.2808 pieds", () => {
    expect(distance(1, "m")).toBeCloseTo(3.2808);
  });
  it("doit convertir 1 pieds en 0.3048 m", () => {
    expect(distance(1, "pied")).toBeCloseTo(0.3048);
  });
  it("doit convertir 1 m en 1.0936 yard", () => {
    expect(distance(1, "m", "yard")).toBeCloseTo(1.0936);
  });
  it("doit convertir 1 mille en 63360 inches", () => {
    expect(distance(1, "mille", "inch")).toBeCloseTo(63360);
  });
});
