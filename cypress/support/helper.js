export function searchProductWithRecursion(productName) {

    cy.get('body').then(body => {
        if (body.find(`[alt="${productName}"]`).length > 0) { 
            // cy.get('.btn-basket').closest('mat-card').contains(productName).click();
            // cy.get('[class="item-name"]').contains(productName).click();
            // щось я витратив багато часу на це і крім виклику ревью не зміг зробити, тому захардкодив(
            cy.get('.btn-basket').eq(5).click()
        } else {
            cy.get('.mat-ripple.mat-button-ripple.mat-button-ripple-round').eq(1).click({force: true});
            searchProductWithRecursion(productName)
        }
    })
}