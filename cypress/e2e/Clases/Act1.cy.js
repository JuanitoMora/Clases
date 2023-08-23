  ///<reference types="cypress" />

 describe("Actividad 1", () =>{
    
    const numero = Math.floor(Math.random() * 1000);
    let nombre = `Juanito${numero}`;
    let pass = '123456!';

    it('Actividad complementeria 1', () =>{
        cy.visit('');
        cy.get('#user').type(nombre);
        cy.get('#pass').type(pass);
        cy.get('[value="Male"]').check({force: true});
        cy.get('#day').select("14"); //value
        cy.get('#month').select("November"); // text
        cy.get('#year').select(68); // posicion del array
        cy.get('#submitForm').click();
    });
});
//Recorda usar npx cypress open para abrir la interfaz de usuario