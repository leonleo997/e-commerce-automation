import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  navbarPage,
  productPage,
  summaryStepPage,
  signInStepPage,
  addressStepPage,
  shippingStepPage,
  paymentStepPage,
  orderPage,
} from "../page-objects";

const url = "http://automationpractice.com/";

Given("a e-commerce website", () => {
  cy.visit(url);
});

When("I select a T-Shirt", () => {
  navbarPage.goToTShirt();
  productPage.addToCart();
});

When("I go to the shopping cart", () => {
  productPage.goToShoppingCart();
});

When("I proceed to checkout in the summary step", () => {
  summaryStepPage.proceedToCheckout();
});

When("I sign in in the application", () => {
  signInStepPage.SignIn("yesid.lopez@restmail.com", "IngenieriaDeSistemas");
});

When("I proceed to checkout in the address step", () => {
  addressStepPage.proceedToCheckout();
});

When("I accept the terms of service", () => {
  shippingStepPage.acceptTermsOfService();
  shippingStepPage.proceedToCheckout();
});
When("I select the payment method", () => {
  paymentStepPage.selectPaymentMethod();
});

When("I confirm my order", () => {
  orderPage.confirmOrder();
});

Then("The order should be completed successfully", () => {
  orderPage.getMessage().should( "have.text", "Your order on My Store is complete.");
});
