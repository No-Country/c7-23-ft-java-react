import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import getUserData from "../api/getUserData";
import deleteUser from "../api/deleteUser";
import patchUser from "../api/patchUser";
import getDoctors from "../api/getDoctors";
import getPatients from "../api/getPatients";
import getTurns from "../api/getTurns";
import deleteDoctor from "../api/deleteDoctor";
import patchDoctor from "../api/patchDoctor";
import deletePatient from "../api/deletePatient";
import postRegisterDoctor from "../api/postRegisterDoctor";
import postRegisterPatient from "../api/postRegisterPatient";
import patchTurn from "../api/patchTurn";
import patchPatient from "../api/patchPatient";
import getDoctorById from "../api/getDoctorById";
import getPatientById from "../api/getPatientById";
import postTurnToPatient from "api/postTurnToPatient";

// get

export function useGetUserData() {
  return useQuery(["users"], getUserData);
}
export function useGetDoctors() {
  return useQuery(["doctors"], getDoctors);
}
export function useGetPatients() {
  return useQuery(["patients"], getPatients);
}

export function useGetTurns() {
  return useQuery(["turns"], async () => {
    const turns = await getTurns();

    // This stack is for better performance
    const patientStack = [];

    return await Promise.all(
      turns.map(async (turn = {}) => {
        const { idPatient } = turn;

        let patient = null;

        if (idPatient) {
          const patientFromStack = patientStack.find(
            (patient) => patient.id === idPatient
          );

          patient = patientFromStack ?? (await getPatientById(idPatient));

          if (!patientFromStack) patientStack.push(patient);
        }

        return {
          ...turn,
          patient,
        };
      })
    );
  });
}

export function useGetDoctorById(id) {
  return useQuery(["doctorById"], getDoctorById(id));
}

export function useGetPatientById(id) {
  return useQuery(["patientById"], getPatientById(id));
}

// Delete

export function useDelete() {
  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, isLoading } = useMutation(async (id) => {
    await queryClient.invalidateQueries(["users"]);
    return await deleteUser(id);
  });
  return { mutate, isError, isSuccess, isLoading };
}
export function useDeleteDoctor() {
  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, isLoading } = useMutation(async (id) => {
    await queryClient.invalidateQueries(["doctors"]);
    return await deleteDoctor(id);
  });
  return { mutate, isError, isSuccess, isLoading };
}

export function useDeletePatient() {
  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, isLoading } = useMutation(async (id) => {
    await queryClient.invalidateQueries(["patients"]);
    return await deletePatient(id);
  });
  return { mutate, isError, isSuccess, isLoading };
}

// New users

export function useNewDoctor() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation(async (data) => {
    await queryClient.invalidateQueries(["doctors"]);
    await postRegisterDoctor(data);
  });
  const codeHttp = error?.response?.status;
  return { mutate, isLoading, isError, codeHttp };
}

// export function useNewPatient() {
//   const { mutate, isLoading, isError, error } = useMutation(async (data) => {
//     await postRegisterPatient(data);
//   });
//   const codeHttp = error?.response?.status;
//   return { mutate, isLoading, isError, codeHttp };
// }

export function useNewUser() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation(async (data) => {
    await queryClient.invalidateQueries(["users"]);
    await postRegister(data);
  });
  const codeHttp = error?.response?.status;
  return { mutate, isLoading, isError, codeHttp };
}

export function usePosturn() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation(async (data) => {
    await postTurnToPatient(data);
    await queryClient.invalidateQueries(["turns"]);
  });
  const codeHttp = error?.response?.status;
  return { mutate, isLoading, isError, codeHttp };
}

//Edit

export function useEditUser() {
  const queryClient = useQueryClient();

  return useMutation(async (data) => {
    const response = await patchUser(data.id, data);

    await queryClient.invalidateQueries(["users"]);

    return response;
  });
}

export function usePacthDoctor() {
  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, isLoading } = useMutation(async (id) => {
    await queryClient.invalidateQueries(["doctors"]);
    return await patchDoctor(id);
  });
  return { mutate, isError, isSuccess, isLoading };
}

export function usePacthTurn() {
  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess, isLoading } = useMutation(async (id) => {
    await queryClient.invalidateQueries(["turns"]);
    return await patchTurn(id);
  });
  return { mutate, isError, isSuccess, isLoading };
}
