import getUserData from "../api/getUserData";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserData(users) {
  return useQuery(["users"], getUserData, { initialData: users });
}
