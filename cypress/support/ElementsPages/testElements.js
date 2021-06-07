class testElements{
    pesquisarElemento = ()=>{
        return '#search_query_top'
    }
    Pesquisa = ()=>{
        return '#searchbox > .btn'
    }
    primeiroElemento=()=>{
        return '#homefeatured > .first-in-line.first-item-of-tablet-line'
    }
   
    BotaoAdd = ()=>{
        return '.button-container'
    }
    BotaoCheckout= ()=>{
        return '.button-container > .button-medium > span'
    }
    MsnSucesso = ()=>{
        return '.layer_cart_product > h2'
    }
    QtdProduto = ()=>{
        return '#layer_cart_product_quantity'
    }
    ProductName = ()=>{
        return '.product-name'
    }
   
    
    //validarTitulo = ()=>{
      //  return 'title'
    //}
   
}

export default testElements