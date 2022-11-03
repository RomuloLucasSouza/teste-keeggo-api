/// <reference types= "cypress"/>

describe("Testes", () => {
    describe('Teste API', () => {
        it('Deve exibir Name', () => {
            cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data.list).to.have.property('name')
                expect(response.body.data.list.name).to.be.eq('Professional')
                console.log(response.body.data.list.name)
            })
        })
    })
})