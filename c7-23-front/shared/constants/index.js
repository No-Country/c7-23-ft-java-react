export const MENU_LIST_OF_ADMIN = [
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

export const USER_DATA_SECTIONS = ["All users"];

export const APPOINTMENTS_SECTIONS_NAME = [
  "Doctors",
  "Patients",
  "Turns booked",
  "Turns available",
];

export const APPOINTMENTS_SECTION = {
  Doctors: "Doctors",
  Patients: "Patients",
  Turns_available: "Turns available",
  Turns_booked: "Turns booked",
};
