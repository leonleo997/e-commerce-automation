class SummaryStepPage {
  checkoutButton = ".cart_navigation span";

  constructor() {}

  proceedToCheckout() {
    cy.get(this.checkoutButton).click({ force: true });
  }
}

export const summaryStepPage = new SummaryStepPage();
