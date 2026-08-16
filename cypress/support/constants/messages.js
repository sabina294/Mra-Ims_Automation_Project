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
