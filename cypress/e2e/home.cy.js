import homePage from "../pages/homePage"
import aleatoirePage from "../pages/aleatoirePage"
 
 const home = new homePage()
 const aleatoire = new aleatoirePage()
 Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
 describe("testing home page", () => {
   it("should visit home page", () => {
     home.visit();
     home.getAleatoireLink().click();
     aleatoire.getFacebookButton().should('exist');
     aleatoire.getTwitterButton().should('exist');
     aleatoire.getTumblrButton().should('exist');

   })
  
   
 })