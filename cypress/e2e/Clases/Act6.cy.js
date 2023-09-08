///<reference types="cypress" />

import { LoginPage } from '../../support/pages/loginPage';
import { HomePage } from '../../support/pages/homePage';
import { ToDoListPage } from '../../support/pages/toDoListPage';

describe('Actividad 6', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const toDoListPage = new ToDoListPage();

    beforeEach("Before Each", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario(Cypress.env('username'));
        loginPage.escribirContraseña(Cypress.env('password'));
        loginPage.clickLoginButton();
        cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`, { timeout: 20000 }).should('exist');
        cy.get('#todolistlink').click();
    });

    it("Deberia verificar que los botones existen", () => {
        cy.get(toDoListPage.seeAllButton).should('exist');
        cy.get(toDoListPage.seeCompletedButton).should('exist');
        cy.get(toDoListPage.seeActiveButton).should('exist');
        cy.get(toDoListPage.seeRemoveAllButton).should('exist');
    });
});