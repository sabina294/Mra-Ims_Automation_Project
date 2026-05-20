import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class LoanAccountProposalManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanAccountProposalManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-loan-account",
        "submenu-loan-account-proposal-management"
      );
      cy.wait(3000);
      cy.log("Successfully Loan account proposal Management list page.");
    });
  }

  createLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("btn-add-new").click();
      cy.wait(3000);
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(1000);
      cy.formController("expected_disburse_dt").click();
      cy.wait(3000);
      cy.contains("22").click({ force: true });
      cy.wait(2000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  loanAccountProposalManagementViewSchedulesCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
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
      cy.wait(5000);
      cy.imsId("btn-preview-repay-schedule").click();
      cy.imsId("close-button").click();
      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  loanAccountProposalManagementViewSchedulesCloseButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
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
      cy.wait(5000);
      cy.imsId("btn-preview-repay-schedule").click();
      cy.imsId("close-button").click();
      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  approveLoanAccountProposal() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-loan-account-proposal").click();
      cy.formController("search_text").type(lapData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-approve").click();
      cy.get('nz-modal-container', { timeout: 15000 })
        .should('be.visible');
      cy.imsId("approved_loan_amount")
        .should('be.visible')
        .clear()
        .type(lapData.appliedLoanAmount);
      cy.imsId('btn-ok').click();
      cy.get('nz-modal-container').should('be.visible');
      cy.imsId("btn-yes").first().click();
      cy.get('nz-modal-container').should('be.visible');
      cy.imsId('btn-ok').click();
      cy.get('nz-modal-container', { timeout: 20000 })
        .should('not.exist');
      cy.log("Successfully approved loan account proposal");
    });
  }

  actionButtonCheck() {
    cy.selectMenu(
      "menu-loan-account",
      "submenu-loan-account-proposal-management"
    );
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the loan account proposal management list page."
    );
  }


  viewLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log(
        "Successfully viewed the Loan account proposal Management list page"
      );
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the Loan account Management list page");

  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("btn-add-new").click();
      cy.wait(3000);
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(1000);
      cy.formController("expected_disburse_dt").click();
      cy.wait(3000);
      cy.contains("22").click({ force: true });
      cy.wait(2000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan account proposal management");
    });
  }


  createWithoutSamity() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
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

      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully verified the Samity field while creating the loan account proposal");
    });
  }

  createWithoutMember() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
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

      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully verified the member field while creating the loan account proposal");
    });
  }

  createWithoutLendingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
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

      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully verified the lending category field while creating the loan account proposal");
    });
  }

  createWithoutEconomicSector() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
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

      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully verified the economic sector field while creating the loan account proposal");
    });
  }

  createWithoutEconomicActivity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
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

      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  createWithoutEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
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

      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click({ force: true });
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  editResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  editValidationMessageCheck() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    // cy.imsId("btn-submit").click();
    // cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  editGoBackButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  editLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
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
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lapData.selectStatus).type("{enter}");
      cy.log(
        "Loan account proposal Management status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lapData.statusSelect).type("{enter}");
      cy.log(
        "Loan account proposal Management status active dropdown check successfully"
      );
    });
  }
  searchInLoanAccountProposalName() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.log("Successfully search in the Loan account proposal Management");
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.formController("office_id").type(lapData.SelectOffice).type("{enter}");
      cy.log(
        "Loan account proposal Management status office dropdown check successfully"
      );
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

  gridDraftButton() {
    cy.imsId(GRID.BUTTONS.DRAFT_ON)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(GRID.BUTTONS.DRAFT_OFF)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

   draftLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("btn-add-new").click();
      cy.wait(3000);
      cy.formController("office_id").type(lapData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");

      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);
      cy.wait(1000);
      cy.formController("expected_disburse_dt").click();
      cy.wait(3000);
      cy.contains("22").click({ force: true });
      cy.wait(2000);
      cy.imsId("btn-draft").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully draft loan account proposal management");
    });
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
    cy.log("Successful submit button validation message displaying.");
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
      var lapData = data.mfiAdmin.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lapData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }

}

export const create_loan_account_proposal_management =
  new LoanAccountProposalManagementCreation();
