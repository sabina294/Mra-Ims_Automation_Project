import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class OfficeCreation {
  test_data = Cypress.env("TEST_DATA");

  openListPage() {
    cy.visit("/mfi-mis/office/office-management/list");
    cy.url().should("include", "/office/office-management/list");
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible");
  }

  openCreatePage() {
    cy.visit("/mfi-mis/office/office-management/create");
    cy.url().should("include", "/office/office-management/create");
    cy.formController("office_name_en").should("exist");
  }

  exactLabel(text) {
    return cy.get(COMMON.FORM.LABEL)
      .filter((_, label) => label.textContent.trim() === text)
      .first();
  }

  gridOfficeManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.OFFICE, COMMON.MENUS.OFFICE_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createWithoutOfficeNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id").type(omData.division).type("{enter}");
      cy.formController("district_id").type(omData.district).type("{enter}");
      cy.formController("upazila_id").type(omData.upazila).type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.imsId(COMMON.BUTTONS.ADD).click();
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOfficeNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");

      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");

      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOfficeType() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");

      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");

      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutCompanyOfficeId() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");

      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");

      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMobileNumber() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");
      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutDivision() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      // cy.formController("district_id").type(omData.district).type("{enter}");
      // cy.formController("upazila_id").type(omData.upazila).type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutDistrict() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutUpazila() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutAddress() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");
      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAreaName() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");
      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutWorkingAreaDivision() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");
      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");


      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutWorkingAreaDistrict() {
    cy.fixture(this.test_data).then((data) => {

      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");
      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutWorkingAreaUpazila() {
    cy.fixture(this.test_data).then((data) => {

      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.withoutDataMessage, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id")
        .first()
        .type(omData.division)
        .type("{enter}");
      cy.formController("district_id")
        .first()
        .type(omData.district)
        .type("{enter}");
      cy.formController("upazila_id")
        .first()
        .type(omData.upazila)
        .type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    // cy.selectMenu(COMMON.MENUS.OFFICE, COMMON.MENUS.OFFICE_MANAGEMENT);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewOffice() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
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
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.turnOnEditModeMessage);
    });
  }

  editOffice() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(omData.messageUpdateOffice)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(data.mfiAdmin.createOfficeFrom.officeNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.visible");
      cy.imsId(COMMON.BUTTONS.DRAFT).should("be.visible");
      cy.get(COMMON.PAGE.BODY).then(($body) => {
        const reset = $body.find(`[data-ims-id='${COMMON.BUTTONS.RESET}']:visible`);
        if (reset.length) cy.wrap(reset).click();
      });
      cy.imsId(COMMON.BUTTONS.BACK).click();
      cy.log(messages.ui.editResetMessage);
    });
  }

  editGoBackButton() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(data.mfiAdmin.createOfficeFrom.officeNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.BACK).click();
      cy.log(messages.ui.editGoBackMessage);
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(omData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(omData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInOfficeManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
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

  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    this.openListPage();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).then(($rows) => {
      const unlockedRow = [...$rows].find((row) => {
        const cells = row.querySelectorAll(COMMON.TABLE.VISIBLE_CELLS);
        const checkbox = row.querySelector('[data-ims-id^="row-checkbox-"]');
        return checkbox && !checkbox.disabled && !cells[7]?.textContent.trim();
      });
      expect(unlockedRow, "an unlocked selectable office row").to.exist;
      cy.wrap(unlockedRow).find('[data-ims-id^="row-checkbox-"]').check({ force: true });
    });
    cy.imsId(COMMON.BUTTONS.LOCK).should("not.be.disabled");
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    this.openListPage();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).then(($rows) => {
      const lockedRow = [...$rows].find((row) => {
        const cells = row.querySelectorAll(COMMON.TABLE.VISIBLE_CELLS);
        const checkbox = row.querySelector('[data-ims-id^="row-checkbox-"]');
        return checkbox && !checkbox.disabled && Boolean(cells[7]?.textContent.trim());
      });
      expect(lockedRow, "a locked selectable office row").to.exist;
      cy.wrap(lockedRow).find('[data-ims-id^="row-checkbox-"]').check({ force: true });
    });
    cy.imsId(COMMON.BUTTONS.UNLOCK).should("not.be.disabled");
    cy.log(messages.ui.unlockSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.BACK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  createOffice() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      const omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log(messages.ui.submitSuccess, officeId);

      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.formController("office_name_bn").type(omData.officeNameBn);
      cy.formController("office_type_id")
        .type(omData.officeType)
        .type("{enter}");
      cy.formController("com_office_id").type(officeId);
      cy.formController("mobile_number_1").type(omData.mobileNo);
      cy.formController("division_id").type(omData.division).type("{enter}");
      cy.formController("district_id").type(omData.district).type("{enter}");
      cy.formController("upazila_id").type(omData.upazila).type("{enter}");
      cy.formController("address_line_1").type(omData.adressEn);
      cy.formController("latitude").type(omData.latitude);
      cy.formController("longitude").type(omData.longitude);
      cy.imsId(COMMON.BUTTONS.ADD).click();
      cy.formController("working_area_name_en").first().type(omData.areaNameEn);
      cy.formArrayController("working_area", 0, "division_id")
        .first()
        .type(omData.divisionName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "district_id")
        .first()
        .type(omData.districtName)
        .type("{enter}");
      cy.formArrayController("working_area", 0, "thana_id")
        .first()
        .type(omData.upazilaName)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(omData.messageSaveOffice)
        .and("be.visible");

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  approveOffice(d) {
    cy.switchModule("MFI");
    cy.wait(1000);
    cy.imsId(COMMON.MENUS.MY_TASK)
      .should("be.visible")
      .click();
    cy.imsId(COMMON.MENUS.PENDING_OFFICE_APPROVAL)
      .should("be.visible")
      .click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.LOCK).click();
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.BUTTONS.APPROVE_CAPITALIZED).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);
  }

  listBreadcrumbCheck() {
    this.openListPage();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Home")
      .and("contain.text", "Office").and("contain.text", "Office Management")
      .and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  gridColumnsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      data.mfiAdmin.createOfficeFrom.gridColumns.forEach((column) => {
        cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, column).should("be.visible");
      });
      cy.log(messages.ui.gridColumns);
    });
  }

  gridRecordCheck() {
    this.openListPage();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().within(() => {
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(2).invoke("text").should("match", /\d+/);
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(4).invoke("text").should("not.be.empty");
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(5).invoke("text").should("not.be.empty");
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(8).invoke("text").then((status) => {
        expect(["Active", "Inactive"]).to.include(status.trim());
      });
    });
    cy.log(messages.ui.recordStatusCheck);
  }

  firstPagePaginationCheck() {
    this.openListPage();
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
    cy.log(messages.ui.pagination);
  }

  addNavigationCheck() {
    this.openListPage();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.url().should("include", "/office/office-management/create");
    cy.contains("Create").should("be.visible");
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldsCheck() {
    this.openCreatePage();
    const labels = [
      "Office Name (English)", "Office Name (Bangla)", "Office Type",
      "Company Office Id (8 digits)", "MFI Program", "Region", "Zone", "Area",
      "Mobile Number", "Mobile Number (Additional)", "Email", "Email (Additional)",
      "Phone Number", "Phone Number (Additional)", "Division", "District", "Upazila",
      "Post Office", "Postal Code", "Union", "Ward/Village Street", "Address",
      "Address (Additional)", "Latitude", "Longitude",
    ];
    labels.forEach((label) => this.exactLabel(label).scrollIntoView().should("be.visible"));
    cy.contains("Office Photo").scrollIntoView().should("be.visible");
    cy.contains("Working Area").scrollIntoView().should("be.visible");
    [COMMON.BUTTONS.BACK, COMMON.BUTTONS.RESET, COMMON.BUTTONS.DRAFT, COMMON.BUTTONS.SUBMIT]
      .forEach((button) => cy.imsId(button).should("be.visible"));
    cy.log(messages.ui.createPageFields);
  }

  fieldIndicatorsCheck() {
    this.openCreatePage();
    const required = [
      "Office Name (English)", "Office Name (Bangla)", "Office Type",
      "Company Office Id (8 digits)", "Mobile Number", "Division", "District",
      "Upazila", "Address",
    ];
    const optional = [
      "MFI Program", "Region", "Zone", "Area", "Mobile Number (Additional)",
      "Email", "Email (Additional)", "Phone Number", "Phone Number (Additional)",
      "Post Office", "Postal Code", "Union", "Ward/Village Street",
      "Address (Additional)", "Latitude", "Longitude",
    ];
    required.forEach((text) => {
      this.exactLabel(text).should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    optional.forEach((text) => {
      this.exactLabel(text).should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    cy.log(messages.ui.requiredFieldIndicatorCheck);
    cy.log(messages.ui.optionalFieldIndicatorCheck);
  }

  officeTypeSelectionCheck() {
    this.openCreatePage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController("office_type_id").type(data.mfiAdmin.createOfficeFrom.officeType).type(COMMON.KEYS.ENTER);
      cy.formController("office_type_id").should("contain.text", data.mfiAdmin.createOfficeFrom.officeType);
      cy.log(messages.ui.dropdownSelection);
    });
  }

  addressHierarchyCheck() {
    this.openCreatePage();
    cy.fixture(this.test_data).then((data) => {
      const office = data.mfiAdmin.createOfficeFrom;
      cy.formController("division_id").type(office.division).type(COMMON.KEYS.ENTER);
      cy.formController("district_id").should("not.have.class", "ant-select-disabled")
        .type(office.district).type(COMMON.KEYS.ENTER);
      cy.formController("upazila_id").should("not.have.class", "ant-select-disabled")
        .type(office.upazila).type(COMMON.KEYS.ENTER);
      cy.log(messages.ui.dependentDropdown);
    });
  }

  workingAreaFieldsCheck() {
    this.openCreatePage();
    cy.imsId(COMMON.BUTTONS.ADD).click();
    ["Area Name (English)", "Area Name (Bangla)"]
      .forEach((label) => this.exactLabel(label).scrollIntoView().should("be.visible"));
    cy.formController("working_area_name_en").first().should("be.visible");
    ["division_id", "district_id", "thana_id"].forEach((control) => {
      cy.formArrayController("working_area", 0, control).should("exist");
    });
    cy.log(messages.ui.createPageFields);
    cy.imsId(COMMON.BUTTONS.BACK).click();
  }

  nonExistingSearchCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(data.mfiAdmin.createOfficeFrom.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY).find("tr:not(.ant-table-placeholder):visible").should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  exactSearchCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      const officeName = data.mfiAdmin.createOfficeFrom.existingOfficeName;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(officeName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).eq(4).should("contain.text", officeName));
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  searchResetCheck() {
    this.openListPage();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.log(messages.ui.clearSearch);
  }

  viewDetailsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(data.mfiAdmin.createOfficeFrom.officeNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      ["Basic Information", "Office Name (English)", "Office Type", "Address", "Working Area"]
        .forEach((label) => cy.contains(label).scrollIntoView().should("be.visible"));
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).should("be.visible");
      cy.log(messages.ui.viewField);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  editModeFieldsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(data.mfiAdmin.createOfficeFrom.officeNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      ["office_name_en", "office_name_bn", "office_type_id", "com_office_id", "mobile_number_1",
        "division_id", "district_id", "upazila_id", "address_line_1"]
        .forEach((control) => cy.formController(control).should("exist"));
      [COMMON.BUTTONS.DRAFT, COMMON.BUTTONS.SUBMIT]
        .forEach((button) => cy.imsId(button).should("be.visible"));
      cy.log(messages.ui.editField);
      cy.imsId(COMMON.BUTTONS.BACK).click();
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_office_management = new OfficeCreation();
