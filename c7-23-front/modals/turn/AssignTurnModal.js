import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "components/Modal.js/index.js";
import Toast from "components/Toast";

import Input from "forms/inputs/Input";
import SummitButton from "components/SummitButton.js";

import { MENSSAGE_HTTP_ERROR } from "shared/constants";

import { assignSchema } from "forms/schemas/authSchemas";
import { usePosturn } from "queries";

export default function AssignTurnModal({
  showModal,
  setShowModal,
  selectedUser,
}) {
  const { mutate, isLoading, isError } = usePosturn();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(assignSchema),
    defaultValues: {
      idPatient: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data, "dataaa");
    const body = {
      idTurn: selectedUser.idTurn,
      idPatient: data.idPatient,
      idDoctor: selectedUser.idDoctor,
      day: selectedUser.day,
      hora: selectedUser.hora,
    };
    mutate(body, {
      onSettled: () => {
        setShowModal(false);
      },
    });
  };

  return (
    <Modal
      title="Assign turn"
      showModal={showModal}
      setShowModal={setShowModal}
      showClose={!isLoading}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputMode="numeric"
          label="ID patient"
          placeholder="ID patient"
          name="idPatient"
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
