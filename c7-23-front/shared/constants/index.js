export const MENULISTOFADMIN = [
  {
    url: "/admin/dashboard",
    name: "Dashboard",
  },
  {
    url: "/admin/appointments",
    name: "Appointments",
  },
  {
    url: "/admin/userData",
    name: "User Data",
  },
];

const DOCUMENT_TYPES = {
  DNI: "DNI",
  LE: "LE",
  LC: "LC",
};

export const DOCUMENT_TYPE_OPTIONS = [
  { value: DOCUMENT_TYPES.LC },
  { value: DOCUMENT_TYPES.DNI },
  { value: DOCUMENT_TYPES.LE },
];

export const MENSSAGE_HTTP_ERROR = {
  400: "Check password and email",
  NetworkError: "Connection error",
};
