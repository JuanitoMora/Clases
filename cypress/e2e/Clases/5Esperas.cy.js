///<reference types="cypress" />

const constants = require('../../support/constants');

describe('Esperas', () => {
    beforeEach('', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        cy.get('#user').type(`pushingit`);
        cy.get('input#pass').type('123456!');
        cy.contains('Log in').click();
        cy.contains('Waits').click();
        cy.get('[id="wait"]').dblclick();
    })

    it('Espera con wait', () => {
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')//timeout modificado en el config
        //solo busca al elemento 1 vez y ya, así trascurra el tiempo definido
    })

    it('Espera con timeout', () => {
        cy.get('#message', { timeout: constants.TIMEOUT }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')//timeout modificado en la variable
        //busca al elemento todas las veces posibles hasta que encuentre al elemento, sin que haya agotado el tiempo definido
    })

    it('Espera con timeout', () => {
        cy.get('#message', { timeout: constants.TIMEOUT * 2 }).should('have.text', 'You are a man of patience and have waited fifteen seconds')//timeout modificado en la variable
    })
});