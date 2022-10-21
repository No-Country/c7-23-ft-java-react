import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "components/Modal.js/index.js";
import Toast from "components/Toast";

import Input from "forms/inputs/Input";
import SelectInput from "forms/inputs/selectInput";
import SummitButton from "components/SummitButton.js";

import { DOCUMENT_TYPE_OPTIONS } from "shared/constants";
import { MENSSAGE_HTTP_ERROR } from "shared/constants";

import { useNewPatient } from "queries/patientsQueries";

import { registerPatientSchema } from "forms/schemas/patientSchema";
import Toggle from "forms/inputs/Toggle";

export default function NewPatientModal({ showModal, setShowModal }) {
  const { mutate: registNewPatient, isLoading, isError } = useNewPatient();

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
    const body = {
      name: data.name,
      lastName: data.lastName,
      documentTipe: data.documentType,
      document: data.document,
      email: data.email,
      phone: data.phone,
      particular: data.particular,
      social_work: data.socialWork,
      clinic_history: data.clinicHistory,
    };
    registNewPatient(body, {
      onSettled: () => {
        setShowModal(false);
      },
    });
  };

  return (
    <Modal
      title="Edit patient"
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
        <Input
          label="Phone"
          placeholder="phone"
          name="phone"
          control={control}
          type="tel"
        />
        <Toggle label="Particular" name="particular" control={control} />
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
        <SummitButton
          buttonName="Register"
          isValid={isValid}
          isLoading={isLoading}
        />
        {isError && (
          <Toast
            timeout={5000}
            content={MENSSAGE_HTTP_ERROR.NetworkError}
            className="alert alert-warning"
          />
        )}
      </form>
    </Modal>
  );
}
