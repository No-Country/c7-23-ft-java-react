import { MyTurnAPI } from "../config";

export default async function postRegisterDoctor(body) {
  const { data } = await MyTurnAPI.post("/doctor/register", body);
  return data;
}
