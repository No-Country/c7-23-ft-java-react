import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SummitButton from "components/SummitButton.js/index.js";
import Modal from "components/Modal.js";
import Checkbox from "forms/inputs/Checkbox";
import Input from "forms/inputs/Input.js";
import SelectInput from "forms/inputs/selectInput.js";

import { registerPatientSchema } from "forms/schemas/patientSchema";

import { DOCUMENT_TYPE_OPTIONS } from "shared/constants/index.js";
import { usePacthPatient } from "queries/patientsQueries.js";

export default function EditUserModal({
  showModal,
  setShowModal,
  selectedUser,
}) {
  const { mutate, isLoading } = usePacthPatient();

  console.log(selectedUser, "id");

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(registerPatientSchema),
    defaultValues: {
      name: "",
      lastName: "",
      documentType: "DNI",
      document: "",
      email: "",
      phone: "",
      particular: false,
      socialWork: "OSDE",
      clinicHistory: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(selectedUser.idPatient, "id", data);
    mutate(
      { id: selectedUser.idPatiend, data },
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
            <Input
              label="Phone"
              placeholder="phone"
              name="phone"
              control={control}
              type="tel"
            />
            <Checkbox label="Particular" name="particular" control={control} />
            <SelectInput
              label="Social work"
              name="socialWork"
              options={[{ value: "OSDE" }]}
              control={control}
            />
            <Input
              label="Clinic history"
              placeholder="clinic history"
              name="clinicHistory"
              control={control}
            />
          </div>
          <SummitButton
            buttonName="Register"
            isValid={isValid}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Modal>
  );
}
