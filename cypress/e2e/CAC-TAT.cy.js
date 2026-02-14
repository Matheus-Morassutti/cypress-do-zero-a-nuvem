describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('preenche os campos obrigatórios e envia o formulário', () => {
      cy.clock()
      cy.get('#firstName').type('John')
      cy.get('#lastName').type('Doe')
      cy.get('#email').type('matheusluizmorassutti@gmail.com')
      cy.get('#open-text-area').type('Obrigado')
      cy.get('.button').click()

      cy.get('.success').should('be.visible')

      cy.tick(3000)
      cy.get('.success').should('not.be.visible')
    })
  
    it('automatiza o teste', () => {
      const data = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'matheusluizmorassutti@gmail.com',
        textArea: 'Obrigado'
      }

      cy.fillMandatoryFieldsAndSubmit(data)
      cy.get('.success').should('be.visible')
    })

    it('dar o select no Youtube via texto', () => {

    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
    })

    it('dar o select no Mentoria via valor', () => {
      cy.get('#product')        .select('mentoria')
        .should('have.value', 'mentoria')
    })


    it('dar o select no Blog via índice', () => {
      cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', () => {
      cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
    })

    it('marca todas as os tipos de atendimento' , () => {
	cy.get('input[type="radio"]')
	.each((typeOfService) => {
		cy.wrap(typeOfService)
    .check()
	})
}) 

it('marca os checkboxs e depois desmarca o ultimo' , () => {
	cy.get('input[type="checkbox"]')
  .check()
  .last()
  .uncheck()
}) 

it('seleciona o arquivo' , () => {
        cy.get('#file-upload')
        .selectFile('./cypress/fixtures/example.json')  
}) 

it('seleciona o arquivo simulando drag-and-drop' , () => {
        cy.get('#file-upload')
        .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })

})

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique' , () => {
  cy.contains('a', 'Política de Privacidade')
  .should('have.attr', 'href' , 'privacy.html')
  .and('have.attr', 'target', '_blank')
})

it('acessa a politica de privacidade removendo o target e clicando no link' , () => {
  cy.contains('a', 'Política de Privacidade')
  .invoke('removeAttr' , '_target')
  .click()
})
})
