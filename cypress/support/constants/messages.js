// cypress/support/constants/messages.js

const messages = {
  auth: {
    loginSuccess: "Welcome back! You have successfully logged in.",
    loginError: "Invalid email or password. Please try again.",
    logoutSuccess: "You have been logged out successfully.",
    sessionExpired: "Your session has expired. Please log in again.",
  },  
  ui: {
   draftOnMessage: "The draft mode has been activated successfully.",
   draftOffMessage: "The draft mode has been deactivated successfully.",
   gridResetSuccess: "All form fields have been reset successfully.",
   gridRefreshSuccess: "The grid has been refreshed successfully.",
   submitSuccess: "Your form has been submitted successfully.",
   goBackSuccess: "You have navigated back successfully.",
   gridListMessage: "The grid list is displayed successfully.",
   withoutDataMessage: "No data available to display.",
   actionMessage: "Action performed successfully.",
   viewMessage: "View displayed successfully.",
   editMessage: "Edit mode has been enabled successfully.",
   turnOnEditModeMessage: "Edit mode has been turned on successfully.",
   editResetMessage: "Edit form has been reset successfully.",
   editSubmitMessage: "Your changes have been submitted successfully.",
   editGoBackMessage: "You have navigated back from edit mode successfully.",
   searchMessage: "Search completed successfully.",
   createGoBackMessage: "You have navigated back from create form successfully.",
   languageSwitchMessage: "Language has been switched successfully.",
   dropdownActiveMessage: "Dropdown status set to Active successfully.",
   dropdownInactiveMessage: "Dropdown status set to Inactive successfully.",
   historyOnMessage: "History mode has been activated successfully.",
   historyOffMessage: "History mode has been deactivated successfully.",
   disbursedOnMessage: "The disbursed mode has been activated successfully.",
   disbursedOffMessage: "The disbursed mode has been deactivated successfully.",
  },

  validation: {
    requiredField: "This field is required.",
  },

  general: {
    success: "Operation completed successfully.",
  },

  form: {
    submitSuccess: "Your form has been submitted successfully.",
    submitError: "Failed to submit the form. Please check your inputs.",
    resetSuccess: "Form has been reset.",
  },

  dashboard: {
    welcome: "Welcome to your dashboard!",
    dataLoaded: "Your data has been loaded successfully.",
    updateSuccess: "Your changes have been saved.",
  },

  api: {
    networkError: "Network error. Please check your connection.",
    serverError: "Server error. Please try again later.",
    timeoutError: "Request timed out. Please retry.",
  },
};

export default messages;