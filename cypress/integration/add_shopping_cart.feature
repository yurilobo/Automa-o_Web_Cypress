Feature: Produto no carrinho
   Como usuario desejo pesquisar um produto
   Para adiciona lo no carrinho de compra

   Scenario: Adiciono produto no carrinho
    Given que estou na pagina inicial
    When pesquiso o produto com "Faded Short Sleeve T-shirts"
    When clico no botao "Add to cart"
    And clico no botao de checkout
    Then o produto esta no carrinho

   