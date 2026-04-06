class ReguralCollection {
    test_data = Cypress.env("TEST_DATA");

    gridRegularCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-regular-collection");
            cy.log("Successfully Regular Collection list page.");
        });
    }

    searchInRegularCollectionName() {
        cy.fixture(this.test_data).then((data) => {
            var rcData = data.mfiAdmin.regularCollectionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(rcData.samity);
            cy.imsId("btn-search").click();
            cy.log("Successfully search in the Regular Collection");
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var rcData = data.mfiAdmin.regularCollectionFrom;
            cy.formController("office_id").type(rcData.office).type("{enter}");
            cy.log(
                "Regular Collection status office dropdown check successfully"
            );
        });
    }
    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Regular Collection"
        );
    }
    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const grid_regural_collection = new ReguralCollection();


