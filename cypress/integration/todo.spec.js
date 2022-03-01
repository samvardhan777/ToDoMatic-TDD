describe('ToDo_Test', () => {
    it('Create a Task', () => {
        cy.visit('/')
        cy.get('[data-cy=Text_Box]').type('eat')
        cy.get('[data-cy=Add]').click()
        cy.get('[data-cy=Text_Box]').clear()
        cy.get('[data-cy=Space]').should('have.value', '');
        cy.contains('eat')
        cy.get('[data-cy=Text_Box]').type('sleep')
        cy.get('[data-cy=Add]').click()
        cy.get('[data-cy=Text_Box]').clear()
        cy.get('[data-cy=Space]').should('have.value', '');
        cy.contains('sleep')
        cy.get('[data-cy=Text_Box]').type('run')
        cy.get('[data-cy=Add]').click()
        cy.get('[data-cy=Text_Box]').clear()
        cy.get('[data-cy=Space]').should('have.value', '');
        cy.contains('run')  
    })
    it('Delete a Task', () => {
        cy.contains('eat')
        .find('input[type=checkbox]')
        .check()
        cy.contains('sleep')
        .find('input[type=checkbox]')
        .check()
        cy.get('[data-cy=Clear]').click()
        // cy.get('[type="checkbox"]').check()
        // cy.get('[data-cy=Clear]').click()
        // cy.get('[data-cy=Space]')
        // cy.contains('Text-Todo').should('not.exist')
    })
    it('Checking the tasks whether it is deleted properly', () => {
      
  
        cy.get('[data-cy=Space]')
          .should('have.length', 1)
  
        cy.contains('eat').should('not.exist')
        cy.contains('sleep').should('not.exist')
        cy.contains('run').should('exist')
  
      })
    it('Reset the Task',()=>
    {
        cy.get('[data-cy=Reset]').click()
        cy.get('[data-cy=Space]').should('have.value', '');
    })
  })