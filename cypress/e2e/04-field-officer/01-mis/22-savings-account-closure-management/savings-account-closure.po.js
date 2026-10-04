import { COMMON } from "../../../../support/constants/selectors";
import messages from "../../../../support/constants/messages";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class SavingsAccountClosure {
  test_data = Cypress.env("TEST_DATA");
  listPath = "/mfi-mis/savings-account/savings-account-closure/list";

  gridListPage() {
    cy.get("body").then(($body) => {
      const submenu = $body.find(`[data-ims-id="${COMMON.MENUS.SAVINGS_ACCOUNT_CLOSURE_MANAGEMENT}"] a:visible`);
      if (!submenu.length) {
        cy.imsId(COMMON.MENUS.SAVINGS_ACCOUNT).scrollIntoView().should("be.visible").click();
      }
    });
    cy.imsId(COMMON.MENUS.SAVINGS_ACCOUNT_CLOSURE_MANAGEMENT)
      .find("a").scrollIntoView().should("be.visible");
    cy.imsId(COMMON.MENUS.SAVINGS_ACCOUNT_CLOSURE_MANAGEMENT)
      .find("a").click();
    cy.location("pathname").should("eq", this.listPath);
    cy.log(messages.ui.listPageNavigationCheck);
  }

  openList() {
    cy.visit(this.listPath);
    cy.location("pathname").should("eq", this.listPath);
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
  }

  breadcrumbCheck() {
    this.openList();
    configurationGridChecks.breadcrumb("Savings Account Closure Management", ["Savings Account"]);
  }

  columnsCheck() {
    this.openList();
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.columns(data.fieldOfficer.savingsAccountClosureFrom.gridColumns);
    });
  }

  assertGridState() {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).find("td");
        expect(cells.eq(1).text().trim(), "serial number").to.match(/^\d+$/);
        [2, 3, 4, 5, 9].forEach((index) => {
          expect(cells.eq(index).text().trim(), `column ${index}`).not.to.equal("");
        });
        const amount = cells.eq(8).text().trim().replace(/,/g, "");
        expect(amount, "closing amount").to.match(/^\d+(\.\d+)?$/);
        expect(Number(amount)).to.be.at.least(0);
      });
    });
  }

  recordsCheck() {
    this.openList();
    this.assertGridState();
  }

  controlsCheck() {
    this.openList();
    cy.formController("office_id").should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
  }

  noResultSearchCheck() {
    this.openList();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear()
        .type(data.fieldOfficer.savingsAccountClosureFrom.invalidSearch);
    });
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      expect($body.find("tr:not(.ant-table-placeholder):visible")).to.have.length(0);
      expect($body.find(".ant-empty:visible").length).to.be.greaterThan(0);
      expect($body.text()).to.contain("No Data");
    });
    cy.log(messages.ui.searchNoResult);
  }

  resetSearchCheck() {
    this.noResultSearchCheck();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertGridState();
    cy.log(messages.ui.gridResetSuccess);
  }

  refreshCheck() {
    this.openList();
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.location("pathname").should("eq", this.listPath);
    this.assertGridState();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  createButtonCheck() {
    this.openList();
    cy.contains("button, a", "Create Savings Encashment")
      .should("be.visible").and("not.be.disabled");
  }

  languageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const savings_account_closure = new SavingsAccountClosure();
