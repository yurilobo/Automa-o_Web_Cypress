/*global Given, When, Then, And*/



Given(/^que estou na pagina inicial$/, () => {
	cy.visit('/')
});

When(/^pesquiso o produto com "([^"]*)"$/, () => {
	cy.get('#search_query_top').type('Faded Short Sleeve')
    cy.get('#searchbox > .btn').click()
    
});
When(/^clico no botao "([^"]*)"$/, () => {
	cy.get('.button-container').contains('Add to cart').click({force: true})
    cy.wait(3000)
});


And(/^aguardo o processamento$/, () => {
    cy.get('.button-container > .button-medium > span').contains('Proceed to checkout').click()
});

Then(/^o produto é adicionado ao carrinho$/, () => {
	
});


