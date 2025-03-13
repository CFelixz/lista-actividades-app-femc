import { e2e } from "../support/Constantes";

describe('Agregar una Actividad', () => {
  it('Verifica que se pueda agregar una nueva actividad a la lista.', () => {
    //Visitar la pagina principal
    cy.visit('/')
    cy.validacionInicial();

    //Agregar una Actividad
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad de Prueba');
cy.get(e2e.BOTON_AGREGAR).click();

    cy.get('[data-cy="QDhuW12"]').should('have.text', 'Actividad de Prueba')
    
   
   
  })
})
 