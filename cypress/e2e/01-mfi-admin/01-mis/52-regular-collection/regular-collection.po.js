import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ReguralCollection {
    test_data = Cypress.env("TEST_DATA");

    gridRegularCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-regular-collection");
            cy.log(messages.ui.gridListMessage);
        });
    }

    searchInRegularCollectionName() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.mfiAdmin.regularCollectionFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rcData.samity);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.mfiAdmin.regularCollectionFrom;
            cy.formController("office_id").type(rcData.office).type("{enter}");
            cy.log(messages.ui.officeDropdownMessage);
        });
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    historyOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.mfiAdmin.regularCollectionFrom;
            cy.formController("office_id").type(rcData.office).type("{enter}");
            cy.log(
                messages.ui.historyOffMessage
            );
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
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
    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_regural_collection = new ReguralCollection();


