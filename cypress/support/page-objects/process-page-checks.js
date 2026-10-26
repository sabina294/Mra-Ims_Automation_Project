import { COMMON } from "../constants/selectors";

export const processPageChecks = {
  open(menu, path) {
    // Menu navigation retains the office and business-date context from login.
    cy.imsId(menu).then(($menu) => {
      if (!$menu.is(":visible")) cy.imsId(COMMON.MENUS.PROCESS).click();
    });
    cy.imsId(menu).should("be.visible").click();
    cy.location("pathname").should("eq", path);
  },

  noResults({ dashboard = false } = {}) {
    const search = "NO_SUCH_BRANCH_OR_SAMITY_987654321";
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").clear().type(search);
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.enabled").click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", search);
    cy.get("body").should(($body) => {
      if (dashboard) {
        const details = $body.find("button:visible, a:visible, [role='button']:visible")
          .filter((_, element) => element.textContent.trim() === "Details");
        expect(details.length, "matching branch Details controls").to.equal(0);
      } else {
        expect($body.find(COMMON.TABLE.VISIBLE_ROWS).length, "matching process rows").to.equal(0);
      }
    });
  },

  clearSearch() {
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear();
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
  },
};
