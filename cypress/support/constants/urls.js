const urls = {
  auth: {
    login: "/login",
    logout: "/logout",
    register: "/register",
  },

  dashboard: {
    home: "/dashboard",
    analytics: "/dashboard/analytics",
    reports: "/dashboard/reports",
  },

  grid: {
    employeeManagement: "/employee-management",
    employeeCreate: "/employee-management/create",
    employeeEdit: "/employee-management/edit",
  },

  settings: {
    profile: "/settings/profile",
    account: "/settings/account",
    preferences: "/settings/preferences",
  },

  api: {
    base: "/api",
    login: "/api/auth/login",
    users: "/api/users",
  },
};

export default urls;