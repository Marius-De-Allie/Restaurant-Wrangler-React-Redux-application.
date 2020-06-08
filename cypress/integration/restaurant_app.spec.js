describe('Restaurant Wrangler app', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000');
    });

    it('main page can be opened', function() {
        cy.contains('Restaurant Wrangler');
        cy.contains('Please enter a city in the search bar above to begin.');
    })

    it('search can be initiated when valid search term entered into city field', function() {
         // Enter search term into serach input and click search button        
        cy.get('#search').type('Toronto');
        cy.get('#submit').click();

        cy.contains('Search submitted successfully.');
        cy.contains('Restaurants found: 25');
    });

    it('search results can be filtered when filter term entered in filter field', function() {
        // Enter search term into serach input and click search button
        cy.get('#search').type('Toronto');
        cy.get('#submit').click();
        // Verify that search was successful.
        cy.contains('Search submitted successfully.');
        cy.contains('Restaurants found: 25');
        // Enter filter term and click filter button.
        cy.get('#filter').type('1');
        cy.get('#filter-b').click();
        // Verify that search results were filtered.
        cy.contains('Reset filters');
        cy.contains('Restaurants found: 13');
    });

    it('filtered results are reset when reset filters button clicked', function() {
        // Enter search term into serach input and click search button
        cy.get('#search').type('Toronto');
        cy.get('#submit').click();
        // Verify that search was successful.
        cy.contains('Search submitted successfully.');
        cy.contains('Restaurants found: 25');
        // Enter filter term and click filter button.
        cy.get('#filter').type('1');
        cy.get('#filter-b').click();
        // Verify that search results were filtered.
        cy.contains('Reset filters');
        cy.contains('Restaurants found: 13');
        // select and click reset filters button.
        cy.get('#reset').click();
        // Verify that search filter was removed and all original search results are displayed.
        cy.contains('Restaurants found: 25')
    });

    it('Make reservation link contains correct href attribute', function() {
        // Enter search term into serach input and click search button
        cy.get('#search').type('Toronto');
        cy.get('#submit').click();
        // Verify that link exists in the correct format.
        cy.contains('Make reservation')
            .should('have.prop', 'href')
            .and('contain', 'http://www.opentable.com/single.aspx?rid=');
    });
});