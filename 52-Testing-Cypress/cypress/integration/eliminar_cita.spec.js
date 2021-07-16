/// <reference types="cypress" /> 

describe('llena los campos para una nueva cita y la elimina', () => {
    it('campos nueva cita', () => {
       
        cy.visit('/index.html'); 
        
        cy.get('[data-cy=mascota-input]')
        // simular o hacer que cypres escriba en inputs es: 
            .type('Hook'); 
        //        --------lo que quieres escribir
        
        cy.get('[data-cy=propietario-input]')
            .type('Julieta'); 
        
        cy.get('[data-cy=telefono-input]')
            .type('1234566');
        
        cy.get('[data-cy=fecha-input]')// si detecta que es tipo date y le paso numeros cypres te dice error, y  el formato que se tiene que seguir 
            .type('2020-12-03');
        
        cy.get('[data-cy=hora-input]') // formato especifico
            .type('20:30');

        cy.get('[data-cy=sintomas-textarea]')
            .type('el gato solo come y duerme');

        cy.get('[data-cy=submit-cita]')
            .click(); //para click en el boton button

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas'); 
        
        // seleccionar la alerta
        cy.get('[data-cy=alerta]') // desde UI document 
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
        
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');              
        
    }); 

    it('Eliminar una cita', () => {
        cy.get('[data-cy=btn-eliminar]')// desde UI
            .click(); 
        
        cy.get('[data-cy=citas-heading')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una'); 
        
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se elimino correctamente'); 

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success'); 
        
        cy.screenshot() //toma un screenshot una vez que llega a esta parte
      
    })
});  