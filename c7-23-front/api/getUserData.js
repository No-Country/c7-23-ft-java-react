import { instance } from "../config";

export default async function getUserData() {
  const { data: users } = await instance.get("/users?page=2");
  return users.data;
}
