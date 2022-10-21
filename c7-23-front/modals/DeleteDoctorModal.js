import Modal from "../components/Modal.js";
import { useDeleteDoctor } from "../queries/index.js";
import SummitButton from "../components/SummitButton.js/index.js";
import Toast from "../components/Toast/index.js";
import { MENSSAGE_HTTP_ERROR } from "../shared/constants/index.js";

export default function DeleteDoctorModal({
  showModal,
  setShowModal,
  idUser,
  onSubmit,
}) {
  const { mutate, isLoading, isError } = useDeleteDoctor();

  const handleDelete = () => {
    mutate(idUser, {
      onSuccess: () => {
        onSubmit();
      },
      onSettled: () => {
        setShowModal(false);
      },
    });
  };
  return (
    <Modal
      title="Are you sure you want to delete the doctor?"
      showModal={showModal}
      setShowModal={setShowModal}
      showClose={!isLoading}
    >
      <div className="flex w-32 justify-center">
        <SummitButton
          buttonName="Accept"
          onClick={handleDelete}
          isLoading={isLoading}
          isValid={true}
        />
      </div>
      {isError && (
        <Toast
          timeout={3000}
          content={MENSSAGE_HTTP_ERROR.NetworkError}
          className="alert alert-warning"
        />
      )}
    </Modal>
  );
}
