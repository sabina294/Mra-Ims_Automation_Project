import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class OfficeCreation {
  test_data = Cypress.env("TEST_DATA");

  gridOfficeManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-office", "submenu-office-management");
      cy.log("Successfully office management list page.");
    });
  }

  createWithoutOfficeNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();

      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Unsuccessfully created office management without office name en");
    });
  }

  createWithoutOfficeNameBn() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without office name bn");
    });
  }

  createWithoutOfficeType() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without office type");
    });
  }

  createWithoutCompanyOfficeId() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without company office id");
    });
  }

  createWithoutMobileNumber() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without mobile number");
    });
  }

  createWithoutDivision() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without division");
    });
  }

  createWithoutDistrict() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without district");
    });
  }

  createWithoutUpazila() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without upazila");
    });
  }


  createWithoutAddress() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created office management without address");
    });
  }

   createWithoutAreaName() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();

      cy.log("Successfully created office management");
    });
  }

   createWithoutWorkingAreaDivision() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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


     cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created office management");
    });
  }

   createWithoutWorkingAreaDistrict() {
    cy.fixture(this.test_data).then((data) => {

      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created office management");
    });
  }

   createWithoutWorkingAreaUpazila() {
    cy.fixture(this.test_data).then((data) => {

      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-back").click();
      cy.log("Successfully created office management");
    });
  }

  actionButtonCheck() {
    // cy.selectMenu("menu-office", "submenu-office-management");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the office management list page."
    );
  }

  viewOffice() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.formController("search_text").type(omData.officeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the office management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the office management list page");

  }

  turnOffEditMode() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.officeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("switch-button").click();
      cy.imsId("btn-go-back").click();

      cy.log("Office management form Edit Mode toggled successfully");
    });
  }

  editOffice() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.officeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(omData.messageUpdateOffice)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Office management updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(omData.selectStatus).type("{enter}");
      cy.log("Office management status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.formController("status").type(omData.statusSelect).type("{enter}");
      cy.log("Office managementstatus active dropdown check successfully");
    });
  }

  searchInOfficeManagementName() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.officeNameEn);
      cy.log("Successfully search in the office management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the office management "
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

  gridCheckboxCheck() {
    cy.imsId("row-checkbox-2").click();
    cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    // cy.imsId("btn-lock").click();
    // cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    // cy.imsId("row-checkbox-2").click();
    // cy.imsId("btn-unlock").click();
    // cy.log("Checkbox unlock button should be clickable and functional.");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("office_name_en").first().type(omData.officeNameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-back").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-back").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-back").click();
    cy.log("Successful go back button check.");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.createOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  createOffice() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();

      var omData = data.mfiAdmin.createOfficeFrom;
      const generate8DigitIdFrom = () => {
        const rand = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
        return `${rand}`; // Total 8 digits
      };
      const officeId = generate8DigitIdFrom();
      cy.log("Generated 8-digit ID:", officeId);

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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(omData.messageSaveOffice)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created office management");
    });
  }

  approveOffice() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.mfiAdmin.approveOfficeFrom;
      cy.switchModule("MFI");
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-pending-office-approval").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-Approve").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve office management");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_office_management = new OfficeCreation();
