  ///<reference types="cypress" />

describe('Selectores 2', () => {
    it('Encontrar elementos utilizando cssSelectors', () => {
        cy.visit('');
        cy.get('button');
        cy.get('[type="submit"]');
        cy.get('#user');
        cy.get('[id="user"]');
        cy.get('.password');
        cy.get('input.password');
        cy.get('input[id="pass"]');
        cy.get('[type^="sub"]'); // ^ para que el valor comience con x caracteres
        cy.get('[type*="bm"]'); // * para que el valor contenga ciertos caracteres
        cy.get('[type$="mit"]'); // $ para que el valor finalice con x caracteres
    })

    it("Encontrar elementos web utilizando contains", () => {
        cy.visit('');
        cy.contains('button[type="submit"]', 'regis', { matchCase: false });
        cy.contains('button[type="submit"]', 'Regis', { matchCase: true });
        cy.contains('p', "Hacer la comida");
    })

    it("Encontrar elementos web utilizando find", () => {
        cy.visit('');
        cy.get('form').find('input#user');
        cy.get('form').find('img');
    })

    it.only("Encontrar elementos web utilizando sibbling", () => {
        cy.visit('');
        cy.contains('span', 'Male').siblings('input').check({ force: true });
    })

    it.only("Encontrar elementos web utilizando parent", () => {
        cy.visit('');
        cy.get('[name="user"]').parent('div');
    })

    it.only("Encontrar elementos web utilizando children", () => {
        cy.visit('');
        cy.get('div[role="group"]').children('[name="user"]');
    })
})