import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class specialCollection {
    test_data = Cypress.env("TEST_DATA");

    gridSpecialCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-special-collection");
            cy.log("Successfully special collection list page.");
        });
    }

    deleteNewCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();
            var scData = data.fieldOfficer.specialCollection;
            cy.formController("samityId").click();
            cy.contains(scData.selectSamity).click()
            cy.formController("employeeId").click();
            cy.contains(scData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(scData.selectAccount).click();
             cy.get('input:visible:not(:disabled)')
                .last()
                .should('be.visible')
                .clear()
                .type(scData.inputAmount);
            cy.imsId("btn-save").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-delete").click();
            cy.imsId("btn-delete").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully deleted new special collection");
        });
    }

    createNewCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();
            var scData = data.fieldOfficer.specialCollection;
            cy.formController("samityId").click();
            cy.contains(scData.selectSamity).click()
            cy.formController("employeeId").click();
            cy.contains(scData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(scData.selectAccount).click();
             cy.get('input:visible:not(:disabled)')
                .last()
                .should('be.visible')
                .clear()
                .type(scData.inputAmount);
            cy.imsId("btn-save").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created new special collection");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the special collection list page.");
    }

    viewSpecialCollection() {
        // cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.log("successfully on the view special collection list page.");
    }

    viewGoBackButton() {
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the view special collection list page.");
    }

    editSpecialCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.log("successfully on the edit special collection list page.");
    }

    editGoBackButton() {
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the edit go back button.");
    }

    submitCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-submit").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("successfully submitted the collection.");
    }

    viewUnsubmitted() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.log("Action button clicked successfully on the special collection list page.");
    }

    viewGoBackButtonUnsubmitted() {
        // cy.imsId("toggle-action").first().click();
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the view special collection list page.");
    }

    gridActionUnsubmittedButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var scData = data.fieldOfficer.createSpecialCollectionForm;
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-unsubmit").click();
            cy.log("Successfully grid unsubmitted the Special Collection list page");
        });
    }

    gridActionUnsubmittedGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            var scData = data.fieldOfficer.createSpecialCollectionForm;
            cy.imsId("btn-go-back").click();
            cy.log("Successfully viewed go back the Special Collection list page");
        });
    }

    UnsubmittedButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var scData = data.fieldOfficer.createSpecialCollectionForm;
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-unsubmit").click();
            cy.imsId("btn-unsubmit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-submit").click();
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully unsubmitted the Special Collection list page");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the special collection "
        );
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_ON)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var spcData = data.fieldOfficer.specialCollection;
            cy.formController("field_officer_id").type(spcData.fieldOfficer).type("{enter}");
            cy.log(
                "successfully field officer dropdown displayed the grid list of the special collection "
            );
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var scData = data.fieldOfficer.specialCollection;
            cy.formController("field_officer_id").type(scData.fieldOfficer).type("{enter}");
            cy.log(
                "successfully field officer dropdown displayed the grid list of the special collection "
            );
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var scData = data.fieldOfficer.specialCollection;
            cy.formController("staging_samity_id").type(scData.Samity).type("{enter}");
            cy.log(
                "successfully samity dropdown displayed the grid list of the special collection "
            );
        })
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }

}

export const create_special_collection = new specialCollection();
