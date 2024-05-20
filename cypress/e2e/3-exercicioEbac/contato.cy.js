/// <reference types="cypress" />

describe('Testes para contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Testando adicionar Contato', () => {
        cy.get('[type="text"]').type('Teste Nome')
        cy.get('[type="email"]').type('email@teste.com')
        cy.get('[type="tel"]').type('XX xxxxx-xxxx')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > div').should('have.length', 5)
        cy.screenshot('Adicionando Contato')
    })
    
    it('testando o editar', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('{selectall}{backspace}')
        cy.get('[type="text"]').type('Testando Alterar Nome')

        cy.get('[type="email"]').type('{selectall}{backspace}')
        cy.get('[type="email"]').type('emailalterado@teste.com')

        cy.get('[type="tel"]').type('{selectall}{backspace}')
        cy.get('[type="tel"]').type('YY yyyyy-yyyy')
        cy.get('.alterar').click()
        cy.screenshot('Editando contato')
    })

    it('testando o cancelar edição', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('.cancelar').click()
        cy.screenshot('Testando o botao de Cancelar edicao')
    })

    it('Excluir contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk > div').should('have.length', 4)
        cy.screenshot('Excluindo contato teste')
    })
})