/*global Given, When, Then, And*/
import TestPage from '../PageObject/testPage'
const PageTest= new TestPage


Given(/^que estou na pagina inicial$/, () => {
	//cy.visit('/')
	PageTest.acessarSite()
	cy.title().should('eq','My Store')
});

When(/^pesquiso o produto com "([^"]*)"$/, () => {
	//cy.get('#search_query_top').type('Faded Short Sleeve')
	PageTest.pesquisarElementos()
	PageTest.clicarPesquisaElemento()
    //cy.get('#searchbox > .btn').click()
    
});
When(/^clico no botao "([^"]*)"$/, () => {
PageTest.clicarBotaoAdd()
    
});


And(/^clico no botao de checkout$/, () => {
    cy.get('.button-container > .button-medium > span').contains('Proceed to checkout').click()
});


Then(/^o produto esta no carrinho$/, () => {
	return true;
});



