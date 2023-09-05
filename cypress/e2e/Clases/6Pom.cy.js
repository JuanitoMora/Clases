///<reference types="cypress" />

import { LoginPage } from '../support/pages/loginPage';
import { HomePage } from '../support/pages/homePage';
import { ToDoListPage } from '../support/pages/toDoListPage';

describe('Page object model', () => {
    let data;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const toDoListPage = new ToDoListPage();

    before('Before', () => {
        cy.fixture('tareas').then(datos => {
            data = datos;
        })
    });

    beforeEach('Before Each', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick()
        loginPage.escribirUsuario(Cypress.env('username'));
        loginPage.escribirContraseña(Cypress.env('password'));
        loginPage.clickLoginButton();
        homePage.clickToDoListButton();
    })

    it('Ingresar 2 tareas', () => {
        toDoListPage.escribirTarea(data.tarea1);
        toDoListPage.clickSendtask();
        toDoListPage.escribirTarea(data.tarea2);
        toDoListPage.clickSendtask();
        toDoListPage.obtenerTarea(data.tarea2).should('exist')
        toDoListPage.clickDeleteButton(data.tarea2);
        toDoListPage.obtenerTarea(data.tarea2).should('not.exist')
    });
});