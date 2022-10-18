import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../forms/schemas/authSchemas";

import { useLogin } from "../../queries/authQueries";

import AuthContainer from "../../containers/AuthContainer";
import PasswordInput from "../../forms/inputs/PasswordInput";
import Input from "../../forms/inputs/Input";
import SummitButton from "../../components/SummitButton.js";
import Toast from "../../components/Toast";
import { MENSSAGE_HTTP_ERROR } from "../../shared/constants";

export default function Login() {
  const { mutate: login, isLoading, codeHttp, isError } = useLogin();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      document: 0,
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    !isLoading && login(data);
  };

  return (
    <AuthContainer pageTitle="Login" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        min="0"
        label="Document"
        placeholder="document"
        name="document"
        control={control}
      />
      <PasswordInput label="Password" name="password" control={control} />
      <SummitButton
        buttonName="Login"
        isValid={isValid}
        isLoading={isLoading}
      />
      <p className="mt-3">
        Don´t have an account?
        <Link href="/register">
          <a className="link link-primary"> Register</a>
        </Link>
      </p>
      {isError && (
        <Toast
          timeout={5000}
          content={
            codeHttp === 400
              ? MENSSAGE_HTTP_ERROR[400]
              : MENSSAGE_HTTP_ERROR.NetworkError
          }
          className="alert alert-warning"
        />
      )}
    </AuthContainer>
  );
}
