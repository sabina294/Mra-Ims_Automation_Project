class LedgerSubGroupCreation {
    test_data = Cypress.env("TEST_DATA");

    gridLedgerSubGroupListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-ledger-sub-group");
            cy.log("Successfully Chart of accounts list page.");
        });
    }

    createLedgerSubGroup() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-add-new").click();

            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created ledger sub group");
        });
    }

    createwithoutGroupId() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-add-new").click();

            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-go-back").click();

            cy.log("Unsuccessfully created ledger sub group");
        });
    }

    createwithoutNameEnglish() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-add-new").click();

            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-go-back").click();


            cy.log("Unsuccessfully created ledger sub group");
        });
    }

    createwithoutNameBangla() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-add-new").click();

            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-go-back").click();


            cy.log("Unsuccessfully created ledger sub group");
        });
    }



    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the ledger sub group list page.");
    }

    turnOffEditMode() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("switch-button").click();
        cy.imsId("btn-go-back").click();

        cy.log("ledger sub group form Edit Mode toggled successfully");
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

    editSubmitButton() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();

        cy.log("Successful submit button check");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(lsgData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.formController("status").type(lsgData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    statusLedgerGroupIdDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-reset").click();
            cy.formController("ledger_group").type(lsgData.ledgerGroupId).type("{enter}");
            cy.log("ledger sub group status group id dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(lsgData.nameEn);
            cy.log("Successfully search in the ledger sub group");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the ledger sub group "
        );
    }

    gridLedgerSubGroupDropdown() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.formController("ledger_group").click().type(lsgData.ledgerGroupId).type("{enter}");
        });
    }

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lsgData = data.mfiAdmin.ledgerSubGroup;
            cy.imsId("btn-add-new").click();
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.imsId("btn-reset").click();
            cy.imsId("btn-go-back").click();
            cy.log("Successful reset button clean displaying.");
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

export const create_ledger_sub_group = new LedgerSubGroupCreation();
