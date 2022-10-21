import * as yup from "yup";

const REQUIRED_MESSAGE = "This field is required";

export const loginSchema = yup.object().shape({
  document: yup
    .number()
    .typeError("Amount must be a number")
    .required(REQUIRED_MESSAGE),
  password: yup.string().required(REQUIRED_MESSAGE),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required(REQUIRED_MESSAGE),
  lastName: yup.string().required(REQUIRED_MESSAGE),
  documentType: yup.string().required(REQUIRED_MESSAGE),
  document: yup
    .number("Enter a valid document number")
    .typeError("Amount must be a number")
    .required(REQUIRED_MESSAGE),
  email: yup.string().email("Enter a valid email").required(REQUIRED_MESSAGE),
  password: yup.string().required(REQUIRED_MESSAGE),
});

export const editSchema = yup.object().shape({
  name: yup.string(),
  lastName: yup.string(),
  documentType: yup.string(),
  document: yup
    .number("Enter a valid document number")
    .typeError("Amount must be a number"),
  email: yup.string().email("Enter a valid email"),
  password: yup.string(),
});

export const assignSchema = yup.object().shape({
  idPatient: yup
    .number("Enter a valid document number")
    .typeError("Amount must be a number"),
});
