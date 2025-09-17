/*Browser testing: Independiente del navegador.
Hardcoded assertions: Se usan datos desde fixtures.
Commands: Comando para login.
Independencia: No depende de otros tests.*/

//Login con usuario existente
describe('Login de usuario', () => {
  it('Debe iniciar sesión con credenciales válidas', () => {
    cy.visit('/');
    cy.contains('Signup / Login').click();
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
    });
    cy.contains('Logged in as').should('be.visible');
  });
});
