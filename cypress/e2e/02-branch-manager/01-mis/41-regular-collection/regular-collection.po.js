class RegularCollection {
    test_data = Cypress.env("TEST_DATA");

    gridRegularCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-regular-collection");
            cy.log("Successfully regular collection list page.");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the regular collection list page.");
    }
    openButtonCheck() {
        cy.imsId("btn-table-action-open").first().click();
        cy.log("Open button clicked successfully on the regular collection list page.");
    }

    collectionCheck() {
        cy.fixture(this.test_data).then((data) => {
            var rcData = data.branchManager.regularCollection;
            cy.imsId("loan-AGRO-1020-101-1001-1").type(rcData.loanAmount);
            cy.imsId("loan-JAGO-1020-101-1001-1").type(rcData.loanAmount2);
            cy.imsId("btn-save").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("successfully on the regular collection list page.");
        });
    }

    viewRegularCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the view regular collection list page.");
    }

    editRegularCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the edit regular collection list page.");
    }

    editResetButton() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-reset").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("successfully on the regular collection list page.");
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the regular collection "
        );
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }



}

export const create_regular_collection = new RegularCollection();
