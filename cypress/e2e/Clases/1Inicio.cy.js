  ///<reference types="cypress" />

  describe("Inicio 1",()=>{

    let data;

    it("Primer test usando Mocha",()=>{
        data={
            curso:"Pushing IT",
            profesor:"Fabrizio"
        }
        cy.log(data);
    })

    it.only("Segundo test", () => { // si colocamos it.only el test es el unico que se ejecuta
        data={
            curso:"Pushing IT 2",
            profesor:"Fabrizio"
        }
        cy.log(data);
    })
  })

  it.skip("Tercer tets",() => { // si colocamos it.skip el test solo queda skipeado
    cy.log("Tercer test con .log");
  })