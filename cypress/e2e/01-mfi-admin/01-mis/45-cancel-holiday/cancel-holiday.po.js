import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class CancelHoliday {
    test_data = Cypress.env("TEST_DATA");

    gridCancelHolidayListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-calendar", "submenu-cancel-holiday");
            cy.log(messages.ui.gridListMessage);
        });
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

    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridDraftButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    createResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.validation.requiredField);
    }

    createApproveButtonCheck() {
        cy.imsId(COMMON.BUTTONS.APPROVE).click();
        cy.log(messages.ui.submitSuccess);
    }

    createOkButton() {
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createSubmitButtonCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        // cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createDraftButtonCheck() {
        cy.imsId(COMMON.BUTTONS.DRAFT).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createDraftOkButton() {
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const chData = data.mfiAdmin.cancelHoliday;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(chData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_cancel_holiday = new CancelHoliday();
