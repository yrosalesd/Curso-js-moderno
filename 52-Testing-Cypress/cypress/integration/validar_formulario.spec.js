/// <reference types="cypress" /> 

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('/index.html'); 

        cy.get('[data-cy="formulario"]')
            .submit(); // presiona en el voton de crear cita
        
        // Seleccionar la alerta
        cy.get('[data-cy=alerta')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')

        //verificar si tiene una clase 
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-danger')
    })
}); 