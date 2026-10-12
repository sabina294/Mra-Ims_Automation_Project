import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ChartOfAccountsCreation {
    test_data = Cypress.env("TEST_DATA");

    gridChartOfAccountsListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.CHART_OF_ACCOUNTS);
            cy.log(messages.ui.gridListMessage);
        });
    }

    // These checks use the read-only ledger tables shown on the AIS page.
    openPageForChecks() {
        cy.visit("/mfi-ais/accounting/chart-of-accounts");
        cy.location("pathname").should("eq", "/mfi-ais/accounting/chart-of-accounts");
        cy.contains("table:visible td", "Cash in Hand").should("be.visible");
    }

    listBreadcrumbCheck() {
        this.openPageForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home")
            .and("contain.text", "Accounting")
            .and("contain.text", "Chart of Accounts");
    }

    businessDateControlCheck() {
        this.openPageForChecks();
        cy.get('input[placeholder="Select Business Date"]').should("be.visible")
            .and("be.enabled").and("have.value", "");
    }

    requiredLedgerColumnsCheck() {
        this.openPageForChecks();
        cy.get("table:visible").should("have.length.greaterThan", 0).each(($table) => {
            cy.wrap($table).find("thead tr").first().find("th").should(($headers) => {
                expect([...$headers].map((header) => header.textContent.trim()))
                    .to.deep.equal(["Code", "Ledger Name (English)", "Ledger Name (Bengali)", "Ledger Balance"]);
            });
        });
    }

    assetSubgroupsCheck() {
        this.openPageForChecks();
        ["Liquid Assets", "Current Assets", "Receivables"].forEach((label) => {
            cy.contains(label).should("be.visible");
        });
    }

    ledgerRows() {
        return cy.get("table:visible tbody tr").filter(":has(td)")
            .should("have.length.greaterThan", 0);
    }

    ledgerRecordDataCheck() {
        this.openPageForChecks();
        this.ledgerRows().should(($rows) => {
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.length, "ledger column count").to.equal(4);
                expect(cells.eq(0).text().trim(), "ledger code").to.match(/^\d+-\d+$/);
                expect(cells.eq(1).text().trim(), "English ledger name").not.to.equal("");
                expect(cells.eq(2).text().trim(), "Bengali ledger name").to.match(/[\u0980-\u09FF]/);
            });
        });
    }

    ledgerBalanceFormatCheck() {
        this.openPageForChecks();
        this.ledgerRows().should(($rows) => {
            $rows.each((_, row) => {
                const balance = Cypress.$(row).find("td").eq(3).text().trim();
                expect(balance, "ledger balance").to.match(/^-?(?:\d+|\d{1,3}(?:,\d{2,3})+)\.\d{2}$/);
                expect(Number(balance.replace(/,/g, "")), "numeric balance").to.be.finite;
            });
        });
    }

    reloadPageCheck() {
        this.openPageForChecks();
        cy.reload();
        cy.location("pathname").should("eq", "/mfi-ais/accounting/chart-of-accounts");
        cy.contains("table:visible td", "Cash in Hand").should("be.visible");
        this.ledgerRows();
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_chart_of_accounts = new ChartOfAccountsCreation();
