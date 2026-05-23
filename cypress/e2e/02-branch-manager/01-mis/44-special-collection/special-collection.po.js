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

    createNewCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();
            var scData = data.branchManager.specialCollection;
            cy.formController("samityId").click();
            cy.contains(scData.selectSamity).click()
            cy.formController("employeeId").click();
            cy.contains(scData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(scData.selectAccount).click();
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
        cy.imsId("toggle-action").first().click();
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

    saveCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-submit").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("successfully saved the collection.");
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
            var spcData = data.branchManager.specialCollection;
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

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }

}

export const create_special_collection = new specialCollection();
