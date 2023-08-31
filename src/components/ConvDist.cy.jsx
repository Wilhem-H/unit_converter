// import { describe, it, cy } from "cypress/react";
import ConvDist from "./ConvDist";

describe("<ConvDist />", () => {
  it("renders", () => {
    cy.mount(<ConvDist />);

    cy.get("input#inputSelect").select("m");
    cy.get("input#inputValue").type("10");
    cy.get("input#outputSelect").select("m");
    cy.get("input#outputValue").should("have.value", "10");

    cy.get("input#inputValue").clear();
  });
});
