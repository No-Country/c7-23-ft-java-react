import { MyTurnAPI } from "../config";

export default async function postLogin(loginBody) {
  const { data = { success: true } } = await MyTurnAPI.post(
    "/auth/login",
    loginBody
  );
  return data;
}
