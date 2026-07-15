import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
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

    collectionProcess() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.branchManager.regularCollection;
            cy.get('tbody tr')
                .eq(0)
                .find('input')
                .eq(0)
                .clear()
                .type(rcData.loanAmount);
            cy.get('tbody tr')
                .eq(1)
                .find('input')
                .eq(0)
                .clear()
                .type(rcData.loanAmount2);

            cy.log("Regular collection amount entered successfully");
        });
    }

    collectionSave() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-save").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("successfully on the regular collection save.");
        });
    }

    viewRegularCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.log("successfully on the view regular collection list page.");
    }

    viewGoBackButton() {
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the view regular collection list page.");
    }

    editRegularCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.log("successfully on the edit regular collection list page.");
    }

    editSaveButton() {
        cy.imsId("btn-save").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("successfully on the edit regular collection save.");
    }

    collectionGoBack() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the go back regular collection.");
    }

    collectionSubmit() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-submit").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("successfully on the submit regular collection.");
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

        gridHistoryButtonOnCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_ON)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var rcData = data.branchManager.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
            cy.log(
                "successfully field officer dropdown displayed the grid list of the regular collection "
            );
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var rcData = data.branchManager.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
            cy.log(
                "successfully field officer dropdown displayed the grid list of the regular collection "
            );
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var rcData = data.branchManager.regularCollection;
            cy.formController("staging_samity_id").type(rcData.Samity).type("{enter}");
            cy.log(
                "successfully samity dropdown displayed the grid list of the regular collection "
            );
        })
    }


}

export const create_regular_collection = new RegularCollection();
