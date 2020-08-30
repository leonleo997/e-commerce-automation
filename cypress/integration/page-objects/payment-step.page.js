class PaymentStepPage {
  bankWireButton = "#HOOK_PAYMENT > div:nth-child(1) > div > p > a";

  constructor() {}

  selectPaymentMethod() {
    cy.get(this.bankWireButton).click({ force: true });
  }
}

export const paymentStepPage = new PaymentStepPage();
