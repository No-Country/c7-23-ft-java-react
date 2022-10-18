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
