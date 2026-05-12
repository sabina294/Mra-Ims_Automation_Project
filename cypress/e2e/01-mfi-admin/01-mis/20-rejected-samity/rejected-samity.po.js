class RejectedSamity {
  test_data = Cypress.env("TEST_DATA");

  createRejectSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-management");
      cy.imsId("btn-add-new").click();
      // cy.imsId('btn-submit').and('be.visible')
      var rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController("samity_name_en").first().type(rsData.samityNameEn);
      cy.formController("samity_name_bn").type(rsData.samityNameBn);
      cy.formController("samity_type").type(rsData.samityType).type("{enter}");
      cy.formController("office_id").type(rsData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(rsData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(rsData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(rsData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(rsData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(rsData.maxMember);
      cy.formController("working_area_id")
        .type(rsData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(rsData.adressEn);
      cy.formController("geo_area_type")
        .type(rsData.geoAreaType)
        .type("{enter}");

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(rsData.messageSaveSamity)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created samity");
    });
  }

  approveRejectedSamity() {
    cy.fixture(this.test_data).then((data) => {
      var rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-management").click();
      cy.formController("search_text").type(rsData.samityNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-reject").click();
      cy.formController("approver_remarks").first().type(rsData.rejectRemarks);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve samity management");
    });
  }

  gridRejectedSamityListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-rejected-samity");
      cy.log("Successfully rejected samity list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the  reject samity list page."
    );
  }

  viewRejectedSamity() {
    cy.fixture(this.test_data).then((data) => {
      var rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController("search_text").type(rsData.samityNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the rejected samity list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the rejected samity list page");

  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.wait(1000);
    cy.imsId("btn-mis-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.log("Successful reset button working");
  }

  editDraftButton() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button working");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful submit button working");
  }
  
  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  searchInRejectSamityName() {
    cy.fixture(this.test_data).then((data) => {
      var rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(rsData.samityNameEn);
      cy.log("Successfully search in the  Rejected Samity");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

   gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(rsData.samityNameEn);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the rejected samity "
    );
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController("office_id").type(rsData.office);
      cy.log("Successfully select office in the reject samity");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_rejected_samity = new RejectedSamity();
