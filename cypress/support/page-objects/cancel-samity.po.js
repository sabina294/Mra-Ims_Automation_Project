// Shared across 02-branch-manager/01-mis/52-cancel-samity and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class cancelSamity {
    test_data = Cypress.env("TEST_DATA");

    gridCancelSamityListPage() {
        cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.CANCEL_SAMITY);
        cy.location("pathname", { timeout: 30000 })
            .should("include", "/process/cancel-samity");
        cy.get(COMMON.TABLE.BODY, { timeout: 30000 })
            .should("be.visible");
        cy.log(messages.ui.gridListMessage);
    }

    gridCheckboxCheck() {
        // Select the checkbox from the second visible data row. Do not depend on
        // a generated row id such as `check-samity-2`.
        cy.get(`${COMMON.TABLE.BODY} tr`, { timeout: 30000 })
            .filter(":visible")
            .should("have.length.at.least", 2)
            .eq(1)
            .find('input[type="checkbox"], [data-ims-id^="check-samity-"]')
            .filter(":visible")
            .first()
            .should("not.be.disabled")
            .click();
        cy.log(messages.ui.checkboxMessage);
    }

    cancelMultipleSamity() {
        cy.imsId(COMMON.BUTTONS.CANCEL_MULTIPLE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click(
            
        );
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
            const cancelButton = `[data-ims-id='${COMMON.BUTTONS.CANCEL_SAMITY}']`;

            cy.get(COMMON.TABLE.BODY, { timeout: 30000 })
                .should("be.visible")
                .find(cancelButton, { timeout: 30000 })
                .filter(":visible")
                .first()
                .scrollIntoView()
                .should("be.visible")
                .and("not.be.disabled")
                .click();

            cy.imsId(COMMON.CONFIRMATION.YES)
                .should("be.visible")
                .and("not.be.disabled")
                .click();

            cy.formController("remarks")
                .should("be.visible")
                .and("not.be.disabled")
                .clear()
                .type(csData.remarksCancel);
        });
    }

    submitCancelSamity() {
        cy.imsId(COMMON.BUTTONS.SUBMIT)
            .should("be.visible")
            .and("not.be.disabled")
            .click();
        cy.imsId(COMMON.CONFIRMATION.OK)
            .should("be.visible")
            .click();
        cy.get(COMMON.TABLE.BODY, { timeout: 30000 })
            .should("be.visible");
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

    
}

export const cancel_samity = new cancelSamity();
