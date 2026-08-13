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

    gridColumnsMessage: "All required department grid columns are displayed correctly.",
    departmentNameAscendingSortMessage: "Department Name column has been sorted in ascending order successfully.",
    departmentNameDescendingSortMessage: "Department Name column has been sorted in descending order successfully.",
    searchNoResultMessage: "No matching department records were found.",
    partialSearchMessage: "Partial department name search returned matching records successfully.",
    clearSearchMessage: "Search criteria have been cleared successfully.",
    paginationMessage: "Department grid pagination is working correctly.",
    pageSizeMessage: "Department grid page size has been applied successfully.",
    addDepartmentNavigationMessage: "Add Department button navigated to the creation page successfully.",
    createPageFieldMessage: "All required Department Creation fields are displayed correctly.",
    spaceValidationMessage: "Whitespace-only input validation is working correctly.",
    defaultStatusMessage: "Default department status is displayed correctly.",
    statusOptionsMessage: "All available department status options are displayed correctly.",
    duplicateDepartmentMessage: "Duplicate department validation is working correctly.",

    
    gridColumnsMessage: "Verified that all required columns are displayed correctly in the Designation grid.",
    designationNameAscendingSortMessage: "Verified that the Designation Name column is sorted in ascending order successfully.",
    designationNameDescendingSortMessage: "Verified that the Designation Name column is sorted in descending order successfully.",
    searchNoResultMessage: "Verified that searching with a non-existing designation name displays no matching records.",
    partialSearchMessage: "Verified that partial designation name search returns the expected matching records.",
    clearSearchMessage: "Verified that clearing the search text restores the complete Designation list.",
    paginationMessage: "Verified that the pagination control works correctly for the Designation grid.",
    pageSizeMessage: "Verified that the selected page size is applied correctly to the Designation grid.",
    addDesignationNavigationMessage: "Verified that the Add Designation button redirects the user to the Designation Creation page.",
    createPageFieldMessage: "Verified that all required fields are displayed correctly on the Designation Creation page.",
    spaceValidationMessage: "Verified that whitespace-only input is handled correctly for the Designation Name field.",
    defaultStatusMessage: "Verified that the default status is displayed correctly on the Designation Creation page.",
    statusOptionsMessage: "Verified that all available status options are displayed correctly in the status dropdown.",
    duplicateDesignationMessage: "Verified that duplicate designation names cannot be created.",
    languageSwitchMessage: "Verified that the Designation grid content updates correctly after switching the language."

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
