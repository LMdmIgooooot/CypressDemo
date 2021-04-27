describe('My First Test', function () {
    //Arrange - setup initial app state
    //- visit a web page
    //- query for an element
    //cy.contains(viewBox).click()
    // Act - take an action
    //- interact withat element
    //Assert - make an assertion
    //- make an assertion about page content

    //cy.visit('https://billease.ph/')

    it('Test "Why BillEase"', function () {
        cy.visit('https://billease.ph/')
        cy.get('#why').click()
        cy.location().should((loc) => {
            expect(loc.host).to.eq('billease.ph')
            // expect(loc.pathname).to.eq('#/why')
            //expect(loc.href).to.eq(
            //   'https://billease.ph/#why'
            //)
        })
    })

    it('Test "How It Works"', function () {
        cy.visit('https://billease.ph/')
        cy.get('#how_it_works').click()
        cy.location().should((loc) => {
            expect(loc.host).to.eq('billease.ph')
        })
    })

    it('Test Login', function () {
        cy.visit('https://billease.ph/account/login')
        cy.get('form').within(($form) => {
            cy.get('input[type="text"]').type('sample@email.com')
            cy.get('input[type="password"]').type('admin1234')
        }).submit()
        cy.wait(5000)
        cy.get('form').within(($form) => {
            cy.get('input[type="text"]').clear()
            cy.get('input[type="password"]').clear()
        })
        cy.get('form').within(($form) => {
            cy.get('input[type="text"]').type('09934468752')
            cy.get('input[type="password"]').type('1234admin')
        }).submit()
        cy.wait(5000)
    })

    it('Test all redirects to Google Play', function () {
        cy.visit('https://billease.ph/')
        cy.get('[alt="Google Play Badge"]').click({ multiple: true, force: true })

    })

    it('Test all redirects to App Store', function () {
        cy.visit('https://billease.ph/')
        cy.get('div').within(($div) => {
            cy.get('[alt="App Store Badge"]').click({ multiple: true, force: true })
        })
    })

    it('Test Order Value Slider', function () {
        cy.visit('https://billease.ph/')
        cy.get('div').within(($div) => {
            cy.get('input[type="range"]').get('input[step="500"]').invoke('val', '20000').trigger("change")
            //cy.get('input[type="range"]').get('input[step="500"]').click().type('{rightarrow}')
        })
    })
})
