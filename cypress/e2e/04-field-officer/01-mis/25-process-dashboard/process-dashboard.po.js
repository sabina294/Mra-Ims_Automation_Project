import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ProcessDashboard {
  test_data = Cypress.env("TEST_DATA");

  gridProcessDashboardListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.PROCESS_DASHBOARD);
      cy.log(messages.ui.gridListMessage);
    });
  }

  openDashboardForChecks() {
    cy.visit("/mfi-mis/process/dashboard");
    cy.location("pathname").should("eq", "/mfi-mis/process/dashboard");
    cy.contains("System Overview").should("be.visible");
  }

  dashboardBreadcrumbCheck() {
    this.openDashboardForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Process")
      .and("contain.text", "Process Dashboard");
  }

  overviewCardsCheck() {
    this.openDashboardForChecks();
    ["Total Offices", "Staging Data", "Pending", "Failed"].forEach((label) => {
      cy.contains("h1, h2, h3, h4, h5, h6, p, span, div", new RegExp(`^\\s*${label}\\s*$`))
        .should("be.visible");
    });
    ["Active branches", "Completed processes", "Awaiting completion", "Requires attention"]
      .forEach((caption) => cy.contains(caption).should("be.visible"));
  }

  overviewCountsCheck() {
    this.openDashboardForChecks();
    const cards = [
      ["Total Offices", "Active branches"],
      ["Staging Data", "Completed processes"],
      ["Pending", "Awaiting completion"],
      ["Failed", "Requires attention"],
    ];
    cards.forEach(([label, caption]) => {
      // Find the smallest container holding this card's label and caption.
      // Avoid relying on CSS utility classes or fixed dashboard counts.
      cy.contains("p, span, div", new RegExp(`^\\s*${caption}\\s*$`))
        .parents().filter((_, element) => {
          const text = Cypress.$(element).text();
          return text.includes(label) && !cards.some(([otherLabel, otherCaption]) =>
            otherLabel !== label && text.includes(otherCaption));
        }).first().should(($card) => {
          const count = $card.text().replace(label, "").replace(caption, "")
            .replace(/\s/g, "").replace(/,/g, "");
          expect(count, `${label} count`).to.match(/^\d+$/);
          expect(Number.isSafeInteger(Number(count)), `${label} integer count`).to.equal(true);
        });
    });
  }

  branchSectionCheck() {
    this.openDashboardForChecks();
    cy.contains("Branch Processes").should("be.visible");
    cy.contains("Branch Office").should("be.visible");
    cy.contains("Business Date").should("be.visible");
  }

  searchControlsCheck() {
    this.openDashboardForChecks();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("not.be.disabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("not.be.disabled");
  }

  branchProcessLabelsCheck() {
    this.openDashboardForChecks();
    ["Staging Process", "Day End Process", "Day Forward Process"].forEach((label) => {
      cy.contains(label).should("be.visible");
    });
  }

  detailsControlCheck() {
    this.openDashboardForChecks();
    cy.contains("button, a, [role='button']", /^\s*Details\s*$/)
      .should("be.visible").and("not.be.disabled");
  }

  lastUpdatedCheck() {
    this.openDashboardForChecks();
    cy.contains("Real-time Status").should("be.visible");
    cy.contains("p, span, div", /Last updated:/).should("be.visible")
      .invoke("text").should("match", /Last updated:\s*\d/);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_process_dashboard = new ProcessDashboard();
