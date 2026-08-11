import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MemberAttendance {
    test_data = Cypress.env("TEST_DATA");

    gridMemberAttendanceListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-member", "submenu-member-attendance");
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(
            messages.ui.actionMessage
        );
    }

    searchInMemberAttendanceName() {
        cy.fixture(this.test_data).then((data) => {
            const matData = data.mfiAdmin.memberAttendanceFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(matData.search);
            cy.log(messages.ui.searchMessage);
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const matData = data.mfiAdmin.memberAttendanceFrom;
            cy.formController("office_id").type(matData.SelectOffice).type("{enter}");
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.officeDropdownMessage);
        });
    }
    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const matData = data.mfiAdmin.memberAttendanceFrom;
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(matData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
        });
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

export const member_attendance = new MemberAttendance();
