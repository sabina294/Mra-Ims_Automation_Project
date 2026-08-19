import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class RegionCreation {
  test_data = Cypress.env("TEST_DATA");
  regionListPath = "/mfi-mis/configuration/region/list";

  resetRegionTestState() {
    cy.visit(this.regionListPath);
    cy.url().should("include", this.regionListPath);
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible");
  }

  verifyMaximumLength(controlName, value) {
    cy.formController(controlName).then(($input) => {
      const maximumLength = Number($input.attr("maxlength"));

      cy.wrap($input).clear().type(value);

      if (Number.isInteger(maximumLength) && maximumLength > 0) {
        cy.wrap($input)
          .invoke("val")
          .its("length")
          .should("be.lte", maximumLength);
      } else {
        cy.wrap($input).should("have.value", value);
      }
    });
  }

  gridRegionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.REGION);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createRegion() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_code").type(regData.regionCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
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
      const regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);
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

  viewRegion() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.mfiAdmin.createRegionFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(regData.nameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
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
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editRegion() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(regData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
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
      const regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(regData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.mfiAdmin.createRegionFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(regData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInRegionName() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(regData.nameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("region_name_en").type(regData.nameEn);
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
      const regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(regData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridColumnsCheck() {
    cy.log(messages.ui.gridColumns);
  }

  regionNameAscendingSort() {
    cy.contains("Region Name").click();

    cy.log(messages.ui.ascendingSort);
  }

  regionNameDescendingSort() {
    cy.contains("Region Name").click();
    cy.contains("Region Name").click();

    cy.log(messages.ui.descendingSort);
  }

  searchNoResult() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(regionData.invalidSearch);

      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.searchNoResult);
    });
  }

  partialSearch() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(regionData.partialSearch);

      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.partialSearch);
    });
  }

  clearSearch() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(regionData.partialSearch);

      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear();

      cy.log(messages.ui.clearSearch);
    });
  }

  paginationCheck() {
    cy.get(".ant-pagination")
      .should("be.visible");

    cy.log(messages.ui.pagination);
  }

  pageSizeCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.get(".ant-pagination-options")
        .should("be.visible");

      cy.get(".ant-pagination-options .ant-select")
        .click();

      cy.contains(
        ".ant-select-item-option",
        regionData.pageSize
      ).click();

      cy.log(messages.ui.pageSize);
    });
  }

  addRegionNavigation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    cy.log(messages.ui.addNavigation);
  }

  createPageFieldCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController("region_name_en")
        .type(regionData.nameEn);

      cy.formController("region_name_bn")
        .type(regionData.nameBn);

      cy.formController("region_code")
        .type(regionData.regionCode);

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(regionData.selectStatus)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.createPageFields);
    });
  }

  regionNameSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_name_en")
        .type(regionData.spaceOnly);

      cy.formController("region_name_bn")
        .type(regionData.nameBn);

      cy.formController("region_code")
        .type(regionData.regionCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.spaceValidation);
    });
  }

  regionNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_name_en")
        .type(regionData.nameEn);

      cy.formController("region_name_bn")
        .type(regionData.spaceOnly);

      cy.formController("region_code")
        .type(regionData.regionCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.spaceValidation);
    });
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("be.visible");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(regionData.status);

      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .click();

      cy.contains(regionData.status)
        .should("be.visible");

      cy.contains(regionData.selectStatus)
        .should("be.visible");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.statusOptions);
    });
  }

  duplicateRegionCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_name_en")
        .type(regionData.duplicateNameEn);

      cy.formController("region_name_bn")
        .type(regionData.duplicateNameBn);

      cy.formController("region_code")
        .type(regionData.duplicateCode);

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(regionData.statusSelect)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.duplicate);
    });
  }

  regionCodeValidInputCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_code")
        .type(regionData.code);

      cy.formController("region_code")
        .should("have.value", regionData.code);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.validInput);
    });
  }


  duplicateRegionCodeCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_name_en")
        .type(regionData.nameEn);

      cy.formController("region_name_bn")
        .type(regionData.nameBn);

      cy.formController("region_code")
        .type(regionData.duplicateCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.duplicate);
    });
  }


  regionCodeSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_name_en")
        .type(regionData.nameEn);

      cy.formController("region_name_bn")
        .type(regionData.nameBn);

      cy.formController("region_code")
        .type(regionData.spaceOnly);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
       cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();


      cy.log(messages.ui.spaceValidation);
    });
  }


  regionCodeSpecialCharacterValidation() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_name_en")
        .type(regionData.nameEn);

      cy.formController("region_name_bn")
        .type(regionData.nameBn);

      cy.formController("region_code")
        .type(regionData.specialCharacterCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.invalidInput);
    });
  }


  regionNameEnMaxLengthCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      this.verifyMaximumLength(
        "region_name_en",
        regionData.maxLengthNameEn
      );

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.invalidInput);
    });
  }


  regionNameBnMaxLengthCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      this.verifyMaximumLength(
        "region_name_bn",
        regionData.maxLengthNameBn
      );

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.invalidInput);
    });
  }


  regionCodeMaxLengthCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      this.verifyMaximumLength(
        "region_code",
        regionData.maxLengthCode
      );

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.invalidInput);
    });
  }


  regionNameTrimValidation() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController("region_name_en")
        .type(regionData.nameEnWithSpaces);

      cy.formController("region_name_bn")
        .type(regionData.nameBn);

      cy.formController("region_code")
        .type(regionData.code);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.trimValidation);
    });
  }


  multipleInvalidFieldValidation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    cy.formController("region_name_en")
      .type(" ");

    cy.formController("region_name_bn")
      .type(" ");

    cy.formController("region_code")
      .type(" ");

    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.validation.requiredField);
  }


  changeStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regionData = data.mfiAdmin.createRegionFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .click();

      cy.contains(regionData.selectStatus)
        .click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("contain", regionData.selectStatus);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.dropdownSelection);
    });
  }
   gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();

    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();

    cy.log(messages.ui.languageSwitch);
  }

}

export const create_region = new RegionCreation();
