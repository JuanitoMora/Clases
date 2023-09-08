/// <reference types="cypress" />

describe('API', () => {

    it("Validar peticion GET", () => {
        cy.request('http://localhost:3000/posts').then(respuesta => {
            cy.log(respuesta)
            expect(respuesta.status).to.be.equal(200);
            expect(respuesta.body).to.have.length(17);
            expect(respuesta.body[0].title).to.be.equal('titulo 2')
        })
    })

    it("Validar peticion GET 2", () => {
        cy.request('http://localhost:3000/posts').its('body').then(body => {
            expect(body).to.have.length(17);
            expect(body[0].title).to.be.equal('titulo 2')
        })
    })

    it("Validar peticion GET 3", () => {
        cy.request({
            url: "http://localhost:3000/post",
            method: "GET"
        })
            .then(respuesta => {
                expect(respuesta.body).to.have.length(17);
                expect(respuesta.body[0].title).to.be.equal('titulo 2')
            })
    })

    it("Validar peticion GET + DELETE + POST", () => {
        const id = 102

        cy.request({
            url: `http://localhost:3000/posts?author=Fabrizio%20Otranto`,
            method: "GET",
        }).its('body').each(body => {
            cy.request({
                url: `http://localhost:3000/posts/${body.id}`,
                method: "DELETE",
                failOnStatusCode: false
            }).then(respuesta => {
                expect(respuesta.status).to.be.equal(200)
            })
        })
        cy.request({
            url: "http://localhost:3000/posts",
            method: "POST",
            body: {
                "id": id,
                "title": "prueba",
                "author": "Fabrizio Otranto"
            }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(201)
            expect(respuesta.body.title).to.be.equal('prueba')
            expect(respuesta.body.author).to.be.equal('Fabrizio Otranto')
            expect(respuesta.body.id).to.be.equal(id)
        })
    })

    it("PUT", () => {
        cy.request({
            url: "http://localhost:3000/posts/2",
            method: "PUT",
            body: {
                "id": 2,
                "title": "Titulo editado 2",
                "author": "Author editado"
            }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.title).to.be.equal('Titulo editado 2')
            expect(respuesta.body.author).to.be.equal('Author editado')
            expect(respuesta.body.id).to.be.equal(2)
        })
    })

    it("Ingresar al sistema de PushingIT", () => {
        cy.request({
            url: "https://pushing-it.onrender.com/api/login",
            method: "POST",
            body: {
                "username": "pushingit",
                "password": "123456!"
            }
        }).then(respuesta => {
            cy.log(respuesta.body)
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
        cy.visit('')
    })
})