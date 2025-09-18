/// <reference types="cypress" />

/*
Browser testing: Funciona en cualquier navegador.
Hardcoded assertions: Usa datos fijos para verificar el checkout.
Commands: Utiliza comandos personalizados para login y agregar producto.
Independencia: No depende de otros tests ni requiere login previo.
*/

describe('Checkout de compra', () => {
  it('Debe completar el proceso de compra exitosamente', () => {
    // Independencia y Browser testing
    cy.visit('/');
    cy.contains('Signup / Login').click();//Independencia
    // Login usando comando personalizado (Commands)
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
    });

    // Ir a productos y agregar el primero al carrito (Commands)
    cy.contains('Products').click();
    cy.addFirstProductToCart();

    // Ir al carrito y proceder al checkout
    cy.contains('View Cart').click();
    cy.contains('Proceed To Checkout').click();
    cy.contains('Place Order').click();
    
    // Hardcoded assertions: Verificar que se muestra el formulario de pago
    cy.contains('Payment').should('be.visible');

    // Completar datos de pago
    cy.get('[name="name_on_card"]').type('Test User');
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2028');
    cy.contains('Pay and Confirm Order').click();

    // Hardcoded assertions: Verificar mensaje de éxito
    cy.contains('Order Placed!').should('be.visible');
  });
});