import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanProvision {
  test_data = Cypress.env("TEST_DATA");

   gridLoanProvisionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.LOAN_PROVISION);
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  openProvisionForChecks() {
    cy.visit("/mfi-mis/loan-account/loan-provision/list");
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-provision/list");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  breadcrumbCheck() {
    this.openProvisionForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Loan Account")
      .and("contain.text", "Loan Provision").and("contain.text", "List");
  }

  summaryLabelsCheck() {
    this.openProvisionForChecks();
    ["Loan Principle", "Remaining Principle", "Provision Amount", "No Of Loan Account"].forEach((label) => {
      cy.contains("h1, h2, h3, h4, h5, h6, div, span, p", new RegExp(`^\\s*${label}\\s*$`)).should("be.visible");
    });
  }

  columnsCheck() {
    this.openProvisionForChecks();
    ["#", "Title", "Title (Bangla)", "No Of Loan Account", "Loan Principle", "Remaining Principle", "Accumulation Rate", "Provision Amount"].forEach((label) => {
      cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, label).should("be.visible");
    });
  }

  categoryRowsCheck() {
    this.openProvisionForChecks();
    const categories = ["Regular", "Watchful", "Sub-Standard", "Doubtful", "Bad Loan"];
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length).to.equal(categories.length);
      $rows.each((index, row) => {
        const cells = Cypress.$(row).find("td");
        expect(cells.eq(0).text().trim()).to.equal(String(index + 1));
        expect(cells.eq(1).text().trim()).to.equal(categories[index]);
        expect(cells.eq(2).text().trim(), "Bangla title").not.to.equal("");
      });
    });
  }

  numericValuesCheck() {
    this.openProvisionForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find("td");
        [3, 4, 5, 7].forEach((index) => {
          const value = cells.eq(index).text().trim().replace(/,/g, "");
          expect(value, `numeric column ${index}`).to.match(/^\d+(\.\d+)?$/);
          expect(Number(value)).to.be.at.least(0);
          if (index === 3) expect(Number.isInteger(Number(value)), "whole account count").to.equal(true);
        });
      });
    });
  }

  accumulationRatesCheck() {
    this.openProvisionForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      $rows.each((_, row) => {
        const rate = Cypress.$(row).find("td").eq(6).text().trim();
        expect(rate).to.match(/^\d+(\.\d+)?%$/);
        expect(parseFloat(rate)).to.be.within(0, 100);
      });
    });
  }

  remainingPrincipalCheck() {
    this.openProvisionForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find("td");
        const principal = Number(cells.eq(4).text().trim().replace(/,/g, ""));
        const remaining = Number(cells.eq(5).text().trim().replace(/,/g, ""));
        expect(remaining, "remaining principal").to.be.at.most(principal + 0.01);
      });
    });
  }

  submitControlCheck() {
    this.openProvisionForChecks();
    cy.contains("button", /^\s*Submit\s*$/).should("be.visible").and("be.enabled");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

 
}

export const grid_loan_provision = new LoanProvision();
