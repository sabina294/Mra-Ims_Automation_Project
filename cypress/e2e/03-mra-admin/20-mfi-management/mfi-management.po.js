class MfiCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMfiManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-mfi-management", "menu-mfi-management");
      cy.log("Successfully MFI management list page.");
    });
  }

  createMfi() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("mfi_name_en").first().type(mfiData.mfiNameEn);
      cy.formController("licence_no").type(licnceNo);
      cy.formController("institute_id").type(mfiId.toString());
      cy.formController("mnemonic").type(mfiData.mnemonic);
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("login_id").type(mfiData.loginId);
      cy.formController("password").type(mfiData.password);
      cy.formController("confirm_password").type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management");
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").type(mfiData.userContractNo);
      cy.formController("login_id").type(mfiData.loginId);
      cy.formController("password").type(mfiData.password);
      cy.formController("confirm_password").type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation mfi management without one mandatory field."
      );
    });
  }

  createWithoutOptionalFieldNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldLicenceNo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldMfiId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldMnemonic() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutOptionalFieldFormation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutOptionalFieldWebsite() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutOptionalFieldEmail() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutOptionalFieldContactNo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutOptionalFieldAdressEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutOptionalFieldAdressBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }


  createWithoutMandatoryFieldSavingsCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-reset").click();
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldOfficeType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-reset").click();
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }


  createWithoutMandatoryFieldUserNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully created MFI management all field");
    });
  }


  createWithoutOptionalFieldUserNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }


  createWithoutOptionalFieldUserEmail() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }


  createWithoutOptionalFieldUserContactNo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldLoginId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldPassword() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryFieldConfirmPassword() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully created MFI management all field");
    });
  }


  createWithoutOptionalMfiLogo() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      const generateLicenceNo = () => {
        const rand = () => Math.floor(10000 + Math.random() * 90000);

        const rand2 = () => Math.floor(10000 + Math.random() * 90000);

        const rand3 = () => Math.floor(10000 + Math.random() * 90000);
        return `${rand()}-${rand2()}-${rand3()}`;
      };
      const licnceNo = generateLicenceNo();
      const mfiId = licnceNo.slice(-4);

      var mfiData = data.mraAdmin.createMfiManFrom;
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
      cy.formController("name_en").type(mfiData.userName);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").clear().type(mfiData.userContractNo);
      cy.formController("login_id").clear().type(mfiData.loginId);
      cy.formController("password").clear().type(mfiData.password);
      cy.formController("confirm_password").clear().type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mfiData.messageSaveMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created MFI management all field");
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("mfi_name_bn").first().type(mfiData.mfiNmaeBn);
      cy.formController("formation").type(mfiData.formation);
      cy.formController("website").type(mfiData.webSite);
      cy.formController("email").type(mfiData.email);
      cy.formController("contact_no").type(mfiData.contactNo);
      cy.formController("address_en").type(mfiData.adressEn);
      cy.formController("address_bn").type(mfiData.adressBn);
      cy.formController("name_bn").type(mfiData.userNameBn);
      cy.formController("user_email").type(mfiData.userEmail);
      cy.formController("user_contact_no").type(mfiData.userContractNo);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log(
        "Successful cannot creation mfi management without mandatory field."
      );
    });
  }

  approveMfi() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-mfi-management").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-Approve").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve MFI management");
    });
  }

  actionButtonCheck() {
    // cy.selectMenu("menu-mfi-management", "menu-mfi-management");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the mfi management list page."
    );
  }

  viewMfi() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;

      cy.formController("search_text").type(mfiData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the MFI management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the MFI management list page");
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.get('.ant-switch-inner > .hidden').click();

    cy.log("Mfi management form Edit Mode toggled successfully");
  }

  editMfi() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();

      cy.log("MFI management updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("btn-reset").click();

    cy.log("Successful clean displaying");
  }

  editDraftButton() {
    cy.imsId("btn-draft").first().click();
    cy.imsId("btn-ok").click();

    cy.log("Successful draft button check.");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").first().click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit button check.");
  }

  editApproveButton() {
    cy.imsId("btn-approve").first().click();
    cy.imsId("btn-ok").click();

    cy.log("Successful approve button check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(mfiData.selectStatus).type("{enter}");
      cy.log("MFI management form status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.formController("status").type(mfiData.statusSelect).type("{enter}");
      cy.log("MFI management form status active dropdown check successfully");
    });
  }

  searchInMfiManagementName() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(mfiData.userName);
      cy.log("Successfully search in the MFI management form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the MFI management form "
    );
  }

  gridCheckboxCheck() {
    cy.imsId("row-checkbox-0").click();
    cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId("btn-lock").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId("row-checkbox-0").click();
    cy.imsId("btn-unlock").click();
    cy.log("Checkbox unlock button should be clickable and functional.");
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(mfiData.mfiNameEn);
      cy.imsId("btn-reset").click();
      cy.log("Successful clean displaying.");
    });
  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button check.");
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createApproveButtonCheck() {
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful approve button check.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_mfi_management = new MfiCreation();
