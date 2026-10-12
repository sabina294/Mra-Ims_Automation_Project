import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MonthEndProcessAis {
    test_data = Cypress.env("TEST_DATA");

    gridMonthEndProcessPage() {
        cy.fixture(this.test_data).then(() => {
            cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.MONTH_END_PROCESS_AIS);
            cy.log(messages.ui.actionMessage);
        });
    }

    processPreviewButtonCheck() {
        cy.imsId(COMMON.BUTTONS.PREVIEW).eq(0).click();
        cy.log(messages.ui.previewMessage);
    }

    processGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.AIS_GOBACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    previousOn() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.PREVIOUS).click();
            cy.log(messages.ui.previousSearchMessage);
        });
    }

    previousSearchButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.AIS_SEARCH).click();
            cy.log(messages.ui.previousSearchMessage);
        });
    }

    previousPreviewButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.PREVIEW).click();
            cy.log(messages.ui.previousSearchMessage);
        });
    }

    previousPreviewGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.AIS_GOBACK).click();
            cy.log(messages.ui.goBackSuccess);
        });
    }

    previousOff() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.PREVIOUS).click();
            cy.log(messages.ui.previousSearchMessage);
        });
    }

    openListForChecks() {
        const listPath = "/mfi-ais/process/month-end-process/list";
        // The preceding tests already return here. Clicking Process again
        // collapses its submenu and causes Cypress's covered-element error.
        cy.location("pathname").then((pathname) => {
            if (pathname !== listPath) {
                cy.visit(listPath);
            }
        });
        cy.location("pathname").should("eq", listPath);
        cy.contains("Auto Voucher List").should("be.visible");
    }

    breadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Process")
            .and("contain.text", "Month End Process (AIS)").and("contain.text", "List");
    }

    voucherColumnsCheck() {
        this.openListForChecks();
        ["#", "Voucher ID", "Voucher Name", "Voucher Date", "Prepared By", "Office", "Voucher Amount", "Status", "Action"]
            .forEach((label) => {
                cy.get("thead").contains("th", new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
                    .should("be.visible");
            });
    }

    voucherListStateCheck() {
        this.openListForChecks();
        cy.get("tbody").should(($body) => {
            const rows = $body.find("tr:not(.ant-table-placeholder):visible");
            if (!rows.length) {
                expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
                expect($body.text()).to.contain("No Data");
                return;
            }
            rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                expect(cells.eq(1).text().trim(), "voucher ID").not.to.equal("");
                expect(cells.eq(2).text().trim(), "voucher name").not.to.equal("");
                expect(cells.eq(7).text().trim(), "voucher status").not.to.equal("");
            });
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_month_end_process_ais = new MonthEndProcessAis();
