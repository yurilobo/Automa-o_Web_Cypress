/// <reference types = "Cypress" />

import testElements from '../ElementsPages/testElements'

const testelements = new testElements

const url =Cypress.config("baseUrl")

class TestPage{
    acessarSite(){
        cy.visit(url)
        cy.wait(100)
    }
    pesquisarElementos(){
        cy.get(testelements.pesquisarElemento())
        .type('Faded Short Sleeve')
        .should('be.visible')
    }
    
    clicarPesquisaElemento(){
        cy.get(testelements.Pesquisa())
            .click()
            .should('be.visible')
    }
    clicarPrimeiroElemento (){
        cy.get(testelements.primeiroElemento())
            .click()
            .should('be.visible')
    }
    clicarBotaoAdd(){
        cy.get(testelements.BotaoAdd())
            .should('not.be.visible')
            .contains('Add to cart')
            .click({force: true})
            
    }
    clicarBotaoCheckout(){
        cy.get(testelements.BotaoCheckout())
            .contains('Proceed to checkout')
                .click()
        
    }
    validarProductName(){
        cy.get(testElements.validarProductName()).should('eq','Faded Short Sleeve T-shirts')
    }
    validarQtdProdutoAdd(){
        cy.get(testElements.validarQtdProdutoAdd)
            .should('have.text', 1) .and('contain', 'Product successfully added to your shopping cart')
    }
    validarPagina(){
        cy.get(testElements.validarPagina)
            .should('eq','My Store')
    }
    ValidadeMensagem(){
        cy.get(testElements.MsnSucesso())
            .should('be.visible')
            .and('contain', 'Product successfully added to your shopping cart');
    }
    

}

export default TestPage