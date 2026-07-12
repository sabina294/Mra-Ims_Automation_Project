class LoanRebate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanRebateListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-rebate");
      cy.log("Successfully Loan rebate list page.");
    });
  }

  createDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-draft").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created page information draft Loan rebate");
    });
  }

  createSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully created page information submit Loan rebate");

  }
  createGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully created  page information go back Loan rebate");

  }

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully created page information reset Loan rebate");
    });
  }

  createAddIconRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("addIconButton").click();
      cy.log("Successfully created page information add icon Loan rebate");
    });
  }

  createRemoveIconRebate() {
    cy.imsId("removeIconButton")
      .first()
      .click();
    cy.imsId("btn-go-back").click();
    cy.log("Successfully removed Loan rebate row");

  }

  createLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
       cy.wait(2000);
      // cy.formController("rebate_type")
      //   .type(lrData.selectRebate)
      //   .type("{enter}");
      cy.formController("rebate_type")
        .type(lrData.rebateType)
        .type("{enter}");
      cy.formController("rebate_amount").type(lrData.Amount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(lrData.messageSaveLoanRebate)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Loan rebate");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan welfare list page.");
  }

  viewLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Loan rebate list page");
    });
  }

  goBackLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed go back the Loan rebate list page");
    });
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lrData.selectStatus).type("{enter}");
      cy.log("Loan rebate status submitted dropdown check successfully");
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("status").type(lrData.statusSelect).type("{enter}");
      cy.log("Loan rebate  status approved dropdown check successfully");
    });
  }

  searchInLoanRebateName() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      //   cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lrData.search);
      cy.log("Successfully search in the Loan rebate");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan rebate "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lrData.samityNameEn);
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

export const create_loan_rebate = new LoanRebate();
