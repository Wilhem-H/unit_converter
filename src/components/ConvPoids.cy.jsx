// import { describe, it, cy } from 'cypress/react';
import ConvPoids from './ConvPoids';
import { TableauKilos } from './TableauKilos';

describe('Test de ConvPoids', () => {
  it('Vérifie si les valeurs de result changent correctement', () => {
    cy.mount(<ConvPoids />);

    cy.get('input#kilos').type('10');
    cy.get('input#livres').should('have.value', '22.046');

    cy.get('input#livres').clear().type('25');
    cy.get('input#kilos').should('have.value', '11.3399');
  });
  it('Vérifie si le composant TableauKilos est correctement exporté', () => {
    cy.mount(<ConvPoids />);
    //cy.get('ConvPoids').should('contain', <TableauKilos />);
  
    //cy.mount(<TableauKilos />);

    // //cy.get('h3')
    //     .should('not.be.empty')
    //     .and(($p) => {
    //       expect($p).to.contain('Tableau des Kilos');
    //     });
  })
});
