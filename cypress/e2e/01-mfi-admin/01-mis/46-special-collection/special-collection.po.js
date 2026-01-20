class SpecialCollection {
    test_data = Cypress.env("TEST_DATA");

    gridSpecialCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-special-collection");
            cy.log("Successfully Special Collection list page.");
        });
    }

    searchInSpecialCollectionName() {
        cy.fixture(this.test_data).then((data) => {
            var scData = data.mfiAdmin.specialCollectionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(scData.samity);
            cy.log("Successfully search in the Special Collection");
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var scData = data.mfiAdmin.specialCollectionFrom;
            cy.formController("office_id").type(scData.office).type("{enter}");
            cy.log(
                "Special Collection status office dropdown check successfully"
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
            "successfully refresh page  displayed the grid list of the Special Collection"
        );
    }
    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const grid_special_collection = new SpecialCollection();


