import SummitButton from "../../components/SummitButton.js/index.js";
import Modal from "../../components/Modal.js/index.js";

import { registerSchema } from "../../forms/schemas/authSchemas.js";
import Input from "../../forms/inputs/Input.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePacthDoctor } from "../../queries/index.js";
import SelectInput from "forms/inputs/selectInput.js";
import PasswordInput from "forms/inputs/PasswordInput.js";
import Toast from "components/Toast/index.js";
import Toggle from "forms/inputs/Toggle.js";

import { DOCUMENT_TYPE_OPTIONS } from "shared/constants/index.js";

export default function EditDoctorModal({
  showModal,
  setShowModal,
  refetch,
  selectedUser,
}) {
  const { mutate: edit, isLoading, isError } = usePacthDoctor();

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
      morning: 1,
      night: 2,
      attentionTurn: [1, 2],
      attentinonDays: ["FRIDAY"],
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const body = {
      id: selectedUser.id,
      name: data.name,
      lastName: data.lastName,
      documentType: data.documentType,
      document: data.document,
      email: data.email,
      password: data.password,
      attentionTurn: data.attentionTurn,
      attentionDays: data.attentinonDays,
    };
    edit(body, {
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
      title="Edit user"
      showModal={showModal}
      setShowModal={setShowModal}
      showClose={!isLoading}
    >
      <div className="flex w-full justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            placeholder="name"
            name="name"
            control={control}
          />
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

          <div>
            <p className="font-medium">Turnos</p>
            <Toggle label="morning" name="morning" control={control} />
            <Toggle label="night" name="nigth" control={control} />
          </div>

          <form>
            <p className="font-medium">Días de la semanas</p>
            <Toggle label="Mondey" name="morning" control={control} />
            <Toggle label="Tuesday" name="nigth" control={control} />
            <Toggle label="Wednesday" name="nigth" control={control} />
            <Toggle label="Thursday" name="nigth" control={control} />
            <Toggle label="Friday" name="nigth" control={control} />
            <Toggle label="Saturday" name="nigth" control={control} />
            <Toggle label="Sunday" name="nigth" control={control} />
          </form>

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
      </div>
    </Modal>
  );
}
