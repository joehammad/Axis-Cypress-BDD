import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {addToCart} from "../PageActions/addToCart"
import {userLogin} from "../PageActions/loginActions"

const cart = new addToCart
const LoginTest = new userLogin

let userData;

before(() => {
    // Load the fixture data before the tests run
    cy.fixture('RegisterdUsers').then((users) => {
    
        userData = users[0];
    });
  });

  Given('user visits Tealium', () => {
    cy.visit('https://ecommerce.tealiumdemo.com/');
  });
  
  When('user Navigate to Login', () => {
    LoginTest.clickAccount()
    LoginTest.clickLogin();
  });
  
  Then('User Adds Email', () => {
   LoginTest.setEmail(userData.email)
  });
  
  And('User Adds Password', () => {
    LoginTest.setPassword(userData.password);

  });

  Then('User Clicks Login', ()=>{
    LoginTest.loginBtn();
    cy.wait(2000)
  })
  Then ('user hover on accessories', ()=>{
    cart.hoverAccessoires();
  })
  Then('user select shoes',()=>{
    cart.clickShoes()
  })
  Then('user Select sort dropDown',()=>{
    cart.sort()
   
  })

  Then('user view the product',()=>{
    cart.viewProduct()
    cy.wait(3000)
    
  })
Then('user select color',()=>{
cart.selectColor()
})
Then('user select size',()=>{
    cart.SelectSize()
    })
Then('user add the product to cart',()=>{
    cart.toCart()
})