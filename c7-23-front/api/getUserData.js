import { MyTurnAPI } from "../config";

export default async function getUserData() {
  const { data: users } = await MyTurnAPI.get("/users");
  return users;
}
