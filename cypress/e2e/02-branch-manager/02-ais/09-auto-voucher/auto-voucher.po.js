import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class AutoVoucher {
    test_data = Cypress.env("TEST_DATA");

    gridAutoVoucherListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.VOUCHER, COMMON.MENUS.AUTO_VOUCHER);
            cy.log(messages.ui.gridListMessage);
        });
    }


    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const avData = data.branchManager.autoVoucherFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(avData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const avData = data.branchManager.autoVoucherFrom;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(avData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const avData = data.branchManager.autoVoucherFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(avData.preparedBy);
            cy.log(messages.ui.searchSuccess);
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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const avData = data.branchManager.autoVoucherFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(avData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    openListForChecks() {
        cy.visit("/mfi-ais/voucher/auto-voucher/list");
        cy.location("pathname").should("eq", "/mfi-ais/voucher/auto-voucher/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Auto Voucher", ["Voucher"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Voucher ID", "Voucher Name", "Prepared By", "Voucher Date", "Office", "Created By", "Status"]);
    }

    assertRowsOrEmpty($body, checkRow) {
        const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
        if (!rows.length) {
            expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
            expect($body.text()).to.contain("No Data");
            return;
        }
        rows.each((_, row) => checkRow(Cypress.$(row).find("td")));
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            this.assertRowsOrEmpty($body, (cells) => {
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                [1, 2, 3, 5, 6, 7].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `column ${index + 1}`).not.to.equal("");
                });
            });
        });
    }

    voucherDateCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            this.assertRowsOrEmpty($body, (cells) => {
                const value = cells.eq(4).text().trim();
                expect(value, "ISO voucher date").to.match(/^\d{4}-\d{2}-\d{2}$/);
                const timestamp = Date.parse(`${value}T00:00:00Z`);
                expect(timestamp, "valid date").to.be.finite;
                expect(new Date(timestamp).toISOString().slice(0, 10), "calendar date").to.equal(value);
            });
        });
    }

    searchWithExistingVoucherName(partial = false) {
        this.openListForChecks();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            this.assertRowsOrEmpty($body, () => {});
        }).then(($body) => {
            const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
            if (!rows.length) {
                cy.log("No auto vouchers available for an existing-name search");
                cy.then(function () { this.skip(); });
                return;
            }
            const name = rows.first().find("td").eq(2).text().trim();
            expect(name, "existing voucher name").not.to.equal("");
            const search = partial && name.length > 1 ? name.slice(0, Math.ceil(name.length / 2)) : name;
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
                expect($rows.length, "matching vouchers").to.be.greaterThan(0);
                $rows.each((_, row) => {
                    expect(Cypress.$(row).find("td").eq(2).text().trim()).to.contain(search);
                });
            });
        });
    }

    voucherNameSearchCheck() {
        this.searchWithExistingVoucherName();
    }

    partialVoucherNameSearchCheck() {
        this.searchWithExistingVoucherName(true);
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_AUTO_VOUCHER");
    }

    activeStatusResultCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Active").type(COMMON.KEYS.ENTER);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            this.assertRowsOrEmpty($body, (cells) => {
                expect(cells.eq(7).text().trim(), "filtered status").to.equal("Active");
            });
        });
    }

    idAscendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Voucher ID", COMMON.SORT.ASCENDING);
    }

    idDescendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Voucher ID", COMMON.SORT.ASCENDING);
        configurationGridChecks.sort("Voucher ID", COMMON.SORT.DESCENDING);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_auto_voucher = new AutoVoucher();
