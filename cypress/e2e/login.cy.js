/// <reference types="cypress" />

/*
Browser testing: Independiente del navegador.
Hardcoded assertions: Se usan datos desde fixtures.
Commands: Comando para login.
Independencia: No depende de otros tests.
*/

//Login con usuario existente
describe('Login de usuario', () => {
  it('Debe iniciar sesión con credenciales válidas', () => {
    cy.visit('/');//Browser testing, Independencia
    cy.contains('Signup / Login').click();//Independencia
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);//Hardcoded assertions, Commands
    });
    cy.contains('Logged in as').should('be.visible');
  });
});
