import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class RejectedSamity {
  test_data = Cypress.env("TEST_DATA");

  createRejectSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_MANAGEMENT);
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      // cy.imsId(COMMON.BUTTONS.SUBMIT).and('be.visible')
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController("office_id").type(rsData.office).type("{enter}");
      cy.formController("samity_name_en").first().type(rsData.samityNameEn);
      cy.formController("samity_name_bn").type(rsData.samityNameBn);
      cy.formController("samity_type").type(rsData.samityType).type("{enter}");
      cy.wait(2000);
      cy.formController("field_officer_id")
        .type(rsData.fieldOfficer)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(rsData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(rsData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(rsData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(rsData.maxMember);
      cy.wait(2000);
      cy.formController("working_area_id")
        .type(rsData.workingArea)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("address_line_1").type(rsData.adressEn);
      cy.formController("geo_area_type")
        .type(rsData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  approveRejectedSamity() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_MANAGEMENT).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.REJECT_LOWERCASE).click();
      cy.formController("approver_remarks").first().type(rsData.rejectRemarks);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  gridRejectedSamityListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.REJECTED_SAMITY);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewRejectedSamity() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.wait(1000);
    cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  searchInRejectSamityName() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController("office_id").type(rsData.office);
      cy.log(messages.ui.rejectSuccess);
    });
  }

  gridColumnsCheck() {
    const expectedColumns = [
      "#",
      "Samity Id",
      "Samity Name",
      "Samity Type",
      "Office Id",
      "Office",
      "MFI Program",
      "Samity Day",
      "Status",
      "Actions",
    ];

    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.HEAD)
      .find(COMMON.TABLE.HEADER_CELL)
      .then(($headers) => {
        const actualColumns = [...$headers].map((header) => header.innerText.trim());
        expectedColumns.forEach((column) => expect(actualColumns).to.include(column));
      });
    cy.log(messages.ui.gridColumns);
  }

  gridRecordDataCheck() {
    const requiredColumns = [
      COMMON.REJECTED_SAMITY.COLUMNS.NUMBER,
      COMMON.REJECTED_SAMITY.COLUMNS.SAMITY_NAME,
      COMMON.REJECTED_SAMITY.COLUMNS.SAMITY_TYPE,
      COMMON.REJECTED_SAMITY.COLUMNS.OFFICE_ID,
      COMMON.REJECTED_SAMITY.COLUMNS.OFFICE,
      COMMON.REJECTED_SAMITY.COLUMNS.MFI_PROGRAM,
      COMMON.REJECTED_SAMITY.COLUMNS.SAMITY_DAY,
      COMMON.REJECTED_SAMITY.COLUMNS.STATUS,
    ];

    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .first()
      .find(COMMON.TABLE.VISIBLE_CELLS)
      .then(($cells) => {
        requiredColumns.forEach((column) => {
          expect($cells.eq(column).text().trim()).to.not.equal("");
        });
      });
    cy.log(messages.ui.recordIdCheck);
    cy.log(messages.ui.recordStatusCheck);
  }

  exactSamityNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(rsData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .first()
        .find(COMMON.TABLE.VISIBLE_CELLS)
        .eq(COMMON.REJECTED_SAMITY.COLUMNS.SAMITY_NAME)
        .should("contain.text", rsData.samityNameEn);
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  clearSearchCheck() {
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear();
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.at.least", 1);
    cy.log(messages.ui.clearSearch);
  }

  samityNameAscendingSortCheck() {
    this.sortSamityName("ascending");
    cy.log(messages.ui.ascendingSort);
  }

  samityNameDescendingSortCheck() {
    this.sortSamityName("descending");
    cy.log(messages.ui.descendingSort);
  }

  sortSamityName(direction) {
    const column = COMMON.REJECTED_SAMITY.COLUMNS.SAMITY_NAME;
    const expectedSort = direction === "ascending"
      ? (a, b) => a.localeCompare(b)
      : (a, b) => b.localeCompare(a);

    this.setSamityNameSort(column, direction);

    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .find(COMMON.TABLE.VISIBLE_CELLS)
      .filter(`:nth-child(${column + 1})`)
      .then(($cells) => {
        const values = [...$cells].map((cell) => cell.innerText.trim());
        expect(values).to.deep.equal([...values].sort(expectedSort));
      });
  }

  setSamityNameSort(column, direction, attempts = 0) {
    if (attempts >= 3) {
      throw new Error(`Unable to set Samity Name sorting to ${direction}.`);
    }

    const activeIcon = direction === COMMON.SORT.ASCENDING
      ? COMMON.SORT.ASCENDING_ICON
      : COMMON.SORT.DESCENDING_ICON;

    cy.get(COMMON.TABLE.HEAD)
      .find(COMMON.TABLE.HEADER_CELL)
      .eq(column)
      .then(($header) => {
        if ($header.find(activeIcon).length) {
          return;
        }

        cy.wrap($header).click();
        this.setSamityNameSort(column, direction, attempts + 1);
      });
  }

  paginationAndTotalCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible").and("not.be.empty");
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("be.visible");
    cy.log(messages.ui.pagination);
    cy.log(messages.ui.totalRecordCountCheck);
  }

  previousPageDisabledCheck() {
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.log(messages.ui.previousPageDisabledCheck);
  }

  nextPageBoundaryCheck() {
    cy.get(COMMON.PAGINATION.PAGE_ITEMS).then(($pages) => {
      if ($pages.length === 1) {
        cy.get(COMMON.PAGINATION.NEXT_PAGE)
          .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
      } else {
        cy.get(COMMON.PAGINATION.NEXT_PAGE).should("not.have.class", COMMON.PAGINATION.DISABLED_CLASS);
      }
    });
    cy.log(messages.ui.nextPageDisabledCheck);
  }

  openRejectedSamityView() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(rsData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    });
  }

  viewPageNavigationCheck() {
    this.openRejectedSamityView();
    cy.location("pathname", { timeout: 30000 })
      .should("include", COMMON.REJECTED_SAMITY.VIEW_PATH);
    ["Home", "Samity", "Rejected Samity", "View"].forEach((breadcrumb) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, breadcrumb).should("be.visible");
    });
    cy.log(messages.ui.listPageNavigationCheck);
  }

  viewInformationCheck() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      ["Basic Information", "Settings", "Address Information"].forEach((section) => {
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, section).should("be.visible");
      });
      [
        rsData.samityNameEn,
        rsData.samityType,
        rsData.samityDay,
        rsData.samityFrequency,
        rsData.maxMember,
        rsData.geoAreaType,
      ].forEach((value) => {
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
      });
      cy.log(messages.ui.viewField);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_rejected_samity = new RejectedSamity();
