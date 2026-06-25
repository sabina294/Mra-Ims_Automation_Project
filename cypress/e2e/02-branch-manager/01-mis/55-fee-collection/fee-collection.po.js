
import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";

class FeeCollection {
    test_data = Cypress.env("TEST_DATA");

    gridFeeCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu1("menu-fee-collection");
            cy.log("Successfully fee collection list page.");
        });
    }

    createFeeCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();
            var fcData = data.branchManager.feeCollection;
            cy.formController("samity_id").click();
            cy.contains(fcData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(fcData.selectMember).click()
            cy.formController("fee_type_setting_id").click();
            cy.contains(fcData.feeType).click()
            cy.log("Successfully created new fee collection.");
        });
    }

    submitFeeCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created new fee collection.");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log(
            "Action button clicked successfully on the fee collection list page."
        );
    }

    viewFeeCollection() {
        cy.fixture(this.test_data).then((data) => {
            var fcData = data.branchManager.feeCollection;
            cy.imsId("btn-table-action-view").click();
            cy.log("Successfully viewed the fee collection list page");
        });
    }

    viewGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-go-back").click();
            cy.log("Successfully viewed the fee collection list page");
        });
    }

    actionEditMode() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.log("Fee collection form Edit Mode successfully");
    }

    editResetButton() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying");
    }

    editSubmitButton() {
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();

        cy.log("Successful submit validation check.");
    }

    editGoBackButton() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful edit go back button check.");
    }

    searchInFeeCollectionName() {
        cy.fixture(this.test_data).then((data) => {
            var fcData = data.branchManager.feeCollection;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(fcData.search);
            cy.imsId("btn-search").click();
            cy.log("Successfully search in the fee collection");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the fee collection "
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var fcData = data.branchManager.feeCollection;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(fcData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
        });
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

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();
            cy.imsId("btn-reset").click();
            cy.log("Successful reset button clean displaying.");
        });
    }

    createValidationMessageCheck() {
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful submit button validation message displaying.");
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

export const grid_fee_collection = new FeeCollection();
