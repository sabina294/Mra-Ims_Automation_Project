import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class FundingOrganizationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridFundingOrganizationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.FUNDING_ORGANIZATION);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutFundingOrgName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutFundingOrgType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
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

  viewFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(foData.FundingNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
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

  editFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(foData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(foData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInFundingOrganizationName() {
    cy.fixture(this.test_data).then((data) => {
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(foData.FundingNameEn);
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
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(foData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.changeLanguage("english");
    cy.imsId(COMMON.BUTTONS.RESET).click();
    ["Home", "Configuration", "Funding Organizations", "List"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  gridColumnsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFundingOrganizationFrom: d } }) => {
      cy.get(COMMON.TABLE.HEAD).within(() => {
        d.gridColumns.forEach((column) => {
          cy.contains(COMMON.TABLE.HEADER_CELL, column).should("be.visible");
        });
      });
      cy.log(messages.ui.gridColumns);
    });
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().within(() => {
      [1, 2].forEach((index) => {
        cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(index).invoke("text")
          .then((value) => expect(value.trim()).to.not.equal(""));
      });
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(3).should("exist");
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(4).invoke("text")
        .then((status) => expect(["Active", "Inactive"]).to.include(status.trim()));
    });
    cy.log(messages.ui.recordStatusCheck);
  }

  firstPagePaginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("have.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
    cy.log(messages.ui.pagination);
  }

  addNavigationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.location("pathname").should("include", "/funding-organizations/create");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.location("pathname").should("include", "/funding-organizations/list");
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Home", "Configuration", "Funding Organizations", "Create"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    ["funding_org_name", "loan_funding_organization_id", "funding_organization_type",
      COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    [COMMON.BUTTONS.GO_BACK, COMMON.BUTTONS.RESET, COMMON.BUTTONS.SUBMIT]
      .forEach((button) => cy.imsId(button).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createPageFields);
  }

  requiredFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Funding Organization Name", "ID/Short Code", "Funding Organization Type", "Status"]
      .forEach((label) => {
        cy.contains(COMMON.FORM.LABEL, label)
          .should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
      });
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFundingOrganizationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("contain.text", d.status);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFundingOrganizationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN).within(() => {
        cy.contains(COMMON.SELECT.OPTION, d.status).should("be.visible");
        cy.contains(COMMON.SELECT.OPTION, d.selectStatus).should("be.visible");
      });
      cy.get(COMMON.PAGE.BODY).click(0, 0);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusOptions);
    });
  }

  organizationTypeSelectionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFundingOrganizationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("funding_organization_type").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.fundingOrgType).click();
      cy.formController("funding_organization_type").should("contain.text", d.fundingOrgType);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  searchNoResultCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFundingOrganizationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY)
        .find("tr:not(.ant-table-placeholder):visible").should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  exactSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFundingOrganizationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.existingOrganizationName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).should("contain.text", d.existingOrganizationName));
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  clearSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFundingOrganizationFrom: d } }) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(d.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.log(messages.ui.clearSearch);
    });
  }

  viewDetailsCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    ["Funding Organization Name", "ID/Short Code", "Funding Organization Type", "Status"]
      .forEach((label) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, label).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).should("be.visible");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.viewField);
  }

  editModeFieldsCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    ["funding_org_name", "loan_funding_organization_id", "funding_organization_type",
      COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    [COMMON.BUTTONS.RESET, COMMON.BUTTONS.SUBMIT, COMMON.BUTTONS.GO_BACK]
      .forEach((button) => cy.imsId(button).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editField);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

}

export const create_funding_organization = new FundingOrganizationCreation();
