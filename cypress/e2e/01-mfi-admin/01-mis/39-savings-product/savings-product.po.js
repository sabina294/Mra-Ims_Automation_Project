import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SavingsProductCreation {
  test_data = Cypress.env("TEST_DATA");

  openListPage() {
    cy.get("body").type("{esc}", { force: true });
    cy.location("pathname").then((pathname) => {
      if (pathname.includes("/savings-product/list")) {
        return;
      }

      if (
        pathname.includes("/savings-product/view/") ||
        pathname.includes("/savings-product/create")
      ) {
        cy.imsId(COMMON.BUTTONS.GO_BACK)
          .scrollIntoView()
          .click({ force: true });
        cy.location("pathname").should("include", "/savings-product/list");
        return;
      }

      cy.selectMenu1(COMMON.MENUS.SAVINGS_PRODUCT);
    });
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  assertSortableColumn(columnName) {
    cy.get(COMMON.TABLE.HEAD)
      .contains(COMMON.TABLE.HEADER_CELL, columnName)
      .click()
      .should(($header) => {
        const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE);
        const ascendingIconIsActive =
          $header.find(COMMON.SORT.ASCENDING_ICON).length > 0;
        expect(
          ariaSort === COMMON.SORT.ASCENDING || ascendingIconIsActive
        ).to.equal(true);
      });
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  gridSavingsProductListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1(COMMON.MENUS.SAVINGS_PRODUCT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(spData.saveSavingsMessage)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutSavingsType() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutDepositAccountIdPrefix() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutSavingsProductNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutSavingsProductNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutDisplayName() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutInterestRateTerms() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutInterestRateFrequency() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutCalculatedUsing() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutInterestPostingPeriod() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }
  createWithoutStartDate() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
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

  viewSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(spData.intersetTerms);
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
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(spData.intersetTerms);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.turnOnEditModeMessage);
    });
  }

  editSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(spData.intersetTerms);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(spData.updateSavingsMessage)
        .and("be.visible");
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
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(spData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(spData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInSavingsProductName() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(spData.intersetTerms);
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("interest_rate_terms").first().type(spData.intersetTerms);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(spData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridRequiredColumnsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      data.mfiAdmin.createSavingsProduct.gridColumns.forEach((columnName) => {
        cy.get(COMMON.TABLE.HEAD)
          .contains(COMMON.TABLE.HEADER_CELL, columnName)
          .should("be.visible");
      });
      cy.log(messages.ui.gridColumns);
    });
  }

  actionMenuOptionsCheck() {
    this.openListPage();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).should("be.visible");
    cy.imsId(COMMON.GRID.ACTION_EDIT).should("be.visible");
    cy.log(messages.ui.actionMenuOpenCheck);
  }

  savingsProductIdSortCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      this.assertSortableColumn(
        data.mfiAdmin.createSavingsProduct.sortColumns.savingsProductId
      );
      cy.log(messages.ui.ascendingSort);
    });
  }

  savingsProductNameSortCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      this.assertSortableColumn(
        data.mfiAdmin.createSavingsProduct.sortColumns.savingsProductName
      );
      cy.log(messages.ui.ascendingSort);
    });
  }

  otherSortableColumnsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      data.mfiAdmin.createSavingsProduct.sortColumns.other.forEach(
        (columnName) => this.assertSortableColumn(columnName)
      );
      cy.log(messages.ui.ascendingSort);
    });
  }

  nextPreviousPaginationCheck() {
    this.openListPage();
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.NEXT_PAGE).then(($nextButton) => {
      if ($nextButton.hasClass(COMMON.PAGINATION.DISABLED_CLASS)) {
        cy.wrap($nextButton).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
        cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should(
          "have.class",
          COMMON.PAGINATION.DISABLED_CLASS
        );
        cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
        return;
      }

      cy.wrap($nextButton).click();
      cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "2");
      cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
        .should("not.have.class", COMMON.PAGINATION.DISABLED_CLASS)
        .click();
      cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    });
    cy.log(messages.ui.pagination);
  }

  pageSizeChangeCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      const pageSize = Number(data.mfiAdmin.createSavingsProduct.pageSize);
      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, `${pageSize} / page`)
        .click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .its("length")
        .should("be.greaterThan", 0)
        .and("be.at.most", pageSize);
      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("contain.text", pageSize);
      cy.log(messages.ui.pageSize);
    });
  }

  emptySearchResultCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(data.mfiAdmin.createSavingsProduct.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(".ant-empty").should("be.visible");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_savings_product = new SavingsProductCreation();
