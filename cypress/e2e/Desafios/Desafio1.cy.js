 ///<reference types="cypress" />

describe("Desafio 1", () =>{
    
    const numero = Math.floor(Math.random() * 1000);
    let nombre = `Juanito${numero}`;
    let pass = '123456!';

    it('Inicio Sesión', () =>{
        cy.visit('');
        cy.get('#user').type(nombre);
        cy.get('.password').type(pass);
        cy.get('[value="Male"]').check({force: true});
        cy.get('#day').select("14"); 
        cy.get('#month').select("November");
        cy.get('#year').select(68);
        cy.get('#submitForm').click();
        cy.wait(3000);
        cy.get('#todolistlink').click();
        cy.get('#task').type("Barrer Apto");
        cy.get('[type="submit"]').click();
        cy.get('#task').type("Lavar Losa");
        cy.get('[type="submit"]').click();
        cy.get('#task').type("Tender Camas");
        cy.get('[type="submit"]').click();
        cy.get('[class$="vuy1kp"]').find('[class$="8atqhb"]').eq(1).click();
    });
});