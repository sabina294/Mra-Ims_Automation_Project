class LoanWaiver {
  test_data = Cypress.env("TEST_DATA");

  gridLoanWaiverListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-waiver");
      cy.log("Successfully Loan waiver list page.");
    });
  }

  createDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-draft").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created page information draft loan waiver");
    });
  }

  createSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully created page information submit loan waiver");

  }

  createGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully created  page information go back loan waiver");

  }

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully created page information reset Loan waiver");
    });
  }

  createAddIconWaiver() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-add-method-0").click();
      cy.log("Successfully created page information add icon Loan waiver");
    });
  }

  createRemoveIconWaiver() {
    cy.imsId("btn-remove-method-0").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successfully created page information remove icon Loan waiver");

  }

  createLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("waiver_type")
        .type(lwData.selectRebate)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Loan waiver");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan waiver list page.");
  }

  viewLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Loan waiver list page");
    });
  }

  viewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed go back the Loan waiver list page");
    });
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lwData.selectStatus).type("{enter}");
      cy.log("Loan waiver status submitted dropdown check successfully");
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lwData.statusSelect).type("{enter}");
      cy.log("Loan waiver  status approved dropdown check successfully");
    });
  }

  searchInLoanWaivereName() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lwData.search);
      cy.log("Successfully search in the Loan waiver");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan waiver "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lwData.samityNameEn);
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

export const create_loan_waiver = new LoanWaiver();
