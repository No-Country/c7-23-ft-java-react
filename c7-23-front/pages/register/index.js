import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRegister } from "../../queries/authQueries";
import { registerSchema } from "../../forms/schemas/authSchemas";

import AuthContainer from "../../containers/AuthContainer";
import PasswordInput from "../../forms/inputs/PasswordInput";
import Input from "../../forms/inputs/Input";
import SelectInput from "../../forms/inputs/selectInput";

export default function RegisterPage() {
  const { mutate: register } = useRegister();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName: "",
      documentType: "",
      document: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    register(data);
  };

  return (
    <AuthContainer pageTitle="Register" onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" placeholder="name" name="name" control={control} />
      <Input
        label="Last name"
        placeholder="last name"
        name="lastName"
        control={control}
      />
      <SelectInput
        label="Document type"
        name="documentType"
        options={["DNI", "LC", " LE"]}
        control={control}
      />
      <Input
        label="Document"
        placeholder="Document"
        name="document"
        control={control}
      />
      <Input
        label="Email"
        placeholder="email"
        name="email"
        control={control}
        type="email"
      />
      <PasswordInput label="Password" name="password" control={control} />
      <button
        type="summit"
        className="btn btn-primary rounded-xl w-full"
        disabled={!isValid}
      >
        Register
      </button>
    </AuthContainer>
  );
}