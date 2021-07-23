const nameInput = () => cy.get('input[name = "name"]');
const specialInput = () => cy.get('input[name = "special"]');
const submitButton = () => cy.get('#order-button');
const dropDown = () => cy.get('select')
const checkBox = () => cy.get('[type = "checkbox"]');

describe('App Test', function () {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('check if can type in name as an input', () => {
        nameInput()
            .should('have.value', "")
            .type("John")
            .should('have.value', "John")
    })

    it('check if can type in a special request as an input', () => {
        specialInput()
            .should('have.value', '')
            .type('Chocolate on the toppings')
            .should('have.value', 'Chocolate on the toppings')
    })

    it('check if user can check the toppings boxes', () => {
        checkBox().check();
    })

    it('check if submit button is enabled when received inputs', () => {
        nameInput().type("name");
        specialInput().type("special");
        dropDown().select('Monster')
        checkBox().check();
        submitButton().should('not.be.disabled');
    })
})