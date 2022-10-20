import { MyTurnAPI } from "../config";

export default async function getDoctors() {
  const { data: users } = await MyTurnAPI.get("/doctors");
  return users;
}
