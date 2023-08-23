///<reference types="cypress" />

describe('Aserciones', () => {

    beforeEach('', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        cy.get('#user').type(`pushingit`);
        cy.get('input#pass').type('123456!');
        cy.contains('Log in').click();
        cy.contains('Waits').click();
    })
    it('Validar el titulo utilizando should', () => {
        cy.get('#title').should('include.text', "Wai");
    });

    it('Validar el titulo utilizando expect', () => {
        cy.get('#title').invoke('text').then(text => {
            expect(text).to.be.equal('Waits');
        })
    });

    it('Validar el titulo utilizando assert', () => {
        cy.get('#title').invoke('text').then(text => {
            assert.equal(text, 'Waits')
        })
    });

    it('Validar length', () => {
        const resultadoEsperado = 4
        cy.get('#title').should('have.length', 1).and('exist').invoke('text').should('have.length', 5);

        cy.get('#title').invoke('text').then(text => {
            expect(text, `expected characters to be ${resultadoEsperado} but found ${text}`).to.have.lengthOf(resultadoEsperado)
            assert.lengthOf(text, 5)
        });
    });

    it('Validar el color en el button', () => {
        cy.get('#title').should('have.css', 'color', 'rgb(51, 255, 255)')
    })

    it('Validar el attr en el button', () => {
        cy.get('#title').should('have.attr', 'id', 'title')
    })
});