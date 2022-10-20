import { MyTurnAPI } from "../config";

export default async function deleteUser(id) {
  const { data } = await MyTurnAPI.delete(`/user/delete?id=${id}`);
  return data;
}
