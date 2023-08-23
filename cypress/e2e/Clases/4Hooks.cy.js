 ///<reference types="cypress" />

describe("Hooks", () => {
    let datos;

    before('Before', () => {
        datos =
        {
            "tarea1": "Hacer las compras",
            "tarea2": "Hacer la comida",
            "tarea3": "Limpiar"
        };
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
        cy.get('input#task').type(datos.tarea1);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(datos.tarea2);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(datos.tarea3);
        cy.get('button#sendTask').click();
        cy.contains('p', datos.tarea1).click();
    });

    it('Deberia permitir completar una tarea 2', () => {
        cy.get('input#task').type(datos.tarea1);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(datos.tarea2);
        cy.get('button#sendTask').click();
    });

    afterEach('After each', () => {
        cy.log('After Each')
    })

    after('After', () => {
        cy.log("After")
    })
});