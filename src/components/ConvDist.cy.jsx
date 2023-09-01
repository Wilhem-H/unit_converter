import ConvDist from "./ConvDist";

describe("<ConvDist />", () => {
  it("renders", () => {
    cy.mount(<ConvDist />);

    cy.get("#inputSelect").select("m");
    cy.get("#outputSelect").select("m");
    cy.get("#inputValue").type("10");
    cy.get("#outputValue").should("have.value", "10");
    cy.get("#inputValue").clear();
  });

  it("should convert mille to yard", () => {
    cy.mount(<ConvDist />);

    cy.get("#inputSelect").select("mille");
    cy.get("#outputSelect").select("yard");
    cy.get("#inputValue").type("10");
    cy.get("#outputValue").should("have.value", "17600");
    cy.get("#inputValue").clear();
  });

  it("should convert km to mille after convert km to m ", () => {
    cy.mount(<ConvDist />);

    cy.get("#inputSelect").select("km");
    cy.get("#outputSelect").select("mille");
    cy.get("#inputValue").type("10");
    cy.get("#outputValue").should("have.value", "6.2137");
    cy.get("#outputSelect").select("m");
    cy.get("#outputValue").should("have.value", "10000");
  });
});
