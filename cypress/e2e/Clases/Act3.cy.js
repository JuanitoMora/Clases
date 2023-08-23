 ///<reference types="cypress" />

 describe('Actividad 3' , () => {

    it('Inicio Sesión', () => {

        cy.visit('');
        cy.xpath(`//span[@class='chakra-text css-17n7kwz']`).dblclick();
        cy.xpath(`//input[contains(@name,'ser')]`).type(`pushingit`);
        cy.xpath(`//input[contains(@class,'password')]`).type(`123456!`);
        cy.xpath(`//button[text()='Log in']`).click();
        cy.xpath(`//a[starts-with(@id,'todo')]`).click();

        
        cy.get("[id^='sen']").type("tarea 1")
        cy.get('#sendTask').click()
        cy.contains('tarea 1').click();
        
    });
 });