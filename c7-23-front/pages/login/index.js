import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../forms/schemas/authSchemas";

import { useLogin } from "../../queries/authQueries";

import AuthContainer from "../../containers/AuthContainer";
import PasswordInput from "../../forms/inputs/PasswordInput";
import Input from "../../forms/inputs/Input";

export default function Login() {
  const { mutate: login } = useLogin();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      document: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <AuthContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Document"
        placeholder="document"
        name="document"
        control={control}
      />
      <PasswordInput label="Password" name="password" control={control} />
      <button
        type="summit"
        className="btn btn-primary rounded-xl w-full"
        disabled={!isValid}
      >
        Login
      </button>
    </AuthContainer>
  );
}
