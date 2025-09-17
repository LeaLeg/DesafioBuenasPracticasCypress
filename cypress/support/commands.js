Cypress.Commands.add('fillSignupForm', (user) => {
  cy.get('[data-qa="signup-name"]').type(user.name);
  cy.get('[data-qa="signup-email"]').type(user.email);
  cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add('addFirstProductToCart', () => {
  cy.get('.features_items .product-image-wrapper').first().within(() => {
    cy.contains('Add to cart').click();
  });
});

Cypress.Commands.add('searchProduct', (term) => {
  cy.get('#search_product').type(term);
  cy.get('#submit_search').click();
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password,{log:false});
  cy.get('[data-qa="login-button"]').click();
});
