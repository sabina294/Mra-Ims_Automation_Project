import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class MfiCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMfiManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MFI_MANAGEMENT, COMMON.MENUS.MFI_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createMfi() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController("login_id").type(mfiData.loginId);
      cy.formController("password").type(mfiData.password);
      cy.formController("confirm_password").type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").type(mfiData.userContractNo);
      cy.formController("login_id").type(mfiData.loginId);
      cy.formController("password").type(mfiData.password);
      cy.formController("confirm_password").type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutMandatoryFieldNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutOptionalFieldNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldLicenceNo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldMfiId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldMnemonic() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOptionalFieldFormation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOptionalFieldWebsite() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOptionalFieldEmail() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOptionalFieldContactNo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOptionalFieldAdressEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOptionalFieldAdressBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldSavingsCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldOfficeType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldUserNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutOptionalFieldUserNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutOptionalFieldUserEmail() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutOptionalFieldUserContactNo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldLoginId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldPassword() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldConfirmPassword() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutOptionalMfiLogo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.userName);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").type(mfiData.userContractNo);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  approveMfi() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_MFI_MANAGEMENT).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE_CAPITALIZED).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    // cy.selectMenu(COMMON.MENUS.MFI_MANAGEMENT, COMMON.MENUS.MFI_MANAGEMENT);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewMfi() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mfiData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  turnOffOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.get('.ant-switch-inner > .hidden').click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editMfi() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();

      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(COMMON.BUTTONS.RESET).click();

    cy.log(messages.ui.editResetMessage);
  }

  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).first().click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).first().click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editSubmitMessage);
  }

  editApproveButton() {
    cy.imsId(COMMON.BUTTONS.APPROVE).first().click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mfiData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mfiData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInMfiManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mfiData.userName);
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

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_0).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(mfiData.mfiNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mfiData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  resetListForChecks() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
  }

  assertBreadcrumb(page) {
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "MFI Management").and("contain.text", page);
  }

  searchExistingMfi(partial) {
    this.resetListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2).invoke("text").then((text) => {
      const name = text.trim();
      expect(name).not.to.equal("");
      const term = partial ? name.slice(0, Math.max(1, Math.floor(name.length / 2))) : name;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(term, { parseSpecialCharSequences: false });
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
        expect($rows.length).to.be.greaterThan(0);
        $rows.each((_, row) => expect(Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim().toLowerCase()).to.contain(term.toLowerCase()));
      });
    });
  }

  openGridRecordView(check) {
    this.resetListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const values = [2, 4, 5].map((index) => cells.eq(index).text().trim());
      values.forEach((value) => expect(value).not.to.equal(""));
      cy.get(COMMON.TABLE.VISIBLE_ROWS).filter((_, row) =>
        Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(5).text().trim() === values[2]
      ).should("have.length", 1).find(COMMON.TABLE.ACTION_TOGGLE).click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      check(values);
    });
  }

  listBreadcrumbCheck() {
    this.resetListForChecks();
    this.assertBreadcrumb("List");
    cy.location("pathname").should("include", "/mfi-management/mfi/list");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#", "MFI Name", "Mnemonic", "Licence No.", "MFI Id", "Formation", "Website", "Locked By", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    this.resetListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      expect(cells.eq(1).text().trim()).to.match(/^\d+$/);
      [2, 4, 5].forEach((index) => expect(cells.eq(index).text().trim()).not.to.equal(""));
      expect(["Active", "Inactive"]).to.include(cells.eq(9).text().trim());
    });
  }

  exactNameSearchCheck() {
    this.searchExistingMfi(false);
  }

  partialNameSearchCheck() {
    this.searchExistingMfi(true);
  }

  noResultSearchCheck() {
    this.resetListForChecks();
    configurationGridChecks.noResult("MFI_MANAGEMENT");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    this.resetListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Active{enter}");
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length).to.be.greaterThan(0);
      $rows.each((_, row) => expect(Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(9).text().trim()).to.equal("Active"));
    });
  }

  nameAscendingSortCheck() {
    this.resetListForChecks();
    configurationGridChecks.sort("MFI Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("MFI Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    this.resetListForChecks();
    configurationGridChecks.pagination();
  }

  unselectedLockButtonsCheck() {
    this.resetListForChecks();
    cy.get(COMMON.TABLE.BODY).find('input[type="checkbox"]').should("not.be.checked");
    cy.imsId(COMMON.BUTTONS.LOCK).should("be.disabled");
    cy.imsId(COMMON.BUTTONS.UNLOCK).should("be.disabled");
  }

  viewPageDataAndBreadcrumbCheck() {
    this.openGridRecordView((values) => {
      this.assertBreadcrumb("View");
      ["MFI Information", "User Information"].forEach((label) => cy.contains(label).should("be.visible"));
      values.forEach((value) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible"));
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      this.assertBreadcrumb("List");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_mfi_management = new MfiCreation();
