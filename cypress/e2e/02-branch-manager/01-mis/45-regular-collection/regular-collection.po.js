import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class RegularCollection {
    test_data = Cypress.env("TEST_DATA");

    gridRegularCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-regular-collection");
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
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
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log("successfully on the regular collection save.");
        });
    }

    viewRegularCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    editRegularCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editSaveButton() {
        cy.imsId("btn-save").click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.editMessage);
    }

    collectionGoBack() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log("successfully on the go back regular collection.");
    }

    collectionSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-submit").click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log("successfully on the submit regular collection.");
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(
            messages.ui.gridRefreshSuccess
        );
    }

        gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.branchManager.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
            cy.log(
                "successfully field officer dropdown displayed the grid list of the regular collection "
            );
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.branchManager.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
            cy.log(
                "successfully field officer dropdown displayed the grid list of the regular collection "
            );
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.branchManager.regularCollection;
            cy.formController("staging_samity_id").type(rcData.Samity).type("{enter}");
            cy.log(
                "successfully samity dropdown displayed the grid list of the regular collection "
            );
        })
    }


}

export const create_regular_collection = new RegularCollection();
