import { MyTurnAPI } from "../config";

export default async function getPatients() {
  const { data: patients } = await MyTurnAPI.get("/patients");
  return patients;
}
