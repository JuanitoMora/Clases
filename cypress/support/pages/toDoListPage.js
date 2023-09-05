export class ToDoListPage {
    constructor() {
        this.tareaInput = 'input[name="task"]';
        this.sendTaskButton = '#sendTask'
    };

    escribirTarea(tarea) {
        cy.get(this.tareaInput).type(tarea)
    };

    clickSendtask() {
        cy.get(this.sendTaskButton).click();
    };

    clickDeleteButton(tarea) {
        cy.xpath(`//p[text()="${tarea}"]//following-sibling::button[text()="Delete"]`).click();
    };

    obtenerTarea(tarea) {
        return cy.contains(tarea);
    };
};