import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "forms/schemas/authSchemas";

import Modal from "components/Modal.js/index.js";
//Simport Checkbox from "forms/inputs/Checkbox";
import PasswordInput from "forms/inputs/PasswordInput";
import Input from "forms/inputs/Input";
import SelectInput from "forms/inputs/selectInput";
import SummitButton from "components/SummitButton.js";
import { DOCUMENT_TYPE_OPTIONS } from "shared/constants";
import Toast from "components/Toast";
import { MENSSAGE_HTTP_ERROR } from "shared/constants";
import { useNewDoctor } from "queries";
import Checkbox from "forms/inputs/Checkbox";

export default function NewDoctorModal({ showModal, setShowModal, refetch }) {
  const { mutate, isLoading, codeHttp, isError } = useNewDoctor();
  const {
    handleSubmit,
    register,
    control,
    formState: { isValid },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName: "",
      documentType: "DNI",
      document: "",
      email: "",
      password: "",
      attentionTurn: [],
      attentinonDays: [],
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        refetch();
      },
      onSettled: () => {
        setShowModal(false);
      },
    });
  };

  const handleChangeDays = (day) => {
    const { attentinonDays = [] } = getValues();

    if (attentinonDays.includes(day)) {
      setValue(
        "attentinonDays",
        attentinonDays.filter((currentDay) => currentDay !== day)
      );
    } else {
      setValue("attentinonDays", [...attentinonDays, day]);
    }
  };

  const handleChangeTurns = (turn) => {
    const { attentionTurn = [] } = getValues();

    if (attentionTurn.includes(turn)) {
      setValue(
        "attentionTurn",
        attentionTurn.filter((currentTurn) => currentTurn !== turn)
      );
    } else {
      setValue("attentionTurn", [...attentionTurn, turn]);
    }
  };

  return (
    <Modal
      title="New doctor"
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
        <p>weeks</p>
        <div>
          {["FRIDAY", "MONDAY"].map((day) => (
            <Checkbox
              key={day}
              value={day}
              label={day}
              ref={register}
              onChange={() => handleChangeDays(day)}
            />
          ))}
        </div>
        <p>Turns</p>
        <div>
          {["Moning", "night"].map((turn, index) => (
            <Checkbox
              key={turn}
              value={index + 1}
              label={turn}
              ref={register}
              onChange={() => handleChangeTurns(index)}
            />
          ))}
        </div>
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
