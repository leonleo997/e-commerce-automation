import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://automationpractice.com/";
Given("a e-commerce website", () => {
  cy.visit(url);
});

When("I want to buy a t-shirt", () => {
  cy.get("#block_top_menu > ul > li:nth-child(3) > a").click({ force: true });
  cy.get(
    "#center_column a.button.ajax_add_to_cart_button.btn.btn-default"
  ).click({ force: true });
  cy.get('[style*="display: block;"] .button-container > a').click({
    force: true,
  });
  cy.get(".cart_navigation span").click({ force: true });

  cy.get("#email").type("yesid.lopez@restmail.com", { force: true });
  cy.get("#passwd").type("IngenieriaDeSistemas", { force: true });
  cy.get("#SubmitLogin > span").click({ force: true });

  cy.get("#center_column > form > p > button > span").click({ force: true });
  cy.get("#cgv").click({ force: true });
  cy.get("#form > p > button > span").click({ force: true });
  cy.get("#HOOK_PAYMENT > div:nth-child(1) > div > p > a").click({
    force: true,
  });
  cy.get("#cart_navigation > button > span").click({ force: true });
});

Then("it should be bought successfully", () => {
  cy.get("#center_column > div > p > strong").should(
    "have.text",
    "Your order on My Store is complete."
  );
});
