import { faker } from '@faker-js/faker';
/*Browser testing: No depende de configuración específica del navegador.
Hardcoded assertions: Se usan datos dinámicos generados con faker.
Commands: Se crea un comando para completar el formulario.
Independencia: No depende de otros tests.*/
//Registro de usuario nuevo
describe('Registro de usuario', () => {
  it('Debe registrar un nuevo usuario exitosamente', () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email()
    };

    cy.visit('/');
    cy.contains('Signup / Login').click();
    cy.fillSignupForm(user);
    cy.contains('Enter Account Information').should('be.visible');
  });
});
