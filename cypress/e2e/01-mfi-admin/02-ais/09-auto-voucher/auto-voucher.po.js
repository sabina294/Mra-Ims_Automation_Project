class AutoVoucher {
    test_data = Cypress.env("TEST_DATA");

    gridreceivedVoucherListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-voucher", "submenu-auto-voucher");
            cy.log("Successfully auto voucher list page.");
        });
    }


    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var avData = data.mfiAdmin.receivedVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(avData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var avData = data.mfiAdmin.receivedVoucher;
            cy.formController("status").type(avData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var avData = data.mfiAdmin.receivedVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(avData.voucherNameBn);
            cy.log("Successfully search in the auto voucher");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the auto voucher "
        );
    }


    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const grid_auto_voucher = new AutoVoucher();
