const home = require ("../PageElements/HomeElements.json")
const cart = require ("../PageElements/Cart.json")

export class addToCart {
hoverAccessoires(){
cy.get(home.Homelocators.Accessories).trigger('mouseover')
}
clickShoes(){
cy.get(home.Homelocators.shoes).click()
}
sortByPrice(){
    cy.get('select[title="Sort By"]').first().select("https://ecommerce.tealiumdemo.com/accessories/shoes.html?dir=asc&order=price");
   
}
viewProduct(){
    cy.get(cart.Accessories.product).click(
    )
   
}
selectColor(){
    cy.get(cart.Accessories.color).click()
  
}
selectSize(){
    cy.get(cart.Accessories.size).click()
}
addToCart(){
    cy.get(cart.Accessories.addToCart).click()
}
successAssesrtion(){
    cy.get(cart.Accessories.succsessMsg).should('exist')
}
}