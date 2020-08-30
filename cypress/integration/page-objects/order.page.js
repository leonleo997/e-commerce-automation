class OrderPage {
  confirmOrderButton = "#cart_navigation > button > span";
  messageLabel = "#center_column > div > p > strong";

  constructor() {}

  confirmOrder() {
    cy.get(this.confirmOrderButton).click({ force: true });
  }

  getMessage() {
    return cy.get(this.messageLabel);
  }
}

export const orderPage = new OrderPage();
