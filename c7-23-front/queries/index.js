import { useMutation, useQuery } from "@tanstack/react-query";

import getUserData from "../api/getUserData";
import deleteUser from "../api/deleteUser";
import patchUser from "../api/patchUser";

export function useGetUserData(users) {
  return useQuery(["users"], getUserData, { initialData: users });
}

export function useDelete() {
  const { mutate, isError, isSuccess, isLoading } = useMutation(async (id) => {
    return await deleteUser(id);
  });
  return { mutate, isError, isSuccess, isLoading };
}

export function usePacth() {
  const { mutate, isError, isSuccess, isLoading } = useMutation(async (id) => {
    return await patchUser(id);
  });
  return { mutate, isError, isSuccess, isLoading };
}
