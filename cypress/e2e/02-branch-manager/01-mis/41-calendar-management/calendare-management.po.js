import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class CalendarManagement {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarManagListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.CALENDAR_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  openCalendarForChecks() {
    // Keep the office/business-date context established by login and menu navigation.
    cy.location("pathname").then((pathname) => {
      if (pathname !== "/mfi-mis/calendar/calendar-management") {
        cy.imsId(COMMON.MENUS.CALENDAR_MANAGEMENT).then(($menu) => {
          if (!$menu.is(":visible")) {
            cy.imsId(COMMON.MENUS.CALENDAR).click();
          }
        });
        cy.imsId(COMMON.MENUS.CALENDAR_MANAGEMENT).should("be.visible").click();
      }
    });
    cy.location("pathname").should("eq", "/mfi-mis/calendar/calendar-management");
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Calendar Management");
  }

  breadcrumbCheck() {
    this.openCalendarForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Calendar Management");
  }

  calendarControlsCheck() {
    this.openCalendarForChecks();
    cy.get("nz-select:visible").should("have.length", 3);
    cy.get("nz-select:visible").eq(0).should("have.class", "ant-select-disabled");
    cy.get("nz-select:visible").eq(1).should("not.have.class", "ant-select-disabled")
      .find(".ant-select-selection-item").invoke("text").should("match", /\b\d{4}\b/);
    cy.get("nz-select:visible").eq(2).should("not.have.class", "ant-select-disabled")
      .find(".ant-select-selection-item").invoke("text")
      .should("match", /\d{4}.*(?:January|February|March|April|May|June|July|August|September|October|November|December)/);
  }

  holidayColumnsCheck() {
    this.openCalendarForChecks();
    ["Date", "Holiday Title", "Holiday Type"].forEach((label) => {
      cy.contains("th:visible", new RegExp("^\\s*" + label + "\\s*$")).should("be.visible");
    });
  }

  holidayRecordsOrEmptyCheck() {
    this.openCalendarForChecks();
    cy.contains("th:visible", /^\s*Holiday Title\s*$/).closest("nz-table").find("tbody").should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        const date = cells.eq(0).text().trim();
        expect(date, "holiday date").to.match(/^\d{2}-\d{2}-\d{4}$/);
        const [day, month, year] = date.split("-").map(Number);
        const parsed = new Date(year, month - 1, day);
        expect([parsed.getDate(), parsed.getMonth() + 1, parsed.getFullYear()], "valid holiday date")
          .to.deep.equal([day, month, year]);
        expect(cells.eq(1).text().trim(), "holiday title").not.to.equal("");
        expect(cells.eq(2).text().trim(), "holiday type").not.to.equal("");
      });
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_calendar_management = new CalendarManagement();
