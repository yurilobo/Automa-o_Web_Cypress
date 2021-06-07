/// <reference types = "Cypress" />

import testElements from '../ElementsPages/testElements'

const testelements = new testElements

const url =Cypress.config("baseUrl")

class TestPage{
    acessarSite(){
        cy.visit(url)
        cy.wait(1000)
    }
    pesquisarElementos(){
        cy.get(testelements.pesquisarElemento()).type('Faded Short Sleeve')
    }
    
    clicarPesquisaElemento(){
        cy.get(testelements.Pesquisa()).click().should('be.visible')
    }
    clicarPrimeiroElemento (){
        cy.get(testelements.primeiroElemento()).click().should('be.visible')
    }
    clicarBotaoAdd(){
        cy.get(testelements.BotaoAdd()).contains('Add to cart').click({force: true})
    }
    clicarBotaoCheckout(){
        cy.get(testelements.BotaoCheckout()).contains('Proceed to checkout').click()
        
    }
    validarPagina(){
        cy.get(testElements.validarPagina).should('eq','My Store')
    }
    

}

export default TestPage