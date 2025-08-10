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
      // cy.imsId('btn-submit').and('be.visible');

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
      // cy.imsId('btn-submit').and('be.visible');

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

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId('btn-submit').and('be.visible');

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
      cy.formController("user_contact_no").type(mfiData.userContractNo);
      cy.formController("login_id").type(mfiData.loginId);
      cy.formController("password").type(mfiData.password);
      cy.formController("confirm_password").type(mfiData.confirmPassword);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation mfi management without one mandatory field."
      );
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

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the mfi management list page."
    );
  }

  viewMfi() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;

      cy.formController("search_text").type(mfiData.mfiNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the MFI management list page");
    });
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Mfi management form Edit Mode toggled successfully");
  }

  editMfi() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(mfiData.messageUpdateMfiManagement)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("MFI management updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mfiData = data.mraAdmin.createMfiManFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(mfiData.mfiNameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_mfi_management = new MfiCreation();
