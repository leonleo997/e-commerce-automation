class ShippingStepPage {
  termsOfServiceChecklist = "#cgv";
  checkoutButton = "#form > p > button > span";
  constructor() {}

  acceptTermsOfService() {
    cy.get(this.termsOfServiceChecklist).click({ force: true });
  }

  proceedToCheckout() {
    cy.get(this.checkoutButton).click({ force: true });
  }
}

export const shippingStepPage = new ShippingStepPage();
