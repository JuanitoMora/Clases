///<reference types="cypress" />

describe('Actividad 4', () => {
    let datosDeInicio;

    before('Before', () => {
        cy.fixture('inicioSesionIncorrecto').then(DocInicioSesion => {
            datosDeInicio = DocInicioSesion;
        })
    })

    beforeEach('BeforeEach', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
    });

    it('Validar mensaje de error por Usuario inexistente', () => {
        cy.get('#user').type(datosDeInicio.username);
        cy.get('#pass').type(datosDeInicio.password);
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datosDeInicio.mensajeError);
    });
});