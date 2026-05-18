class LoanProductManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanProductManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-product", "submenu-loan-product-management");
      cy.log("Successfully Loan product management list page.");
    });
  }

  createLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lpData.messageSaveLoanProduct)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutMFIProgramID() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutLoanProductNameEnglish() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutLoanProductNameBangla() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutProductNature() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutLoanTypeID() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutRepaymentFrequency() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutMinimumLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created loan product management");
    });
  }

  createWithoutMaximumLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutInterestCalculationMethod() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created loan product management");
    });
  }

  createWithoutServiceChargeRate() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully created loan product management");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the loan product management list page."
    );
  }

  viewLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("search_text").type(lpData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the loan product management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the loan product management list page");

  }

  createResetButton() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying");
  }

  createSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful submit button working");
  }

  createGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button working");
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful edit submit button check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  editLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.get("app-confirmation-modal")
        .contains(lpData.messageUpdateLoanProduct)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Loan product Management updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.selectStatus).type("{enter}");
      cy.log(
        "Loan Product Management status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("status").type(lpData.statusSelect).type("{enter}");
      cy.log(
        "Loan Product Management status active dropdown check successfully"
      );
    });
  }
  searchInLoanProductName() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.log("Successfully search in the Loan Product Management");
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id").type(lpData.SelectOffice).type("{enter}");
      cy.log(
        "Loan Product Management status office dropdown check successfully"
      );
    });
  }
  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan Product Management "
    );
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.loanProductFrom;
      cy.formController("office_id").type(lpData.office);
      cy.log("Successfully select office in the loan product management");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch to bangla language check.");
  }

}

export const create_loan_product_management =
  new LoanProductManagementCreation();
