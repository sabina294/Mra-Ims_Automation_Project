import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanProductManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanProductManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.LOAN_PRODUCT, COMMON.MENUS.LOAN_PRODUCT_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(lpData.messageSaveLoanProduct)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMFIProgramID() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLoanProductNameEnglish() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLoanProductNameBangla() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutProductNature() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLoanTypeID() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutRepaymentFrequency() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMinimumLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMaximumLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutInterestCalculationMethod() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
        .type("{enter}");
      cy.formController("service_charge_rate").type(lpData.serviceCharge);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutServiceChargeRate() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id_list").click();
      cy.get(".cdk-overlay-pane nz-option-item")
        .should("have.length.greaterThan", 0)
        .each(($el) => {
          if ($el.text().includes(lpData.office)) {
            cy.wrap($el).click();
            return false; // stop loop
          }
        });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(lpData.mfiProgram)
        .type("{enter}");
      cy.formController("loan_product_name_en").type(lpData.loanProductNameEn);
      cy.formController("loan_product_name_bn").type(lpData.loanProductNameBn);
      cy.formController("product_nature")
        .type(lpData.productNature)
        .type("{enter}");
      cy.formController("loan_type_id").type(lpData.loanType).type("{enter}");
      cy.formController("repayment_frequency")
        .type(lpData.repaymentFrequency)
        .type("{enter}");
      cy.formController("min_loan_amount").type(lpData.minimumLoanAmount);
      cy.formController("max_loan_amount").type(lpData.maximumLoanAmount);
      cy.formController("min_installment_no").type(lpData.minimuminstallment);
      cy.formController("default_installment_no").type(
        lpData.defaultInstallment
      );
      cy.formController("max_installment_no").type(lpData.maximumInstallment);
      cy.formController("interest_calc_method")
        .type(lpData.interestCalculationRate)
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

  viewLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  createResetButton() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.submitSuccess);
  }

  createSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.submitSuccess);
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

  editLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.get("app-confirmation-modal")
        .contains(lpData.messageUpdateLoanProduct)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.editMessage);
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInLoanProductName() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id").type(lpData.SelectOffice).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
    });
  }
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }
  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id").type(lpData.office);
      cy.log(messages.ui.actionMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

}

export const create_loan_product_management =
  new LoanProductManagementCreation();
