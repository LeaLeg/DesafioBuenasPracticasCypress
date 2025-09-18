/// <reference types="cypress" />

/*
Browser testing: No depende de resolución ni navegador.
Hardcoded assertions: Se usa el nombre del producto obtenido dinámicamente.
Commands: Comando para agregar producto.
Independencia: No depende de login ni otros tests.
*/

//Agregar producto al carrito
describe('Agregar producto al carrito', () => {
  it('Debe agregar el primer producto al carrito', () => {
    cy.visit('/');//Browser testing, Independencia
    cy.contains('Products').click();//Independencia
    cy.addFirstProductToCart();//Commands, Independencia
    cy.contains('View Cart').click();
    cy.get('.cart_description').should('exist');//Hardcoded assertions
  });
});
