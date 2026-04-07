class FundingOrganization {
  test_data = Cypress.env("TEST_DATA");

  gridFundingOrganizationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-funding-organizations");
      cy.log("Successfully funding organization list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the funding organization list page."
    );
  }

  viewFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.branchManager.gridFundingOrganizationFrom;
      cy.formController("search_text").type(foData.FundingNameEn);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the funding organization list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the funding organization list page");

  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();

    cy.log("Funding organization form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.branchManager.gridFundingOrganizationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(foData.selectStatus).type("{enter}");
      cy.log(
        "Funding organization status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.branchManager.gridFundingOrganizationFrom;
      cy.formController("status").type(foData.statusSelect).type("{enter}");
      cy.log("Funding organization status active dropdown check successfully");
    });
  }

  searchInFundingOrganizationName() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.branchManager.gridFundingOrganizationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(foData.FundingNameEn);
      cy.log("Successfully search in the funding organization");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the funding organization "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.branchManager.gridFundingOrganizationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(foData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_funding_organization = new FundingOrganization();
