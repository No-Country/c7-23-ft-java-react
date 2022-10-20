import SummitButton from "../components/SummitButton.js/index.js";
import Modal from "../components/Modal.js";

import PasswordInput from "../forms/inputs/PasswordInput.js";
import { editSchema } from "../forms/schemas/authSchemas.js";
import Input from "../forms/inputs/Input.js";
import SelectInput from "../forms/inputs/selectInput.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { usePacth } from "../queries/index.js";
import { DOCUMENT_TYPE_OPTIONS } from "../shared/constants/index.js";

export default function EditUserModal({ showModal, setShowModal, refetch }) {
  const { mutate: edit, isLoading } = usePacth();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(editSchema),
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
    edit(data, {
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap justify-around"
        >
          <Input
            className="w-full md:w-auto"
            label="Name"
            placeholder="name"
            name="name"
            control={control}
          />
          <Input
            className="w-full md:w-auto"
            label="Last name"
            placeholder="last name"
            name="lastName"
            control={control}
          />
          <SelectInput
            label="Document type"
            name="documentType"
            className="w-full md:w-auto"
            options={DOCUMENT_TYPE_OPTIONS}
            control={control}
          />
          <Input
            className="w-full md:w-auto"
            type="text"
            inputmode="numeric"
            label="Document"
            placeholder="Document"
            name="document"
            control={control}
          />
          <Input
            className="w-full md:w-auto"
            label="Email"
            placeholder="email"
            name="email"
            control={control}
            type="email"
          />
          <PasswordInput
            className="w-full md:w-auto"
            label="Password"
            name="password"
            control={control}
          />
          <SummitButton
            buttonName="Edit user"
            isValid={isValid}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Modal>
  );
}
