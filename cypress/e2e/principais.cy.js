describe('Preencher Formulario Válido', () => {
  
  beforeEach('', () => {
    cy.visit('../../../index.html')
    cy.validarFormGui();

  });

  it('Completo Dados Válidos', () => {
    
    cy.get('#nome').as('name').type('Gabriel');
    cy.get('#sobrenome').as('lastName').type('Volponi');
    cy.get('#email').as('email').type('gabrielVolponi@mailinator.com');
    //example of radio button choice
    cy.get('input[type="radio"][value="backend').as('radioBackEnd').check();
    //example of select - dropDown
    cy.get('#senioridade').as('senioridade').select("Pleno");
    //example of checkbox - marking it all
    cy.get('input[type="checkbox"][value="HTML"]').as('htmlcheckbox').check();
    cy.get('input[type="checkbox"][value="CSS"]').as('csscheckbox').check();
    cy.get('input[type="checkbox"][value="Javascript"]').as('jscheckbox').check();
    cy.get('input[type="checkbox"][value="PHP"]').as('phpcheckbox').check();
    cy.get('input[type="checkbox"][value="C#"]').as('ccheckbox').check();
    cy.get('input[type="checkbox"][value="Python"]').as('pythoncheckbox').check();
    cy.get('input[type="checkbox"][value="Java"]').as('javacheckbox').check();
    //screenshot - before
    cy.screenshot('conferindoDadosAntesDeEnviar');

    //act
    cy.get('.botao').should('be.enabled').click();

    
    cy.get('@name').should('be.empty')
    cy.get('@lastName').should('be.empty')
    cy.get('@email').should('be.empty')
    cy.get('@radioBackEnd').should('not.be.checked')
    cy.get('input[type="radio"][value="frontend"]').should('be.checked')
    cy.get('@senioridade').find('option').contains('Selecione').should('be.selected')
    cy.get('@htmlcheckbox').should('not.be.checked')
    cy.get('@csscheckbox').should('not.be.checked')
    cy.get('@jscheckbox').should('not.be.checked')
    cy.get('@phpcheckbox').should('not.be.checked')
    cy.get('@ccheckbox').should('not.be.checked')
    cy.get('@pythoncheckbox').should('not.be.checked')
    cy.get('@javacheckbox').should('not.be.checked')
    cy.get('input[type="checkbox"][value="PHP"]').should('not.be.checked')
    cy.get('input[type="checkbox"][value="C#"]').should('not.be.checked')
    cy.get('input[type="checkbox"][value="Python"]').should('not.be.checked')
    cy.get('input[type="checkbox"][value="Java"]').should('not.be.checked')
    cy.screenshot('depois-de-submeter-o-form')


  })
})
