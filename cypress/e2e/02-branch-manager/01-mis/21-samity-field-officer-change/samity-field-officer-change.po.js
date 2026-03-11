class SamityChange {
  test_data = Cypress.env("TEST_DATA");

  gridSamityChangeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-field-officer-change");
      cy.log("Successfully samity field officer change list page.");
    });
  }

  samityChange() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(smData.samityNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-change").click();
      cy.formController("field_officer_id").type(smData.fieldOfficer).type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(smData.messageSamityChange)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully field officer change samity");
    });
  }

  approveSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-field-officer-change").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve samity change");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-samity", "submenu-samity-field-officer-change");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the samity change list page."
    );
  }

  viewSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.formController("search_text").type(smData.samityNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(smData.samityNameEn).and("be.visible");
      cy.log("Successfully viewed the samity change list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the samity change list page");
  }

  changeResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-change").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully samity day change reset button check");
    });
  }

  changeSubmitButtonCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully samity day   change submit button check");

  }

  changeApproveButtonCheck() {
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully samity day  change approve button check");
  }

  changeGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully samity day change go back button check");
  }


  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.formController("status").type(smData.selectStatus).type("{enter}");
      cy.log(
        "samity field officer change status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(smData.statusSelect).type("{enter}");
      cy.log(
        "samity field officer change status active dropdown check successfully"
      );
    });
  }

  searchInSamityFieldOfficerChangeName() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(smData.samityNameEn);
      cy.log("Successfully search in the Samity field officer change");
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.formController("office_id").type(smData.SelectOffice).type("{enter}");
      cy.log(
        "samity field officer change status office dropdown check successfully"
      );
    });
  }
  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the samity field officer change "
    );
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const samity_field_officer_change = new SamityChange();
