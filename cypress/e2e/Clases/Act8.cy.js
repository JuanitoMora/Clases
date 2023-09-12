/// <reference types="cypress" />

describe('Actividad 8', () => {

    it("Deberia registrarse en PushingIT de forma satisfactoria", () => {
        const username = 'juanito' + Math.floor(Math.random() * 1000)
        const password = '123456!'
        const gender = "Male"
        const day = '10'
        const month = 'October'
        const year = "1980"

        cy.request({
            url: `https://pushing-it.onrender.com/api/register`,
            method: "POST",
            body: {
                "username": username,
                "password": password,
                "gender": gender,
                "day": day,
                "month": month,
                "year": year
            }
        }).then(respuesta => {
            cy.log(respuesta.body)
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.newUser.username).to.be.equal(username)
        });
        cy.visit('');
    });
});