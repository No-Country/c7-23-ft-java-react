import { MyTurnAPI } from "../config";

export default async function postRegisterPatient(body) {
  const { data } = await MyTurnAPI.post("/patient/register", body);
  return data;
}
