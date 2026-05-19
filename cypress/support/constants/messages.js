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
   resetSuccess: "All form fields have been reset successfully.",
  },

  validation: {
    requiredField: "This field is required.",
    invalidEmail: "Please enter a valid email address.",
    passwordTooShort: "Password must be at least 8 characters long.",
    passwordsDoNotMatch: "Passwords do not match.",
  },

  general: {
    success: "Operation completed successfully.",
    error: "Something went wrong. Please try again later.",
    loading: "Loading, please wait...",
    noData: "No data available at the moment.",
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