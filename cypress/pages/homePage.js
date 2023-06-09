class homePage {
    visit() {
      cy.visit("/")
    }
   
    getAleatoireLink() {
        return cy.get("#centered_nav > a:nth-child(3)").first()
      }
}
module.exports = homePage