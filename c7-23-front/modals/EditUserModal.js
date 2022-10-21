import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SummitButton from "../components/SummitButton.js/index.js";
import Modal from "../components/Modal.js";
import PasswordInput from "../forms/inputs/PasswordInput.js";
import Input from "../forms/inputs/Input.js";
import SelectInput from "../forms/inputs/selectInput.js";

import { editSchema } from "../forms/schemas/authSchemas.js";

import { useEditUser } from "../queries/index.js";
import { DOCUMENT_TYPE_OPTIONS } from "../shared/constants/index.js";

export default function EditUserModal({
  showModal,
  setShowModal,
  selectedUser,
}) {
  const { mutate, isLoading } = useEditUser();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(editSchema),
    defaultValues: {
      name: selectedUser?.name,
      lastName: selectedUser?.lastName,
      documentType: selectedUser?.documentType,
      document: selectedUser?.document,
      email: selectedUser?.email,
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (!data.password) delete data.password;

    mutate(
      { ...selectedUser, ...data },
      {
        onSettled: () => {
          setShowModal(false);
        },
      }
    );
  };

  return (
    <Modal
      title="Edit user"
      showModal={showModal}
      setShowModal={setShowModal}
      showClose={!isLoading}
    >
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Input
                className="w-full md:w-auto"
                label="Name"
                placeholder="name"
                name="name"
                control={control}
              />
            </div>
            <div>
              <Input
                className="w-full md:w-auto"
                label="Last name"
                placeholder="last name"
                name="lastName"
                control={control}
              />
            </div>
            <div>
              <SelectInput
                label="Document type"
                name="documentType"
                className="w-full md:w-auto"
                options={DOCUMENT_TYPE_OPTIONS}
                control={control}
              />
            </div>

            <div>
              <Input
                className="w-full md:w-auto"
                type="text"
                inputMode="numeric"
                label="Document"
                placeholder="Document"
                name="document"
                control={control}
              />
            </div>
            <div>
              <Input
                className="w-full md:w-auto"
                label="Email"
                placeholder="email"
                name="email"
                control={control}
                type="email"
              />
            </div>
            <div>
              <PasswordInput
                className="w-full md:w-auto"
                label="Password"
                name="password"
                control={control}
              />
            </div>
          </div>
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
