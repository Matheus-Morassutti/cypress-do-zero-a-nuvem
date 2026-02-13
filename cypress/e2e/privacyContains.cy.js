it('testa politica de privacidade de forma indepentente' , () => {
    cy.visit('./src/privacy.html')
    cy.contains('h1' , 'CAC TAT - Política de Privacidade').should('be.visible')
  
})