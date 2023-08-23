 ///<reference types="cypress" />

describe("Fixture", () => {
    let datos;

    before('Before', () => {
        cy.fixture('archivoFixture').then(archivoFixtureParametro => {
            datos = archivoFixtureParametro;
        })
    })

    beforeEach('BeforeEach', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        cy.get('#user').type(`pushingit`);
        cy.get('input#pass').type('123456!');
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
    });

    it('Deberia permitir completar una tarea', () => {
        cy.log('test1')
        cy.get('input#task').type(datos.primerTest.tarea1);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(datos.primerTest.tarea2);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(datos.primerTest.tarea3);
        cy.get('button#sendTask').click();
        cy.contains('p', datos.primerTest.tarea1).click();
    });

    it('Deberia permitir completar una tarea 2', () => {
        cy.get('input#task').type(datos.segundoTest.tarea1);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(datos.segundoTest.tarea2);
        cy.get('button#sendTask').click();
    });

    afterEach('After each', () => {
        cy.log('After Each')
    })

    after('After', () => {
        cy.log("After")
    })
});