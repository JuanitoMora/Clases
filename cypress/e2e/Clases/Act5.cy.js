///<reference types="cypress" />
const constants = require('../../support/constants');

describe('Actividad 5', () => {

    const mensaje1='You have waited for ten seconds, CONGRATULATIONS';
    const mensaje2='You are a man of patience and have waited fifteen seconds';

    beforeEach('Antes De', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
        cy.get(`[id*='user_pushingit']`).should('exist');
        cy.get('#waitslink').click();
        cy.get('button#wait').dblclick();
    });

    it("Validar que el nombre del boton retorne a Button", () => {
        cy.get('button#wait',{timeout:constants.TIMEOUT}).should('have.text','Button');
    })

    it("Validar mensaje informativo luego de la primera espera", () => {
        cy.get('#colorChangeMessage',{timeout:constants.TIMEOUT}).should('have.text','Wait 5 more seconds');
    })

    it("Validar que el mensaje se actualice luego de 5 seg más", () => {
        cy.get('#message',{timeout:constants.TIMEOUT}).should('have.text',mensaje1);
        cy.get('#message',{timeout:constants.TIMEOUT*2}).should('have.text',mensaje2);
    })
});
