import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class OfficeCreation {
  test_data = Cypress.env("TEST_DATA");

  gridOfficeManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-office", "submenu-office-management");
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
      cy.imsId("btn-add").click();
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
      cy.imsId("btn-back").click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    // cy.selectMenu("menu-office", "submenu-office-management");
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
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
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
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId("btn-back").click();

    cy.log(messages.ui.editResetMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId("btn-back").click();
    cy.log(messages.ui.editGoBackMessage);
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
    cy.imsId("row-checkbox-2").click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    // cy.imsId("btn-lock").click();
    // cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    // cy.imsId("row-checkbox-2").click();
    // cy.imsId("btn-unlock").click();
    // cy.log(messages.ui.unlockSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId("btn-back").click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId("btn-back").click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId("btn-back").click();
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
      cy.imsId("btn-add").click();
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
    cy.imsId("menu-my-task")
      .should("be.visible")
      .click();
    cy.imsId("submenu-pending-office-approval")
      .should("be.visible")
      .click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId("btn-lock").click();
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId("btn-Approve").click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_office_management = new OfficeCreation();
