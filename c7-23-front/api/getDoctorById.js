import { MyTurnAPI } from "../config";

export default async function getDoctorById(id) {
  const { data: turns } = await MyTurnAPI.get(`/doctor?id=${id}`);
  return turns;
}
