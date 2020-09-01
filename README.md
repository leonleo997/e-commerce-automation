# E-Commerce Automation

## Requirements

You need to have installed:
* Node Js: https://nodejs.org/es/download/
* Git: https://git-scm.com/downloads
* Visual Studio Code: https://code.visualstudio.com/Download

## Getting Started

Using CMD or your favorite shell: 
1) Clone the repo: `git clone https://github.com/leonleo997/e-commerce-automation.git`
2) Move into the folder: `cd e-commerce-automation`
3) Install the dependencies: `npm install`
4) Execute the test: `npm test`
5) Have fun! :D

## Challenge

Given the login.feature and a group of commands, create the login test for the e-commerce application.

Commands:

```js
cy.visit(url);
cy.get("a.login").click();
cy.get("#email").type("yesid.lopez@restmail.com", { force: true });
cy.get("#passwd").type("IngenieriaDeSistemas", { force: true });
cy.get("#center_column > h1").should("have.text", "My account");
cy.get("#SubmitLogin > span > i").click({ force: true });
```
