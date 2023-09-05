export class HomePage {
    constructor() {
        this.toDoListButton = '#todolistlink';
    };

    clickToDoListButton() {
        cy.get(this.toDoListButton).click();
    };
};