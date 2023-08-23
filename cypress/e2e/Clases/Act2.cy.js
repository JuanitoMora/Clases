  ///<reference types="cypress" />

  describe("Actividad 2", () =>{
    
    const numero = Math.floor(Math.random() * 1000);
    let nombre = `Juanito${numero}`;
    let pass = '123456!';

    it('Actividad complementeria 2', () =>{
        cy.visit('');
        cy.get('[id="user"]').type(nombre);
        cy.get('.password').type(pass);
        cy.get('fieldset').find('[value="Male"]').check({force: true});
        cy.contains('select[name="day"]',14).select("14"); //value
        cy.contains('select[name="month"]','November').siblings('div'); // text
        cy.get('div[class$="1llkhy0"]').children('[name="year"]').select(68); // posicion del array
        cy.get("button").click();
    });
});
