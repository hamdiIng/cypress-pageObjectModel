class aleatoirePage {
    constructor() {
      this.url = "/2021/03/01/face-a-la-pile/"
      this.title = "Blog"
    }
    visit() {
        cy.visit(this.url)
      }
     
      getFacebookButton() {
        return cy.get("#social_network > ul > li:nth-child(3) > a > img")
      }
      getTwitterButton() {
        return cy.get('#social_network > ul > li:nth-child(4) > a > img')
      }
      getTumblrButton() {
        return cy.get('#social_network > ul > li:nth-child(5) > a')
      }
  }
  module.exports = aleatoirePage