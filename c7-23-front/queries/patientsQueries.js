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
  const { mutate, isError, isSuccess, isLoading } = useMutation(
    async (id, data) => {
      const response = await patchPatient(id, data);
      await queryClient.invalidateQueries(["patient"]);
      return response;
    }
  );
  return { mutate, isError, isSuccess, isLoading };
}
