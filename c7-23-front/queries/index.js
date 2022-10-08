import getUserData from "../api/getUserData";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserData(props) {
  return useQuery(["users"], getUserData, { initialData: props.users });
}
