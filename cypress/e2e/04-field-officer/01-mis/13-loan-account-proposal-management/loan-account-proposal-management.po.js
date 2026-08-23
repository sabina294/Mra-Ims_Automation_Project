import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanAccountProposalManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanAccountProposalManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-loan-account",
        "submenu-loan-account-proposal-management"
      );
      cy.log(messages.ui.gridListMessage);
    });
  }

  createLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  viewSchedulesCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
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
      cy.imsId(COMMON.BUTTONS.PREVIEW_REPAYMENT_SCHEDULE).click();
      cy.get("nz-modal-container")
        .should("be.visible");
      cy.log(messages.ui.viewMessage);
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
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.viewMessage);
  }

  createWithoutSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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

      
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMember() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLendingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutEconomicSector() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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


      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutEconomicActivity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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


      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLoanProduct() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAppliedLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const lapData = data.fieldOfficer.createLoanAccountFrom;
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lapData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(
        messages.ui.viewMessage
      );
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(
      messages.ui.goBackSuccess
    );
  }

  editLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lapData.memberNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(lapData.messageUpdateLoanAccount)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.log(messages.ui.editMessage);
    });
  }
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lapData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lapData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInLoanAccountProposalName() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lapData.memberNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }
  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  createAddGuarantorButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").click();
    cy.imsId(COMMON.BUTTONS.ADD_GUARANTOR)
      .should("be.visible")
      .first()
      .click();

    cy.log(messages.ui.submitSuccess);
  }

  createRemoveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REMOVE_GUARANTOR)
      .should("be.visible")
      .first()
      .click();
    cy.log(messages.ui.submitSuccess);
  }


  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lapData = data.fieldOfficer.createLoanAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lapData.memberNameEn);
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

export const create_loan_account_proposal_management =
  new LoanAccountProposalManagementCreation();
