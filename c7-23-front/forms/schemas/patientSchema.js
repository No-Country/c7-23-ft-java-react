import * as yup from "yup";

const REQUIRED_MESSAGE = "This field is required";

export const registerPatientSchema = yup.object().shape({
  name: yup.string().required(REQUIRED_MESSAGE),
  lastName: yup.string().required(REQUIRED_MESSAGE),
  documentType: yup.string().required(REQUIRED_MESSAGE),
  document: yup
    .number("Enter a valid document number")
    .typeError("Amount must be a number")
    .required(REQUIRED_MESSAGE),
  email: yup.string().email("Enter a valid email").required(REQUIRED_MESSAGE),
  phone: yup.string().required(REQUIRED_MESSAGE),
  particular: yup.string().required(REQUIRED_MESSAGE),
  socialWork: yup.string().required(REQUIRED_MESSAGE),
  clinicHistory: yup.string().required(REQUIRED_MESSAGE),
});
