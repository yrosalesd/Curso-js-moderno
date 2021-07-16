/// <reference types="cypress" /> 
// tener un buen autocompletado 

describe('Carga la pagina principal', () =>{
    it('Carga la pagina principal', () => {

        cy.visit('/index.html'); 
        //   -----------------------abrir url primero 

        //verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');  
    //       ----------revisar si un elemento en el DOM E 

        //cy.get('h1').should('exist'); // no es recomendable porque puede E muchos h1 y no sabe cual es el que debe probar
        //  -------------------------para obtener elementos del DOM(botones, imagenes, h1, parrafos)
        //               ----------------------comprobar si tiene algun texto o no

        //verificar que exista 
        cy.get('[data-cy="titulo-proyecto"]').should('exist');// siempre utilizar el atributo para selectores
        
        //verificar que exists el elemento y contenga un texto en especifico
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria'); 

        //Verificar el texto de las citas
        cy.get('[data-cy=citas-heading')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una'); 
        
        // que no sea igual 
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('not.equal', 'Julieta Rosales'); 
    }); 
}); 