context('Actions', () => {

    const DatosLogin = require("../DataPool/MOCK_DATA_LOGIN.json");
    const DatosEspecial = require("../DataPool/MOCK_DATA_ESPECIAL.json");
    var datos = DatosLogin[0];
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').type(datos['usuario'], { force: true })
        cy.get('#ember10').type(datos['clave'], { force: true })
        cy.get('#ember12').click()
        cy.wait(3000);
    })

    it('7. Dado una sesión válida-Crear page con título', () => {
        cy.get('#ember37').click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/pages')
        cy.get('a[href*="editor/page"]').first().click()
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/editor/page')
        cy.wait(3000);
        cy.get('.koenig-editor__editor-wrapper').click()
        var claveEspecial = DatosEspecial[Math.floor(Math.random() * DatosEspecial.length)];
        cy.get('.koenig-editor__editor-wrapper').type(claveEspecial["datosEspeciales"]);
        cy.wait(7000);
        cy.visit('http://localhost:2368/ghost/#/pages');
    })

})
