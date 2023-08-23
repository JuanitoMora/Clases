 ///<reference types="cypress" />

 describe('Xpath 3', () => {

    it('Deberia encontrar elementos utilizando xpath absoluto', () => {
        cy.visit('');
        cy.xpath('/html/body/div/div/div/img');
    })

    it('Deberia encontrar elementos utilizando xpath relativo', () => {
        cy.visit('');
        cy.xpath(`//img[@alt="pushingIT"]`);
        cy.get("[alt='pushingIT']"); //css selector
    })

    it('Deberia encontrar elementos utilizando xpath contains', () => {
        cy.visit('');
        cy.xpath(`//img[@alt="pushingIT"]`);
        cy.get("[alt='pushingIT']"); //css selector
    })

    it('Deberia encontrar elementos utilizando xpath contains', () => {
        cy.visit('');
        cy.xpath(`//img[contains(@alt,'pushing')]`);
    })

    it('Deberia encontrar elementos utilizando xpath starts-with', () => {
        cy.visit('');
        cy.xpath(`//img[starts-with(@alt,'pushing')]`);
    })

    it('Deberia encontrar elementos utilizando xpath text', () => {
        cy.visit('');
        cy.xpath(`//button[text()='Register']`);
    })

    it('Deberia encontrar elementos utilizando xpath contains + text', () => {
        cy.visit('');
        cy.xpath(`//button[contains(text(), 'Regis')]`);
    })

    it('Encontrar elemetnos utilizando metodo child', () => {
        cy.visit('');
        cy.xpath('//div[@role="group"][1]//child::input');
    })

    it('Encontrar elemetnos utilizando metodo parent', () => {
        cy.visit('');
        cy.xpath('//input[@id="user"]//parent::div');
    })

    it('Encontrar elemetnos utilizando metodo preceding-sibling', () => {
        cy.visit('');
        cy.xpath('//input[@id="user"]//preceding-sibling::label');
    })

    it('Encontrar elemetnos utilizando metodo following-sibling', () => {
        cy.visit('');
        cy.xpath('//label[@for="user"]//following-sibling::input');
    })
})