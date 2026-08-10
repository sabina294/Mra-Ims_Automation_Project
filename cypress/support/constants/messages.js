// cypress/support/constants/messages.js

const messages = {
  auth: {
    loginSuccess: "Login completed successfully.",
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