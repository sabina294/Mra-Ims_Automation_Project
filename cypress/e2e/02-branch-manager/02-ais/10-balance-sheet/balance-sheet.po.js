import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class BalanceSheet {
    test_data = Cypress.env("TEST_DATA");

    gridBalanceSheetListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.FINANCIAL_STATEMENT, COMMON.MENUS.BALANCE_SHEET);
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridRefreshButtonCheck() {
        this.openPageForChecks();
        cy.imsId(COMMON.BUTTONS.RELOAD).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-ais/financial-statement/balance-sheet");
        cy.contains("table td", "Cash in Hand").should("be.visible");
        cy.log(messages.ui.gridRefreshSuccess);
    }

    openPageForChecks() {
        cy.visit("/mfi-ais/financial-statement/balance-sheet");
        cy.location("pathname").should("eq", "/mfi-ais/financial-statement/balance-sheet");
        cy.contains("table td", "Cash in Hand").should("be.visible");
    }

    breadcrumbCheck() {
        this.openPageForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home")
            .and("contain.text", "Financial Statement")
            .and("contain.text", "Balance Sheet");
    }

    ledgerColumnsCheck() {
        this.openPageForChecks();
        cy.get("table:visible").should("have.length.greaterThan", 0).each(($table) => {
            cy.wrap($table).find("thead tr").first().find("th").should(($headers) => {
                expect([...$headers].map((header) => header.textContent.trim()))
                    .to.deep.equal(["Code", "Name", "Amount"]);
            });
        });
    }

    assetSectionsCheck() {
        this.openPageForChecks();
        ["Liquid Assets", "Current Assets", "Receivables"].forEach((label) => {
            cy.contains(label).should("be.visible");
        });
    }

    ledgerDataCheck() {
        this.openPageForChecks();
        cy.get("table:visible tbody").should(($bodies) => {
            // Total rows use merged cells and are not individual ledger entries.
            const rows = $bodies.find("tr").filter((_, row) => {
                const cells = Cypress.$(row).find("td");
                return cells.length === 3 && !cells.filter("[colspan]").length;
            });
            expect(rows.length, "ledger entries").to.be.greaterThan(0);
            rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.eq(0).text().trim(), "ledger code").to.match(/^\d+$/);
                expect(cells.eq(1).text().trim(), "ledger name").not.to.equal("");
                const amount = cells.eq(2).text().trim();
                expect(amount, "ledger amount").to.match(/^-?(?:\d+|\d{1,3}(?:,\d{2,3})+)(?:\.\d+)?$/);
                expect(Number(amount.replace(/,/g, "")), "numeric amount").to.be.finite;
            });
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

    gridGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

}

export const create_balance_sheet = new BalanceSheet();
