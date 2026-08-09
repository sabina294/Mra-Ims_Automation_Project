import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class FundingOrganizationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridFundingOrganizationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-funding-organizations");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(foData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController("status").type(foData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInFundingOrganizationName() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
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
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
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

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_funding_organization = new FundingOrganizationCreation();