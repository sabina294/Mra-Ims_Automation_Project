// cypress/support/constants/messages.js

const messages = {
  auth: {
    loginSuccess: "Login completed successfully.",
    loginAsUser: (username) => `Login completed successfully for user: ${username}.`,
    loginError: "Login failed. Please verify your credentials and try again.",
    logoutSuccess: "Logout completed successfully.",
    sessionExpired: "Your session has expired. Please log in again.",
  },

  ui: {
    draftOnMessage: "Draft mode has been enabled successfully.",
    draftOffMessage: "Draft mode has been disabled successfully.",

    gridResetSuccess: "Grid fields have been reset successfully.",
    gridRefreshSuccess: "Grid data has been refreshed successfully.",
    paginationMessage: "Pagination functionality has been verified successfully.",

    submitSuccess: "Form submission completed successfully.",
    goBackSuccess: "Navigation to the previous page was completed successfully.",
    gridListMessage: "Grid list has been displayed successfully.",
    withoutDataMessage: "No data is available for display.",
    actionMessage: "The requested action was completed successfully.",
    viewMessage: "View details have been displayed successfully.",

    editMessage: "Edit mode has been enabled successfully.",
    turnOnEditModeMessage: "Edit mode has been activated successfully.",
    editResetMessage: "Edit form has been reset successfully.",
    editSubmitMessage: "Changes have been saved successfully.",
    editGoBackMessage: "Navigation back from edit mode was completed successfully.",

    searchMessage: "Search operation completed successfully.",
    createGoBackMessage: "Navigation back from the create form was completed successfully.",
    languageSwitchMessage: "Language has been switched successfully.",

    dropdownActiveMessage: "Dropdown status has been set to Active successfully.",
    dropdownInactiveMessage: "Dropdown status has been set to Inactive successfully.",

    historyOnMessage: "History mode has been enabled successfully.",
    historyOffMessage: "History mode has been disabled successfully.",

    disbursedOnMessage: "Disbursed mode has been enabled successfully.",
    disbursedOffMessage: "Disbursed mode has been disabled successfully.",

    checkboxMessage: "Checkbox selection has been verified successfully.",

    authorizationLockMessage: "Authorization has been locked successfully.",
    authorizationUnlockMessage: "Authorization has been unlocked successfully.",

    authorizeSamityMessage: "Samity authorization completed successfully.",
    authorizeSingleSamityMessage: "Selected samity has been authorized successfully.",

    fieldOfficerDropdownMessage: "Field Officer has been selected successfully.",
    officeDropdownMessage: "Office has been selected successfully.",
    samityDropdownMessage: "Samity has been selected successfully.",

    cancelSamityMessage: "Samity cancellation completed successfully.",
    cancelMultipleSamityMessage: "Selected samities have been cancelled successfully.",
    restoreSamityMessage: "Samity has been restored successfully.",

    previewMessage: "Preview has been displayed successfully.",

    previousOnMessage: "Previous mode has been enabled successfully.",
    previousSearchMessage: "Previous search results have been displayed successfully.",

    dayEndAisMessage: "Day End AIS process completed successfully.",
    dayEndMisMessage: "Day End MIS process completed successfully.",
    refreshDayEndMessage: "Day End data has been refreshed successfully.",
    revertMessage: "Day End process has been reverted successfully.",

    dayForwardMessage: "Day Forward process completed successfully.",
    startProcessMessage: "Process has been started successfully.",
    confirmMessage: "Action has been confirmed successfully.",
    forwardDeleteMessage: "Day Forward record has been deleted successfully.",

    resetSuccess: "Form has been reset successfully.",
    refreshSuccess: "Data has been refreshed successfully.",
    officeSelected: "Office has been selected successfully.",
    searchSuccess: "Search completed successfully.",
    approveSuccess: "Record has been approved successfully.",

    gridOfficeDisplayed: "Office information is displayed correctly in the grid.",
    gridCheckboxSelected: "Grid checkbox is selected successfully.",
    profileViewSuccess: "Profile has been viewed successfully.",
    profileGoBackSuccess: "Returned to the previous page successfully.",

    lockSuccess: "Record has been locked successfully.",
    unlockSuccess: "Record has been unlocked successfully.",

    rejectSuccess: "Record has been rejected successfully.",

    gridColumns: "Verified that all required grid columns are displayed correctly.",
    ascendingSort: "Verified that the selected column is sorted in ascending order.",
    descendingSort: "Verified that the selected column is sorted in descending order.",
    searchNoResult: "Verified that no matching records are displayed for the search criteria.",
    partialSearch: "Verified that partial search returns the expected matching records.",
    clearSearch: "Verified that clearing the search text restores the complete list.",
    pagination: "Verified that the pagination control works correctly.",
    pageSize: "Verified that the selected page size is applied correctly.",
    addNavigation: "Verified that the Add button redirects to the creation page.",
    createPageFields: "Verified that all required fields are displayed correctly on the creation page.",
    spaceValidation: "Verified that whitespace-only input is handled correctly.",
    defaultStatus: "Verified that the default status is displayed correctly.",
    statusOptions: "Verified that all available status options are displayed correctly.",
    duplicate: "Verified that duplicate records cannot be created.",
    languageSwitch: "Verified that the grid content updates correctly after switching the language.",

    dropdownOptions: "Verified that the dropdown displays the available options correctly.",
    dropdownSelection: "Verified that an option can be selected from the dropdown.",
    dependentDropdown: "Verified that the dependent dropdown loads the correct options.",
    validInput: "Verified that the field accepts valid input.",
    invalidInput: "Verified that the field rejects invalid input.",
    trimValidation: "Verified that leading and trailing spaces are handled correctly.",
    viewField: "Verified that the field is displayed correctly on the view page.",
    editField: "Verified that the field is available correctly on the edit page.",

    listPageNavigationCheck: "Verified the list-page title and breadcrumb navigation.",
    gridColumnCheck: "Verified the expected grid column.",
    recordIdCheck: "Verified that the record ID is populated.",
    recordStatusCheck: "Verified that the record status is valid.",
    actionMenuOpenCheck: "Verified that the record action menu opens.",
    actionMenuCloseCheck: "Verified that the record action menu closes.",
    exactSearchCheck: "Verified the exact-name search result.",
    trimmedSearchCheck: "Verified search with leading and trailing spaces.",
    statusFilterClearCheck: "Verified that clearing the status filter restores the grid.",
    combinedFilterCheck: "Verified the combined name and status filter.",
    filterUpdateCheck: "Verified that changing a filter updates the grid.",
    banglaAscendingSortCheck: "Verified ascending sorting for the Bangla name column.",
    banglaDescendingSortCheck: "Verified descending sorting for the Bangla name column.",
    idAscendingSortCheck: "Verified ascending sorting for the ID column.",
    idDescendingSortCheck: "Verified descending sorting for the ID column.",
    sortingIntegrityCheck: "Verified that sorting preserves the displayed records.",
    nextPageNavigationCheck: "Verified navigation to the next grid page.",
    previousPageNavigationCheck: "Verified navigation to the previous grid page.",
    previousPageDisabledCheck: "Verified that Previous is disabled on the first grid page.",
    nextPageDisabledCheck: "Verified that Next is disabled on the last grid page.",
    pageSizeRecordCountCheck: "Verified the row count for the selected page size.",
    pageSizeDataIntegrityCheck: "Verified grid integrity after changing page size.",
    createPageNavigationCheck: "Verified the create-page title and breadcrumb navigation.",
    validEnglishInputCheck: "Verified a valid English-name input.",
    validBanglaInputCheck: "Verified a valid Bangla-name input.",
    clearedEnglishValidationCheck: "Verified required validation after clearing the English-name field.",
    optionalBanglaClearedCheck: "Verified that the optional Bangla-name field can be cleared before submission.",
    statusChangeBeforeSubmitCheck: "Verified that status can be changed before submission.",
    selectedStatusSubmissionCheck: "Verified the submitted status in the grid.",
    confirmationDialogCheck: "Verified the submission confirmation dialog.",
    submissionCancelledCheck: "Verified that cancelling submission keeps the form unchanged.",
    creationConfirmedCheck: "Verified successful record-creation confirmation.",
    englishTrimInputCheck: "Verified leading and trailing spaces in the English-name field.",
    banglaTrimInputCheck: "Verified leading and trailing spaces in the Bangla-name field.",
    englishSpecialCharacterCheck: "Verified special-character handling for the English-name field.",
    banglaSpecialCharacterCheck: "Verified special-character handling for the Bangla-name field.",
    englishMaximumLengthCheck: "Verified maximum-length handling for the English-name field.",
    banglaMaximumLengthCheck: "Verified maximum-length handling for the Bangla-name field.",
    viewEnglishNameCheck: "Verified the English name on the View page.",
    viewBanglaNameCheck: "Verified the Bangla name on the View page.",
    viewRecordIdCheck: "Verified the record ID on the View page.",
    viewRecordStatusCheck: "Verified the record status on the View page.",
    editCancelledCheck: "Verified that unsaved edits are discarded.",
    editUpdatedCheck: "Verified the updated record data in the grid.",
    createdActiveCheck: "Verified a newly created Active record in the grid.",
    createdInactiveCheck: "Verified a newly created Inactive record in the grid.",
    editStatusUpdatedCheck: "Verified the updated record status in the grid.",

    requiredFieldIndicatorCheck: "Verified that the required-field indicator is displayed.",
    optionalFieldIndicatorCheck: "Verified that the optional field has no required-field indicator.",
    totalRecordCountCheck: "Verified that the displayed total record count matches the grid data.",
    selectedPageHighlightCheck: "Verified that the selected pagination page is highlighted.",
    shortNameAscendingSortCheck: "Verified ascending sorting for the short-name column.",
    shortNameDescendingSortCheck: "Verified descending sorting for the short-name column.",
    statusAscendingSortCheck: "Verified ascending sorting for the status column.",
    statusDescendingSortCheck: "Verified descending sorting for the status column.",

  },

  validation: {
    requiredField: "This field is required.",
  },

  general: {
    success: "Operation completed successfully.",
  },

  form: {
    submitSuccess: "Form submission completed successfully.",
    submitError: "Form submission failed. Please verify the entered information and try again.",
    resetSuccess: "Form has been reset successfully.",
  },

  dashboard: {
    welcome: "Welcome to the dashboard.",
    dataLoaded: "Dashboard data has been loaded successfully.",
    updateSuccess: "Dashboard changes have been saved successfully.",
  },

  api: {
    networkError: "A network error occurred. Please check your network connection and try again.",
    serverError: "A server error occurred. Please try again later.",
    timeoutError: "The request timed out. Please try again.",
  },
};

export default messages;
