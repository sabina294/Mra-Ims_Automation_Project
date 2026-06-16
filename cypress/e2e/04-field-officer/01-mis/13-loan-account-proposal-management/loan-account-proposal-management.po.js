class LoanAccountProposalManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanAccountProposalManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-loan-account",
        "submenu-loan-account-proposal-management"
      );
      cy.log("Successfully Loan account proposal Management list page.");
    });
  }

  createLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_activity")
        .type(lapData.economicActivity)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(1000);
     cy.formController("expected_disburse_dt").click();
     cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  viewSchedulesCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount")
        .type(lapData.appliedLoanAmount);
      cy.wait(5000);
      cy.imsId("btn-preview-repay-schedule").click();
      cy.get("nz-modal-container")
        .should("be.visible");
      cy.log("Successfully viewed loan account proposal management schedules");
    });
  }

  viewSchedulesCancelButtonCheck() {
    cy.get("nz-modal-container")
      .should("be.visible");
    cy.contains("button", "Cancel")
      .should("be.visible")
      .click();
    cy.get("nz-modal-container")
      .should("not.exist");
    cy.imsId("btn-go-back").click();
    cy.log("Successfully canceled repayment schedule preview");
  }

  createWithoutSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_activity")
        .type(lapData.economicActivity)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(5000);

      
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully verified the Samity field while creating the loan account proposal");
    });
  }

  createWithoutMember() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_activity")
        .type(lapData.economicActivity)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(5000);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully verified the member field while creating the loan account proposal");
    });
  }

  createWithoutLendingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(5000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully verified the lending category field while creating the loan account proposal");
    });
  }

  createWithoutEconomicSector() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(5000);


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully verified the economic sector field while creating the loan account proposal");
    });
  }

  createWithoutEconomicActivity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(5000);


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  createWithoutEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_activity")
        .type(lapData.economicActivity)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(5000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  createWithoutLoanProduct() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_activity")
        .type(lapData.economicActivity)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(1000);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  createWithoutAppliedLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_activity")
        .type(lapData.economicActivity)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully created loan account proposal management");
    });
  }


  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the loan account proposal management list page."
    );
  }

  viewLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log(
        "Successfully viewed the Loan account proposal Management list page"
      );
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log(
      "Successfully viewed go back the Loan account proposal Management  list page"
    );
  }

  editLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(lapData.messageUpdateLoanAccount)
        .and("be.visible");
      cy.imsId("btn-yes").click();

      cy.log("Loan account proposal Management updated successfully");
    });
  }
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lapData.selectStatus).type("{enter}");
      cy.log(
        "Loan account proposal Management status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lapData.statusSelect).type("{enter}");
      cy.log(
        "Loan account proposal Management status active dropdown check successfully"
      );
    });
  }
  searchInLoanAccountProposalName() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.log("Successfully search in the Loan account proposal Management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan account proposal Management "
    );
  }

  createAddGuarantorButtonCheck() {
    cy.imsId("btn-add-new").should("be.visible").click();
    cy.imsId("btn-add-guarantor")
      .should("be.visible")
      .first()
      .click();

    cy.log("Successfully clicked 'Add Guarantor' button.");
  }

  createRemoveButtonCheck() {
    cy.imsId("btn-remove-guarantor")
      .should("be.visible")
      .first()
      .click();
    cy.log("Successfully clicked 'Remove Guarantor' button.");
  }


  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lapData.memberNameEn);
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

export const create_loan_account_proposal_management =
  new LoanAccountProposalManagementCreation();
