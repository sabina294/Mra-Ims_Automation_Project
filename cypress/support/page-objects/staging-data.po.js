// Shared across 02-branch-manager/01-mis/45-staging-data, workflow.cy.js,
// and 04-field-officer/01-mis/16-loan-penalty (uses it as a setup precondition).
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.STAGING_DATA);
      cy.log(messages.ui.gridListMessage);
    });
  }

  startProcessStagingData() {
    cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
    cy.wait(1000);
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.wait(3000);
    cy.log(
      messages.ui.startProcessMessage
    );
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 3; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.wait(2000); // optional wait between clicks
      }
      cy.log(messages.ui.gridRefreshSuccess);
    });
  }

  fieldOfficerDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("field_officer_id").type(SData.fieldOfficer).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.fieldOfficerDropdownMessage);
    });
  }

  samityDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("samity_id").type(SData.samity).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.samityDropdownMessage);
    });
  }

  StatusDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("status").type(SData.status).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("search_text").type(SData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.wait(2000);
      cy.log(messages.ui.searchMessage);
    });
  }

  deleteButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.imsId(COMMON.BUTTONS.DELETE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.wait(5000);
      cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
      cy.wait(1000);
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.wait(3000);
      cy.imsId(COMMON.BUTTONS.REFRESH).click();
      cy.wait(3000);
      cy.log(messages.ui.revertMessage);
    });
  }

  openList() {
    cy.visit("/mfi-mis/process/staging-data/list");
    cy.location("pathname").should("eq", "/mfi-mis/process/staging-data/list");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
  }

  breadcrumbCheck() {
    this.openList();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Process")
      .and("contain.text", "Staging Data").and("contain.text", "List");
  }

  columnsCheck() {
    this.openList();
    ["#", "Samity ID", "Samity Name", "Field Officer ID", "Field Officer Name",
      "Total Members", "Status", "Actions"].forEach((label) => {
      cy.contains("thead th:visible", new RegExp("^\\s*" + Cypress._.escapeRegExp(label) + "\\s*$"))
        .should("be.visible");
    });
  }

  controlsCheck() {
    this.openList();
    ["office_id", "field_officer_id", "samity_id", "status"].forEach((name) => {
      cy.formController(name).should("be.visible");
    });
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").and("be.enabled");
  }

  recordsOrEmptyCheck() {
    this.openList();
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        // Column zero holds selection checkboxes.
        expect(cells.eq(1).text().trim(), "serial").to.match(/^\d+$/);
        [2, 3, 4, 5, 7].forEach((index) => {
          expect(cells.eq(index).text().trim(), "staging column " + index).not.to.equal("");
        });
        const members = cells.eq(6).text().trim().replace(/,/g, "");
        expect(members, "total members").to.match(/^\d+$/);
        expect(Number.isSafeInteger(Number(members)), "integer member count").to.equal(true);
      });
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

}

export const create_staging_data = new StagingData();
