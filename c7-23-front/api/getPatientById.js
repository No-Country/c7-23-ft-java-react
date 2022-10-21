import { MyTurnAPI } from "../config";

export default async function getPatientById(id) {
  const { data: turns } = await MyTurnAPI.get(`/patient?id=${id}`);
  return turns;
}
