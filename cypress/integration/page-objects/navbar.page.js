class NavbarPage {
  tshirtButton = "#block_top_menu > ul > li:nth-child(3) > a";

  constructor() {}

  goToTShirt() {
    cy.get(this.tshirtButton).click({ force: true });
  }
}

export const navbarPage = new NavbarPage();
