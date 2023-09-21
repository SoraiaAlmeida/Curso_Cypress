/// <reference types="cypress" />

const el = require('./elements').ELEMENTS

class Deliver {

    PreencherDadosDoUsuario({ nomeCompleto, cpf, email, telefone }) {
        cy.get(el.txtNomeCompleto).should('be.visible').type(nomeCompleto)
        cy.get(el.txtCpf).should('be.visible').type(cpf)
        cy.get(el.txtEmail).should('be.visible').type(email)
        cy.get(el.txtTelefone).should('be.visible').type(telefone)
    }
}

export default new Deliver()