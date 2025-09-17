/*Browser testing: Compatible con cualquier navegador.
Hardcoded assertions: Se usa término de búsqueda dinámico.
Commands: Comando para buscar producto.
Independencia: No depende de login ni otros tests.*/

//Búsqueda de producto
describe('Búsqueda de producto', () => {
  it('Debe mostrar resultados para un término válido', () => {
    const searchTerm = 'Dress';
    cy.visit('/');
    cy.contains('Products').click();
    cy.searchProduct(searchTerm);
    cy.contains('Searched Products').should('be.visible');
    cy.get('.productinfo').should('contain.text', searchTerm);
  });
});
