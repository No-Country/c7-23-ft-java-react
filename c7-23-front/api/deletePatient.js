import { MyTurnAPI } from "../config";

export default async function deletePatient(id) {
  const { data } = await MyTurnAPI.delete(`/patient/delete?id=${id}`);
  return data;
}
