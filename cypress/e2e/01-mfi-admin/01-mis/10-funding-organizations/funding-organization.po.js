import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";

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
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutFundingOrgName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutFundingOrgType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.imsId(GRID.BUTTONS.RESET).click();
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(foData.FundingNameEn);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONVIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  turnOffEditMode() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.BUTTONS.TURNEDITMODE).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.BUTTONS.RESET).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type").type(foData.fundingOrgType).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
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
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(foData.FundingNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(GRID.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(GRID.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    cy.imsId(GRID.CREATE.CREATESUBMIT).click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(foData.search);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(GRID.BUTTONS.PROFILE).click();
    cy.imsId(GRID.BUTTONS.LANGUAGECHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_funding_organization = new FundingOrganizationCreation();