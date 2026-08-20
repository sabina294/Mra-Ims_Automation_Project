import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DepartmentCreation {
  test_data = Cypress.env("TEST_DATA");
  runId = Date.now();
  inactiveDepartmentName = "";
  pageSizeDepartmentIds = [];

  gridDepartmentListPage() {
    cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.DEPARTMENT);
    cy.log(messages.ui.gridListMessage);
  }

  createDepartment() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_BN).type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewDepartment() {
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.log(messages.ui.viewMessage);

  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  turnOffEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editDepartment() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
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

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(depData.selectStatus).type(COMMON.KEYS.ENTER);
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(depData.statusSelect).type(COMMON.KEYS.ENTER);
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDepartmentName() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.nameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridColumnsCheck() {
    cy.log(messages.ui.gridColumns);
  }

  departmentNameAscendingSort() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.contains(depData.nameEnColumn).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).find(COMMON.TABLE.VISIBLE_CELLS)
        .filter(`:nth-child(${COMMON.DEPARTMENT.COLUMNS.NAME_EN + 1})`).then(($cells) => {
          const values = [...$cells].map((cell) => cell.innerText.trim());
          expect(values).to.deep.equal([...values].sort((a, b) => a.localeCompare(b)));
        });
      cy.log(messages.ui.ascendingSort);
    });
  }

  departmentNameDescendingSort() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.contains(depData.nameEnColumn).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).find(COMMON.TABLE.VISIBLE_CELLS)
        .filter(`:nth-child(${COMMON.DEPARTMENT.COLUMNS.NAME_EN + 1})`).then(($cells) => {
          const values = [...$cells].map((cell) => cell.innerText.trim());
          expect(values).to.deep.equal([...values].sort((a, b) => b.localeCompare(a)));
        });
      cy.log(messages.ui.descendingSort);
    });
  }

  searchNoResult() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(depData.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchNoResult);
    });
  }

  partialSearch() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(depData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.partialSearch);
    });
  }

  clearSearch() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(depData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear();
      cy.log(messages.ui.clearSearch);
    });
  }

  paginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER)
      .should("be.visible");
    cy.log(messages.ui.pagination);
  }

  pageSizeCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.PAGINATION.OPTIONS)
        .should("be.visible");
      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT)
        .click();
      cy.contains(
        COMMON.SELECT.OPTION,
        depData.pageSize
      ).click();

      cy.log(messages.ui.pageSize);
    });
  }

  addDepartmentNavigation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .should("be.visible");
      cy.formController(COMMON.INPUTS.NAME_BN)
        .should("be.visible");
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.selectStatus)
        .type(COMMON.KEYS.ENTER);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.createPageFields);
    });
  }

  departmentNameSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.spaceOnly);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.spaceValidation);
    });
  }

  departmentNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.spaceOnly);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.spaceValidation);
    });
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(depData.status);
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .click();
      cy.contains(depData.status)
        .should("be.visible");
      cy.contains(depData.selectStatus)
        .should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusOptions);
    });
  }

  listPageTitleAndBreadcrumbCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.location("pathname").should("not.include", COMMON.DEPARTMENT.CREATE_PATH);
      cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible");
      cy.get(COMMON.TABLE.HEAD).should("be.visible");
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbHome)
        .should("be.visible");
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbConfiguration)
        .should("be.visible");
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbDepartment)
        .should("be.visible");
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbList)
        .should("be.visible");
      cy.log(messages.ui.listPageNavigationCheck);
    });
  }

  gridNumberColumnCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.HEAD)
        .find(COMMON.TABLE.HEADER_CELL)
        .eq(COMMON.DEPARTMENT.COLUMNS.NUMBER)
        .should("be.visible");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
        .find(COMMON.TABLE.VISIBLE_CELLS)
        .eq(COMMON.DEPARTMENT.COLUMNS.NUMBER)
        .invoke("text")
        .then((serialNumber) => {
          expect(serialNumber.trim()).to.match(/^\d+$/);
        });
      cy.log(messages.ui.gridColumnCheck);
    });
  }

  gridDepartmentNameColumnCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, depData.nameEnColumn)
        .should("be.visible");
      cy.log(messages.ui.gridColumnCheck);
    });
  }

  gridDepartmentNameBnColumnCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, depData.nameBnColumn)
        .should("be.visible");
      cy.log(messages.ui.gridColumnCheck);
    });
  }

  gridDepartmentIdColumnCheck() {
    cy.get(COMMON.TABLE.HEAD)
      .find(COMMON.TABLE.HEADER_CELL)
      .eq(COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID)
      .should("be.visible");
    cy.log(messages.ui.gridColumnCheck);
  }

  gridStatusColumnCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, depData.statusColumn)
        .should("be.visible");
      cy.log(messages.ui.gridColumnCheck);
    });
  }

  gridActionsColumnCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, depData.actionsColumn)
        .should("be.visible");
      cy.log(messages.ui.gridColumnCheck);
    });
  }

  departmentIdDataCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .filter(COMMON.PAGE.VISIBLE_ELEMENT)
      .first()
      .within(() => {
        cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID)
          .invoke("text")
          .then((departmentId) => {
            expect(departmentId.trim()).to.not.equal("");
          });
      });
    cy.log(messages.ui.recordIdCheck);
  }

  departmentStatusDataCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.VISIBLE_ROWS).first().within(() => {
        cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(COMMON.DEPARTMENT.COLUMNS.STATUS)
          .invoke("text").then((status) => {
            expect(depData.validStatuses).to.include(status.trim());
          });
      });
      cy.log(messages.ui.recordStatusCheck);
    });
  }

  actionMenuOpenCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION)
      .first()
      .click();

    cy.imsId(COMMON.GRID.ACTION_VIEW)
      .should("be.visible");

    cy.imsId(COMMON.GRID.ACTION_EDIT)
      .should("be.visible");
    cy.log(messages.ui.actionMenuOpenCheck);
  }

  actionMenuCloseCheck() {
    cy.get(COMMON.PAGE.BODY).click(0, 0);

    cy.imsId(COMMON.GRID.ACTION_VIEW)
      .should("not.be.visible");
    cy.log(messages.ui.actionMenuCloseCheck);
  }

  exactDepartmentNameSearch() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(depData.nameEn);

      cy.imsId(COMMON.BUTTONS.SEARCH)
        .click();

      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.get(COMMON.TABLE.VISIBLE_ROWS).each(($row) => {
        cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS)
          .eq(COMMON.DEPARTMENT.COLUMNS.NAME_EN)
          .should("contain.text", depData.nameEn);
      });

      cy.log(messages.ui.exactSearchCheck);
    });
  }

  searchWithLeadingTrailingSpaces() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(`  ${depData.nameEn}  `);

      cy.imsId(COMMON.BUTTONS.SEARCH)
        .click();

      cy.get(COMMON.TABLE.BODY).should("be.visible");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.get(COMMON.TABLE.VISIBLE_ROWS).each(($row) => {
        cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS)
          .eq(COMMON.DEPARTMENT.COLUMNS.NAME_EN)
          .should("contain.text", depData.nameEn);
      });

      cy.log(messages.ui.trimmedSearchCheck);
    });
  }

  clearStatusFilter() {
    cy.imsId(COMMON.BUTTONS.RESET)
      .click();

    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);

    cy.log(messages.ui.statusFilterClearCheck);
  }

  statusAndNameCombinedSearch() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.imsId(COMMON.BUTTONS.RESET)
        .click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.statusSelect)
        .type(COMMON.KEYS.ENTER);

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(depData.nameEn);

      cy.imsId(COMMON.BUTTONS.SEARCH)
        .click();

      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.get(COMMON.TABLE.VISIBLE_ROWS).each(($row) => {
        cy.wrap($row).should("contain.text", depData.nameEn);
        cy.wrap($row).should("contain.text", depData.statusSelect);
      });

      cy.log(messages.ui.combinedFilterCheck);
    });
  }

  changeStatusAfterSearch() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.imsId(COMMON.BUTTONS.RESET)
        .click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(depData.nameEn);

      cy.imsId(COMMON.BUTTONS.SEARCH)
        .click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.selectStatus)
        .type(COMMON.KEYS.ENTER);

      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.get(COMMON.TABLE.BODY).should("be.visible");

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("contain.text", depData.selectStatus);

      cy.log(messages.ui.filterUpdateCheck);
    });
  }

  changeSearchAfterStatusFilter() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.imsId(COMMON.BUTTONS.RESET)
        .click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.statusSelect)
        .type(COMMON.KEYS.ENTER);

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(depData.nameEn);

      cy.imsId(COMMON.BUTTONS.SEARCH)
        .click();

      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.get(COMMON.TABLE.VISIBLE_ROWS).each(($row) => {
        cy.wrap($row).should("contain.text", depData.nameEn);
        cy.wrap($row).should("contain.text", depData.statusSelect);
      });

      cy.log(messages.ui.filterUpdateCheck);
    });
  }

  departmentNameBnAscendingSort() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.get(COMMON.TABLE.HEAD)
        .contains(COMMON.TABLE.HEADER_CELL, depData.nameBnColumn)
        .click()
        .should(($header) => {
          const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE);
          const hasActiveSortClass = $header.hasClass(COMMON.SORT.ACTIVE_CLASS);
          expect(ariaSort === COMMON.SORT.ASCENDING || hasActiveSortClass).to.equal(true);
        });
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .should("have.length.greaterThan", 0);
      cy.log(messages.ui.banglaAscendingSortCheck);
    });
  }

  departmentNameBnDescendingSort() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.HEAD)
        .contains(COMMON.TABLE.HEADER_CELL, depData.nameBnColumn)
        .click()
        .should(($header) => {
          const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE);
          const hasActiveSortClass = $header.hasClass(COMMON.SORT.ACTIVE_CLASS);
          expect(ariaSort === COMMON.SORT.DESCENDING || hasActiveSortClass).to.equal(true);
        });
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .should("have.length.greaterThan", 0);
      cy.log(messages.ui.banglaDescendingSortCheck);
    });
  }

  departmentIdAscendingSort() {
    cy.get(COMMON.TABLE.HEAD)
      .find(COMMON.TABLE.HEADER_CELL)
      .eq(COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID)
      .click()
      .should(($header) => {
        const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE);
        const ascendingIconIsActive = $header
          .find(".ant-table-column-sorter-up.active")
          .length > 0;
        expect(
          ariaSort === COMMON.SORT.ASCENDING || ascendingIconIsActive
        ).to.equal(true);
      });
    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .should("have.length.greaterThan", 0);
  }

  departmentIdDescendingSort() {
    cy.get(COMMON.TABLE.HEAD)
      .find(COMMON.TABLE.HEADER_CELL)
      .eq(COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID)
      .click()
      .should(($header) => {
        const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE);
        const descendingIconIsActive = $header
          .find(".ant-table-column-sorter-down.active")
          .length > 0;
        expect(
          ariaSort === COMMON.SORT.DESCENDING || descendingIconIsActive
        ).to.equal(true);
      });
    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .should("have.length.greaterThan", 0);
  }

  sortingDataIntegrityCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).then(($rowsBefore) => {
      const rowCountBefore = $rowsBefore.length;
      cy.fixture(this.test_data).then((data) => {
        cy.contains(data.mfiAdmin.createDepartmentFrom.nameEnColumn).click();
      });
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .should("have.length", rowCountBefore)
        .each(($row) => {
          cy.wrap($row)
            .find(COMMON.TABLE.VISIBLE_CELLS)
            .eq(COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID)
            .invoke("text")
            .should("not.be.empty");
        });
    });

    cy.log(messages.ui.sortingIntegrityCheck);
  }

  previousPageDisabledCheck() {
    cy.get(COMMON.PAGINATION.PAGE_ITEMS).first().click();
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("be.visible")
      .and("have.class", COMMON.PAGINATION.DISABLED_CLASS);

    cy.log(messages.ui.previousPageDisabledCheck);
  }

  nextPageDisabledCheck() {
    cy.get(COMMON.PAGINATION.PAGE_ITEMS).last().click();

    cy.get(COMMON.PAGINATION.NEXT_PAGE)
      .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);

    cy.log(messages.ui.nextPageDisabledCheck);
  }

  pageSizeRecordCountCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT)
        .click();
      cy.contains(
        COMMON.SELECT.OPTION,
        depData.pageSize
      ).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .its("length")
        .should("be.greaterThan", 0)
        .and("be.at.most", Number(depData.pageSize));

      cy.get(COMMON.TABLE.VISIBLE_ROWS).then(($rows) => {
        this.pageSizeDepartmentIds = [...$rows].map((row) =>
          row.cells[COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID].innerText.trim()
        );
      });

      cy.log(messages.ui.pageSizeRecordCountCheck);
    });
  }

  pageSizeDataIntegrityCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).then(($rows) => {
      const currentDepartmentIds = [...$rows].map((row) =>
        row.cells[COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID].innerText.trim()
      );
      expect(currentDepartmentIds).to.deep.equal(this.pageSizeDepartmentIds);
    });

    cy.log(messages.ui.pageSizeDataIntegrityCheck);
  }

  createPageTitleAndBreadcrumbCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.location("pathname").should("include", COMMON.DEPARTMENT.CREATE_PATH);
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbHome)
        .should("be.visible");
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbConfiguration)
        .should("be.visible");
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbDepartment)
        .should("be.visible");
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, depData.breadcrumbCreate)
        .should("be.visible");
      cy.formController(COMMON.INPUTS.NAME_EN).should("be.visible");
      cy.formController(COMMON.INPUTS.NAME_BN).should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.location("pathname").should("not.include", COMMON.DEPARTMENT.CREATE_PATH);
      cy.log(messages.ui.createPageNavigationCheck);
    });
  }

  validEnglishNameCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .clear()
        .type(depData.nameEn)
        .should("have.value", depData.nameEn);
      cy.imsId(COMMON.BUTTONS.GO_BACK)
        .click();
      cy.log(messages.ui.validEnglishInputCheck);
    });
  }

  validBanglaNameCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_BN)
        .clear()
        .type(depData.nameBn)
        .should("have.value", depData.nameBn);
      cy.imsId(COMMON.BUTTONS.GO_BACK)
        .click();
      cy.log(messages.ui.validBanglaInputCheck);
    });
  }

  clearEnglishNameValidation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.nameEn)
        .clear();
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .should("have.class", COMMON.FORM.INVALID_CONTROL_CLASS);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.clearedEnglishValidationCheck);
    });
  }

  clearOptionalBanglaNameCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.nameBn)
        .clear();
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.YES).should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.NO).click();
      cy.formController(COMMON.INPUTS.NAME_BN)
        .should("have.value", "");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.optionalBanglaClearedCheck);
    });
  }

  changeStatusBeforeSubmit() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .click();
      cy.contains(depData.selectStatus)
        .click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("be.visible")
        .and("contain.text", depData.selectStatus);
      cy.imsId(COMMON.BUTTONS.GO_BACK)
        .click();
      cy.log(messages.ui.statusChangeBeforeSubmitCheck);
    });
  }

  selectedStatusSubmissionCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      const selectedStatusDepartmentName = `${depData.selectedStatusNamePrefix} ${this.runId}`;
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(selectedStatusDepartmentName);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(`${depData.selectedStatusNameBn} ${this.runId}`);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.statusSelect)
        .type(COMMON.KEYS.ENTER);
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.YES)
        .click();
      cy.imsId(COMMON.CONFIRMATION.OK)
        .click();
      cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible");
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(selectedStatusDepartmentName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 1)
        .first()
        .should("contain.text", selectedStatusDepartmentName)
        .and("contain.text", depData.statusSelect);
      cy.log(messages.ui.selectedStatusSubmissionCheck);
    });
  }

  submitConfirmationDialogCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.YES)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.NO)
        .should("be.visible")
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .should("have.value", depData.nameEn);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.confirmationDialogCheck);
    });
  }

  cancelSubmissionCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.NO)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .should("have.value", depData.nameEn);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.submissionCancelledCheck);
    });
  }

  confirmSuccessfulCreationCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      const uniqueName = `${depData.confirmationNamePrefix} ${this.runId}`;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(uniqueName);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(`${depData.confirmationNameBn} ${this.runId}`);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).should("be.visible").click();
      cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible");
      cy.log(messages.ui.creationConfirmedCheck);
    });
  }

  englishNameLeadingTrailingSpacesCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(`  ${depData.nameEn}  `)
        .should("have.value", `  ${depData.nameEn}  `);
      cy.imsId(COMMON.BUTTONS.GO_BACK)
        .click();
      cy.log(messages.ui.englishTrimInputCheck);
    });
  }

  banglaNameLeadingTrailingSpacesCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(`  ${depData.nameBn}  `)
        .should("have.value", `  ${depData.nameBn}  `);
      cy.imsId(COMMON.BUTTONS.GO_BACK)
        .click();
      cy.log(messages.ui.banglaTrimInputCheck);
    });
  }

  englishNameSpecialCharacterValidation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.specialCharacterNameEn)
        .should("have.value", depData.specialCharacterNameEn);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.englishSpecialCharacterCheck);
    });
  }

  banglaNameSpecialCharacterValidation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.specialCharacterNameBn)
        .should("have.value", depData.specialCharacterNameBn);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.banglaSpecialCharacterCheck);
    });
  }

  englishNameMaximumLengthCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(depData.longNameEn, { delay: 0 })
        .then(($input) => {
          const enteredLength = String($input.val()).length;
          expect(enteredLength).to.be.greaterThan(0);
          expect(enteredLength).to.be.at.most(depData.longNameEn.length);
        });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.englishMaximumLengthCheck);
    });
  }

  banglaNameMaximumLengthCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(depData.longNameBn, { delay: 0 })
        .then(($input) => {
          const enteredLength = String($input.val()).length;
          expect(enteredLength).to.be.greaterThan(0);
          expect(enteredLength).to.be.at.most(depData.longNameBn.length);
        });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.banglaMaximumLengthCheck);
    });
  }

  viewEnglishNameDataCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS)
      .eq(COMMON.DEPARTMENT.COLUMNS.NAME_EN).invoke("text")
      .then((nameEn) => {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, nameEn.trim())
          .should("be.visible");
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      });

    cy.log(messages.ui.viewEnglishNameCheck);
  }

  viewBanglaNameDataCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .filter((_, row) =>
        row.cells[COMMON.DEPARTMENT.COLUMNS.NAME_BN].innerText.trim().length > 0
      )
      .first()
      .then(($row) => {
        const nameBn = $row[0].cells[COMMON.DEPARTMENT.COLUMNS.NAME_BN].innerText.trim();
        cy.wrap($row)
          .find(COMMON.TABLE.ACTION_TOGGLE)
          .click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, nameBn)
          .should("be.visible");
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      });

    cy.log(messages.ui.viewBanglaNameCheck);
  }

  viewDepartmentIdCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS)
      .eq(COMMON.DEPARTMENT.COLUMNS.DEPARTMENT_ID).invoke("text")
      .then((departmentId) => {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.contains(departmentId.trim()).should("be.visible");
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      });
    cy.log(messages.ui.viewRecordIdCheck);
  }

  viewDepartmentStatusCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS)
      .eq(COMMON.DEPARTMENT.COLUMNS.STATUS).invoke("text")
      .then((status) => {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, status.trim())
          .should("be.visible");
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      });
    cy.log(messages.ui.viewRecordStatusCheck);
  }

  editWithoutSubmitDataIntegrityCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
        .find(COMMON.TABLE.VISIBLE_CELLS)
        .eq(COMMON.DEPARTMENT.COLUMNS.NAME_EN).invoke("text").then((originalName) => {
          cy.imsId(COMMON.TOGGLES.ACTION).first().click();
          cy.imsId(COMMON.GRID.ACTION_EDIT).click();
          cy.formController(COMMON.INPUTS.NAME_EN).clear().type(depData.unsavedNameEn);
          cy.imsId(COMMON.BUTTONS.GO_BACK).click();
          cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
            .find(COMMON.TABLE.VISIBLE_CELLS)
            .eq(COMMON.DEPARTMENT.COLUMNS.NAME_EN)
            .should("contain.text", originalName.trim());
        });
    });

    cy.log(messages.ui.editCancelledCheck);
  }

  updatedDepartmentListDataCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      const updatedDepartmentName = `${depData.updatedNamePrefix} ${this.runId}`;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.formController(COMMON.INPUTS.NAME_EN).clear().type(updatedDepartmentName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(updatedDepartmentName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 1)
        .first().should("contain.text", updatedDepartmentName);
      cy.log(messages.ui.editUpdatedCheck);
    });
  }

  createdActiveStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      const activeDepartmentName = `${depData.activeNamePrefix} ${this.runId}`;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(activeDepartmentName);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(`${depData.activeNameBn} ${this.runId}`);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.statusSelect)
        .type(COMMON.KEYS.ENTER);
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.YES)
        .click();
      cy.imsId(COMMON.CONFIRMATION.OK)
        .click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(activeDepartmentName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 1)
        .first()
        .should("contain.text", activeDepartmentName)
        .and("contain.text", depData.statusSelect);
      cy.log(messages.ui.createdActiveCheck);
    });
  }

  createdInactiveStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      this.inactiveDepartmentName = `${depData.inactiveNamePrefix} ${this.runId}`;
      cy.imsId(COMMON.BUTTONS.ADD_NEW)
        .click();
      cy.formController(COMMON.INPUTS.NAME_EN)
        .type(this.inactiveDepartmentName);
      cy.formController(COMMON.INPUTS.NAME_BN)
        .type(`${depData.inactiveNameBn} ${this.runId}`);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.selectStatus)
        .type(COMMON.KEYS.ENTER);
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.YES)
        .click();
      cy.imsId(COMMON.CONFIRMATION.OK)
        .click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(this.inactiveDepartmentName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 1)
        .first()
        .should("contain.text", this.inactiveDepartmentName)
        .and("contain.text", depData.selectStatus);
      cy.log(messages.ui.createdInactiveCheck);
    });
  }

  gridLanguageSwitchCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.PROFILE).click();
      cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
      cy.get(COMMON.TABLE.BODY).should("be.visible");
      cy.log(messages.ui.languageSwitch);
      cy.changeLanguage(depData.defaultLanguage);
    });
  }
}

export const create_department = new DepartmentCreation();
