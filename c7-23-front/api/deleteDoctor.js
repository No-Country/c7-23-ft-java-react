import { MyTurnAPI } from "../config";

export default async function deleteDoctor(id) {
  const { data } = await MyTurnAPI.delete(`/doctor/delete?id=${id}`);
  return data;
}
