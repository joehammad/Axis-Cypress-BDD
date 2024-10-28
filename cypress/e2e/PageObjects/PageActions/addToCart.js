const home = require ("../PageElements/HomeElements.json")
const cart = require ("../PageElements/Cart.json")

export class addToCart {
hoverAccessoires(){
cy.get(home.Homelocators.Accessories).trigger('mouseover')
}
clickShoes(){
cy.get(home.Homelocators.shoes).click()
}
sort(){
    cy.get('select[title="Sort By"]').first().select("https://ecommerce.tealiumdemo.com/accessories/shoes.html?dir=asc&order=price");
   
}
viewProduct(){
    cy.get(cart.Accessories.product).click(
    )
   
}
selectColor(){
    cy.get(cart.Accessories.color).click()
  
}
SelectSize(){
    cy.get(cart.Accessories.size).click()
}
toCart(){
    cy.get(cart.Accessories.addToCart).click()
}
}