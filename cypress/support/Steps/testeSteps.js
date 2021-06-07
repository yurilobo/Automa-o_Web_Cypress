/*global Given, When, Then, And*/
import TestPage from '../PageObject/testPage'
const PageTest= new TestPage


Given(/^que estou na pagina inicial$/, () => {
	PageTest.acessarSite()
	cy.title().should('eq','My Store')
});

When(/^pesquiso o produto com "([^"]*)"$/, () => {
	PageTest.pesquisarElementos()
	PageTest.clicarPesquisaElemento()
    
});
When(/^clico no botao "([^"]*)"$/, () => {	
	PageTest.clicarBotaoAdd()
	
    
});


And(/^clico no botao de checkout$/, () => {
    PageTest.clicarBotaoCheckout()
});


Then(/^o produto esta no carrinho$/, () => {

	return true;
});



