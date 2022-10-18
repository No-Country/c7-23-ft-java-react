import * as yup from "yup";

const REQUIRED_MESSAGE = "Este campo es requerido";

export const loginSchema = yup.object().shape({
  document: yup.string().required(REQUIRED_MESSAGE),
  password: yup.string().required(REQUIRED_MESSAGE),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required(REQUIRED_MESSAGE),
  lastName: yup.string().required(REQUIRED_MESSAGE),
  documentType: yup.string().required(REQUIRED_MESSAGE),
  document: yup.string().required(REQUIRED_MESSAGE),
  email: yup
    .string()
    .email("Ingresa un email válido")
    .required(REQUIRED_MESSAGE),
  password: yup.string().required(REQUIRED_MESSAGE),
});
