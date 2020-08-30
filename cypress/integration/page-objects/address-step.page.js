class AddressStepPage {
  checkoutButton = "#center_column > form > p > button > span";

  constructor() {}

  proceedToCheckout() {
    cy.get(this.checkoutButton).click({ force: true });
  }
}

export const addressStepPage = new AddressStepPage();
