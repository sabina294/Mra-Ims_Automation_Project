class SamityDayChange {
  test_data = Cypress.env("TEST_DATA");

  gridSamityChangeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-day-change");
      cy.log("Successfully samity day change list page.");
    });
  }

  samityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId("btn-reset").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-change").click();
      cy.formController("new_samity_day").type(sdData.newSamityDay).type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully samity day change");
    });
  }

  approveSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-day-change").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve samity day change");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-samity", "submenu-samity-day-change");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the samity day change list page."
    );
  }

  viewSamityDayChange() {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the samity day change list page");
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the samity day change list page");

  }
  
 samityChangeSubmit() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-mis-table-action-change").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful submit button clean displaying.");
  }

  samityChangeApprove() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-approve").click();
      cy.imsId("btn-ok").click();
      cy.log("Successful approve button clean displaying.");
    });
  }

  samityChangeReset() {
    cy.imsId("btn-reset").click();
    cy.log("Successful reset button check.");
  }

  samityChangeGoBack() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(sdData.selectStatus).type("{enter}");
      cy.log(
        "Samity day change status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("status").type(sdData.statusSelect).type("{enter}");
      cy.log(
        "Samity day change status active dropdown check successfully"
      );
    });
  }
  searchInSamityDayChangeName() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(sdData.samityNameEn);
      cy.log("Successfully search in the Samity day change");
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice).type("{enter}");
      cy.log(
        "Samity day change status office dropdown check successfully"
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
      "successfully refresh page  displayed the grid list of the Samity day change "
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

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice);
      cy.log("Successfully select office in the Samity day change");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const samity_day_change = new SamityDayChange();
