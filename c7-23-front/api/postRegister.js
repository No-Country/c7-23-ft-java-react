import { MyTurnAPI } from "../config";

export default async function postRegister(body) {
  const { data } = await MyTurnAPI.post("/auth/register", body);
  return data;
}
