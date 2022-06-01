Cypress.Commands.add("validarFormGui", () => {
    cy.visit('../../../index.html')
    cy.get(':nth-child(1) > :nth-child(1) > label > strong').should('be.visible').contains('Nome');
    cy.get('form > :nth-child(1) > :nth-child(2) > label > strong').should('be.visible').contains('Sobrenome');
    cy.get('form > :nth-child(2) > label > strong').should('be.visible').contains('Email');
    cy.get(':nth-child(3) > :nth-child(1) > strong').should('be.visible').contains('De qual lado da aplicação você desenvolve?');
    cy.get(':nth-child(4) > label > strong').should('be.visible').contains('Senioridade');
    cy.get('#check > :nth-child(1) > strong').should('be.visible').contains('Selecione as tecnologias que utiliza:');
    cy.get(':nth-child(6) > label > strong').should('be.visible').contains('Conte um pouco da sua experiência:');

});
