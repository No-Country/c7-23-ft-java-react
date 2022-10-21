import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchPatient from "api/patchPatient";

import postRegisterPatient from "api/postRegisterPatient";

export function useNewPatient() {
  const queryClient = useQueryClient();

  return useMutation(async (data) => {
    const response = await postRegisterPatient(data);

    await queryClient.invalidateQueries(["patients"]);

    return response;
  });
}

export function usePacthPatient() {
  const queryClient = useQueryClient();

  return useMutation(async ({ idPatient, ...data }) => {
    const response = await patchPatient(idPatient, data);

    await queryClient.invalidateQueries(["patients"]);

    return response;
  });
}
