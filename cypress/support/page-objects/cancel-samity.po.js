// Shared across 02-branch-manager/01-mis/52-cancel-samity and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class cancelSamity {
    test_data = Cypress.env("TEST_DATA");

    gridCancelSamityListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-cancel-samity");
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridCheckboxCheck() {
        cy.imsId(COMMON.BUTTONS.CHECK_SAMITY).click();
        cy.log(messages.ui.checkboxMessage);
    }

    cancelMultipleSamity() {
        cy.imsId(COMMON.BUTTONS.CANCEL_MULTIPLE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.cancelMultipleSamityMessage);
    }

    restoreSamity() {
        cy.imsId(COMMON.BUTTONS.RESTORE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.restoreSamityMessage);
    }

    cancelSamity() {
    cy.fixture(this.test_data).then((data) => {
        const csData = data.branchManager.cancelSamity;
        // Wait for the target Samity row to be available
        cy.contains("td", "Samity Staging Data Generated", {
            timeout: 15000,
        })
            .should("be.visible")
            .closest("tr")
            .within(() => {
                // Click Cancel only inside the target row
                cy.get("[data-ims-id^='btn-cancel-']")
                    .filter(":visible")
                    .first()
                    .should("be.visible")
                    .click();
            });
            
        // Confirmation
        cy.imsId(COMMON.CONFIRMATION.YES)
            .should("be.visible")
            .click();

        // Remarks
        cy.get('[formcontrolname="remarks"]')
            .should("be.visible")
            .and("not.be.disabled")
            .clear()
            .type(csData.remarksCancel);
    });
}

    submitCancelSamity() {
        cy.imsId("btn-submit").should("be.visible").click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

}

export const cancel_samity = new cancelSamity();
