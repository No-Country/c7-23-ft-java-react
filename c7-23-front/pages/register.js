import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRegister } from "../queries/authQueries";
import { registerSchema } from "../forms/schemas/authSchemas";

import AuthContainer from "../containers/AuthContainer";
import PasswordInput from "../forms/inputs/PasswordInput";
import Input from "../forms/inputs/Input";

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
    <AuthContainer onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" placeholder="name" name="name" control={control} />
      <Input
        label="Last name"
        placeholder="last name"
        name="lastName"
        control={control}
      />
      <Input
        label="Document type"
        placeholder="document type"
        name="documentType"
        control={control}
      />
      <Input
        label="Document"
        placeholder="document"
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
      {/* <label>
        Role
        <select
          defaultValue="Role"
          required
          className="form-select rounded-xl w-full mb-4"
        >
          <option value="Role" disabled>
            Role
          </option>
          <option value="Admin">Admin</option>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
      </label> */}
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
