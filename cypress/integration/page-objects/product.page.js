class ProductPage {
  tshirtCard = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
  shoppingCartButton = '[style*="display: block;"] .button-container > a';

  constructor() {}

  addToCart() {
    cy.get(this.tshirtCard).click({ force: true });
  }

  goToShoppingCart() {
    cy.get(this.shoppingCartButton).click({ force: true });
  }
}

export const productPage = new ProductPage();
