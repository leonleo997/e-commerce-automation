class SignInStepPage {
  usernameInput = "#email";
  passwordInput = "#passwd";
  submitButton = "#SubmitLogin > span";

  constructor() {}

  SignIn(username, password) {
    cy.get(this.usernameInput).type(username, { force: true });
    cy.get(this.passwordInput).type(password, { force: true });
    cy.get(this.submitButton).click({ force: true });
  }
}

export const signInStepPage = new SignInStepPage();
