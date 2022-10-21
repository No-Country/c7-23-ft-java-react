import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNewUser } from "../queries";
import { registerSchema } from "../forms/schemas/authSchemas";

import Modal from "../components/Modal.js/index.js";
import PasswordInput from "../forms/inputs/PasswordInput";
import Input from "../forms/inputs/Input";
import SelectInput from "../forms/inputs/selectInput";
import SummitButton from "../components/SummitButton.js";
import { DOCUMENT_TYPE_OPTIONS } from "../shared/constants";
import Toast from "../components/Toast";
import { MENSSAGE_HTTP_ERROR } from "../shared/constants";

export default function NewUserModal({ showModal, setShowModal, refetch }) {
  const { mutate: register, isLoading, codeHttp, isError } = useNewUser();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName: "",
      documentType: "DNI",
      document: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    register(data, {
      onSuccess: () => {
        refetch();
      },
      onSettled: () => {
        setShowModal(false);
      },
    });
  };

  return (
    <Modal
      title="New user"
      showModal={showModal}
      setShowModal={setShowModal}
      showClose={!isLoading}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
          options={DOCUMENT_TYPE_OPTIONS}
          control={control}
        />
        <Input
          type="text"
          inputMode="numeric"
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
        <SummitButton
          buttonName="Register"
          isValid={isValid}
          isLoading={isLoading}
        />
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
      </form>
    </Modal>
  );
}
