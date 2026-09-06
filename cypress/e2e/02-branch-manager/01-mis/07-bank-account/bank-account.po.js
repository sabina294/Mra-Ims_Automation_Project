import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class BankAccountCreation {
  test_data = Cypress.env("TEST_DATA");

  gridBankAccountListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.BANK_ACCOUNT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const baData = data.branchManager.createBankAccountFrom; const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;
      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type").type(baData.accountType).type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutBank() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const baData = data.branchManager.createBankAccountFrom; const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;
      cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type").type(baData.accountType).type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const baData = data.branchManager.createBankAccountFrom; const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;
      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type").type(baData.accountType).type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const baData = data.branchManager.createBankAccountFrom; const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;
      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type").type(baData.accountType).type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const baData = data.branchManager.createBankAccountFrom; const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;
      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_type").type(baData.accountType).type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAccType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const baData = data.branchManager.createBankAccountFrom; const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;
      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAccNumber() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const baData = data.branchManager.createBankAccountFrom; cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type").type(baData.accountType).type("{enter}");
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
      const baData = data.branchManager.createBankAccountFrom; const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;
      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type").type(baData.accountType).type("{enter}");
      cy.formController("account_no").type(accNumber);
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

  viewBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.search);
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

  editBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.accNameEn);
      this.clickBankAccountSearchButton();
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

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(baData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(baData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInBankAccountName() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.accNameEn);
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

  paginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.PAGE_ITEMS)
      .last()
      .then(($lastPage) => {
        const lastPageNumber = $lastPage.attr("title");

        cy.wrap($lastPage).click();
        cy.get(COMMON.PAGINATION.ACTIVE_PAGE)
          .should("have.attr", "title", lastPageNumber);
        cy.get(COMMON.PAGINATION.NEXT_PAGE)
          .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
      });
    cy.log(messages.ui.paginationMessage);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.accNameEn);
      this.clickBankAccountSearchButton();
      cy.log(messages.ui.searchMessage);
    });
  }

  createPageFieldCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    cy.formController("bank_id").should("be.visible");
    cy.formController("bank_branch_id").should("be.visible");
    cy.formController("account_name_en").should("be.visible");
    cy.formController("account_name_bn").should("be.visible");
    cy.formController("account_type").should("be.visible");
    cy.formController("account_no").should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createPageFields);
  }

  bankOptionsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    cy.formController("bank_id").click();
    cy.get(".ant-select-item-option")
      .should("be.visible");

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.dropdownOptions);
  }

  bankSelectionCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("bank_id")
        .type(baData.bankName)
        .type("{enter}");

      cy.formController("bank_id")
        .should("contain.text", baData.bankName);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  bankBranchDependencyCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("bank_id")
        .type(baData.bankName)
        .type("{enter}");

      cy.formController("bank_branch_id")
        .should("be.visible");

      cy.formController("bank_branch_id")
        .click();

      cy.get(".ant-select-item-option")
        .should("be.visible");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dependentDropdown);
    });
  }

  bankBranchOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("bank_id")
        .type(baData.bankName)
        .type("{enter}");

      cy.formController("bank_branch_id").click();

      cy.get(".ant-select-item-option")
        .should("be.visible");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownOptions);
    });
  }

  accountTypeOptionsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    cy.formController("account_type").click();

    cy.get(".ant-select-item-option")
      .should("be.visible");

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.dropdownOptions);
  }

  accountTypeSelectionCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");

      cy.formController("account_type")
        .should("contain.text", baData.accountType);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  defaultStatusCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
      .should("be.visible");

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.defaultStatus);
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();

      cy.contains(baData.status).should("be.visible");
      cy.contains(baData.selectStatus).should("be.visible");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.statusOptions);
    });
  }

  duplicateBankAccountCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("bank_id")
        .type(baData.bankName)
        .type("{enter}");

      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");

      cy.formController("account_name_en")
        .type(baData.accNameEn);

      cy.formController("account_name_bn")
        .type(baData.accNameBn);

      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");

      cy.formController("account_no")
        .type(baData.duplicateAccountNumber || baData.accNumber);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.duplicate);
    });
  }

  accountNameEnValidInputCheck() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      this.getAddBankAccountButton(baData).click();

      cy.formController("account_name_en")
        .type(baData.accNameEn)
        .should("have.value", baData.accNameEn);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.validInput);
    });
  }

  accountNameEnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("account_name_en").type(baData.spaceOnly);
      this.submitInvalidFormAndReturn(messages.validation.requiredField);
    });
  }

  accountNameBnValidInputCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("account_name_bn")
        .type(baData.accNameBn)
        .should("have.value", baData.accNameBn);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.validInput);
    });
  }

  accountNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("account_name_bn").type(baData.spaceOnly);
      this.submitInvalidFormAndReturn(messages.validation.requiredField);
    });
  }

  accountNumberValidInputCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("account_no")
        .type(baData.accNumber)
        .should("have.value", baData.accNumber);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.validInput);
    });
  }

  accountNumberInvalidInputCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("account_no").type(baData.invalidAccountNumber);
      this.submitInvalidFormAndReturn(messages.ui.invalidInput);
    });
  }

  accountNumberSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("account_no").type(baData.spaceOnly);
      this.submitInvalidFormAndReturn(messages.validation.requiredField);
    });
  }

  bankRequiredValidationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    this.fillBankAccountFormExcept("bank");
    this.submitInvalidFormAndReturn(messages.validation.requiredField);
  }

  bankBranchRequiredValidationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    this.fillBankAccountFormExcept("bank_branch");

    this.submitInvalidFormAndReturn(messages.validation.requiredField);
  }

  accountNameEnRequiredValidationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    this.fillBankAccountFormExcept("name_en");

    this.submitInvalidFormAndReturn(messages.validation.requiredField);
  }

  accountNameBnRequiredValidationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    this.fillBankAccountFormExcept("name_bn");

    this.submitInvalidFormAndReturn(messages.validation.requiredField);
  }

  accountTypeRequiredValidationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    this.fillBankAccountFormExcept("account_type");

    this.submitInvalidFormAndReturn(messages.validation.requiredField);
  }

  accountNumberRequiredValidationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    this.fillBankAccountFormExcept("account_no");

    this.submitInvalidFormAndReturn(messages.validation.requiredField);
  }

  accountNameEnTrimValidation() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("account_name_en")
        .type(`  ${baData.accNameEn}  `);

      cy.formController("account_name_en")
        .invoke("val")
        .should("contain", baData.accNameEn);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.trimValidation);
    });
  }

  accountNameBnTrimValidation() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("account_name_bn")
        .type(`  ${baData.accNameBn}  `);

      cy.formController("account_name_bn")
        .invoke("val")
        .should("contain", baData.accNameBn);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.trimValidation);
    });
  }

  duplicateAccountNumberCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("bank_id")
        .type(baData.bankName)
        .type("{enter}");

      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");

      cy.formController("account_name_en")
        .type(baData.accNameEn);

      cy.formController("account_name_bn")
        .type(baData.accNameBn);

      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");

      cy.formController("account_no")
        .type(baData.duplicateAccountNumber || baData.accNumber);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.duplicate);
    });
  }

  gridColumnsCheck() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.get("thead").should("be.visible").within(() => {
        baData.gridColumns.forEach((columnName) => {
          cy.get("th")
            .filter((index, column) => column.textContent.trim() === columnName)
            .should("be.visible");
        });
      });

      cy.log(messages.ui.gridColumns);
    });
  }

  addBankAccountNavigation() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      this.getAddBankAccountButton(baData).click();
      cy.formController("bank_id").should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.addNavigation);
    });
  }

  searchNoResult() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();

      this.getBankAccountSearchInput(baData)
        .clear()
        .type(baData.invalidSearch);

      this.clickBankAccountSearchButton();

      cy.log(messages.ui.searchNoResult);
    });
  }

  partialSearch() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();

      this.getBankAccountSearchInput(baData)
        .clear()
        .type(baData.partialSearch);

      this.clickBankAccountSearchButton();

      cy.log(messages.ui.partialSearch);
    });
  }

  clearSearch() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();

      this.getBankAccountSearchInput(baData)
        .clear()
        .type(baData.partialSearch);

      this.clickBankAccountSearchButton();

      this.getBankAccountSearchInput(baData).clear();
      this.clickBankAccountSearchButton();

      cy.log(messages.ui.clearSearch);
    });
  }

  pageSizeCheck() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.get(".ant-pagination-options")
        .should("be.visible");

      cy.get(".ant-pagination-options .ant-select")
        .click();

      cy.contains(
        ".ant-select-item-option",
        baData.pageSize
      ).click();

      cy.log(messages.ui.pageSize);
    });
  }

  accountNameAscendingSort() {
    cy.contains("Account Name").click();
    cy.log(messages.ui.ascendingSort);
  }

  accountNameDescendingSort() {
    cy.contains("Account Name").click();
    cy.contains("Account Name").click();
    cy.log(messages.ui.descendingSort);
  }

  accountNumberAscendingSort() {
    cy.contains("Account Number").click();
    cy.log(messages.ui.ascendingSort);
  }

  accountNumberDescendingSort() {
    cy.contains("Account Number").click();
    cy.contains("Account Number").click();
    cy.log(messages.ui.descendingSort);
  }

  viewBankFieldCheck() {
    this.ensureBankAccountViewPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.getVisibleViewLabel(baData.viewLabels.bank);
      cy.log(messages.ui.viewField);
    });
  }

  viewBankBranchFieldCheck() {
    this.ensureBankAccountViewPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.getVisibleViewLabel(baData.viewLabels.bankBranch);
      cy.log(messages.ui.viewField);
    });
  }

  viewAccountNameEnCheck() {
    this.ensureBankAccountViewPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.getVisibleViewLabel(baData.viewLabels.accountNameEn);
      cy.log(messages.ui.viewField);
    });
  }

  viewAccountNameBnCheck() {
    this.ensureBankAccountViewPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.getVisibleViewLabel(baData.viewLabels.accountNameBn);
      cy.log(messages.ui.viewField);
    });
  }

  viewAccountTypeCheck() {
    this.ensureBankAccountViewPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.getVisibleViewLabel(baData.viewLabels.accountType);
      cy.log(messages.ui.viewField);
    });
  }

  viewAccountNumberCheck() {
    this.ensureBankAccountViewPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.getVisibleViewLabel(baData.viewLabels.accountNumber);
      cy.log(messages.ui.viewField);
    });
  }

  viewStatusCheck() {
    this.ensureBankAccountViewPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.getVisibleViewLabel(baData.viewLabels.status);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.viewField);
    });
  }

  editBankCheck() {
    this.openEditBankAccount();

    cy.formController("bank_id")
      .should("be.visible");

    cy.formController("bank_id")
      .click();

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
  }

  editBankBranchCheck() {
    this.openEditBankAccount();

    cy.formController("bank_branch_id")
      .should("be.visible");

    cy.formController("bank_branch_id")
      .click();

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
  }

  editAccountNameEnCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; this.openEditBankAccount();
      cy.formController("account_name_en").should("be.visible");
      cy.formController("account_name_en")
        .clear()
        .type(baData.updatedAccNameEn);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editField);
    });
  }

  editAccountNameBnCheck() {
    this.openEditBankAccount();

    cy.formController("account_name_bn")
      .should("be.visible");

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
  }

  editAccountTypeCheck() {
    this.openEditBankAccount();

    cy.formController("account_type")
      .should("be.visible");

    cy.formController("account_type").click();

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
  }

  editAccountNumberCheck() {
    this.openEditBankAccount();

    cy.formController("account_no")
      .should("be.visible");

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
  }

  editStatusCheck() {
    this.openEditBankAccount();

    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
      .should("be.visible");

    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();

    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
  }

  editRequiredValidationCheck() {
    this.openEditBankAccount();

    cy.formController("account_name_en")
      .clear();

    this.submitInvalidFormAndReturn(messages.validation.requiredField);
  }

  updatedBankAccountListCheck() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();

      this.getBankAccountSearchInput(baData)
        .clear()
        .type(baData.accNameEn);

      this.clickBankAccountSearchButton();

      cy.log(messages.ui.searchMessage);
    });
  }
  openEditBankAccount() {
    this.ensureBankAccountListPage();

    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      this.getBankAccountSearchInput(baData).clear();
      cy.get("tbody tr").filter(":visible").first().should("be.visible");
      cy.imsId(COMMON.TOGGLES.ACTION).filter(":visible").first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).filter(":visible").click();
    });
  }

  fillBankAccountFormExcept(excludedField) {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom; 
      const uniqueAccountNumber = `${baData.accNumber}-${Date.now()}`;
      if (excludedField !== "bank") {
        cy.formController("bank_id").type(baData.bankName).type("{enter}");
      }
      if (excludedField !== "bank_branch") {
        cy.formController("bank_branch_id").type(baData.branchName).type("{enter}");
      }
      if (excludedField !== "name_en") {
        cy.formController("account_name_en").type(baData.accNameEn);
      }
      if (excludedField !== "name_bn") {
        cy.formController("account_name_bn").type(baData.accNameBn);
      }
      if (excludedField !== "account_type") {
        cy.formController("account_type").type(baData.accountType).type("{enter}");
      }
      if (excludedField !== "account_no") {
        cy.formController("account_no").type(uniqueAccountNumber);
      }
    });
  }

  getAddBankAccountButton(baData) {
    return cy.contains(baData.addButtonText).filter(":visible");
  }

  ensureBankAccountListPage() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.url().then((currentUrl) => {
        if (!currentUrl.includes(baData.listPath)) {
          cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        }
      });
    });
  }

  ensureBankAccountViewPage() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.url().then((currentUrl) => {
        if (!currentUrl.includes(baData.viewPath)) {
          this.ensureBankAccountListPage();
          cy.imsId(COMMON.BUTTONS.RESET).click();
          this.getBankAccountSearchInput(baData).clear();
          cy.get("tbody tr").filter(":visible").first().should("be.visible");
          cy.imsId(COMMON.TOGGLES.ACTION).filter(":visible").first().click();
          cy.imsId(COMMON.GRID.ACTION_VIEW).filter(":visible").click();
        }
      });
    });
  }

  getBankAccountSearchInput(baData) {
    return cy.get(`input[placeholder="${baData.searchPlaceholder}"]`);
  }

  getVisibleViewLabel(label) {
    return cy.get("body *")
      .filter((index, element) => {
        return Cypress.$(element).is(":visible")
          && element.children.length === 0
          && element.textContent.trim() === label;
      })
      .should("have.length.at.least", 1);
  }

  clickBankAccountSearchButton() {
    cy.get(".ant-input-search-button").should("be.visible").click();
  }

  submitInvalidFormAndReturn(logMessage) {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(logMessage);
  }

  gridLanguageSwitchCheck() {
    this.ensureBankAccountListPage();
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitch);
  }
}

export const create_bank_account = new BankAccountCreation();
